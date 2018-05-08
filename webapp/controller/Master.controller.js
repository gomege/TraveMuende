sap.ui.define([
		"sapui5/demo/odata/readingdata/bestpractice/controller/BaseController",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	], function (BaseController, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("sapui5.demo.odata.readingdata.bestpractice.controller.Master", {

		/* =========================================================== */
		/*  methods from Book                                          */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */

	onFilterProducts: function(oEvent){
		var aFilter 	= [];
		var sQuery		= oEvent.getParameter("query");
		if (sQuery){
			aFilter.push(new Filter(
				"ProductName", FilterOperator.Contains, sQuery));
		}
		
		var oList = this.getView().byId("productList");
		var oBinding = oList.getBinding("items");
		oBinding.filter(aFilter);
		
	},


		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit : function () {
            // nothing to do at the moment
		}
	});

});