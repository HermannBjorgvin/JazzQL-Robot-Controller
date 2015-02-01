// collections/statuses

define([
	'underscore',
	'backbone',
	'models/statuses'
], function(_, Backbone, StatusesModel){
	var StatusesCollection = Backbone.Collection.extend({
		model: StatusesModel,
		url: '/statuses'
	});

	// Return collection
	return StatusesCollection;
});
