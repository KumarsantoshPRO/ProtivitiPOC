sap.ui.define(
    [
      "./BaseController",
      "sap/ui/Device",
"sap/ui/core/mvc/Controller",
"sap/m/MessageBox",
"sap/m/MessageToast",
"sap/ui/model/json/JSONModel",
"sap/m/Popover",
"sap/m/Button",
"sap/m/library"
    ],
    function(BaseController,Device, MessageBox, MessageToast, Controller, JSONModel, Popover, Button, library) {
      "use strict";
  
      return BaseController.extend("com.zmaruti.controller.App", {
         onInit: function () {
          // this.getRouter().navTo("uploadpartlist");
          var sampleData = [
            
            
              {
                  "PartNo": "51480-80T00",
                  "PartName": "PIPE,BODY HOSE TO RR BK HOSE",
                  "PartCategory": "A",
                  "PartFamily": "Hose Pipe",
                  "Model": "Y17",
                  "Engine": "NA",
                  "VendorCode": "B256",
                  "VendorName": "Bundy India Ltd",
                  "Department": "QAPQ-M1",
                  "UserId": "45679",
                  "ManagerName": "Shankar",
                  "OtherEngine": "NA",
                  "BatchAvailability": "Y",
                  "Remarks": "No ECN post SOP"
              },
              {
                  "PartNo": "51440-80T00",
                  "PartName": "PIPE,HU TO FR BK",
                  "PartCategory": "A",
                  "PartFamily": "Pipe Hose",
                  "Model": "YWD",
                  "Engine": "NA",
                  "VendorCode": "S324",
                  "VendorName": "Shijva Ltd",
                  "Department": "QAPQ-M2",
                  "UserId": "90890",
                  "ManagerName": "johny",
                  "OtherEngine": "NA",
                  "BatchAvailability": "N",
                  "Remarks": "NA"
              },
              {
                  "PartNo": "51430-80T00",
                  "PartName": "HOSE,L PIPE,HU TO FR BK",
                 "PartCategory" : "B",
                  "PartFamily": "Pipe Brake",
                  "Model": "Y1k",
                  "Engine": "NA",
                  "VendorCode": "M897",
                  "VendorName": "Mogso PVT LTD",
                  "Department": "QAPQ-M1",
                  "UserId": "98908",
                  "ManagerName": "islam",
                  "OtherEngine": "NA",
                  "BatchAvailability": "Y",
                  "Remarks": "Damage on Pipe"
              },
              {
                  "PartNo": "51430-80T10",
                  "PartName": "HOSE,R PIPE,HU TO FR BK",
                  "PartCategory": "A",
                  "PartFamily": "Pipe Hose",
                  "Model": "YNS",
                  "Engine": "NA",
                  "VendorCode": "J785",
                  "VendorName": "Jacks and Co.",
                  "Department": "QAPU-S1",
                  "UserId": "90898",
                  "ManagerName": "Shivan",
                  "OtherEngine": "NA",
                  "BatchAvailability": "Y",
                  "Remarks": "No SOP "
              },
              {
                  "PartNo": "51410-80T10",
                  "PartName": "HOSE,R",
                  "PartCategory": "A",
                  "PartFamily": "Hose",
                  "Model": "Y45",
                  "Engine": "NA",
                  "VendorCode": "B256",
                  "VendorName": "Bundy India Ltd",
                  "Department": "QAPQ-M1",
                  "UserId": "54637",
                  "ManagerName": "Kavya",
                  "OtherEngine": "NA",
                  "BatchAvailability": "Y",
                  "Remarks": "No SOP"
              }
          
        ];
        var oModel = new JSONModel(sampleData);
        this.getView().setModel(oModel, "excelData");
        // this.getCall();
        
        
        },
        getCall:function(){
          var sPath = "/Part_list_headerSet"
          var serviceURL = "/sap/opu/odata/sap/ZMARUTI_SUZUKI_INDIA_SRV/"
          var oODataModel = new sap.ui.model.odata.v2.ODataModel(serviceURL);
          var oUser = new sap.ushell.services.UserInfo();
          var aFilters = [];
          aFilters.push(new sap.ui.model.Filter([new sap.ui.model.Filter("UserId", sap.ui.model.FilterOperator.EQ, "ABAP1")], false));
          var getModel = this.getView().getModel("excelData");
          oODataModel.read(sPath ,{
            filters: aFilters,
            success: function (oData, response) {
                  console.log(oData.results);
                  getModel.setData(oData.results);

            },
            error: function (sError) {
              console.log(sError);
            }
          })
  
        },
        onItemSelect: function(oEvent){
            var sKey = oEvent.getParameter('item').getKey();
           
            this.getRouter().navTo(sKey);

            this.onSideNavButtonPress();
          },
          onAddPress: function () {
            var oModel = this.getView().getModel("excelData");
            var data = oModel.getData();

            // Add a new empty row
            data.push({
              
              "PartNo" :"",  
              "PartName"  : "",
"PartCategory" : "", 
"PartFamily" :"",
"Model" :"",
"Engine" : "",
"VendorCode" : "",
"VendorName" : "",
"Department" : "",
"UserId" : "",
"ManagerName" : "",
"OtherEngine" : "",
"BatchAvailability" : "",
"Remarks" :""
            });

            oModel.setData(data);
        },
        onDeletePress: function () {
          var oModel = this.getView().getModel("excelData");
          var data = oModel.getData();

          // Filter out the selected rows
          var updatedData = data.filter(function (item) {
              return !item.selected;
          });

          oModel.setData(updatedData);
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
          },
          handleUploadFile: function (e) {
            // this.getView().setBusy(true);
            var data = e.getParameter("files");
            this._import(data && data[0]);
            // e.setParameter("files", null);
          },
          _import: function (file) {
            var that = this;
            var availableData = this.getView().getModel("excelData");
            var excelData = {};
            if (file && window.FileReader) {
              var reader = new FileReader();
              reader.onload = function (e) {
                const data = e.target.result;
                const workbook = XLSX.read(data, {
                  type: "binary",
                });
                workbook.SheetNames.forEach((sheetName) => {
                  excelData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                  // that.uploadExcelDataToServer(excelData);
                   var newEntryArr = that.getFormattedDataToUpload(excelData);
                   availableData.setData(newEntryArr);
                  
                });
              };
              reader.onerror = function (ex) {
                console.log(ex);
              };
              reader.readAsBinaryString(file);
            } else {
              this.getView().setBusy(false);
            }
          },
          getFormattedDataToUpload: function (excelDataArr) {
            var newOrderArr = this.getView().getModel("excelData").getData();
            for (var i = 0; i < excelDataArr.length; i++) {
              var newObj = {
                "PartNo": excelDataArr[i].PartCode,
                "PartName": excelDataArr[i].PartName,
                "PartCategory": excelDataArr[i].PartCategory,
                "PartFamily": excelDataArr[i].PartFamily,
                "Model": excelDataArr[i].Model,
                "Engine": excelDataArr[i].Engine,
                "VendorCode": excelDataArr[i].VendorCode,
                "VendorName":excelDataArr[i].VendorName,
                "Department":  excelDataArr[i].Department,
                "UserId": excelDataArr[i].PICUserId,
                "ManagerName": excelDataArr[i].Sectionmgrid,
                "OtherEngine": excelDataArr[i].OtherapplicableModel,
                "BatchAvailability":excelDataArr[i].BatchCodeAvailability,
                "Remarks": excelDataArr[i].Remarks,
              }
              newOrderArr.push(newObj);
            }
            
            return newOrderArr;
             
              
          },

          
          onSendData: function () {
           debugger;
           var payload = this.getModel("excelData").getData();
            // var payload = {
            //   "PartNo" : "0001",
            //   "PartName"  : "ABCD",
            //   "PartCategory" : "EXPOR",
            //   "PartFamily" : "ENGINE",
            //   "Model" : "V5",
            //   "Engine" : "DIESEL",
            //   "VendorCode" : "1034",
            //   "VendorName" : "AKASH ENTERPRISE",
            //   "Department" : "GLASS",
            //   "UserId" : "ABAP",
            //   "ManagerName" : "ABCD",
            //   "OtherEngine" : "PETROL",
            //   "BatchAvailability" : "YES",
            //   "Remarks" : "GOOD"
            //   };
            var sPath = "/Part_list_headerSet"
            var serviceURL = "/sap/opu/odata/sap/ZMARUTI_SUZUKI_INDIA_SRV/"
            var oODataModel = new sap.ui.model.odata.v2.ODataModel(serviceURL);
         
            oODataModel.create(sPath, payload, {
              success: function (oData, response) {
                MessageBox.success("Data has been successfully saved!");

              },
              error: function (sError) {
     
              }
            })
     
          }
      });
    }
  );
  