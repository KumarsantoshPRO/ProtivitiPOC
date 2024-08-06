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

        this.getRouter().navTo("selectparts");

        var sampleData = [
          
          {
            "selected": false,
            "PartNumber": "51480-80T00",
            "RevNo": "1",
            "PartName": "PIPE,BODY TO RR BK HOSE,L",
            "VendorCode": "B256",
            "VendorName": "Bundy India Ltd",
            "PICId": "MARUTIPIC",
            "PICName": "Maruti",
            "DepttCode": "QAPQ-M1",
            "ModelId": "YWD",
            "OtherApplicableModel": "NA",
            "Remarks": "Yes"
           
          },
          {
            "selected": false,
            "PartNumber": "51440-80T00",
            "RevNo": "2",
            "PartName": "PIPE,HU TO FR BK HOSE,L",
            "VendorCode": "B256",
            "VendorName": "Bundy India Ltd",
            "PICId": "MARUTIPIC",
            "PICName": "Maruti",
            "DepttCode": "QAPQ-M1",
            "ModelId": "YWD",
            "OtherApplicableModel": "NA",
            "Remarks": "No"
           
          },
          {
            "selected": false,
            "PartNumber": "51430-80T00",
            "RevNo": "1",
            "PartName": "PIPE,BODY TO RR BK HOSE,L",
            "VendorCode": "B256",
            "VendorName": "Bundy India Ltd",
            "PICId": "MARUTIPIC",
            "PICName": "Maruti",
            "DepttCode": "QAPQ-M1",
            "ModelId": "YWD",
            "OtherApplicableModel": "NA",
            "Remarks": "It is Damage"
           
          },
          {
            "selected": false,
            "PartNumber": "51410-80T00",
            "RevNo": "1",
            "PartName": "PIPE,BODY TO RR BK HOSE,L",
            "VendorCode": "B256",
            "VendorName": "Bundy India Ltd",
            "PICId": "MARUTIPIC",
            "PICName": "Maruti",
            "DepttCode": "QAPQ-M1",
            "ModelId": "YWD",
            "OtherApplicableModel": "NA",
            "Remarks": "ok"
          },
          {
            "selected": false,
            "PartNumber": "51430-80T00",
            "RevNo": "1",
            "PartName": "PIPE,BODY TO RR BK HOSE,L",
            "VendorCode": "B256",
            "VendorName": "Bundy India Ltd",
            "PICId": "MARUTIPIC",
            "PICName": "Maruti",
            "DepttCode": "QAPQ-M1",
            "ModelId": "YWD",
            "OtherApplicableModel": "NA",
            "Remarks": "no"
           
          }
        ];
        var oModel = new JSONModel(sampleData);
        this.getView().setModel(oModel, "PICData");
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
      }
  
    });
  }
);
