// models/statuses

define(['underscore', 'backbone'], function(_, Backbone){
	var StatusesModel = Backbone.Model.extend({
		urlRoot: '/statuses'
	});

	// Return model
	return StatusesModel;
});
