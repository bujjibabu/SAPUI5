/*global generatorSapui5Playground, SAPUI5, JST*/

sap.ui.controller("view.Dashboard", {

	onVisualPress : function(){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id : "Products"
		});
	},
	onFormPress : function(){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id : "Form"
		});
	},

	onCarouselPress : function(){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id : "Carousel"
		});
	},

	onModalPress: function(){
		var dailog = sap.ui.getCore().byId("dialog");
			dailog.open();
		
	}

});