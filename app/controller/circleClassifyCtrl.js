App.controller('circleClassifyCtrl', ['$scope', '$rootScope', '$q', 'PcService', 'serverUrls', '$state', '$stateParams', '$location', '$http', 'ngDialog', 'PagerExtends', 'layerAlert',
	function($scope, $rootScope, $q, PcService, serverUrls, $state, $stateParams, $location, $http, ngDialog, PagerExtends, layerAlert) {
		$scope.list = []; //分页获取圈子列表
		//网页初始化默认值
		$scope.searchOption = {
			value: '',
		};
		$scope.PcService = PcService;
		//分页获取圈子分类列表
		$scope.fetchData = function() {
			PagerExtends.regListSpecifyPage($scope, {
				apiUrl: serverUrls.classifyGetlistbypage,
				params: $scope.searchOption,
				success: function(response) {
					$scope.list = response;
				},
				error: function(error) {
					layerAlert.autoclose(PcService.errorResult(error));
				}
			}, $rootScope.pHeader);
		};

		$scope.fetchData();


		//删除分类
		$scope.deleteItem = function(x) {
			layerAlert.checkone("执行删除操作", function() {
				$scope.listBusyPromise = $http({
					headers: $rootScope.pHeader,
					method: 'delete',
					url: serverUrls.classifyDeleteById + "?id=" + x.Id
				}).success(function(response) {
					var Code = response.State.Code;
					var Message = response.State.Message;
					if (Code === 0) {
						layerAlert.autoclose("删除成功!");
						setTimeout(function() {
							$scope.fetchData();
						}, 1000);
					} else {
						layerAlert.autoclose(Message);
					}
				}).error(function(error) {
					layerAlert.autoclose(PcService.errorResult(error));
				});

			}, function() {}, "删除", "取消", true, true);

		};

		/*检验名称*/
		var DevNameCheck = function(val) {
			var flag = true;
			var patternName = /^[\u4E00-\u9FA5a-zA-Z0-9_]{1,200}$/;
			if (patternName.test(val)) {
				flag = true;
			} else {
				flag = false;
			}
			return flag;
		};

		var numberCheck = function(val) {
			var flag = true;
			var patternName = /(^[1-9]\d*$)/;
			if (patternName.test(val)) {
				flag = true;
			} else {
				flag = false;
			}
			return flag;
		};
		//判断提交表单是否为空
		var isNull = function($scope) {
			var a = false;
			if ($scope.newData.Name == undefined || $scope.newData.SequenceNumber == undefined) {
				a = true;
			}
			return a;
		};
		$scope.creatOne = function(x) {
			if (x != undefined) {
				$scope.editorData = angular.copy(x);
				$scope.newData = {
					"Name": $scope.editorData.Name,
					"SequenceNumber": $scope.editorData.SequenceNumber,
					"Remarks": $scope.editorData.Remarks
				}
			} else {
				$scope.newData = {};
			}
			ngDialog.openConfirm({
				template: "createOne",
				scope: $scope,
				controller: ['$scope', function($scope) {
					if (x == undefined) {
						$scope.TitleText = "添加";
					} else {
						$scope.TitleText = "修改";
					}
					$scope.formSubmit = function() {
						if (isNull($scope)) {
							layerAlert.autoclose("表单不能为空!");
							return;
						}
						var param = {
							"Name": $scope.newData.Name,
							"SequenceNumber": parseInt($scope.newData.SequenceNumber),
							"Remarks": $scope.newData.Remarks
						};

						if ($scope.newData.Name != undefined) {
							var DevNameFlag = DevNameCheck($scope.newData.Name.replace(/\s/g, ""));
							if (!DevNameFlag) {
								layerAlert.autoclose('名称输入不合法,支持文字，数字，英文和下划线,请重新输入');

								return;
							}
						};
						if ($scope.newData.SequenceNumber != undefined) {
							var numberFlag = numberCheck(parseInt($scope.newData.SequenceNumber));
							if (isNaN(Number($scope.newData.SequenceNumber)) && !numberFlag) {
								layerAlert.autoclose('排序为数字且只能为正整数,请重新输入');
								return;
							}
						};
						console.log(param);
						if (x == undefined) {
							Message = "新增";
							PcService.formSubmit($scope, true, [], serverUrls.classifyAddCategory, null, param, $rootScope.pHeader, Message);
						} else {
							Message = "修改";
							PcService.formSubmit($scope, false, [], serverUrls.classifyUpdateCategory, x, param, $rootScope.pHeader, Message);
						}
					};
					$scope.closeDialog = function() {
						$scope.closeThisDialog();
					};
				}],
				className: 'ngdialog-theme-default',
				closeByDocument: false,
				width: 700,

			});

		};
	}
]);