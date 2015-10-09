sap.ui.controller("view.Modal", {

  goback: function(){
 var bus = sap.ui.getCore().getEventBus();
  bus.publish("nav", "back");
}

});

