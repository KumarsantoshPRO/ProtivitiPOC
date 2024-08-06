sap.ui.define(
  [
    "./BaseController",
    "sap/ui/Device",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Popover",
    "sap/m/Button",
    "sap/m/library"
  ],
  function (BaseController, Device, Controller, JSONModel, Popover, Button, library) {
    "use strict";

    var ButtonType = library.ButtonType,
      PlacementType = library.PlacementType;

    return BaseController.extend("misp.maruti.controller.App", {
      onInit: function () {
        // debugger;
      },
      onItemSelect: function (oEvent) {
        var sKey = oEvent.getParameter('item').getKey();
       
        // if (sKey === 'Sales') {
        // Render the three buttons dynamically
        // this._renderSalesSubheader();
        // }
        this.getRouter().navTo(sKey);
      },








      onSideNavButtonPress: function () {
        var oToolPage = this.byId("toolPage");
        var bSideExpanded = oToolPage.getSideExpanded();

        this._setToggleButtonTooltip(bSideExpanded);

        oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
      },

      _setToggleButtonTooltip: function (bLarge) {
        var oToggleButton = this.byId('sideNavigationToggleButton');
        if (bLarge) {
          oToggleButton.setTooltip('Large Size Navigation');
        } else {
          oToggleButton.setTooltip('Small Size Navigation');
        }
      }
    });
  }
);
