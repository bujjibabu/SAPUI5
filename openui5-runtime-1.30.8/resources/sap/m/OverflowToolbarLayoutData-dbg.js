/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.m.OverflowToolbarLayoutData.
sap.ui.define(['sap/m/ToolbarLayoutData'],
	function(ToolbarLayoutData) {
	"use strict";

	/**
	 * Constructor for a new OverflowToolbarLayoutData.
	 *
	 * @param {string} [sId] id for the new element, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Holds layout data for the OverflowToolbar items.
	 * @extends sap.m.ToolbarLayoutData
	 * @author SAP SE
	 * @version 1.30.8
	 *
	 * @constructor
	 * @public
	 * @since 1.28
	 * @alias sap.m.OverflowToolbarLayoutData
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var OverflowToolbarLayoutData = ToolbarLayoutData.extend("sap.m.OverflowToolbarLayoutData", /** @lends sap.m.OverflowToolbarLayoutData.prototype */ { metadata : {

		properties : {
			/**
			 * The toolbar item can/cannot move to the action sheet
			 */
			moveToOverflow : {type: "boolean", defaultValue: true},

			/**
			 * The toolbar item can/cannot stay in the action sheet
			 */
			stayInOverflow : {type: "boolean", defaultValue: false}
		}
	}});

	return OverflowToolbarLayoutData;

}, /* bExport= */ true);
