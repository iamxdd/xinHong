/*!qinglongWeb-1.0.0 2017-11-01*/
App.controller("juminguanliCtrl",["$scope","$rootScope","$http","ngDialog","PagerExtends","layerAlert","$filter","serverUrls","PcService","$q",function(a,b,c,d,e,f,g,h,i,j){a.list=[],a.TitleText="新增",a.PcService=i,a.searchOption={name:""},a.CourtyardList=a.BuildingList=a.UnitList=a.FloorList=a.HouseList=[{Id:0,Name:"请选择"}],a.isShow=function(a){var b=!1;return b=a&&0!==a.length?!1:!0},a.isActivation=function(a){var b=!1;return a&&0!==a.length?2===a[0].State&&(b=!0):b=!1,b},a.reActivation=function(b){var e=a.fetchData;d.openConfirm({template:"configOne",controller:["$scope",function(a){a.fetchData=e,a.TitleText="重新发送激活码",a.fieldsList=[{name:"phone",nameDisplay:"电话号码",editor:"normal",required:!0,value:""}],a.formSubmit=function(){var d=i.getFormData(a.fieldsList);d.Content="{name:"+b.Name+",userid:"+b.CheckCode[0].ResidentStatus+",code:"+b.CheckCode[0].Code+"}",d.type=2,a.ngDialogPromise=c({method:"post",url:h.sendSms,data:d}).success(function(b){var c=b.State.Code,d=b.State.Message;0===c?(f.autoclose("发送成功,注意查收！"),a.closeThisDialog()):f.autoclose(d)}).error(function(a){f.autoclose(i.errorResult(a))})}}],className:"ngdialog-theme-default",closeByEscape:!0,closeByDocument:!1,width:600})},a.stayType=[{Id:1,Name:"租赁房屋"},{Id:2,Name:"单位内部"},{Id:3,Name:"亲友家中"},{Id:4,Name:"自住"}],a.Education=[{Id:1,Name:"其他"},{Id:2,Name:"大专"},{Id:3,Name:"本科"},{Id:4,Name:"研究生"},{Id:5,Name:"博士及以上"}],a.maritalStatus=[{Id:1,Name:"未婚"},{Id:2,Name:"已婚"},{Id:3,Name:"离异"},{Id:4,Name:"丧偶"}],a.matterList=[{Id:1,Name:"户主"},{Id:2,Name:"配偶"},{Id:3,Name:"子女"},{Id:4,Name:"父母"},{Id:5,Name:"岳父母/公婆"},{Id:6,Name:"祖父母"},{Id:7,Name:"媳婿"},{Id:8,Name:"孙子女"},{Id:9,Name:"兄弟姐妹"},{Id:10,Name:"其他"}],a.sexes=[{Id:1,Name:"男"},{Id:2,Name:"女"}],a.socialsecurity=[{Id:1,Name:"有社保"},{Id:2,Name:"无社保"}];var k=function(b){b.forEach(function(b,c){b.forEach(function(b,c){"four-select"===b.editor&&(b.value1=a.CourtyardList[0].Id,b.value2=a.BuildingList[0].Id,b.value3=a.UnitList[0].Id,b.value4=a.HouseList[0].Id,b.opts1=a.CourtyardList,b.opts2=a.BuildingList,b.opts3=a.UnitList,b.opts4=a.HouseList)})})},l=function(){a.listBusyPromise=c({method:"get",url:h.courtyardAllList}).success(function(b){var c=b.State.Code,d=b.State.Message;0===c?(a.CourtyardList=b.Content,a.CourtyardList.forEach(function(a,b){a.Location.forEach(function(a,b){a.Location.forEach(function(a,b){var c=[];a.Location.forEach(function(a,b){c=c.concat(a.Location)}),a.Location=c})})}),a.BuildingList=a.BuildingList.concat(a.CourtyardList[0].Location),a.UnitList=a.UnitList.concat(a.BuildingList[1].Location),a.HouseList=a.HouseList.concat(a.UnitList[0].Location)):f.autoclose(d)}).error(function(a){f.autoclose(i.errorResult(a))})};a.PersonType=[{Id:1,Name:"社区居民"},{Id:2,Name:"社区员工"},{Id:3,Name:"商家人员"}],a.organization=[{Id:1,Name:"组织一"},{Id:2,Name:"组织二"},{Id:3,Name:"组织三"}],a.Nations=[{Id:1,Name:"汉族"},{Id:2,Name:"藏族"},{Id:3,Name:"彝族"},{Id:4,Name:"其他少数民族"}],a.PoliticalStatuses=[{Id:1,Name:"中共党员"},{Id:2,Name:"中共预备党员"},{Id:3,Name:"共青团员"},{Id:4,Name:"群众"},{Id:5,Name:"民革党员"},{Id:6,Name:"民盟盟员"},{Id:7,Name:"民建会员"},{Id:8,Name:"民进会员"},{Id:9,Name:"农工党党员"},{Id:10,Name:"致公党党员"},{Id:11,Name:"九三学社社员"},{Id:12,Name:"台盟盟员"},{Id:13,Name:"无党派民主人士"}],a.fieldsList=[[{name:"HouseId",nameDisplay:"房屋信息",editor:"four-select",required:!0,opts1:a.CourtyardList,opts2:a.BuildingList,opts3:a.UnitList,opts4:a.HouseList,value1:"",value2:"",value3:"",value4:"",column:1,originValue:0},{name:"IDCardNo",nameDisplay:"身份证号码",editor:"normal",required:!0,value:"",originValue:""},{name:"Name",nameDisplay:"姓名",editor:"normal",required:!0,value:"",originValue:""},{name:"Sex",nameDisplay:"性别",editor:"select",required:!0,value:a.sexes[0].Id,opts:a.sexes,originValue:1},{name:"BirthDate",nameDisplay:"出生日期",editor:"time-picker",required:!1,value:"",editable:!1,originValue:""},{name:"Phone",nameDisplay:"联系电话",editor:"normal",required:!1,value:"",originValue:""},{name:"MaritalStatus",nameDisplay:"婚姻状态",editor:"select",required:!1,value:a.maritalStatus[0].Id,opts:a.maritalStatus,originValue:1},{name:"SocialSecurity",nameDisplay:"社保状态",editor:"select",required:!1,value:a.socialsecurity[0].Id,opts:a.socialsecurity,originValue:1}],[{name:"Degree",nameDisplay:"最高学历",editor:"select",required:!1,value:a.Education[0].Id,opts:a.Education,originValue:1},{name:"PrimarySchool",nameDisplay:"小学",editor:"normal",required:!1,value:"",originValue:""},{name:"MiddleSchool",nameDisplay:"初中",editor:"normal",required:!1,value:"",originValue:""},{name:"HighSchool",nameDisplay:"高中",editor:"normal",required:!1,value:"",originValue:""}],[{name:"WorkExperience",nameDisplay:"工作经历",editor:"textarea",required:!1,value:"",column:1,originValue:""}],[{name:"OccupancyCategory",nameDisplay:"居住类型",editor:"select",required:!1,value:a.stayType[0].Id,opts:a.stayType,originValue:1},{name:"HouseholderRelation",nameDisplay:"与户主关系",editor:"select",required:!1,value:a.matterList[0].Id,opts:a.matterList,originValue:1},{name:"Nationality",nameDisplay:"民族",editor:"search-select",required:!1,value:"",originValue:1,opts:a.Nations},{name:"PoliticalStatus",nameDisplay:"政治面貌",editor:"select",required:!1,opts:a.PoliticalStatuses,value:"",originValue:a.PoliticalStatuses[0].Id},{name:"CurrentAddress",nameDisplay:"现居住地",editor:"normal",required:!1,value:"",originValue:""},{name:"DomicilePlace",nameDisplay:"户籍所在地",editor:"normal",required:!1,value:"",originValue:""},{name:"HouseholdNature",nameDisplay:"户口性质",editor:"normal",required:!1,value:"",originValue:""},{name:"WorkUnit",nameDisplay:"工作单位",editor:"normal",required:!1,value:"",originValue:""}]];var m=function(a){a.forEach(function(a,b){a.forEach(function(a,b){a.value=a.originValue})})},n=function(a){var b={};return a&&a.length>0&&a.forEach(function(a,c){a.forEach(function(a,c){"four-select"===a.editor?void 0!==a.value4?b[a.name]=a.value4:f.autoclose("房屋ID不能为空!"):"BirthDate"===a.name?b[a.name]=a.value?g("date")(a.value,"yyyy-MM-dd"):"":b[a.name]=a.value})}),b},o=function(b,e,g,j){var k,l;switch(b){case!0:k="post",l=h.inExperience,g="编辑";break;case!1:k="put",l=h.upExperience,g="编辑"}c({headers:j,method:k,url:l,data:e}).success(function(b){var c=b.State.Code;b.State.Message;0===c&&(f.autoclose(g+"操作成功!"),setTimeout(function(){d.closeAll()},1600),a.fetchData())}).error(function(a){f.autoclose(i.errorResult(a))})},p=function(a,b,d,e,g,j){var k,l,m,p;l=g?$.extend(!0,n(d),g):n(d);var q={Degree:l.Degree,PrimarySchool:l.PrimarySchool,MiddleSchool:l.MiddleSchool,HighSchool:l.HighSchool,WorkExperience:l.WorkExperience};switch(b){case!0:k="post",m=h.addResident,p="新增";break;case!1:k="put",m=h.upResident,p="编辑",l.Id=e.Id,l.PersonType=e.PersonType,l.Population=e.Population}a.ngDialogPromise=c({headers:j,method:k,url:m,data:l}).success(function(a){var c=a.State.Code,d=a.State.Message;if(0===c){var g="";switch(b){case!0:g="新增",q.ResidentId=a.Content,o(!0,q,g,j);break;case!1:g="修 改",q.ResidentId=a.Content,0!==e.ExperienceId?(q.Id=e.ExperienceId,o(!1,q,g,j)):o(!0,q,g,j)}}else f.autoclose(d)}).error(function(a){f.autoclose(i.errorResult(a))})};a.creatOne=function(){var c,e=j.defer(),g=e.promise,h={},l=a.PersonType;d.openConfirm({template:"createOne",controller:["$scope",function(a){a.TitleText="选择新增人员类型",a.PersonType=l,a.fieldsList=[{name:"PersonType",nameDisplay:"人员类型",editor:"select",required:!1,value:a.PersonType[0].Id,opts:a.PersonType,originValue:1}],a.formSubmit=function(){var b=i.getFormData(a.fieldsList).PersonType;h.PersonType=b,d.close(0),a.PersonType.forEach(function(a,d){a.Id===b&&(c=a.Name)}),e.resolve()}}],className:"ngdialog-theme-default",closeByEscape:!0,closeByDocument:!1,width:600}),g.then(function(){var e=a.fieldsList;k(a.fieldsList);var g=850;a.create=!0,d.openConfirm({template:"createOne",controller:["$scope",function(a){a.fieldsList=e[0],a.column=2,a.TitleText="新增"+c,a.selectedItem={},m(e);a.formSubmit=function(){var c=i.getFormData(a.fieldsList);return c.HouseId?void p(a,!0,e,null,h,b.pHeader):void f.autoclose("请填写房屋信息！")},a.navTabList=[{Id:1,Name:"基本信息",Active:!0},{Id:2,Name:"教育经历",Active:!1},{Id:3,Name:"工作经历",Active:!1},{Id:4,Name:"其他信息",Active:!1}],a.checked=function(b){a.navTabList.forEach(function(a,b){a.Active=!1}),b.Active=!0,a.selectedItem=b,a.fieldsList=e[b.Id-1]}}],className:"ngdialog-theme-default",closeByEscape:!0,closeByDocument:!1,width:g})})},a.fetchData=function(){l(),e.regListSpecifyPage(a,{apiUrl:h.residentList,params:a.searchOption,success:function(b){a.list=b;var c=new Date;a.list.length>0&&a.list.forEach(function(a,b){a.Age=(c-new Date(a.BirthDate))/31536e6,a.Age<1?a.Age=Math.ceil(12*a.Age)+"月":a.Age=Math.floor(a.Age)+"岁",null==a.BirthDate&&(a.Age="无")})},error:function(a){f.autoclose(a)}})},a.fetchData();var q=function(b,d){a.ngDialogPromise=c({method:"get",url:h.getSuperior+"?id="+b+"&type=4"}).success(function(a){var c=a.State.Code,e=a.State.Message;if(0===c){var g=a.Content,h=g.CourtyardId,i=g.BuildingId,j=g.UnitId;g.FloorId;d.value1=h,d.opts1.forEach(function(a,c){a.Location.forEach(function(c,e){c.Id===i&&(d.opts2=a.Location,d.value2=i,d.opts2.forEach(function(a,c){a.Location.forEach(function(c,e){c.Id===j&&(d.opts3=a.Location,d.value3=j,d.opts3.forEach(function(a,c){a.Location.forEach(function(c,e){c.Id===b&&(d.opts4=a.Location,d.value4=b)})}))})}))})})}else f.autoclose(e)}).error(function(a){f.autoclose(i.errorResult(a))})},r=function(a,b,c){c.forEach(function(c,d){c.Id===a&&(c.ExperienceId=b)})},s=function(b,c,d){r(b.Id,c.Id,a.list),delete c.Id;var e=$.extend(!0,b,c);d.forEach(function(a,b){a.forEach(function(a,b){if("four-select"===a.editor){a.value4=e[a.name];var c=a.value4;q(c,a)}else"BirthDate"===a.name?a.value=g("date")(e[a.name],"yyyy-MM-dd"):a.value=e[a.name]})})},t=function(a,c,e){d.openConfirm({template:"createOne",controller:["$scope",function(d){d.fieldsList=c[0],d.column=2,d.TitleText="修改居民信息",d.selectedItem={},k(c),d.formSubmit=function(){p(d,!1,c,a,null,b.pHeader)},d.navTabList=[{Id:1,Name:"基本信息",Active:!0},{Id:2,Name:"教育经历",Active:!1},{Id:3,Name:"工作经历",Active:!1},{Id:4,Name:"其他信息",Active:!1}],d.checked=function(a){d.navTabList.forEach(function(a,b){a.Active=!1}),a.Active=!0,d.selectedItem=a,d.fieldsList=c[a.Id-1]}}],className:"ngdialog-theme-default",closeByEscape:!0,closeByDocument:!1,width:e})},u=function(b,d,e){a.ngDialogPromise=c({method:"get",url:h.experienceDetails+"?id="+b.Id}).success(function(a){var c=a.State.Code,g=a.State.Message;if(0===c){var h=a.Content;s(b,h,d),t(b,d,e)}else f.autoclose(g)}).error(function(a){f.autoclose(i.errorResult(a))})};a.editItem=function(b){var c=a.fieldsList;a.create=!1;var d=850;u(b,c,d)},a.configItem=function(b){var e=a.fetchData;d.openConfirm({template:"configOne",controller:["$scope",function(a){a.fetchData=e,a.TitleText="分配账号",a.fieldsList=[{name:"phone",nameDisplay:"电话号码",editor:"normal",required:!0,value:""}],a.formSubmit=function(){a.ngDialogPromise=c({method:"get",url:h.allOcation+"?residentid="+b.Id+"&phone="+a.fieldsList[0].value}).success(function(b){var c=b.State.Code,d=b.State.Message;0===c?(f.autoclose("分配成功!"),a.closeThisDialog(),setTimeout(function(){a.fetchData()},1600)):f.autoclose(d)}).error(function(a){f.autoclose(i.errorResult(a))})}}],className:"ngdialog-theme-default",closeByEscape:!0,closeByDocument:!1,width:600})},a.toggleItem=function(a){f.success("归档成功!")},a.isToggle=function(a){return{"btn-success":0===a.State,"btn-warning":1===a.State}},a.toggleText=function(a){var b;switch(a.State){case 0:b="启用";break;case 1:b="停用";break;default:b="归档"}return b}}]);