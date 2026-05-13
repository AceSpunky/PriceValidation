sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.lipton.pricevalidation.controller.App", {
        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView1").attachPatternMatched(() => {
                this.byId("sideNavigation").setSelectedItem(this.byId("blockedOrdersItem"));
            }, this);
        },

        onMenuButtonPress() {
            const oToolPage = this.byId("toolPage");
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },

        onNavigationItemSelect(oEvent) {
            const sKey = oEvent.getParameter("item").getKey();
            if (sKey === "BlockedOrders") {
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            }
        }
    });
});
