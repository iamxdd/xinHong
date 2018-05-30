App.controller('IntegralRuleCtrl', ['$scope', 'PcService', '$rootScope', 'serverUrls', '$q', '$stateParams', '$location', '$http', 'ngDialog', 'PagerExtends', 'layerAlert',
	function($scope, PcService, $rootScope, serverUrls, $q, $stateParams, $location, $http, ngDialog, PagerExtends, layerAlert) {

		$scope.fieldsList = [{
			name: "Name",
			nameDisplay: "名称",
			editor: "normal",
			value: ""
		}, {
			name: "Description",
			nameDisplay: "描述",
			editor: "multiline-textarea",
			required: true,
			value: ""
		}];

		$scope.fetchData = function() {
			$scope.listBusyPromise = $http({
				method: "get",
				url: serverUrls.getPointrule
			}).success(function(response) {
				var Code = response.State.Code;
				var Message = response.State.Message;
				if (Code === 0) {
					if (response.Content.length > 0) {
						$scope.Introduction = response.Content[0];
						PcService.bindFormData($scope.Introduction, $scope.fieldsList);
					}


				} else {
					layerAlert.autoclose(Message);
				}
			}).error(function(error) {
				layerAlert.autoclose(PcService.errorResult(error));
			});
		};

		$scope.fetchData();

		$scope.editItem = function(x) {
			if (x!= undefined) {
				PcService.bindFormData(x, $scope.fieldsList);
			}

			ngDialog.openConfirm({
				scope: $scope,
				template: "createOne",
				controller: ['$scope', function($scope) {

					//提交修改
					$scope.formSubmit = function() {
						PcService.formSubmit($scope, false, $scope.fieldsList, serverUrls.upPointrule, x, {}, $rootScope.pHeader);
					};

				}],
				className: 'ngdialog-theme-default',
				closeByDocument: false,
				width: 850
			});
		};

	}
]);