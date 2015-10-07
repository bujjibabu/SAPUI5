sap.ui.jsview("view.Modal", {

	getControllerName: function () {
		return "view.Modal";
	},

	createContent : function (oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});

	/*	var oBtnBack = new sap.ui.commons.Button({
					text : "Back",
					enabled : false,
					press : function() {
						
						oBtnBack.setEnabled(false);
					}

				});
		var oBtnNext = new sap.ui.commons.Button({
					text : "Next",
					press : function() {
						
						oBtnBack.setEnabled(true);
					}
				});*/
		var oBtnCancel = new sap.ui.commons.Button({
					text : "Cancel",
					press : function() {
						oDialog.close();
					}
				});

		var oDialog = new sap.ui.commons.Dialog("dialog",{
          modal : true,
          width:"450px",
          height:"300px",
          title:"SapUI5 Modal",
          buttons : [ oBtnCancel ],
          content : [  ]
        });
		
		this.page.addContent(oDialog);

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
