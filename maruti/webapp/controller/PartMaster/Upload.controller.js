sap.ui.define([
	"misp/maruti/controller/BaseController"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("misp.maruti.controller.PartMaster.Upload", {


		onViewPartList: function(){
			this.getRouter().navTo("viewPartList");
		},
		uploadParameter: function(){
			this.getRouter().navTo("uploadParameter");
		},
		onUploadSection1: function(){
			this.getRouter().navTo("uploadParameterSection1");
		},
		onUploadSection2: function(){
			this.getRouter().navTo("uploadParameterSection2");
		}
	});
});