/*global generatorSapui5Playground, SAPUI5, JST*/

sap.ui.controller("view.About", {

	goback: function(){
 var bus = sap.ui.getCore().getEventBus();
  bus.publish("nav", "back");
}

});