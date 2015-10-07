sap.ui.jsview("view.Home", {

	getControllerName: function() {
		return "view.Home";
	},

	createContent: function(oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});

				 var aData = [
		         	{lastName: "Dente", name: "Al", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 4},
		         	{lastName: "Friese", name: "Andy", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 2},
		         	{lastName: "Mann", name: "Anita", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3},
		         	{lastName: "Schutt", name: "Doris", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 4},
		         	{lastName: "Open", name: "Doris", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 2},
		         	{lastName: "Dewit", name: "Kenya", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3},
		         	{lastName: "Zar", name: "Lou", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 1},
		         	{lastName: "Burr", name: "Tim", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 2},
		         	{lastName: "Hughes", name: "Tish", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 5},
		         	{lastName: "Town", name: "Mo", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 3},
		         	{lastName: "Case", name: "Justin", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 3},
		         	{lastName: "Time", name: "Justin", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 4},
		         	{lastName: "Barr", name: "Sandy", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 2},
		         	{lastName: "Poole", name: "Gene", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 1},
		         	{lastName: "Ander", name: "Corey", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 5},
		         	{lastName: "Early", name: "Brighton", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 3},
		         	{lastName: "Noring", name: "Constance", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 4},
		         	{lastName: "O'Lantern", name: "Jack", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 2},
		         	{lastName: "Tress", name: "Matt", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 4},
		         	{lastName: "Turner", name: "Paige", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3}
		         ];
		
		
		var oTable = new sap.ui.table.Table({
			//title: "Table",
			visibleRowCount: 14,
			//firstVisibleRow: 3,
			selectionMode: sap.ui.table.SelectionMode.Single
		
		});

		//Define the columns and the control templates to be used
		
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Last Name"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "lastName"),
			sortProperty: "lastName",
			filterProperty: "lastName",
			width: "200px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "First Name"}),
			template: new sap.ui.commons.TextField().bindProperty("value", "name"),
			sortProperty: "name",
			filterProperty: "name",
			width: "100px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Gender"}),
			template: new sap.ui.commons.ComboBox({items: [
				new sap.ui.core.ListItem({text: "female"}),
				new sap.ui.core.ListItem({text: "male"})
			]}).bindProperty("value","gender"),
			sortProperty: "gender",
			filterProperty: "gender"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Checked"}),
			template: new sap.ui.commons.CheckBox().bindProperty("checked", "checked"),
			sortProperty: "checked",
			filterProperty: "checked",
			width: "75px",
			hAlign: "Center"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Web Site"}),
			template: new sap.ui.commons.Link().bindProperty("text", "linkText").bindProperty("href", "href"),
			sortProperty: "linkText",
			filterProperty: "linkText"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Rating"}),
			template: new sap.ui.commons.RatingIndicator().bindProperty("value", "rating"),
			sortProperty: "rating",
			filterProperty: "rating"
		}));
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData: aData});
		oTable.setModel(oModel);
		oTable.bindRows("/modelData");

		this.page.addContent(oTable);

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