/*!qinglongWeb-1.0.0 2017-11-01*/
App.controller("communityNewsCtrl",["$scope","$http","ngDialog","PagerExtends","layerAlert","serverUrls","PcService",function(a,b,c,d,e,f,g){a.list=[],a.newsTypes=[{Id:0,Name:"全部"},{Id:1,Name:"分类一"}],a.newsstates=[{Id:0,Name:"全部"},{Id:1,Name:"分类一"}],a.searchOption={value:"",type:1,state:0},a.fieldsList=[{name:"Name",nameDisplay:"上传文件",editor:"file-upload",required:!0,value:"",originValue:""}],a.creatOne=function(){c.openConfirm({template:"createOne",scope:a,controller:["$scope",function(a){a.formSubmit=function(){g.getFormData(a.fieldsList)}}],className:"ngdialog-theme-default",closeByDocument:!1,width:600})}}]);