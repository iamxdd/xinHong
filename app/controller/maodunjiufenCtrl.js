App.controller('maodunjiufenCtrl', ['$scope', '$http', 'ngDialog', 'PagerExtends', 'layerAlert', function($scope, $http, ngDialog, PagerExtends, layerAlert) {
	$scope.list = [];

	//新增管理
	$scope.creatOne = function() {
		ngDialog.openConfirm({
			template: 'createOne',
			controller: 'maodunjiufenCtrl',
			className: 'ngdialog-theme-default',
			//closeByEscape: true,
			closeByDocument: false
		});
	};
}]);