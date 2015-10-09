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

	var oTwoDaysAgo = new Date();
	oTwoDaysAgo.setDate(oTwoDaysAgo.getDate() - 2);
	var oFinanceArticle = new sap.suite.ui.commons.FeedItem({
		title: "Help! My Sister Wants Me Off Her Credit Cards",
		image: "images/balloons.jpg",
		link: "http://finance.yahoo.com/news/help-sister-wants-off-her-110045864.html",
		source: "Yahoo Finance", 
		publicationDate: oTwoDaysAgo		
	});
	
	var oHourAgo = new Date();
	oHourAgo.setHours(oHourAgo.getHours() - 1);
	var oStyleArticle = new sap.suite.ui.commons.FeedItem({
		title: "How To Be In Style This Season",
		image: "images/grass.png",
		link: "http://www.zappos.com/",
		source: "Zappos", 
		publicationDate: oHourAgo		
	});	
	
	var articles = new Array();
	articles.push(oStyleArticle);
	articles.push(oFinanceArticle);
	
	var oFeedTile = new sap.suite.ui.commons.FeedTile({
		items: articles,
		displayDuration: 3,
	});
	
	// Create a container for the FeedTile with a specified height and width 
	var oBorderLayout = new sap.ui.commons.layout.BorderLayout({width: "400px", height: "200px"});

	// Add the FeedTile to the container
	oBorderLayout.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.top, oFeedTile );
	oBorderLayout.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.top, {
		size : "100%",
		visible : true
	});
   
	//oBorderLayout.placeAt("basic");


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
		
		oDialog.addContent(oBorderLayout);
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
