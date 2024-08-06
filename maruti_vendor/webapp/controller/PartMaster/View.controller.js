sap.ui.define([
	"misp/maruti/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("misp.maruti.controller.PartMaster.View", {
		onInit:function(){
           var sample=[
			{
				"RequestId":"MSTR0000001",
				"Controlno":"MISP00001",
				"username":"Ishan",
				"PartNo":"51440-80T00",
				"PartName":"PIPE,BODY HOSE TO RR BK HOSE,L",
				"RevNo":"1",
				"Model":"YWD",
				"MISPStatus":"Saved"
			 },
			 {
				"RequestId":"MSTR0000001",
				"Controlno":"MISP00002",
				"username":"Ishan",
				"PartNo":"51440-80T00",
				"PartName":"PIPE,BODY HOSE TO RR BK HOSE,L",
				"RevNo":"1",
				"Model":"YWD",
				"MISPStatus":"Saved"
			 },
			 {
				"RequestId":"MSTR0000001",
				"Controlno":"MISP00003",
				"username":"Ishan",
				"PartNo":"51440-80T00",
				"PartName":"PIPE,BODY HOSE TO RR BK HOSE,L",
				"RevNo":"1",
				"Model":"YWD",
				"MISPStatus":"Saved"
			 },
			 

		
		   ];

		   var oModel = new JSONModel(sample);
		   this.getView().setModel(oModel,"excelData")
		},
	});
});