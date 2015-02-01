// models/log

define([
	'underscore',
	'backbone'
], function(_, Backbone){
	// Model stuff
	var LogModel = Backbone.Model.extend({
		defaults: {
			text: ''
		}
	});

	// return self
	return LogModel;
});
