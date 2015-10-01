sap.ui.controller("products.Products", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf products.Products
*/
	onInit: function() {
		
		 var omodel = new sap.ui.model.odata.ODataModel("proxy/http/services.odata.org/V3/OData/OData.svc",false);
		//var omodel = new sap.ui.model.odata.oDataModel("http://services.odata.org/V3/OData/OData.svc");
		omodel.oHeaders = {
				"DataServerVersion" : "3.0",
				"MaxDataServerVersion": "3.0"
		}
		
		sap.ui.getCore().setModel(omodel,"products");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf products.Products
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf products.Products
*/
	onAfterRendering: function() {
		
		$("#formId").hide();

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf products.Products
*/
//	onExit: function() {
//
//	}
	mode:0,
	
	resetForm: function(){
		$("#name").val('');
		$("#description").val('');
		$("#price").val('');
		$("#rating").val('');
		$("#id").val('');
		
	},
	
	create: function(){
		this.mode = 'create';
		this.resetForm();
		
		$("#formId").slideDown(300, function(){
			
			var id = sap.ui.getCore().byId('tableId')._getRowCount();
			$("#id").val(id);
		});
		
	},

	edit: function(){
		
		this.mode = 'edit';
		
		var oTable = sap.ui.getCore().byId('tableId');
		
		var selected = oTable.getSelectedIndex();
		
		if(selected == -1){
			alert("select a row");
		}else{
			
			$("#formId").slideDown(function(){
				
				var data = oTable.getModel('products').oData['Products('+selected+')'];
				
				var id = data.ID;
				var description = data.Description;
				var price = data.Price;
				var rating = data.Rating;
				var name = data.Name;
				
				$("#name").val(name);
				$("#description").val(description);
				$("#price").val(price);
				$("#rating").val(rating);
				$("#id").val(id);
				
			})
		}
	
	},
	
	removeId:0,
	remove: function(){
		
		this.mode = 'delete';
		
		var oTable = sap.ui.getCore().byId('tableId');
		
		var selected = oTable.getSelectedIndex();
		
		if(selected == -1){
			alert("select a row");
		}else{
			var data = oTable.getModel('products').oData['Products('+selected+')'];
			
			this.removeId = data.ID;
			
			this.save();
		}
		
	},
	save: function(){
		
		var requestObj = {
				
				requestUri:'',
				method:'',
				headers:{
					"X-Requested-With": "XMLHttpRequest",
					"Content-Type":"application/json;odata=minimalmetadata",
					"DataServiceVersion":"3.0",
					"MaxDataServiceVersion":"3.0",
					"Accept":"application/json;odata=minimalmetadata"
				}
		};
		
		var newData = {
				"odata.type": "ODataDemo.Product",
				"ID": $("#id").val(),
                "Name": $("#name").val(),
                "Description": $("#description").val(),
                "ReleaseDate": $("#date").val(),
                "Rating": $("#rating").val(),
                "Price": $("#price").val()
		}
		
		if(this.mode == 'create'){
			
			var url = "proxy/http/services.odata.org/V3/OData/OData.svc/Products";
			var method = "POST";
			requestObj.requestUri = url;
			requestObj.method = method;
			requestObj.data = newData;
			
		}else if(this.mode == 'edit'){
			
			var id = $("#id").val();
			var url = "proxy/http/services.odata.org/V3/OData/OData.svc/Products("+ id +")";
			var method = "PUT";
			
			requestObj.requestUri = url;
			requestObj.method = method;
			requestObj.data = newData;
		} else if(this.mode == 'delete'){
			
			var id = this.removeId;
			var url = "proxy/http/services.odata.org/V3/OData/OData.svc/Products("+ id +")";
			var method = "DELETE";
			
		}
		
		OData.request(requestObj,function(){
			sap.ui.getCore().getModel('products').refresh();
			$("#formId").slideUP();
		});
	}

});