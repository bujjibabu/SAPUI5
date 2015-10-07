sap.ui.jsview("view.Signup", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf responsiveform.Form1
	*/ 
	getControllerName : function() {
		return "view.Signup";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf responsiveform.Form1
	*/ 
	createContent : function(oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});
		/* tooltip function*/
		function quickhelp(oControl, sText, bCustomize) {
			// create the RichTooltip control 
			var oRichTooltip = new sap.ui.commons.RichTooltip({
				text : sText
			});
			//Change position and durations if required 
			if (bCustomize) {
				oRichTooltip.setMyPosition("begin top");
				oRichTooltip.setAtPosition("end top");
				oRichTooltip.setOpenDuration(300);
				oRichTooltip.setCloseDuration(300);
			}
			// add it to the control
			oControl.setTooltip(oRichTooltip);
			// return the control itself (makes this function a decorator function)
			return oControl;
		};
 		
//create a 'real life' example
var oMatrix = new sap.ui.commons.layout.MatrixLayout("matrix4",{
	//id : 'matrix4',
	layoutFixed : true,
	
	columns : 2,
	widths : ['150px', '250px'] });

var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
	colSpan: 5 });

var oTV = new sap.ui.commons.TextView("TV-Head",{
	//id : 'TV-Head',
	text : 'Sign Up Form',
	design : sap.ui.commons.TextViewDesign.H1 });

oCell.addContent(oTV);
oMatrix.createRow(oCell);

var oLabel = new sap.ui.commons.Label({
	//id : 'L-Name',
	text : 'First Name' });

var oTF = quickhelp( new sap.ui.commons.TextField({
	//id : 'TF-Name',
	editable : true,
	value : '',
	width : '',required:true }),"Please Enter Name",true);

oLabel.setLabelFor(oTF);

oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan:2});

oMatrix.createRow(oLabel, oTF, oCell);

oLabel = new sap.ui.commons.Label({
	//id : 'L-F-Name',
	text : 'Last Name',
	required:true
	});

oTF = quickhelp(new sap.ui.commons.TextField({
	//id : 'TF-F-Name',
	tooltip : 'First Name',
	editable : true,
	value : '',
	width : '200px' }),"Please Enter LastName",true);
oLabel.setLabelFor(oTF);
oMatrix.createRow(oLabel, oTF);

oLabel = new sap.ui.commons.Label({
	//id : 'L-Street',
	text : 'Street, HouseNumber' });

oTF =quickhelp( new sap.ui.commons.TextField({
	//id : 'TF-Street',
	tooltip : 'Street',
	editable : true,
	value : '',
	width : '150px' }),"Please Enter Street No",true);
oLabel.setLabelFor(oTF);
var oTF2 = quickhelp(new sap.ui.commons.TextField({
	//id : 'TF-HNum',
	tooltip : 'House Number',
	editable : true,
	value : '',
	width : '50px',
	maxLength : 5 }),"Please Enter HouseNumber",true);
	
//multiple controls within one cell
oCell = new sap.ui.commons.layout.MatrixLayoutCell();
oCell.addContent(oTF); 
oCell.addContent(oTF2); 
oMatrix.createRow(oLabel, oCell);

oLabel = new sap.ui.commons.Label({
	//id : 'L-City',
	text : 'City' });

oTF = quickhelp(new sap.ui.commons.TextField({
	//id : 'TF-City',
	tooltip : 'City',
	editable : true,
	value : '',
	width : '200px' }),"Please Enter City",true);
oLabel.setLabelFor(oTF);
oMatrix.createRow(oLabel, oTF);
	
oLabel = new sap.ui.commons.Label({
	//id : 'L-Country',
	text : 'Country' });

oCB = new sap.ui.commons.ComboBox({
	//id : 'TF-Country',
	tooltip : 'Country',
	editable : true,
	value : 'Deutschland',
	width : '200px' });
oLabel.setLabelFor(oCB);
var oItem = new sap.ui.core.ListItem({
	//id : 'LI1',
	text : 'Canada' });
oCB.addItem(oItem);
var oItem = new sap.ui.core.ListItem({
	//id : 'LI2',
	text : 'Deutschland' });
oCB.addItem(oItem);
var oItem = new sap.ui.core.ListItem({
	//id : 'LI3',
	text : 'England' });
oCB.addItem(oItem);
var oItem = new sap.ui.core.ListItem({
	//id : 'LI4',
	text : 'NewYork' });
oCB.addItem(oItem);
oMatrix.createRow(oLabel, oCB);

oLabel = new sap.ui.commons.Label({
	//id : 'L-Date',
	text : 'Date of birth' });
oDP = new sap.ui.commons.DatePicker({
	//id : 'DP-Date',
	tooltip : 'Date of Birth',
	editable : true,
	width : '200px' ,
	yyyymmdd : 19990909 });
oLabel.setLabelFor(oDP);
oMatrix.createRow(oLabel, oDP);
oCell = new sap.ui.commons.layout.MatrixLayoutCell();

oLabel = new sap.ui.commons.Label({
	//id : 'L-Gender',
	text : 'Gender' });
var oRBG = new sap.ui.commons.RadioButtonGroup({
	//id : 'RBG-Gender',
	tooltip : 'Gender',
	columns : 2,
	editable : false });
var oItem = new sap.ui.core.Item({
	//id : 'RB-Male',
	text : 'Male',
	tooltip : 'Gender: male',
	key : 'male' });
oRBG.addItem(oItem);
oItem = new sap.ui.core.Item({
	//id : 'RB-Female',
	text : 'Female',
	tooltip : 'Gender: female',
	key : 'female' });
oRBG.addItem(oItem);
oCell = new sap.ui.commons.layout.MatrixLayoutCell();
oMatrix.createRow(oLabel, oRBG);

oLabel = new sap.ui.commons.Label({
	//id : 'Email',
	text : 'EmailID',
	required:true });
oMail = quickhelp(new sap.ui.commons.TextField({
	//id : 'mail',
	editable : true,
	width : '200px'
	}),"Please enter emailid");
oLabel.setLabelFor(oDP);
oMatrix.createRow(oLabel, oMail);
oCell = new sap.ui.commons.layout.MatrixLayoutCell();
oMatrix.createRow(oLabel, oMail);
var oButton = new sap.ui.commons.Button({
	//id:'button1',
	text:'save',
	width:'100px'
});
var oButton1 = new sap.ui.commons.Button({
	//id:'button1',
	text:'Cancel',
	width:'100px',
	press:function(){
		oController.cancel();
	}
});

oMatrix.createRow(oButton,oButton1);
// attach it to some element in the page
//oMatrix.placeAt('content');
			
	this.page.addContent(oMatrix);

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