// router

define([
	'jquery',
	'underscore',
	'backbone',
	'views/log/list'
], function($, _, Backbone, LogListView){

	// Route stuff here
	var AppRouter = Backbone.Router.extend({
		routes: {
			// some URL routes
			'*actions': 'defaultAction'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;

		app_router.on('route:defaultAction', function(actions){
			// Return log of no matching routes
		});

		// Start backbone history
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});