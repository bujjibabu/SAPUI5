sap.ui.jsview("view.Business", {

	getControllerName: function () {
		return "view.Business";
	},

	createContent : function (oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});



               var oBusinesslayout = new sap.ui.commons.layout.MatrixLayout({
           
            columns: 3,
            width: '100%',
            widths: ['100%', '100%', '100%']
        });

        var oVCard = new sap.suite.ui.commons.BusinessCard({
            width: '80%',
            firstTitle: new sap.ui.commons.Label({
               
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
            text: "+41 (635) 457-2875"
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
            width: '80%',
            firstTitle: new sap.ui.commons.Label({
                //id: "vcard1-name-label1",
                text: "Bujji Babu",
                tooltip: "Bujji Babu"
            }),
            iconPath: "images/man.jpg",
            secondTitle: "Team Lead",
            imageTooltip: "Bujji Babu",

        });


        var oContentCard1 = new sap.ui.commons.layout.MatrixLayout({
            widths: ["2%", "10%"]
        });


        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Center
        })

        oCell.addContent(new sap.ui.commons.TextView({
            text: "Phone:"
        }))

        oContentCard1.createRow(oCell, new sap.ui.commons.TextView({
            text: "123456789"
        }))

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Center
        });

        oCell.addContent(new sap.ui.commons.TextView({
            text: "E-Mail:"
        }))

        oContentCard1.createRow(oCell, new sap.ui.commons.TextView({
            text: "bbalaga@innominds.com"
        }))
        oContentCard1.createRow(new sap.ui.commons.TextView({
                text: "Location:"
            }),
            new sap.ui.commons.TextView({
                text: "Waverock-Hyderabad"
            }))

        oVCard1.setContent(oContentCard1);


        oBusinesslayout.createRow(oVCard, oVCard1);


         var oVCard2 = new sap.suite.ui.commons.BusinessCard({
            width: '80%',
            firstTitle: new sap.ui.commons.Label({
               // id: "vcard1-name-label2",
                text: "Raja Reddy Bora",
                tooltip: "Raja Reddy Bora"
            }),
            iconPath: "images/man.jpg",
            secondTitle: "UI Developer",
            imageTooltip: "Raja Reddy Bora",
        });


        var oContentCard2 = new sap.ui.commons.layout.MatrixLayout({
            widths: ["2%", "10%"]
        });
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Center
        });
        oCell.addContent(new sap.ui.commons.TextView({
            text: "Phone:"
        }));
        oContentCard2.createRow(oCell, new sap.ui.commons.TextView({
            text: "+919502257257"
        }));

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Center
        });
        oCell.addContent(new sap.ui.commons.TextView({
            text: "E-Mail:"
        }));
        oContentCard2.createRow(oCell, new sap.ui.commons.TextView({
            text: "rbora@innominds.com"
        }));

        oContentCard2.createRow(new sap.ui.commons.TextView({
            text: "Location:"
        }), new sap.ui.commons.TextView({
            text: "Waverock-Hyderabad"
        }));
        oVCard2.setContent(oContentCard2);


        var oVCard3 = new sap.suite.ui.commons.BusinessCard({
            width: '80%',
            firstTitle: new sap.ui.commons.Label({
               // id: "vcard1-name-label3",
                text: "Abdul Faiyaz",
                tooltip: "Abdul Faiyaz"
            }),
            iconPath: "images/man.jpg",
            secondTitle: "UI Developer",
            imageTooltip: "Abdul Faiyaz",

        });


        var oContentCard3 = new sap.ui.commons.layout.MatrixLayout({
            widths: ["2%", "10%"]
        });


        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Center
        })

        oCell.addContent(new sap.ui.commons.TextView({
            text: "Phone:"
        }))

        oContentCard3.createRow(oCell, new sap.ui.commons.TextView({
            text: "123456789"
        }))

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Center
        });

        oCell.addContent(new sap.ui.commons.TextView({
            text: "E-Mail:"
        }))

        oContentCard3.createRow(oCell, new sap.ui.commons.TextView({
            text: "afaiyaz@innominds.com"
        }))
        oContentCard3.createRow(new sap.ui.commons.TextView({
                text: "Location:"
            }),
            new sap.ui.commons.TextView({
                text: "Waverock-Hyderabad"
            }))

        oVCard3.setContent(oContentCard3);

        var oVCard4 = new sap.suite.ui.commons.BusinessCard({
            width: '80%',
            firstTitle: new sap.ui.commons.Label({
              //  id: "vcard1-name-label4",
                text: "Nikhila Gunda",
                tooltip: "Nikhila Gunda"
            }),
            iconPath: "images/woman.png",
            secondTitle: "UI Developer",
            imageTooltip: "Nikhila Gunda",
        });


        var oContentCard4 = new sap.ui.commons.layout.MatrixLayout({
            widths: ["2%", "10%"]
        });
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Center
        });
        oCell.addContent(new sap.ui.commons.TextView({
            text: "Phone:"
        }));
        oContentCard4.createRow(oCell, new sap.ui.commons.TextView({
            text: "+123456789"
        }));

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Center
        });
        oCell.addContent(new sap.ui.commons.TextView({
            text: "E-Mail:"
        }));
        oContentCard4.createRow(oCell, new sap.ui.commons.TextView({
            text: "ngunda@innominds.com"
        }));

        oContentCard4.createRow(new sap.ui.commons.TextView({
            text: "Location:"
        }), new sap.ui.commons.TextView({
            text: "Waverock-Hyderabad"
        }));
        oVCard4.setContent(oContentCard4);

        oBusinesslayout.createRow(oVCard2, oVCard3, oVCard4);
           this.page.addContent(oBusinesslayout);
        

		this.page.addContent(oBusinesslayout);
        

	/*	var footer = new sap.m.Bar({
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
