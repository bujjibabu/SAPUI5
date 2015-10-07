sap.ui.jsview("view.App", {

	getControllerName: function () {
		return "view.App";
	},

	createContent : function (oController) {
		
		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		this.app = new sap.m.App("App");
		this.app.addPage( sap.ui.jsview("Login", "view.Login"));
		this.app.addPage( sap.ui.jsview("Main", "view.Main"));
		this.app.addPage( sap.ui.jsview("Home", "view.Home"));
		this.app.addPage( sap.ui.jsview("Dashboard", "view.Dashboard"));
		this.app.addPage( sap.ui.jsview("Products", "view.Products"));
		this.app.addPage( sap.ui.jsview("Form", "view.Form"));
		this.app.addPage( sap.ui.jsview("Carousel", "view.Carousel"));
		this.app.addPage( sap.ui.jsview("Modal", "view.Modal"));
		this.app.addPage( sap.ui.jsview("Team", "view.Team"));
		this.app.addPage( sap.ui.jsview("Business", "view.Business"));
		this.app.addPage( sap.ui.jsview("Signup", "view.Signup"));
		

		var appHeader = new sap.ui.commons.ApplicationHeader("appheader");
   			appHeader.attachLogoff(function logoffPage(oEvent)
   					{
				  jQuery.sap.require("sap.ui.commons.MessageBox");
				   sap.ui.commons.MessageBox.show("Are you sure want to logoff from this page?",
				    sap.ui.commons.MessageBox.Icon.INFORMATION,
				    "Logoff Confirmation",
				     [sap.ui.commons.MessageBox.Action.OK,sap.ui.commons.MessageBox.Action.CANCEL]            
				   );  
				    }   );
  
   appHeader.setDisplayLogoff(true);
   appHeader.setDisplayWelcome(true);
   appHeader.setLogoSrc();
   appHeader.setLogoText("SAPUI5 POC");
   appHeader.setUserName("John");
  
     appHeader.placeAt("content");


		return this.app;

	}
	
});
