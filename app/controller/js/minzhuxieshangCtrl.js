/*!qinglongWeb-1.0.0 2017-11-01*/
App.controller("minzhuxieshangCtrl",["$scope","$http","ngDialog","PagerExtends","layerAlert","$interval","serverUrls","PcService",function(a,b,c,d,e,f,g,h){a.list=[{},{}],a.TitleText="创建项目协商",a.createOne=!1,a.searchOption={};var i=function(){var a=setInterval(function(){var b=$("#startAt"),c=$("#endAt");b&&c&&(b.datetimepicker({language:"zh-CN",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,forceParse:0,format:"yyyy-mm-dd hh:ii",showMeridian:1}).on("click",function(){b.datetimepicker()}),c.datetimepicker({language:"zh-CN",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,forceParse:0,format:"yyyy-mm-dd hh:ii",showMeridian:1}).on("click",function(){c.datetimepicker()}),clearInterval(a))},500)};a.creatOne=function(){c.openConfirm({template:"createOne",controller:["$scope",function(a){a.TitleText="创建项目协商",a.negObject={Title:"",isPublic:!1,BallotBox:1,ScoringTable:1,Member:1,StartAt:"2017-07-17 17:50",EndAt:"2017-07-17 19:50"},i(),a.BallotBoxList=[{Id:1,Name:"投票箱一"},{Id:2,Name:"投票箱二"},{Id:3,Name:"投票箱三"}],a.ScoringTableList=[{Id:1,Name:"评分表一"},{Id:2,Name:"评分表二"},{Id:3,Name:"评分表三"}],a.MemberList=[{Id:1,Name:"人员一"},{Id:2,Name:"人员二"},{Id:3,Name:"人员三"}],a.createFromSubmit=function(){e.autoclose("保存成功!")}}],className:"ngdialog-theme-default",closeByDocument:!1,width:800})},a.formSubmit=function(){alert("新增成功！"),c.close()},a.statusList=[{Id:0,Name:"全部"},{Id:1,Name:"状态一"},{Id:2,Name:"状态二"}],a.publicityList=[{Id:0,Name:"全部"},{Id:1,Name:"是"},{Id:2,Name:"否"}],a.Consultation={Status:0,Publicity:0,CreateAt:"2017-07-17 17:50"},a.screenfields=[{nameDisplay:"关键字",name:"value",value:"",editor:"normal"},{nameDisplay:"状态",name:"state",value:a.statusList[0].Id,editor:"select",opts:a.statusList},{nameDisplay:"是否公示",name:"isPublicityString",value:a.publicityList[0].Id,editor:"select",opts:a.publicityList},{nameDisplay:"创建时间",name:"timeFrom1970Ticks",value1:"2017-06-20 00:00",value2:"2017-07-20 00:00",editor:"double-datePick"}],a.fetchData=function(){h.fetchData(a,g.transacationList,a.searchOption)},a.fetchData(),a.ConsultationRange=[{Id:1,Name:"范围一"},{Id:2,Name:"范围二"}],a.fieldsList=[{name:"Name",nameDisplay:"议题",editor:"normal",required:!0},{name:"Describe",nameDisplay:"议事时间",editor:"normal",required:!0,value:""},{name:"Describe",nameDisplay:"议事地点",editor:"select",required:!0,value:a.ConsultationRange[0].Id,opts:a.ConsultationRange},{name:"Describe",nameDisplay:"描述",editor:"textarea",required:!0,value:""},{name:"Describe",nameDisplay:"投票箱",editor:"normal",required:!0,value:""},{name:"Describe",nameDisplay:"评分表",editor:"normal",required:!0,value:""}],a.seeItem=function(a){c.openConfirm({template:"createOne",controller:["$scope",function(a){a.TitleText="项目概要",i(),a.negObject={isPublic:!1,BallotBox:1,ScoringTable:1,Member:1,StartAt:"2017-07-17 17:50",EndAt:"2017-07-17 19:50"},a.editable=!1,a.BallotBoxList=[{Id:1,Name:"投票箱一"},{Id:2,Name:"投票箱二"},{Id:3,Name:"投票箱三"}],a.ScoringTableList=[{Id:1,Name:"评分表一"},{Id:2,Name:"评分表二"},{Id:3,Name:"评分表三"}],a.MemberList=[{Id:1,Name:"人员一"},{Id:2,Name:"人员二"},{Id:3,Name:"人员三"}],a.createFromSubmit=function(){e.autoclose("保存成功!")},a.formSubmit=function(){c.close()}}],className:"ngdialog-theme-default",closeByDocument:!1,width:800})},a.detailItem=function(a){c.openConfirm({template:"detailOne",controller:["$scope",function(a){a.TitleText="议事过程",a.wordsList=[{},{},{},{},{}],a.delete_Item=function(b){e.autoclose("删除成功！"),a.wordsList.splice(b.$index,1)}}],className:"ngdialog-theme-default",closeByDocument:!1,width:800})},a.resultlItem=function(a){c.openConfirm({template:"resultOne",controller:["$scope",function(a){a.TitleText="议事结果",a.delete_Item=function(b){e.autoclose("删除成功！"),a.wordsList.splice(b.$index,1)},a.barData=[{label:"投票结果(%)",color:"#9cd159",data:[["赞成",88],["反对",12]]}],a.barOptions={series:{bars:{align:"center",lineWidth:0,show:!0,barWidth:.6,fill:.9}},grid:{borderColor:"#eee",borderWidth:1,hoverable:!0,backgroundColor:"#fcfcfc"},tooltip:!0,tooltipOpts:{content:function(a,b,c){return b+" : "+c}},xaxis:{tickColor:"#fcfcfc",mode:"categories"},yaxis:{position:a.app.layout.isRTL?"right":"left",tickColor:"#eee"},shadowSize:0}}],className:"ngdialog-theme-default",closeByDocument:!1,width:700})},a.subIssuesItem=function(a){var b=function(a){c.openConfirm({template:"voteAction",controller:["$scope",function(a){a.TitleText="查看投票",a.voteList=[{},{},{},{}],a.barData=[{label:"投票结果(%)",color:"#9cd159",data:[["赞成",88],["反对",12]]}],a.barOptions={series:{bars:{align:"center",lineWidth:0,show:!0,barWidth:.6,fill:.9}},grid:{borderColor:"#eee",borderWidth:1,hoverable:!0,backgroundColor:"#fcfcfc"},tooltip:!0,tooltipOpts:{content:function(a,b,c){return b+" : "+c}},xaxis:{tickColor:"#fcfcfc",mode:"categories"},yaxis:{position:"left",tickColor:"#eee"},shadowSize:0}}],className:"ngdialog-theme-default",closeByDocument:!1,width:700})},d=function(a){c.openConfirm({template:"scoreAction",controller:["$scope",function(a){a.TitleText="查看评分",a.scoreList=[{},{},{},{},{},{}]}],className:"ngdialog-theme-default",closeByDocument:!1,width:700})};c.openConfirm({template:"subIssues",controller:["$scope",function(a){a.TitleText="子议题",a.subIssuesList=[{},{},{},{}],a.seeVote=function(a){b(a)},a.seeScore=function(a){d(a)}}],className:"ngdialog-theme-default",closeByDocument:!1,width:700})},$("#datetimeStart").datetimepicker({language:"zh-CN",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,forceParse:0,format:"yyyy-mm-dd hh:ii",showMeridian:1}).on("click",function(a){$("#datetimeStart").datetimepicker()}),$("#datetimeEnd").datetimepicker({language:"zh-CN",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,forceParse:0,format:"yyyy-mm-dd hh:ii",showMeridian:1}).on("click",function(a){$("#datetimeEnd").datetimepicker()})}]);