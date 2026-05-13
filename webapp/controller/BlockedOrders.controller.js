sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], (Controller, JSONModel, MessageToast, Fragment) => {
    "use strict";

    return Controller.extend("com.lipton.pricevalidation.controller.BlockedOrders", {

        onInit() {
            const oData = {
                summary: {
                    subtitle: "6 orders — pending price acceptance"
                },
                filteredCount: 6,
                totalCount: 6,
                orders: [
                    {
                        id: "277265",
                        customerId: "10004952",
                        customer: "IMTIAZ GROUP (SMC-PRIVATE) LIMITED",
                        creationDate: "01.01.2026",
                        pricingDate: "01.01.2026",
                        reqDeliveryDate: "20.01.2026",
                        itemsCount: 3,
                        expanded: true,
                        items: [
                            {
                                itemNo: "10",
                                materialId: "6979338",
                                material: "LIPTON ICE TEA DISPLAY 1-3 350CU",
                                qty: 1008,
                                unit: "CU",
                                lineValueSap: "10,020 EUR",
                                unitPriceSap: "",
                                custExpectedUnitPrice: "10,000 EUR",
                                custExpectedValuePerItem: "",
                                difference: "20 EUR",
                                comment: "",
                                status: "pending"
                            },
                            {
                                itemNo: "20",
                                materialId: "6979340",
                                material: "LIPTON BLK VANILLA CARAMEL 20 PYTx12 WE",
                                qty: 100,
                                unit: "CU",
                                lineValueSap: "230 EUR",
                                unitPriceSap: "",
                                custExpectedUnitPrice: "200 EUR",
                                custExpectedValuePerItem: "",
                                difference: "30 EUR",
                                comment: "",
                                status: "pending"
                            },
                            {
                                itemNo: "30",
                                materialId: "6979342",
                                material: "LIPTON VERBENA 100CSEx12 EU FS",
                                qty: 54,
                                unit: "CU",
                                lineValueSap: "155 EUR",
                                unitPriceSap: "",
                                custExpectedUnitPrice: "150 EUR",
                                custExpectedValuePerItem: "",
                                difference: "5 EUR",
                                comment: "",
                                status: "pending"
                            }
                        ]
                    },
                    {
                        id: "287802",
                        customerId: "10005257",
                        customer: "PLANET COLORS GENERAL TRADING LLC",
                        creationDate: "04.01.2026",
                        pricingDate: "04.01.2026",
                        reqDeliveryDate: "20.01.2026",
                        itemsCount: 2,
                        expanded: false,
                        items: [
                            {
                                itemNo: "10",
                                materialId: "6979138",
                                material: "PUK ORG LGTMH FFL FW 4X20 PENT P",
                                qty: 38,
                                unit: "CU",
                                lineValueSap: "",
                                unitPriceSap: "2.3 EUR",
                                custExpectedUnitPrice: "2 EUR",
                                custExpectedValuePerItem: "10.2 EUR",
                                difference: "11.4 EUR",
                                comment: "",
                                status: "pending"
                            },
                            {
                                itemNo: "20",
                                materialId: "6979255",
                                material: "LIPTON YELLOW LBL 25 CSEX12 EU 26",
                                qty: 40,
                                unit: "CU",
                                lineValueSap: "",
                                unitPriceSap: "3.6 EUR",
                                custExpectedUnitPrice: "3.5 EUR",
                                custExpectedValuePerItem: "",
                                difference: "4 EUR",
                                comment: "",
                                status: "pending"
                            }
                        ]
                    },
                    {
                        id: "423892",
                        customerId: "10000360",
                        customer: "Tesco PLF",
                        creationDate: "06.01.2026",
                        pricingDate: "06.01.2026",
                        reqDeliveryDate: "20.01.2026",
                        itemsCount: 1,
                        expanded: false,
                        items: [
                            {
                                itemNo: "10",
                                materialId: "6979934",
                                material: "PUK ORG English Breakfast FFL 4x20C NOR",
                                qty: 1008,
                                unit: "CU",
                                lineValueSap: "",
                                unitPriceSap: "2.2 EUR",
                                custExpectedUnitPrice: "1.8 EUR",
                                custExpectedValuePerItem: "403.2 EUR",
                                difference: "403.2 EUR",
                                comment: "",
                                status: "pending"
                            }
                        ]
                    },
                    {
                        id: "423893",
                        customerId: "10000360",
                        customer: "Tesco PGL",
                        creationDate: "07.01.2026",
                        pricingDate: "07.01.2026",
                        reqDeliveryDate: "20.01.2026",
                        itemsCount: 1,
                        expanded: false,
                        items: [
                            {
                                itemNo: "10",
                                materialId: "6979398",
                                material: "LIPTON EARL GREY 6 25CSEX6 EU_FS",
                                qty: 100,
                                unit: "CU",
                                lineValueSap: "560 EUR",
                                unitPriceSap: "",
                                custExpectedUnitPrice: "550 EUR",
                                custExpectedValuePerItem: "",
                                difference: "10 EUR",
                                comment: "",
                                status: "pending"
                            }
                        ]
                    },
                    {
                        id: "250663",
                        customerId: "10000360",
                        customer: "Tesco PLF",
                        creationDate: "08.01.2026",
                        pricingDate: "08.01.2026",
                        reqDeliveryDate: "20.01.2026",
                        itemsCount: 2,
                        expanded: false,
                        items: [
                            {
                                itemNo: "10",
                                materialId: "6999331",
                                material: "LIPTON STRAWBERRY 25CSEX6 EU_FS",
                                qty: 54,
                                unit: "CU",
                                lineValueSap: "410 EUR",
                                unitPriceSap: "",
                                custExpectedUnitPrice: "400 EUR",
                                custExpectedValuePerItem: "",
                                difference: "10 EUR",
                                comment: "",
                                status: "pending"
                            },
                            {
                                itemNo: "20",
                                materialId: "6999319",
                                material: "LIPTON BLACK CURRANT 25CSEX6 EU_FS",
                                qty: 38,
                                unit: "CU",
                                lineValueSap: "150 EUR",
                                unitPriceSap: "",
                                custExpectedUnitPrice: "140 EUR",
                                custExpectedValuePerItem: "",
                                difference: "10 EUR",
                                comment: "",
                                status: "pending"
                            }
                        ]
                    },
                    {
                        id: "423897",
                        customerId: "10004952",
                        customer: "IMTIAZ GROUP (SMC-PRIVATE) LIMITED",
                        creationDate: "10.01.2026",
                        pricingDate: "10.01.2026",
                        reqDeliveryDate: "20.01.2026",
                        itemsCount: 3,
                        expanded: false,
                        items: [
                            {
                                itemNo: "10",
                                materialId: "6949334",
                                material: "LIPTON VP TOPSELLER 180CSEX1 FS EU",
                                qty: 40,
                                unit: "CU",
                                lineValueSap: "180 EUR",
                                unitPriceSap: "",
                                custExpectedUnitPrice: "175 EUR",
                                custExpectedValuePerItem: "",
                                difference: "5 EUR",
                                comment: "",
                                status: "pending"
                            },
                            {
                                itemNo: "20",
                                materialId: "6939438",
                                material: "LIPTON ICETEA INF MINTLIME 10PYTx4 NE",
                                qty: 100,
                                unit: "CU",
                                lineValueSap: "265 EUR",
                                unitPriceSap: "",
                                custExpectedUnitPrice: "250 EUR",
                                custExpectedValuePerItem: "",
                                difference: "15 EUR",
                                comment: "",
                                status: "pending"
                            },
                            {
                                itemNo: "30",
                                materialId: "6979338",
                                material: "LIPTON ICE TEA DISPLAY 1-3 350CU",
                                qty: 54,
                                unit: "CU",
                                lineValueSap: "",
                                unitPriceSap: "2.44 EUR",
                                custExpectedUnitPrice: "2.3 EUR",
                                custExpectedValuePerItem: "0.14 EUR",
                                difference: "7.56 EUR",
                                comment: "",
                                status: "pending"
                            }
                        ]
                    }
                ]
            };

            // Store all orders for search reset
            oData.allOrders = JSON.parse(JSON.stringify(oData.orders));

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "orders");
        },

        onRefresh() {
            MessageToast.show("Refreshing blocked orders...");
        },

        onSearch(oEvent) {
            const sQuery = (oEvent.getParameter("query") || oEvent.getParameter("newValue") || "").toLowerCase().trim();
            const oModel = this.getView().getModel("orders");
            const aAll = oModel.getProperty("/allOrders");

            const aFiltered = sQuery
                ? aAll.filter(o =>
                    o.id.toLowerCase().includes(sQuery) ||
                    o.customer.toLowerCase().includes(sQuery) ||
                    o.customerId.toLowerCase().includes(sQuery))
                : aAll;

            oModel.setProperty("/orders", aFiltered);
            oModel.setProperty("/filteredCount", aFiltered.length);
        },

        onAcceptAllKAM() {
            MessageToast.show("Accepted KAM prices for all orders");
        },

        onAcceptAllSAP() {
            MessageToast.show("Accepted SAP prices for all orders");
        },

        onOrderAcceptAllKAM(oEvent) {
            const sId = oEvent.getSource().getBindingContext("orders").getProperty("id");
            MessageToast.show("All KAM prices accepted for order " + sId);
        },

        onOrderAcceptAllSAP(oEvent) {
            const sId = oEvent.getSource().getBindingContext("orders").getProperty("id");
            MessageToast.show("All SAP prices accepted for order " + sId);
        },

        onItemAcceptKAM(oEvent) {
            const oCtx = oEvent.getSource().getBindingContext("orders");
            MessageToast.show("KAM price accepted for item " + oCtx.getProperty("itemNo"));
        },

        onItemAcceptTPM(oEvent) {
            const oCtx = oEvent.getSource().getBindingContext("orders");
            MessageToast.show("TPM price accepted for item " + oCtx.getProperty("itemNo"));
        },

        onItemAcceptSAP(oEvent) {
            const oCtx = oEvent.getSource().getBindingContext("orders");
            MessageToast.show("SAP price accepted for item " + oCtx.getProperty("itemNo"));
        },

        onAddComment(oEvent) {
            const oCtx = oEvent.getSource().getBindingContext("orders");
            this._sCommentPath = oCtx.getPath();
            const oItem = oCtx.getObject();

            const oCommentModel = new JSONModel({
                title: (oItem.comment ? "Edit" : "Add") + " Comment — Item # " + oItem.itemNo,
                itemLabel: oItem.material + " (" + oItem.materialId + ")",
                text: oItem.comment || ""
            });
            this.getView().setModel(oCommentModel, "comment");

            if (!this._oCommentDialog) {
                Fragment.load({
                    id: this.getView().getId(),
                    name: "com.lipton.pricevalidation.view.fragment.CommentDialog",
                    controller: this
                }).then((oDialog) => {
                    this._oCommentDialog = oDialog;
                    this.getView().addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                this._oCommentDialog.open();
            }
        },

        onCommentSave() {
            const sText = this.getView().getModel("comment").getProperty("/text").trim();
            this.getView().getModel("orders").setProperty(this._sCommentPath + "/comment", sText || "");
            this._oCommentDialog.close();
            MessageToast.show("Comment saved");
        },

        onCommentCancel() {
            this._oCommentDialog.close();
        }
    });
});
