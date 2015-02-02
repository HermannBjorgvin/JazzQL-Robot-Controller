// views/battery/status

define([
	'jquery',
	'underscore',
	'handlebars',
	'backbone',
	'collections/statuses',
	'text!templates/battery/status.html',
	'sailsIo'
], function($, _, Handlebars, Backbone, StatusesCollection, batteryStatusTemplate){

	var BatteryStatusView = Backbone.View.extend({
		el: $('#status-battery'),
		initialize: function(){
			var self = this;
			var batteryLevel = 0;

			this.collection = new StatusesCollection();
			this.collection.fetch({
				add: true,
				data: $.param({
					limit: 1,
					sort: 'createdAt DESC'
				}),
				success: function(collection, response){
					//console.log(response);
					batteryLevel = response[0].value;
					displayStatus();
				}
			});

			// Pubsub later
			var socket = io.connect('http://localhost:1337');

			socket.on('connect', function(){
				console.log('Statuses socket connected');
				
				socket.get('/statuses?limit=1&sort=createdAt DESC', function(status){
					console.log(status);
				});

				socket.on('statuses', function(status){
					console.log(status);
					if (status.data.property == 'battery') {
						batteryLevel = status.data.value;
						displayStatus();
					};
				});
			});

			function displayStatus(){

				var source = batteryStatusTemplate;
				var template = Handlebars.compile(source);

				var html = template({status: batteryLevel});

				self.$el.html(html);
			}
		}
	});

	// return view
	return BatteryStatusView;

});
