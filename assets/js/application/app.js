// app

define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'views/log/list',
	'views/battery/status'
], function($, _, Backbone, Router, LogListView, BatteryStatusView){
	var initialize = function(){

		// Initialize stuff like router here
		Router.initialize();

		// Message log view
		var logView = new LogListView();

		// Battery status view
		var batteryView = new BatteryStatusView();

	};

	return {
		initialize: initialize
	};
});
