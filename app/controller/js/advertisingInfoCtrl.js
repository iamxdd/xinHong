/*!qinglongWeb-1.0.0 2017-11-01*/
App.controller("advertisingInfoCtrl",["$scope","$http","ngDialog","PagerExtends","layerAlert",function(a,b,c,d,e){a.list=[{},{}],a.searchOption={value:"",position:0,state:0},a.statusSlect=[{value:"全部",index:0},{value:"待审核",index:1},{value:"已通过",index:2},{value:"未通过",index:3}],a.positionSelect=[{value:"全部",index:0},{value:"社区资讯",index:1},{value:"医疗服务",index:2},{value:"惠民政策",index:3},{value:"党群风采",index:4},{value:"健康生活",index:5},{value:"环境卫生",index:6},{value:"智慧交通",index:7}],a.creatOne=function(){c.openConfirm({template:"createOne",controller:"advertisingInfoCtrl",className:"ngdialog-theme-default",closeByDocument:!1})}}]);