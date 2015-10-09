sap.ui.controller("view.Carousel", {

	goback: function(){
 var bus = sap.ui.getCore().getEventBus();
  bus.publish("nav", "back");
}

});