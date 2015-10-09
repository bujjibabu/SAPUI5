 sap.ui.jsview("view.Dashboard", {

	getControllerName: function () {
		return "view.Dashboard";
	},

	createContent : function (oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});

	var tileContainer = new sap.m.TileContainer({
        tiles : [ 
            new sap.m.StandardTile({
            icon : "sap-icon://pie-chart",
            title : " Visualization",
            press: [oController.onVisualPress, oController]
            /*press : function() {
                oController.nav.to("view.Home");
            }*/
        }), new sap.m.StandardTile({
            icon : "sap-icon://attachment-photo",
            title : " Carousel",
            press :[oController.onCarouselPress, oController]
    
        }), new sap.m.StandardTile({
            icon : "sap-icon://newspaper",
            title : " Form",
            press :[oController.onFormPress, oController]
               
        }), new sap.m.StandardTile({
            icon : "sap-icon://work-history",
            title : " Modal",
            press : [oController.onModalPress, oController]

        }), new sap.m.StandardTile({
            icon : "sap-icon://excel-attachment",
            title : " Table",
            press : [oController.onTablePress, oController]
        })

         ],

    });
		
		this.page.addContent(tileContainer);
		/*var footer = new sap.m.Bar({
			contentMiddle: [
				new sap.m.Link({
					text: "Deloitte Digital 2014-2015",
					target: "_blank"
				})
			]
		});

		this.page.setFooter(footer);*/
		return this.page;
	}
	
});
