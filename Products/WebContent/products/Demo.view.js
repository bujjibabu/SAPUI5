sap.ui.jsview("products.Demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf products.Demo
	*/ 
	getControllerName : function() {
		return "products.Demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf products.Demo
	*/ 
	createContent : function(oController) {
         new sap.ui.commons.Button({
        	 text: "Hello",
        	 press:function(){
        		 alert("page2");
        	 }
         })
	}

});
