// app

define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'views/log/list',
	'views/battery/status',
	'views/keyboard/keyboard'
], function($, _, Backbone, Router, LogListView, BatteryStatusView, KeyboardView){
	var initialize = function(){

		// Initialize stuff like router here
		Router.initialize();

		// Message log view
		var logView = new LogListView();

		// Battery status view
		var batteryView = new BatteryStatusView();

		// Keyboard status view
		var keyboardView = new KeyboardView();

	};

	return {
		initialize: initialize
	};
});
