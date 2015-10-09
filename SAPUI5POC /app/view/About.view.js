sap.ui.jsview("view.About", {

	getControllerName: function () {
		return "view.About";
	},

	createContent : function (oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});

		var oAccordion = new sap.ui.commons.Accordion(); 
		var oSection1 = new sap.ui.commons.AccordionSection();		
			  oSection1.setTitle("SapUI5");		
			  oSection1.setTooltip("SapUI5 Information");
	var sHtmlText = 'SAPUI5 (SAP user interface for HTML 5) is a collection of libraries that developers can use to build desktop and mobile applications that run in a browser.<br> With SAP SAPUI5 JavaScript toolkit, developers can build SAP web applications using HTML5 web development standards.<br>';
	sHtmlText+=  '<span class="sapUiFTVBold">SAPUI5 has the following advantages:</span><br>';
	sHtmlText+= 'SAPUI5 is an enterprise-ready web toolkit with powerful development concepts<br>';
	sHtmlText += '<ul><li>Built-in extensibility concepts at code and application level.</li><li>Data binding types and Model-View-Controller (MVC)</li>';
	sHtmlText += '<li>Full translation support.</li><li>Keyboard interaction support and accessiblity features.</li></ul>';
	var oFTV1 = new sap.ui.commons.FormattedTextView();
	oFTV1.setHtmlText(sHtmlText);
	oSection1.addContent(oFTV1); 
	//....................................................................
		var oSection2 = new sap.ui.commons.AccordionSection();
  			  oSection2.setTitle(" SapUi5 Controls");
  	var sHtmlText1 = '<span class="sapUiFTVBold">SAPUI5 contains rich set of standard and extension controls</span><br>';
	sHtmlText1+=  '<span class="sapUiFTVBold">Simple Controls:</span><br>';
	sHtmlText1+= 'Label, Button, Link, and TextView, for example, are basic controls since they are required and used for nearly any application design.<br>';
	sHtmlText1 += '<span class="sapUiFTVBold">Value Holders:</span><br>';
	sHtmlText1 += 'The value holders section contains the controls that offer value lists such as ComboBox, ListBox, or DropdownBox<br>'; 
	sHtmlText1 += '<span class="sapUiFTVBold">Layouts:</span><br>';
	sHtmlText1 += 'The feature set that is availabe with the Layout controls varies from basically designing a screen area or a page by using a divider,<br>'; 
	sHtmlText1 += ' and allow to mix various design aspects to gain rich user interfaces.<br>'; 
  		
	var oFTV2 = new sap.ui.commons.FormattedTextView();
	oFTV2.setHtmlText(sHtmlText1);
  		oSection2.addContent(oFTV2); 

  		//.....................................................................
  		var oSection3 = new sap.ui.commons.AccordionSection();		
  			oSection3.setTitle("SapUI5 Charts");

  			var oModel = new sap.ui.model.json.JSONModel({
		businessData : [
			{Country :"Canada",revenue:410.87,profit:-141.25, population:34789000},
			{Country :"China",revenue:338.29,profit:133.82, population:1339724852},
			{Country :"France",revenue:487.66,profit:348.76, population:65350000},
			{Country :"Germany",revenue:470.23,profit:217.29, population:81799600},
			{Country :"India",revenue:170.93,profit:117.00, population:1210193422},
			{Country :"United States",revenue:905.08,profit:609.16, population:313490000}
		]
	});		

    // A Dataset defines how the model data is mapped to the chart 
	var oDataset = new sap.viz.ui5.data.FlattenedDataset({

		// a Bar Chart requires exactly one dimension (x-axis) 
		dimensions : [ 
			{
				axis : 1, // must be one for the x-axis, 2 for y-axis
				name : 'Country', 
				value : "{Country}"
			} 
		],

		// it can show multiple measures, each results in a new set of bars in a new color 
		measures : [ 
		    // measure 1
			{
				name : 'Profit', // 'name' is used as label in the Legend 
				value : '{profit}' // 'value' defines the binding for the displayed value   
			},
			{
				name : 'Revenue', 
				value : '{revenue}'
			} 
		],
		
		// 'data' is used to bind the whole data collection that is to be displayed in the chart 
		data : {
			path : "/businessData"
		}
		
	});

    // create a Bar chart
    // you also might use Combination, Line, StackedColumn100, StackedColumn or Column
    // for Donut and Pie please remove one of the two measures in the above Dataset.  
	var oBarChart = new sap.viz.ui5.Column({
		width : "80%",
		height : "400px",
		plotArea : {
		//'colorPalette' : d3.scale.category20().range()
		},
		title : {
			visible : true,
			text : 'Profit and Revenue By Country'
		},
		dataset : oDataset
	});

    // attach the model to the chart and display it
	oBarChart.setModel(oModel);
        	oSection3.addContent(oBarChart);

  			 oAccordion.setWidth("100%");
  			 oAccordion.addSection( oSection1 );
  			 oAccordion.addSection( oSection2 );	
  			 oAccordion.addSection( oSection3 );		
	
		this.page.addContent(oAccordion);

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
