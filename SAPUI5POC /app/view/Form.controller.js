sap.ui.controller("view.Form", {

	goback: function(){
 var bus = sap.ui.getCore().getEventBus();
  bus.publish("nav", "back");
}

});