sap.ui.jsview("view.Login", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf responsiveform.Form
	*/ 
	getControllerName : function() {
		return "view.Login";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf responsiveform.Form
	*/ 
	createContent : function(oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});


		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({width:"340px",height:"150px"});
		oLayout.addStyleClass("LoginControl"); //Add some additional styling for the border

		var oLabel = new sap.ui.commons.Label({text:"User Name"});
		var oNameInput = new sap.ui.commons.TextField({width:"190px"});
		oLabel.setLabelFor(oNameInput);
		oLayout.addContent(oLabel, {right:"248px",top:"20px"});
		oLayout.addContent(oNameInput, {left:"110px",top:"20px"});

		oLabel = new sap.ui.commons.Label({text:"Password"});
		oPWInput = new sap.ui.commons.PasswordField({width:"190px"});
		oLabel.setLabelFor(oPWInput);
		oLayout.addContent(oLabel, {right:"248px",top:"62px"});
		oLayout.addContent(oPWInput, {left:"110px",top:"62px"});

		var oLoginButton = new sap.ui.commons.Button({
			text:"Login",
			width:"80px",
			press:function(){
			oController.save(oNameInput.getValue(),oPWInput.getValue());
		}});

		var oLoginButton1 = new sap.ui.commons.Button({
			text:"SignUp",
			width:"80px",
			press:function(){
			oController.signup();
		}});
		//oLoginButton.attachPress(function(){alert("Login with user name '"+oNameInput.getValue()+"' and password '"+oPWInput.getValue()+"'.")});
		
		oLayout.addContent(oLoginButton, {left:"110px",top:"104px"});
		oLayout.addContent(oLoginButton1, {left:"200px",top:"104px"});
		
		//oLayout.placeAt("content");

		this.page.addContent(oLayout);

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
