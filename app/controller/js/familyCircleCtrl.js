/*!qinglongWeb-1.0.0 2017-11-01*/
App.controller("familyCircleCtrl",["$scope","$http","ngDialog","PagerExtends","layerAlert","PcService","serverUrls",function(a,b,c,d,e,f,g){a.list=[{OpenState:1},{OpenState:2}],a._list=[],a.searchOption={value:""},a.PcService=f,a.toggleText=function(a){var b;switch(a.OpenState){case 2:b="开启";break;case 1:b="关闭";break;default:b="关闭"}return b},a.choseItem=function(b){a.leftTabs.forEach(function(a,c){a.Name===b.Name?a.Active=!0:a.Active=!1}),a.selectTab!==b&&(a.selectTab=b,a._fetchData())},a.navTabList=[{Id:1,Name:"家庭动态",Active:!0},{Id:2,Name:"家人健康",Active:!1}],a.familyMembrs=[{Id:0,Name:"张三"},{Id:1,Name:"张三风"},{Id:2,Name:"张三疯"},{Id:3,Name:"张三封"},{Id:4,Name:"张三哄"},{Id:5,Name:"张三轰"}],a.selectedMember=1,a.selectTab=a.navTabList[0],a._fetchData=function(){switch(a.selectTab.Id){case 1:break;case 2:}},a.leftTabs=[{Id:1,Name:"视力检测",Active:!0},{Id:1,Name:"听力检测",Active:!1},{Id:1,Name:"血压测试",Active:!1},{Id:1,Name:"心率测量",Active:!1},{Id:1,Name:"肺活量测量",Active:!1},{Id:1,Name:"呼吸频率测量",Active:!1},{Id:1,Name:"血样测量",Active:!1},{Id:1,Name:"心里检测",Active:!1}],a.checked=function(b){a.navTabList.map(function(a,c){a.Name===b.Name?a.Active=!0:a.Active=!1}),a.selectTab!==b&&(a.selectTab=b,a._fetchData())},a.creatOne=function(){c.openConfirm({template:"createOne",controller:["$scope",function(a){}],className:"ngdialog-theme-default",closeByDocument:!1})},a.detailItem=function(b){c.openConfirm({template:"detailOne",scope:a,controller:["$scope",function(a){a.TitleText="圈子详情",a.selectItem=b}],className:"ngdialog-theme-default",closeByDocument:!1,width:800})}}]);