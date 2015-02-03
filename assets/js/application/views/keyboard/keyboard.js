// views/keyboard/keyboard

define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	var KeyboardView = Backbone.View.extend({
		$el: $('#keyboard-view'),
		initialize: function(){
			console.log('KeyboardView initialized');
		},
		events:{
			'keydown #keyboard-view': 'keyboardKeydown',
			'keyup #keyboard-view': 'keyboardKeyup'
		},
		keyboardKeydown: function(e){
			console.log('keydown');
			e.preventDefault();
			var keyCode = e.keyCode;

			$('#keyboard-view').children('.key').each(function(){
				var key = $(this);

				if (key.attr('keyCode') == keyCode) {
					key.addClass('key-down');
				};
			});
		},
		keyboardKeyup: function(e){
			console.log('keyup');
			e.preventDefault();
			var keyCode = e.keyCode;

			$('#keyboard-view').children('.key').each(function(){
				var key = $(this);

				if (key.attr('keyCode') == keyCode) {
					key.removeClass('key-down');
				};
			});
		}
	});

	return KeyboardView;
});