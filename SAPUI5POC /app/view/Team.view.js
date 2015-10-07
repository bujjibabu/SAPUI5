sap.ui.jsview("view.Team", {

	getControllerName: function () {
		return "view.Team";
	},

	createContent : function (oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});


/*
        var oBusinesslayout = new sap.ui.commons.layout.MatrixLayout({
      	columns: 3,
            width: '100%',
            widths: ['100%', '100%','100%']
        });

        var oVCard = new sap.suite.ui.commons.BusinessCard({
            width:'80%',
            firstTitle: new sap.ui.commons.Label({
                id: "vcard1-name-label",
                text: "Shilpa Battar",
                tooltip: "Shilpa Battar"
            }),
            iconPath: "images/woman.png",
            secondTitle: "Team Manager",
            imageTooltip: "Shilpa Battar",
        });


        var oContentCard = new sap.ui.commons.layout.MatrixLayout({
            widths: ["2%", "10%"]
        });
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Center
        });
        oCell.addContent(new sap.ui.commons.TextView({
            text: "Phone:"
        }));
        oContentCard.createRow(oCell, new sap.ui.commons.TextView({
            text: "+416354572875"
        }));

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Center
        });
        oCell.addContent(new sap.ui.commons.TextView({
            text: "E-Mail:"
        }));
        oContentCard.createRow(oCell, new sap.ui.commons.TextView({
            text: "sbattar@innominds.com"
        }));

        oContentCard.createRow(new sap.ui.commons.TextView({
            text: "Location:"
        }), new sap.ui.commons.TextView({
            text: "Waverock-Hyderabad"
        }));
        oVCard.setContent(oContentCard);


        var oVCard1 = new sap.suite.ui.commons.BusinessCard({
             width:'80%',
            firstTitle: new sap.ui.commons.Label({
                id: "vcard1-name-label1",
                text: "Bujji Babu",
                tooltip: "Bujji Babu"
            }),
            iconPath: "images/man.jpg",
            secondTitle: "Team Lead",
            imageTooltip: "Bujji Babu",
            
        });


        var oContentCard1 = new sap.ui.commons.layout.MatrixLayout({
        	widths:["2%", "10%"]
        });


         oCell = new sap.ui.commons.layout.MatrixLayoutCell({
        	hAlign: sap.ui.commons.layout.HAlign.Center
        })

        oCell.addContent(new sap.ui.commons.TextView({
        	text:"Phone:"
        }))

        oContentCard1.createRow(oCell, new sap.ui.commons.TextView({
        	text:"123456789"
        }))

         oCell = new sap.ui.commons.layout.MatrixLayoutCell({
        	hAlign: sap.ui.commons.layout.HAlign.Center
        });

        oCell.addContent(new sap.ui.commons.TextView({
        	text:"E-Mail:"
        }))

        oContentCard1.createRow(oCell, new sap.ui.commons.TextView({
        	text:"bbalaga@innominds.com"
        }))
        oContentCard1.createRow(new sap.ui.commons.TextView({
        	text:"Location:"
        }),
        new sap.ui.commons.TextView({
        	text:"Waverock-Hyderabad"
        }))

        oVCard1.setContent(oContentCard1);


        oBusinesslayout.createRow(oVCard, oVCard1);
*/
        

		this.page.addContent();

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
