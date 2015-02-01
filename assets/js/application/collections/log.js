// collections/log

define([
	'underscore',
	'backbone',

	// pull in the log model
	'models/log'
], function(_, Backbone, LogModel){

	var LogCollection = Backbone.Collection.extend({
		model: LogModel,
		url: '/log/?limit=5&sort=createdAt DESC'
	});

	// You dont usually return a collection instantiated -- idk what this comment means but it was in the tutorial
	return LogCollection;
});
