/*!qinglongWeb-1.0.0 2017-11-01*/
App.controller("juminjifenCtrl",["$scope","$rootScope","$http","ngDialog","PagerExtends","layerAlert","serverUrls","PcService",function(a,b,c,d,e,f,g,h){a.list=[],a.TitleText="新增初始积分",a.searchOption={name:"",pointTypeCode:1},a.adjustTypes=[{Id:1,Name:"增加"},{Id:2,Name:"减少"}],a.fieldsList=[[{name:"CreatedAt",nameDisplay:"创建时间",editor:"normal",required:!0,value:"",editable:!0},{name:"Description",nameDisplay:"描述",editor:"normal",required:!0,value:"",editable:!0},{editor:"normal",name:"PointsNum",nameDisplay:"积分数",required:!0,value:"",editable:!0},{editor:"normal",name:"typeName",nameDisplay:"类型",required:!0,value:"",editable:!0},{editor:"normal",name:"ValidityAt",nameDisplay:"有效时间",required:!0,value:"",editable:!0}],[{name:"type",nameDisplay:"调整类别",editor:"radio",required:!0,value:a.adjustTypes[0].Id,opts:a.adjustTypes},{name:"num",nameDisplay:"调整分值",editor:"normal",required:!1,value:""},{name:"description",nameDisplay:"调整原因",editor:"textarea",required:!1,value:""}]],a.scores={Type:0,Keys:""};var i=function(a,b){var c={length:8,currentPage:1,memberid:b.Account.IdentityCode};e.regListSpecifyPage(a,{apiUrl:g.getPointrecordbymemberid,params:c,success:function(b){a.fieldsList=b},error:function(a){f.autoclose(a)}})};a.detailItem=function(b){a.fieldsList;d.openConfirm({template:"detailOne",controller:["$scope",function(a){a.fieldsList=[],i(a,b)}],className:"ngdialog-theme-default",closeByDocument:!1,width:850})},a.fetchData=function(){h.fetchData(a,g.getUserpointList,a.searchOption)},a.fetchData();var j=function(a){var b={};return a&&a.length>0&&a.forEach(function(a,c){b[a.name]=a.value}),b},k=function(e,h){var i=j(h[1]);i.memberid=e.Account.IdentityCode,i.userType=1,i.pointTypeCode=1,a.ngDialogPromise=c({headers:b.pHeader,method:"put",url:g.changePoint,data:i}).success(function(b){var c=b.State.Code,e=b.State.Message;0===c?(a.fetchData(),f.autoclose("积分调整成功!"),setTimeout(function(){d.closeAll()},1600)):f.autoclose(e)}).error(function(a){f.autoclose(a.Message||a+"",null,1e4)})};a.editItem=function(b){var c=a.fieldsList;a.fieldsList[1][1].value="",d.openConfirm({template:"adjustment",controller:["$scope",function(a){a.fieldsList=c,a.adustFormSubmit=function(){k(b,c)}}],className:"ngdialog-theme-default",closeByDocument:!1})}}]);