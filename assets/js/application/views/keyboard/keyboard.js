// views/keyboard/keyboard

define([
	'jquery',
	'underscore',
	'handlebars',
	'backbone',
	'text!templates/keyboard/keyboard.html'
], function($, _, Handlebars, Backbone, keyboardTemplate){

	var KeyboardView = Backbone.View.extend({
		el: document,
		initialize: function(){
			console.log('KeyboardView initialized');

			var self = this;

			// Template
			var source = keyboardTemplate;
			var template = Handlebars.compile(source);

			var html = template({s: 's'});

			self.$('#keyboard-view').html(html);
			
		},
		events: {
			'keydown': 'keyboardKeydown',
			'keyup': 'keyboardKeyup'
		},
		keyboardKeydown: function(e){
			if (this.isMyKeyCode(e.keyCode)) {
				e.preventDefault();
				var keyCode = e.keyCode;

				$('.key').each(function(){
					var key = $(this);

					if (key.attr('keyCode') == keyCode) {
						key.addClass('key-down');
					};
				});
			};
		},
		keyboardKeyup: function(e){
			if (this.isMyKeyCode(e.keyCode)) {
				e.preventDefault();
				var keyCode = e.keyCode;

				$('.key').each(function(){
					var key = $(this);

					if (key.attr('keyCode') == keyCode) {
						key.removeClass('key-down');
					};
				});
			};
		},
		isMyKeyCode: function(keyPressed){
			var reservedKeycodes = ['192','49','50','51','52','53','54','55','56','57','48','173','61','8','9','81','87','69','82','84','89','85','73','79','80','219','221','220','20','65','83','68','70','71','72','74','75','76','59','222','13','16','90','88','67','86','66','78','77','188','190','191','16','17','18','32','18','17'];
			
			var key = null;
			key = _.find(reservedKeycodes, function (keyCode) { return keyCode == keyPressed });

			if (key === undefined) {
				return false;
			}
			else{
				return true;
			};
		}
	});

	return KeyboardView;
});