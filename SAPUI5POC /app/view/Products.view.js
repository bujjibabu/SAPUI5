sap.ui.jsview("view.Products", {

	getControllerName: function () {
		return "view.Products";
	},

	createContent : function (oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});

		var oMatrixlayout = new sap.ui.commons.layout.MatrixLayout({
            id: "matrixchart",
            columns: 2,
            width: '100%',
            widths: ['100%', '100%']
        });

        var sURI = 'http://services.odata.org/v3/Northwind/Northwind.svc/';
        var oModel = new sap.ui.model.odata.ODataModel(sURI, true);

        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1,
                name: 'Category',
                value: '{Category/CategoryName}'
            }],
            measures: [
                {
                    name: 'Product',
                    value: '{ProductID}'
                }
            ],
            data: {
                path: "/Products",
                parameters: {
                    select: 'ProductID,Category/CategoryName',
                    expand: 'Category'
                }
            }
        });


        var oColumnChart = new sap.viz.ui5.Column({
            width: "100%",
            height: "100%",
            plotArea: {
                'colorPalette': d3.scale.category20().range()
            },
            toolTip: {
                visible: false
            },
            legend: {
                visible: false
            },
            selectData: {

            },
            title: {
                visible: true,
                text: 'Products'
            },
            dataset: oDataset
        });


        oColumnChart.setModel(oModel);


        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1,
                name: 'CategoryName',
                value: "{CategoryName}"
            }],
            measures: [
                {
                    name: 'ProductSales',
                    value: '{ProductSales}'
                }
            ],
            data: {
                path: "/Sales_by_Categories",
                parameters: {
                    select: 'ProductSales,CategoryName'
                }
            }

        });

        var oPieChart = new sap.viz.ui5.Pie({
            width: "100%",
            height: "100%",
            plotArea: {
                'colorPalette': d3.scale.category20().range()
            },
            title: {
                visible: true,
                text: 'Sales_by_Categories'
            },
            dataset: oDataset
        });


        oPieChart.setModel(oModel);

        oMatrixlayout.createRow({
            height: '500px'
        }, oColumnChart, oPieChart);


        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1,
                name: 'CategoryName',
                value: "{CategoryName}"
            }],
            measures: [
                {
                    name: 'UnitPrice',
                    value: '{UnitPrice}'
                }, {
                    name: 'ReorderLevel',
                    value: '{ReorderLevel}'
                }
            ],
            data: {
                path: "/Alphabetical_list_of_products",
                parameters: {
                    select: 'UnitPrice,ReorderLevel,CategoryName'
                }
            }
        });


        var oStackedColumn = new sap.viz.ui5.StackedColumn({
            width: "100%",
            height: "100%",
            plotArea: {
                //'colorPalette' : d3.scale.category20().range()
            },
            title: {
                visible: true,
                text: 'Alphabetical_list_of_products'
            },
            dataset: oDataset
        });


        oStackedColumn.setModel(oModel);


        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1,
                name: 'Country',
                value: "{Country}"
            }],
            measures: [
                {
                    name: 'Freight',
                    value: '{Freight}'
                }
            ],
            data: {
                path: "/Orders_Qries",
                parameters: {
                    select: 'Freight,Country'
                }
            }
        });


        var oLine = new sap.viz.ui5.Line({
            width: "100%",
            height: "100%",
            plotArea: {
                //'colorPalette' : d3.scale.category20().range()
            },
            title: {
                visible: true,
                text: 'Orders_Qries'
            },
            dataset: oDataset
        });
        oLine.setModel(oModel);

        oMatrixlayout.createRow({
            height: '500px'
        }, oStackedColumn, oLine);

        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1,
                name: 'CategoryName',
                value: "{CategoryName}"
            }],
            measures: [{
                name: 'UnitPrice',
                value: '{UnitPrice}'
            }, {
                name: 'ReorderLevel',
                value: '{ReorderLevel}'
            }],
            data: {
                path: "/Alphabetical_list_of_products",
                parameters: {
                    select: 'UnitPrice,ReorderLevel,CategoryName'
                }
            }
        });


        var oCombination = new sap.viz.ui5.Combination({
            width: "100%",
            height: "400px",
            plotArea: {
                //'colorPalette' : d3.scale.category20().range()
            },
            title: {
                visible: true,
                text: 'Alphabetical_list_of_products'
            },
            dataset: oDataset
        });


        oCombination.setModel(oModel);


        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1,
                name: 'CategoryName',
                value: "{CategoryName}"
            }],
            measures: [{
                name: 'UnitPrice',
                value: '{UnitPrice}'
            }, {
                name: 'ReorderLevel',
                value: '{ReorderLevel}'
            }],
            data: {
                path: "/Alphabetical_list_of_products",
                parameters: {
                    select: 'UnitPrice,ReorderLevel,CategoryName'
                }
            }
        });


        var oArea = new sap.viz.ui5.Area({
            width: "100%",
            height: "400px",
            plotArea: {
               colorPalette: [
                    '#00FF00', '#FFC200', '#FF0000'
                ]
            },
            title: {
                visible: true,
                text: 'Orders_Qries'
            },
            dataset: oDataset
        });
        oArea.setModel(oModel);

        oMatrixlayout.createRow({
            height: '500px'
        }, oCombination, oArea);


        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1,
                name: 'CategoryName',
                value: "{CategoryName}"
            }],
            measures: [{
                name: 'UnitPrice',
                value: '{UnitPrice}'
            }, {
                name: 'ReorderLevel',
                value: '{ReorderLevel}'
            }],
            data: {
                path: "/Alphabetical_list_of_products",
                parameters: {
                    select: 'UnitPrice,ReorderLevel,CategoryName'
                }
            }
        });


        var oBullet = new sap.viz.ui5.Bullet({
            width: "100%",
            height: "400px",
            plotArea: {
                'colorPalette': d3.scale.category20().range()
            },
            title: {
                visible: true,
                text: 'Alphabetical_list_of_products'
            },
            dataset: oDataset
        });


        oBullet.setModel(oModel);


        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                axis: 1,
                name: 'CategoryName',
                value: "{CategoryName}"
            }],
            measures: [{
                name: 'UnitPrice',
                value: '{UnitPrice}'
            }, {
                name: 'ReorderLevel',
                value: '{ReorderLevel}'
            }],
            data: {
                path: "/Alphabetical_list_of_products",
                parameters: {
                    select: 'UnitPrice,ReorderLevel,CategoryName'
                }
            }
        });


        var oDLine = new sap.viz.ui5.Line({
            width: "100%",
            height: "400px",
            plotArea: {
                colorPalette: [
                    '#00FF00', '#FFC200', '#FF0000'
                ]
            },
            title: {
                visible: true,
                text: 'Orders'
            },
            dataset: oDataset
        });
        oDLine.setModel(oModel);

        oMatrixlayout.createRow({
            height: '500px'
        }, oBullet, oDLine);

        this.page.addContent(oMatrixlayout);
		var footer = new sap.m.Bar({
            contentMiddle: [
                new sap.m.Link({
                    text: "Deloitte Digital 2014-2015",
                    target: "_blank"
                })
            ]
        });

        this.page.setFooter(footer);		return this.page;
	}
	
});
