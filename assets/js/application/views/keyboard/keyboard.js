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
		events: {
			'keydown': 'keyboardKeydown',
			'keyup': 'keyboardKeyup',
			'click .keyboard': 'clicktest'
		},
		keyboardKeydown: function(e){
			console.log('keydown');
		},
		keyboardKeyup: function(e){
			console.log('keyup');
		},
		clicktest: function(){
			// just to see if events are even working
			console.log('clicktest');
		}
	});

	return KeyboardView;
});