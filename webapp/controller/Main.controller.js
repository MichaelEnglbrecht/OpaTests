sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("sap.training.opatest.controller.Main", {
		onInit : function () {
			var that = this;

			window.setTimeout(function () {
				that.byId("helloButton").setText("Changed text");
			},5000);
		},
		
		handlePress: function(oEvent) {
			MessageBox.show("Button pressed....");
		}
	});

});