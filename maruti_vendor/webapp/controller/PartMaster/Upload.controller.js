sap.ui.define(
  [
    "misp/maruti/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
  ],
  function (Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("misp.maruti.controller.PartMaster.Upload", {
      onInit: function () {
        var sampleData = [
          {
            RequestId: "MSTR0000001",
            Controlno: "MISP00001",
            PartCategory: "Brake Pipe",
            NoofParts: "4",
            Model: "BundyIndiaLtd",
            ReqReceivedData: "3-Aug-23",
            SavedMISDueDate: "10-Aug-23",
            DelayFromDueDate: "7",
          },
          {
            RequestId: "MSTR0000007",
            Controlno: "MISP00027",
            PartCategory: "Brake Hose",
            NoofParts: "5",
            Model: "Bundy India Ltd",
            ReqReceivedData: "25-Nov-23",
            SavedMISDueDate: "03-Dec-23",
            DelayFromDueDate: "8",
          },
          {
            RequestId: "MSTR0000023",
            Controlno: "MISP00028",
            PartCategory: "Grommet",
            NoofParts: "8",
            Model: "Bundy India Ltd",
            ReqReceivedData: "04-Jan-24",
            SavedMISDueDate: "11-Jan-24",
            DelayFromDueDate: "9",
          },
        ];

        var oModel = new JSONModel(sampleData);
        this.getView().setModel(oModel, "excelData");

        var sample = [
          {
            PartNumber: "51480-80T00",
            PartName: "PIPE,BODY HOSE TO RR BK HOSE,L",
            DrawingNo: "51480-80T00",
            RevNo: "1",
            Model: "YWD",
          },
          {
            PartNumber: "51440-80T00",
            PartName: "PIPE,HU TO FR BK HOSE,L",
            DrawingNo: "51440-80T00",
            RevNo: "2",
            Model: "YXA",
          },
          {
            PartNumber: "51430-80T00",
            PartName: "PIPE,HU TO FR BK HOSE,R",
            DrawingNo: "51430-80T00",
            RevNo: "2",
            Model: "Y1k",
          },
          {
            PartNumber: "51430-80T10",
            PartName: "PIPE,HU TO FR BK HOSE,R",
            DrawingNo: "51430-80T10",
            RevNo: "1",
            Model: "YNC",
          },
        ];

        var aModel = new JSONModel(sample);
        this.getView().setModel(aModel, "AvailData");

        var upload = [
          {
            section: "Dimension",
            InspectionItem: "Across Flat",
            Criteria: "12.0 - 0.25",
            LowerValue: "11.75",
            UpperValue: "12.00",
            InspectionMethod: "Measurement",
            InspectionTool: "Vernier",
            Plan: "N=Sper lot/100%",
            Stage: "Forging/EOL",
            SelectionApplicationPartno: "EOL-Optical Sorter",
          },
          {
            section: "Dimension",
            InspectionItem: "Across Corner",
            Criteria: "13.30 Min",
            LowerValue: "13.30",
            UpperValue: "-",
            InspectionMethod: "Measurement",
            InspectionTool: "Height Gauge",
            Plan: "N=Sper lot/100%",
            Stage: "Forging/EOL",
            SelectionApplicationPartno: "EOL-Optical Sorter",
          },
          {
            section: "Dimension",
            InspectionItem: "Pointing Diameter",
            Criteria: "5.50-0.20",
            LowerValue: "5.30",
            UpperValue: "5.50",
            InspectionMethod: "Measurement",
            InspectionTool: "Micrometer",
            Plan: "N=Sper lot",
            Stage: "Forging",
            SelectionApplicationPartno: "EOL-Optical Sorter",
          },
        ];
        var bModel = new JSONModel(upload);
        this.getView().setModel(bModel, "bAvailData");
      },

      onViewPartList: function () {
        this.getRouter().navTo("viewPartList");
      },
      uploadParameter: function () {
        this.getRouter().navTo("uploadParameter");
      },
      onUploadSection1: function () {
        this.getRouter().navTo("uploadParameterSection1");
      },
      onUploadSection2: function () {
        this.getRouter().navTo("uploadParameterSection2");
      },
      handlePopoverPress: function (oEvent) {
        var oButton = oEvent.getSource(),
          oView = this.getView();

        // create popover
        if (!this._pPopover) {
          this._pPopover = Fragment.load({
            id: oView.getId(),
            name: "misp.maruti.view.Popover",
            controller: this,
          }).then(function (oPopover) {
            oView.addDependent(oPopover);
            oPopover.bindElement("/ProductCollection/0");
            return oPopover;
          });
        }
        this._pPopover.then(function (oPopover) {
          oPopover.openBy(oButton);
        });
      },

      onCriteriaChange: function (oEvent) {
        this.sInputObject = oEvent.getSource();
      },

      onButtonPress: function (oEvent) {
        var sButtonText = oEvent.getSource().getText();
        debugger;
        var sInputString = this.sInputObject.getValue();
        sInputString = sInputString + sButtonText;
        this.sInputObject.setValue(sInputString);
        this.byId("myPopover1").close();
      },
    });
  }
);
