sap.ui.jsview("view.Contacts", {

	getControllerName: function () {
		return "view.Contacts";
	},

	createContent : function (oController) {

		this.page = new sap.m.Page({
			showNavButton :true,
			showHeader:false,
			content: [],
			footer: []
		});

	
		var oImage = new sap.ui.commons.Image({width:"60%",height:"300px"});
			oImage.setSrc("images/innominds.png");
			oImage.setTooltip("Innominds Address on Google Map.");
			oImage.setDecorative(false);

			//............................................

			var Textaddress = '<span class="sapUiFTVBold">Innominds Software Pvt Ltd </span><br>';
	Textaddress+=  'P1-4 2nd Floor, Software Unique Layout, Info City, Madhapur<br>';
	Textaddress+= 'Hyderabad, Andhra Pradesh 500081<br>';
	Textaddress+= 'Phone:040 6612 6300<br>';
	
	var oFTADd1 = new sap.ui.commons.FormattedTextView();
	oFTADd1.setHtmlText(Textaddress);

	//.............................

	var Textaddress1 = '<span class="sapUiFTVBold">Innominds Software Pvt Ltd </span><br>';
	Textaddress1+=  'P1-4 2nd Floor, Software Unique Layout, Info City, Madhapur<br>';
	Textaddress1+= 'Hyderabad, Andhra Pradesh 500081<br>';
	Textaddress1+= 'Phone:040 6612 6300<br>';
	
	var oFTADd2 = new sap.ui.commons.FormattedTextView();
	oFTADd2.setHtmlText(Textaddress1);
	//......................................


	var Textaddress2 = '<span class="sapUiFTVBold">Innominds Software Pvt Ltd </span><br>';
	Textaddress2+=  'P1-4 2nd Floor, Software Unique Layout, Info City, Madhapur<br>';
	Textaddress2+= 'Hyderabad, Andhra Pradesh 500081<br>';
	Textaddress2+= 'Phone:040 6612 6300<br>';
	
	var oFTADd3 = new sap.ui.commons.FormattedTextView();
	oFTADd3.setHtmlText(Textaddress2);

	 var oAdressLayout = new sap.ui.commons.layout.MatrixLayout({
           
            columns: 3,
            width: '100%',
            widths: ['100%', '100%', '100%']
        });

	oAdressLayout.createRow(oFTADd1,oFTADd2,oFTADd3);
			
		this.page.addContent(oImage);
		this.page.addContent(oAdressLayout);

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
