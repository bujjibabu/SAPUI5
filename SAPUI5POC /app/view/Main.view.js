sap.ui.jsview("view.Main", {

	getControllerName: function () {
		return "view.Main";
	},

	createContent : function (oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});

		var oMainTab = new sap.ui.commons.TabStrip("oMainTab");
			oMainTab.setWidth("100%");
			oMainTab.setHeight("100%");
			oMainTab.attachClose( function (oEvent) {
				var oMainTab = oEvent.oSource;
				oMainTab.closeTab(oEvent.getParameter("index"));
			});

		
		 var DashboardView = sap.ui.jsview("view.Dashboard").page;
		 var Tableview = sap.ui.jsview("view.Home").page;
		 var TeamView = sap.ui.jsview("view.Business").page;
			
			oMainTab.createTab("Home",DashboardView);
			oMainTab.createTab("Products",Tableview);
			oMainTab.createTab("About");
			oMainTab.createTab("Contacts");
			oMainTab.createTab("Team",TeamView);
		
		this.page.addContent(oMainTab);

		var footer = new sap.m.Bar({
			contentMiddle: [
				new sap.m.Link({
					text: "Deloitte Digital 2014-2015",
					target: "_blank"
				})
			]
		});

		this.page.setFooter(footer);
		return this.page;
	}
	
});
