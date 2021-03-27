sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageBox","./utilities","sap/ui/core/routing/History"],function(t,e,i,n){"use strict";return t.extend("ZAL.Promosi.controller.ListDataPromotion",{handleRouteMatched:function(t){var e="App60336b1fade8e57e74bdb140";var i={};if(t.mParameters.data.context){this.sContext=t.mParameters.data.context}else{if(this.getOwnerComponent().getComponentData()){var n=function(t){if(Object.keys(t).length!==0){for(var e in t){if(e!=="sourcePrototype"&&e.includes("Set")){return e+"("+t[e][0]+")"}}}};this.sContext=n(this.getOwnerComponent().getComponentData().startupParameters)}}var s;if(this.sContext){s={path:"/"+this.sContext,parameters:i};this.getView().bindObject(s)}},_onButtonPress:function(t){var i=t.getSource().getBindingContext();return new Promise(function(t){this.doNavigate("SelectEmployeePromotion",i,t,"")}.bind(this)).catch(function(t){if(t!==undefined){e.error(t.message)}})},doNavigate:function(t,e,i,n){var s=e?e.getPath():null;var o=e?e.getModel():null;var r;if(s!==null&&s!==""){if(s.substring(0,1)==="/"){s=s.substring(1)}r=s.split("(")[0]}var a;var l=this.sMasterContext?this.sMasterContext:s;if(r!==null){a=n||this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(r,t)}if(a!==null&&a!==undefined){if(a===""){this.oRouter.navTo(t,{context:s,masterContext:l},false)}else{o.createBindingContext(a,e,null,function(e){if(e){s=e.getPath();if(s.substring(0,1)==="/"){s=s.substring(1)}}else{s="undefined"}if(s==="undefined"){this.oRouter.navTo(t)}else{this.oRouter.navTo(t,{context:s,masterContext:l},false)}}.bind(this))}}else{this.oRouter.navTo(t)}if(typeof i==="function"){i()}},_onRowPress:function(t){console.log("row pressed");var e=t.getSource().getBindingContext("ListPromosi").getObject();var i=new sap.ui.model.json.JSONModel(e);sap.ui.getCore().setModel(i,"RequestDetail");console.log(e);var n=sap.ui.core.UIComponent.getRouterFor(this);n.navTo("DetailRequestPromotion",{})},updateBindingOptions:function(t,e,i){this.mBindingOptions=this.mBindingOptions||{};this.mBindingOptions[t]=this.mBindingOptions[t]||{};var n=this.mBindingOptions[t].sorters;var s=this.mBindingOptions[t].groupby;if(e){if(e.sorters){n=e.sorters}if(e.groupby||e.groupby===null){s=e.groupby}this.mBindingOptions[t].sorters=n;this.mBindingOptions[t].groupby=s;this.mBindingOptions[t].filters=this.mBindingOptions[t].filters||{};this.mBindingOptions[t].filters[i]=e.filters||[]}var o=[];for(var r in this.mBindingOptions[t].filters){o=o.concat(this.mBindingOptions[t].filters[r])}if(s){n=n?s.concat(n):s}var a=o.length>0?[new sap.ui.model.Filter(o,true)]:undefined;return{filters:a,sorters:n}},createFiltersAndSorters:function(){this.mBindingOptions={};var t,e;t={};t.filters=[];e=[];e.push(new sap.ui.model.Filter("Status","EQ","01"));t.filters.push(new sap.ui.model.Filter(e,false));this.updateBindingOptions("sap_Worklist_Page_0-content-sap_m_IconTabBar-1-items-sap_m_IconTabFilter-2-content-build_simple_Table-1",t);t={};t.filters=[];e=[];e.push(new sap.ui.model.Filter("Status","EQ","02"));t.filters.push(new sap.ui.model.Filter(e,false));this.updateBindingOptions("sap_Worklist_Page_0-content-build_simple_Table-1604485562140",t)},applyFiltersAndSorters:function(t,e,i){if(i){var n=i}else{var n=this.getView().byId(t).getBindingInfo(e)}var s=this.updateBindingOptions(t);this.getView().byId(t).bindAggregation(e,{model:n.model,path:n.path,parameters:n.parameters,template:n.template,templateShareable:true,sorter:s.sorters,filters:s.filters})},onInit:function(){this.oRouter=sap.ui.core.UIComponent.getRouterFor(this);this.oRouter.getTarget("ListDataPromotion").attachDisplay(jQuery.proxy(this.handleRouteMatched,this));this.mAggregationBindingOptions={};this.createFiltersAndSorters();this.applyFiltersAndSorters("sap_Worklist_Page_0-content-sap_m_IconTabBar-1-items-sap_m_IconTabFilter-2-content-build_simple_Table-1","items");this.applyFiltersAndSorters("sap_Worklist_Page_0-content-build_simple_Table-1604485562140","items");var t="/sap/opu/odata/sap/ZHCM_PROMOSI_SRV/";var e=new sap.ui.model.odata.v2.ODataModel(t);e.setDefaultCountMode(sap.ui.model.odata.CountMode.inline);this.getView().setModel(e,"odataSelectEmployee")},onExit:function(){var t=[{controlId:"sap_Worklist_Page_0-content-sap_m_IconTabBar-1-items-sap_m_IconTabFilter-2-content-build_simple_Table-1",groups:["items"]},{controlId:"sap_Worklist_Page_0-content-build_simple_Table-1604485562140",groups:["items"]}];for(var e=0;e<t.length;e++){var i=this.getView().byId(t[e].controlId);if(i){for(var n=0;n<t[e].groups.length;n++){var s=t[e].groups[n];var o=i.getBindingInfo(s);if(o){var r=o.template;r.destroy()}}}}}})},true);