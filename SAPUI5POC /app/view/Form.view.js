sap.ui.jsview("view.Form", {

	getControllerName: function () {
		return "view.Form";
	},

	createContent : function (oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});

	var oMatrix1 = new sap.ui.commons.layout.MatrixLayout({
            id: "matrix1",
            layoutFixed: true,
            width: '100%',


        });
        
         var oTextView = new sap.ui.commons.TextView("t11");
         oTextView.setText(" Create");
         var oTextView2 = new sap.ui.commons.TextView("t22");
         oTextView2.setText(" Promotion Event");
         
         var Cell1 = new sap.ui.commons.layout.MatrixLayoutCell({
          });
         Cell1.addContent(oTextView);
         Cell1.addContent(oTextView2);
              
              oMatrix1.createRow(Cell1);

             var oToolbar0 = new sap.ui.commons.Toolbar('Tb1');
                oToolbar0.setDesign(sap.ui.commons.ToolbarDesign.Transparent);
        
        var olabel = new sap.ui.commons.Label({
            id:'sub2',
            text:'2015 Croger Desserts'
        })
        oToolbar0.addItem(olabel);
        
        var olabel1 = new sap.ui.commons.Label({
            id:'sub1',
            text:'Creation Date: 12 December 2015'
        })
        
        oToolbar0.addRightItem(olabel1);
        
         var oToolbar = new sap.ui.commons.Toolbar('Tb');
            oToolbar.setDesign(sap.ui.commons.ToolbarDesign.Standard);
            

            var oTV = new sap.ui.commons.TextView({
                id: 'TV-head',
                text: 'Step 1 - Enter Basic Details',
                design: sap.ui.commons.TextViewDesign.H1
            });
            
            oToolbar.addItem(oTV);
            
          
            var oTV1 = new sap.ui.commons.TextView({
                id: 'TV-head1',
                text: 'Status: Initial',
                design: sap.ui.commons.TextViewDesign.H1
            });
            
            oToolbar.addRightItem(oTV1);
            
        
        var oMatrix = new sap.ui.commons.layout.MatrixLayout({
            id: "matrix",
            layoutFixed: true,
            width: '100%',
        });
    

        var oLabel = new sap.ui.commons.Label({
            id: 'Name',
            text: 'Promotion Name'
        });

        var oTF = new sap.ui.commons.TextField({
            id: 'TName',
            tooltip: 'Name',
            value: '',
            placeholder:'Enter promotion Name',
            editable: true,
            width: '100%'

        });

        oLabel.setLabelFor(oTF);


        var oLabel1 = new sap.ui.commons.Label({
            id: 'PType',
            text: 'Promo Type'
        });

        var oTF1 = new sap.ui.commons.DropdownBox("Cities", {
                items: [
                    new sap.ui.core.ListItem("City1", {
                        text: ""
                    }),
                    new sap.ui.core.ListItem("City2", {
                        text: "GB (United Kingdom)"
                    }),
                    new sap.ui.core.ListItem("City3", {
                        text: "IN (India)"
                    }),
                    new sap.ui.core.ListItem("City4", {
                        text: "US (United States)"
                    })
                ],
                width: '100%',
                placeholder:'Select Promotion Type',
            })

            oLabel1.setLabelFor(oTF1);

        var oLabel2 = new sap.ui.commons.Label({
            id: 'SDate',
            text: 'In Store Start Date'
        });

        oDP = new sap.ui.commons.DatePicker({
            id: 'DP-Date',
            tooltip: 'Date of Birth',
            width: '100%',
            editable: true,
            placeholder:'Enter In-Store Start',
           
        });



        var oLabel3 = new sap.ui.commons.Label({
            id: 'ISDate',
            text: 'In Store End Date'
        });

        oDP1 = new sap.ui.commons.DatePicker({
            id: 'D-Date',
            tooltip: 'Date of Birth',
            width: '100%',
            editable: true,
            placeholder:'Enter In-Store End',
            
        });



        var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({

        });
        oCell1.addContent(oLabel2);
        oCell1.addContent("");

        oMatrix.createRow(oLabel, oLabel1, oLabel2, oLabel3);
        oMatrix.createRow(oTF, oTF1, oDP, oDP1);
        oMatrix.createRow();


         var oL1 = new sap.ui.commons.Label({
            id: 'PNode',
            text: 'Customer Node'
        });

        var oTF3 = new sap.ui.commons.DropdownBox("Cities1", {
                items: [
                    new sap.ui.core.ListItem("C1", {
                        text: ""
                    }),
                    new sap.ui.core.ListItem("C2", {
                        text: "GB (United Kingdom)"
                    }),
                    new sap.ui.core.ListItem("C3", {
                        text: "IN (India)"
                    }),
                    new sap.ui.core.ListItem("C4", {
                        text: "US (United States)"
                    })
                ],
                width: '100%',
                placeholder:'Kroger',
            })

            oLabel1.setLabelFor(oTF1);


            var oL2 = new sap.ui.commons.Label({
            id: 'PLevel',
            text: 'Product Level'
        });

        var oTF4 = new sap.ui.commons.DropdownBox("Cities2", {
                items: [
                    new sap.ui.core.ListItem("Ci1", {
                        text: ""
                    }),
                    new sap.ui.core.ListItem("Ci2", {
                        text: "GB (United Kingdom)"
                    }),
                    new sap.ui.core.ListItem("Ci3", {
                        text: "IN (India)"
                    }),
                    new sap.ui.core.ListItem("Ci4", {
                        text: "US (United States)"
                    })
                ],
                width: '100%',
                placeholder:'Product Group',
            })

            oLabel1.setLabelFor(oTF1); 



            var oL3 = new sap.ui.commons.Label({
            id: 'SgDate',
            text: 'PO Start Date'
        });

        oDP3 = new sap.ui.commons.DatePicker({
            id: 'POSDate',
            tooltip: 'Date of Birth',
            width: '100%',
            editable: true,
            placeholder:'Enter PO Start',
            
        });



        var oL4 = new sap.ui.commons.Label({
            id: 'SgjDate',
            text: 'PO End Date'
        });

        oDP4 = new sap.ui.commons.DatePicker({
            id: 'PoDate',
            tooltip: 'Date of Birth',
            width: '100%',
            editable: true,
            placeholder:'Enter PO End',
           
        });
        

        oMatrix.createRow(oL1, oL2, oL3, oL4);
        oMatrix.createRow(oTF3, oTF4, oDP3, oDP4);
        oMatrix.createRow();



     oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({
            
        });

    oCell2 = new sap.ui.commons.layout.MatrixLayoutCell({
            
        }); 



     oCell3 = new sap.ui.commons.layout.MatrixLayoutCell({
            
        });

    oCell4= new sap.ui.commons.layout.MatrixLayoutCell({
            
        });   

        

    var oL5 = new sap.ui.commons.Label({
            id: 'SSDate',
            text: 'Shipment Start Date'
        });

        oDP5 = new sap.ui.commons.DatePicker({
            id: 'STDate',
            tooltip: 'Date of Birth',
            width: '100%',
            editable: true,
            placeholder:'Enter Ship Start'
            
        });


    var oL6 = new sap.ui.commons.Label({
            id: 'ShipmentDate',
            text: 'Shipment End Date'
        });

        oDP6 = new sap.ui.commons.DatePicker({
            id: 'SEDate',
            tooltip: 'Date of Birth',
            width: '100%',
            editable: true,
            placeholder:'Enter Ship End',
            
        });


    oMatrix.createRow(oCell3,oCell4,oL5, oL6);
        oMatrix.createRow(oCell1,oCell2,oDP5, oDP6);



        var oL7 = new sap.ui.commons.Label({
            id: 'comment',
            text: 'Comments'
        });

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            colSpan:4
        });

        oTA = new sap.ui.commons.TextArea({
            Id:'Enter Comments',
            width:'100%',
            height:'100px',
            editable:true,
            placeholder:'Enter Comments'
        })

        oCell.addContent(oTA);
        oMatrix.createRow(oL7);
        oMatrix.createRow(oCell);
        
    
    var oMatrix2 = new sap.ui.commons.layout.MatrixLayout({
        id: "matrix2",
        layoutFixed: true,
        width: '100%',
        columns:3
    });
    
    var oButton1 = new sap.ui.commons.Button({
        id : 'Cancel',
        tooltip : 'oRtt',
        text : 'Cancel',
        width : '10em',
        });
    
    
    var oText = new sap.ui.commons.Label({
        id:'text',
        text:'Step 1 of 3',
    
    });
    
    
    var oButton2 = new sap.ui.commons.Button({
        id : 'Continue',
        tooltip : 'oRtt',
        text : 'Continue',
        width : '10em',
        
        });
    
    oMatrix2.createRow(oButton1,oText,oButton2)

    this.page.addContent(oMatrix1);
    this.page.addContent(oMatrix);
    this.page.addContent(oMatrix2);

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
