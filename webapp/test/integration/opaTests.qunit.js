/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/lipton/pricevalidation/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
