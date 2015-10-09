sap.ui.controller("view.Login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf responsiveform.Form
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf responsiveform.Form
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf responsiveform.Form
*/
//	onAfterRendering: function() {
//
//	},
	
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf responsiveform.Form
*/
//	onExit: function() {
//
//	}
  
	

	save: function(name , pwd){
		if (name == "John" && pwd == "Smith" ){
			var apph = sap.ui.getCore().byId("appheader");
					apph.setDisplayWelcome(true);
					apph.setDisplayLogoff(true);
			var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id : "Main"
		});
			//window.location.href="https://sapui5.netweaver.ondemand.com/sdk/#test-resources/sap/ui/commons/demokit/MatrixLayout.html";
		}
		
	},

	signup: function(){
			var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id : "Signup"
		});

	}
	
});