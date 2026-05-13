sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.lipton.pricevalidation.controller.App", {
        /**
         * Initialises the App controller by attaching a route pattern match handler
         * that keeps the side navigation selection in sync with the active route.
         * @memberof com.lipton.pricevalidation.controller.App
         * @public
         */
        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView1").attachPatternMatched(() => {
                this.byId("sideNavigation").setSelectedItem(this.byId("blockedOrdersItem"));
            }, this);
        },

        /**
         * Toggles the side navigation panel between expanded and collapsed states.
         * @memberof com.lipton.pricevalidation.controller.App
         * @public
         */
        onMenuButtonPress() {
            const oToolPage = this.byId("toolPage");
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },

        /**
         * Handles side navigation item selection and routes to the corresponding view.
         * @memberof com.lipton.pricevalidation.controller.App
         * @public
         * @param {sap.ui.base.Event} oEvent - The select event from the SideNavigation control
         */
        onNavigationItemSelect(oEvent) {
            const sKey = oEvent.getParameter("item").getKey();
            if (sKey === "BlockedOrders") {
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            }
        }
    });
});
