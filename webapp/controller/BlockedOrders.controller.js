sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], (Controller, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("com.lipton.pricevalidation.controller.BlockedOrders", {

        onInit() {
            const oData = {
                summary: {
                    subtitle: "8 orders — pending KAM / TPM price acceptance",
                    totalSapValue: "EUR 108,285.00",
                    totalKamValue: "EUR 95,175.00",
                    totalDifference: "EUR 13,110.00",
                    ordersPending: "8"
                },
                filteredCount: 8,
                totalCount: 8,
                orders: [
                    {
                        id: "4500001234",
                        company: "GB10",
                        date: "2026-04-18",
                        customer: "Tesco PLC",
                        customerId: "0010011001",
                        itemsPending: 3,
                        itemsTotal: 3,
                        sapValueStr: "EUR 14,200.00",
                        kamValueStr: "EUR 12,700.00",
                        differenceStr: "EUR 1,500.00",
                        teamNotified: true,
                        expanded: true,
                        items: [
                            {
                                itemNo: "000010",
                                material: "Iced Tea Lemon 500ml 24pk",
                                materialId: "MAT-10001",
                                qty: 500,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 12.50",
                                tpmPriceStr: "EUR 12.00",
                                diffStr: "EUR 1.50",
                                status: "Pending",
                                hasTpm: true
                            },
                            {
                                itemNo: "000020",
                                material: "Iced Tea Peach 500ml 24pk",
                                materialId: "MAT-10002",
                                qty: 300,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 12.50",
                                tpmPriceStr: "EUR 12.00",
                                diffStr: "EUR 1.50",
                                status: "Pending",
                                hasTpm: true
                            },
                            {
                                itemNo: "000030",
                                material: "Iced Tea Zero Sugar Lemon 500ml 24pk",
                                materialId: "MAT-10005",
                                qty: 200,
                                unit: "CS",
                                sapPriceStr: "EUR 15.00",
                                kamPriceStr: "EUR 13.50",
                                tpmPriceStr: "—",
                                diffStr: "EUR 1.50",
                                status: "Pending",
                                hasTpm: false
                            }
                        ]
                    },
                    {
                        id: "4500001235",
                        company: "GB10",
                        date: "2026-04-19",
                        customer: "Sainsbury's PLC",
                        customerId: "0010011002",
                        itemsPending: 2,
                        itemsTotal: 2,
                        sapValueStr: "EUR 8,500.00",
                        kamValueStr: "EUR 7,600.00",
                        differenceStr: "EUR 900.00",
                        teamNotified: true,
                        expanded: false,
                        items: [
                            {
                                itemNo: "000010",
                                material: "Iced Tea Lemon 500ml 24pk",
                                materialId: "MAT-10001",
                                qty: 300,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 12.50",
                                tpmPriceStr: "EUR 12.00",
                                diffStr: "EUR 1.50",
                                status: "Pending",
                                hasTpm: true
                            },
                            {
                                itemNo: "000020",
                                material: "Still Water 500ml 24pk",
                                materialId: "MAT-10020",
                                qty: 200,
                                unit: "CS",
                                sapPriceStr: "EUR 9.50",
                                kamPriceStr: "EUR 8.75",
                                tpmPriceStr: "—",
                                diffStr: "EUR 0.75",
                                status: "Pending",
                                hasTpm: false
                            }
                        ]
                    },
                    {
                        id: "4500001236",
                        company: "DE10",
                        date: "2026-04-20",
                        customer: "ASDA Ltd",
                        customerId: "0010011003",
                        itemsPending: 4,
                        itemsTotal: 4,
                        sapValueStr: "EUR 22,400.00",
                        kamValueStr: "EUR 19,800.00",
                        differenceStr: "EUR 2,600.00",
                        teamNotified: true,
                        expanded: false,
                        items: [
                            {
                                itemNo: "000010",
                                material: "Iced Tea Lemon 500ml 24pk",
                                materialId: "MAT-10001",
                                qty: 500,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 12.00",
                                tpmPriceStr: "EUR 11.50",
                                diffStr: "EUR 2.00",
                                status: "Pending",
                                hasTpm: true
                            },
                            {
                                itemNo: "000020",
                                material: "Iced Tea Peach 500ml 24pk",
                                materialId: "MAT-10002",
                                qty: 400,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 12.00",
                                tpmPriceStr: "EUR 11.50",
                                diffStr: "EUR 2.00",
                                status: "Pending",
                                hasTpm: true
                            },
                            {
                                itemNo: "000030",
                                material: "Iced Tea Mango 500ml 24pk",
                                materialId: "MAT-10006",
                                qty: 300,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 12.00",
                                tpmPriceStr: "—",
                                diffStr: "EUR 2.00",
                                status: "Pending",
                                hasTpm: false
                            },
                            {
                                itemNo: "000040",
                                material: "Iced Tea Raspberry 500ml 24pk",
                                materialId: "MAT-10007",
                                qty: 400,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 12.50",
                                tpmPriceStr: "EUR 12.00",
                                diffStr: "EUR 1.50",
                                status: "Pending",
                                hasTpm: true
                            }
                        ]
                    },
                    {
                        id: "4500001237",
                        company: "GB10",
                        date: "2026-04-21",
                        customer: "Morrisons PLC",
                        customerId: "0010011004",
                        itemsPending: 1,
                        itemsTotal: 1,
                        sapValueStr: "EUR 5,200.00",
                        kamValueStr: "EUR 4,700.00",
                        differenceStr: "EUR 500.00",
                        teamNotified: false,
                        expanded: false,
                        items: [
                            {
                                itemNo: "000010",
                                material: "Sparkling Lemon Water 500ml 24pk",
                                materialId: "MAT-10030",
                                qty: 400,
                                unit: "CS",
                                sapPriceStr: "EUR 13.00",
                                kamPriceStr: "EUR 11.75",
                                tpmPriceStr: "—",
                                diffStr: "EUR 1.25",
                                status: "Pending",
                                hasTpm: false
                            }
                        ]
                    },
                    {
                        id: "4500001238",
                        company: "GB10",
                        date: "2026-04-22",
                        customer: "Waitrose Ltd",
                        customerId: "0010011005",
                        itemsPending: 2,
                        itemsTotal: 2,
                        sapValueStr: "EUR 11,800.00",
                        kamValueStr: "EUR 10,500.00",
                        differenceStr: "EUR 1,300.00",
                        teamNotified: true,
                        expanded: false,
                        items: [
                            {
                                itemNo: "000010",
                                material: "Premium Iced Tea Lemon 750ml 12pk",
                                materialId: "MAT-10040",
                                qty: 600,
                                unit: "CS",
                                sapPriceStr: "EUR 11.50",
                                kamPriceStr: "EUR 10.20",
                                tpmPriceStr: "EUR 9.80",
                                diffStr: "EUR 1.30",
                                status: "Pending",
                                hasTpm: true
                            },
                            {
                                itemNo: "000020",
                                material: "Premium Iced Tea Peach 750ml 12pk",
                                materialId: "MAT-10041",
                                qty: 450,
                                unit: "CS",
                                sapPriceStr: "EUR 11.50",
                                kamPriceStr: "EUR 10.20",
                                tpmPriceStr: "—",
                                diffStr: "EUR 1.30",
                                status: "Pending",
                                hasTpm: false
                            }
                        ]
                    },
                    {
                        id: "4500001239",
                        company: "FR10",
                        date: "2026-04-23",
                        customer: "Co-op Food",
                        customerId: "0010011006",
                        itemsPending: 3,
                        itemsTotal: 3,
                        sapValueStr: "EUR 9,600.00",
                        kamValueStr: "EUR 8,800.00",
                        differenceStr: "EUR 800.00",
                        teamNotified: true,
                        expanded: false,
                        items: [
                            {
                                itemNo: "000010",
                                material: "Iced Tea Lemon 330ml 24pk",
                                materialId: "MAT-10050",
                                qty: 400,
                                unit: "CS",
                                sapPriceStr: "EUR 9.00",
                                kamPriceStr: "EUR 8.20",
                                tpmPriceStr: "EUR 8.00",
                                diffStr: "EUR 0.80",
                                status: "Pending",
                                hasTpm: true
                            },
                            {
                                itemNo: "000020",
                                material: "Iced Tea Peach 330ml 24pk",
                                materialId: "MAT-10051",
                                qty: 350,
                                unit: "CS",
                                sapPriceStr: "EUR 9.00",
                                kamPriceStr: "EUR 8.20",
                                tpmPriceStr: "—",
                                diffStr: "EUR 0.80",
                                status: "Pending",
                                hasTpm: false
                            },
                            {
                                itemNo: "000030",
                                material: "Iced Tea Green 330ml 24pk",
                                materialId: "MAT-10052",
                                qty: 300,
                                unit: "CS",
                                sapPriceStr: "EUR 9.00",
                                kamPriceStr: "EUR 8.20",
                                tpmPriceStr: "EUR 8.00",
                                diffStr: "EUR 0.80",
                                status: "Pending",
                                hasTpm: true
                            }
                        ]
                    },
                    {
                        id: "4500001240",
                        company: "DE10",
                        date: "2026-04-25",
                        customer: "Aldi UK",
                        customerId: "0010011007",
                        itemsPending: 2,
                        itemsTotal: 2,
                        sapValueStr: "EUR 18,985.00",
                        kamValueStr: "EUR 17,200.00",
                        differenceStr: "EUR 1,785.00",
                        teamNotified: true,
                        expanded: false,
                        items: [
                            {
                                itemNo: "000010",
                                material: "Iced Tea Lemon 500ml 24pk",
                                materialId: "MAT-10001",
                                qty: 700,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 12.75",
                                tpmPriceStr: "EUR 12.25",
                                diffStr: "EUR 1.25",
                                status: "Pending",
                                hasTpm: true
                            },
                            {
                                itemNo: "000020",
                                material: "Iced Tea Peach 500ml 24pk",
                                materialId: "MAT-10002",
                                qty: 585,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 12.50",
                                tpmPriceStr: "—",
                                diffStr: "EUR 1.50",
                                status: "Pending",
                                hasTpm: false
                            }
                        ]
                    },
                    {
                        id: "4500001241",
                        company: "GB10",
                        date: "2026-04-26",
                        customer: "Lidl GB",
                        customerId: "0010011008",
                        itemsPending: 3,
                        itemsTotal: 3,
                        sapValueStr: "EUR 17,600.00",
                        kamValueStr: "EUR 13,875.00",
                        differenceStr: "EUR 3,725.00",
                        teamNotified: false,
                        expanded: false,
                        items: [
                            {
                                itemNo: "000010",
                                material: "Iced Tea Lemon 500ml 24pk",
                                materialId: "MAT-10001",
                                qty: 600,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 10.50",
                                tpmPriceStr: "EUR 10.00",
                                diffStr: "EUR 3.50",
                                status: "Pending",
                                hasTpm: true
                            },
                            {
                                itemNo: "000020",
                                material: "Iced Tea Peach 500ml 24pk",
                                materialId: "MAT-10002",
                                qty: 450,
                                unit: "CS",
                                sapPriceStr: "EUR 14.00",
                                kamPriceStr: "EUR 10.50",
                                tpmPriceStr: "—",
                                diffStr: "EUR 3.50",
                                status: "Pending",
                                hasTpm: false
                            },
                            {
                                itemNo: "000030",
                                material: "Sparkling Water Lemon 500ml 24pk",
                                materialId: "MAT-10035",
                                qty: 350,
                                unit: "CS",
                                sapPriceStr: "EUR 9.50",
                                kamPriceStr: "EUR 8.50",
                                tpmPriceStr: "EUR 8.00",
                                diffStr: "EUR 1.00",
                                status: "Pending",
                                hasTpm: true
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

        onExpandOrder(oEvent) {
            const oCtx = oEvent.getSource().getBindingContext("orders");
            const sPath = oCtx.getPath();
            const oModel = this.getView().getModel("orders");
            oModel.setProperty(sPath + "/expanded", !oModel.getProperty(sPath + "/expanded"));
        },

        onOrderPress(oEvent) {
            const sId = oEvent.getSource().getBindingContext("orders").getProperty("id");
            MessageToast.show("Opening order " + sId);
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
        }
    });
});
