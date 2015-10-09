sap.ui.controller("view.Products", {

	goback: function(){
 var bus = sap.ui.getCore().getEventBus();
  bus.publish("nav", "back");
}

});