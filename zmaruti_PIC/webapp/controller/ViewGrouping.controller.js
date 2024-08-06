sap.ui.define(
  [
    "./BaseController",
    "sap/ui/Device",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent",
    "sap/m/Popover",
    "sap/m/Button",
    "sap/m/library",
  ],
  function (BaseController, Device, Controller, JSONModel, Popover, Button, library) {
    "use strict";

    return BaseController.extend("com.zmarutipic.controller.App", {
      onInit: function () {
        var sampleData = [
          
          {
            "selected":false,
            "ControlNumber":"MISP00001",
            "PartCategory":"Brake Pipe",
            "NoofParts":"4",
            "Model":"Bundy India Ltd",
           
          },
          {
            "selected":false,
            "ControlNumber":"MISP00011",
            "PartCategory":"Brake Pipe",
            "NoofParts":"5",
            "Model":"Bundy India Ltd",
           
          },
          {
            "selected":false,
            "ControlNumber":"MISP00012",
            "PartCategory":"Brake Pipe",
            "NoofParts":"8",
            "Model":"Bundy India Ltd",
           
          }
          
        ];
        var oModel = new JSONModel(sampleData);
        this.getView().setModel(oModel, "GroupingSelectionData");

        var sampleData1 = [
          
          {
            
            "PartNumber":"51480-80T00",
            "PartName":"PIPE,BODY HOSE TO RR BK HOSE,L",
            "DrawingNo":"51480-80T00",
            "RevNo":"1",
            "Model":"YWD",
            "ECNNo":"62S-3478",
            "Remarks":"NO ECN post SOP",
            "select":false

           
          },
          {
            
            "PartNumber":"51480-80T00",
            "PartName":"PIPE,BODY HOSE TO RR BK HOSE,L",
            "DrawingNo":"51480-80T00",
            "RevNo":"1",
            "Model":"YWD",
            "ECNNo":"62S-3478",
            "Remarks":"NO ECN post SOP",
            "select":false

           
          },
          {
            
            "PartNumber":"51480-80T00",
            "PartName":"PIPE,BODY HOSE TO RR BK HOSE,L",
            "DrawingNo":"51480-80T00",
            "RevNo":"1",
            "Model":"YWD",
            "ECNNo":"62S-3478",
            "Remarks":"NO ECN post SOP",
            "select":false

           
          },
          {
            
            "PartNumber":"51480-80T00",
            "PartName":"PIPE,BODY HOSE TO RR BK HOSE,L",
            "DrawingNo":"51480-80T00",
            "RevNo":"1",
            "Model":"YWD",
            "ECNNo":"62S-3478",
            "Remarks":"NO ECN post SOP",
            "select":false

           
          }
          
          
        ];
        var oModel = new JSONModel(sampleData1);
        this.getView().setModel(oModel, "GroupingSelectionData1");



        var sampleData2= [
          {
            "PartNo":"51480M8T20",
            "ChangeHistory":"New part no. Added",
            "ChangeDate":"25-Mar-2024",
            "ReasonForChange":"Part no. Changes due to ECN in part, ECN no.xxx"

          },
          {
            "PartNo":"51480M8T20",
            "ChangeHistory":"Old part no. removed",
            "ChangeDate":"25-Mar-2024",
            "ReasonForChange":" ECN in part, ECN no.xxx"
            
          },
          {
            "PartNo":"51480M8T30",
            "ChangeHistory":"New part no. Added",
            "ChangeDate":"25-Mar-2024",
            "ReasonForChange":"New Model Addition"
            
          }
        ];
        var oModel = new JSONModel(sampleData2);
        this.getView().setModel(oModel, "GroupingSelectionData2");


      },

      onItemSelect: function (oEvent) {
        var sKey = oEvent.getParameter("item").getKey();
        // debugger;
        // if (sKey === 'Sales') {
        // Render the three buttons dynamically
        // this._renderSalesSubheader();
        // }
        this.getRouter().navTo(sKey);

        this.onSideNavButtonPress();
      },
      onViewPartList: function () {
        var sKey = "viewgrouping_viewpartlist";
        // debugger;
        // if (sKey === 'Sales') {
        // Render the three buttons dynamically
        // this._renderSalesSubheader();
        // }
        this.getRouter().navTo(sKey);

        this.onSideNavButtonPress();
      },
      onEditPartList: function () {
        var sKey = "viewgrouping_editpartlist";
        // debugger;
        // if (sKey === 'Sales') {
        // Render the three buttons dynamically
        // this._renderSalesSubheader();
        // }
        this.getRouter().navTo(sKey);

        this.onSideNavButtonPress();
      },
     

       
      
      onNavBack: function () {
        var sKey = "viewgrouping";
        this.getRouter().navTo(sKey);

       
      },
      onChangeHistory:function(){
        var sKey = "viewgrouping_changehistory";
        this.getRouter().navTo(sKey);
        this.onSideNavButtonPress();
       
      },

      onSideNavButtonPress: function () {
        var oToolPage = this.byId("toolPage");
        var bSideExpanded = oToolPage.getSideExpanded();

        this._setToggleButtonTooltip(bSideExpanded);

        oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
      },

      _setToggleButtonTooltip: function (bLarge) {
        var oToggleButton = this.byId("sideNavigationToggleButton");
        if (bLarge) {
          oToggleButton.setTooltip("Large Size Navigation");
        } else {
          oToggleButton.setTooltip("Small Size Navigation");
        }
      },
     
   

     
    });
  }
);
