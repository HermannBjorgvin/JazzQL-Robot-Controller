// views/log/list.js

define([
	'jquery',
	'handlebars',
	'underscore',
	'backbone',
	'moment',
	'collections/log',
	// Using the Require.js text! plugin to load the view template as text
	'text!templates/log/listItem.html',
	'sailsIo'
], function($, Handlebars, _, Backbone, moment, LogCollection, logListTemplate){

	var LogListView = Backbone.View.extend({
		el: $('#robot-log'),
		initialize: function(data){

			var self = this;
			var logs = [];

			this.collection = new LogCollection();
			this.collection.fetch({
				add: true,
				success: function(collection, response){
					logs = response;
				}
			});

			// On sync render view after initial fetch()
			this.collection.on('sync', function(){

				_.sortBy(logs, function(obj) { return obj.createdAt; });
				logs.reverse(); // so it shows up in the right order

				_.each(logs, function(log){
					pushNewLog(log);
				});
			});

			// PubSub for logs over socket
			var socket = io.connect('http://localhost:1337');

			socket.on('connect', function(){
				console.log('Log socket connected');

				socket.get('/log/?limit=5&sort=createdAt DESC', function(log){
					// console.log(log);
				});

				socket.on('log', function(log){
					pushNewLog(log.data);
				});
			});

			// Create an element for one log, with animations
			function pushNewLog(log){
				
				//format time with moment
				var formatedTime = moment(log.createdAt);
				formatedTime = formatedTime.format('HH:mm');

				log.formatedTime = formatedTime;

				// Handlebars compiler
				var source = logListTemplate;
				var template = Handlebars.compile(source);

				var html = template(log);

				// Prepend to div
				var container = self.$el;

				container.prepend(html);

				// Animation and removal of too many items
				container.children('.new-log').hide();
				container.children('.new-log').slideDown(400);
				container.children('.new-log').removeClass('new-log');

				if (container.children().length > 5) {
					container.children('li:last-child').remove();
				};
			}
		}
	});

	// return self
	return LogListView;
});
