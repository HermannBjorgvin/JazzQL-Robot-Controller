// main

// Config
require.config({
    baseUrl: 'js/application',
    paths: {
    	// set the paths for different shit here
        jquery: '../libraries/jquery-1.11.2.min',
        marka: '../libraries/marka.min',
        moment: '../libraries/moment',
        underscore: '../libraries/underscore-min',
        handlebars: '../libraries/handlebars-v2.0.0',
        backbone: '../libraries/backbone-min',
        socketIo: '../dependencies/socket.io',
        sailsIo: '../dependencies/sails.io',
        sailsIoBackbone: '../libraries/sails.io.backbone'
    }
});

// UI stuff
require(['jquery', 'marka'], function($){

	var navOpen = true;
	var marka = new Marka('#navbar-toggle');

	marka.size(53);
	marka.set('times');
	marka.color('rgb(255, 255, 255)');

	$('#navbar-toggle').on('click', function(){

		var nav = $(this).closest('nav');
		var mainContainer = $('#main-container');

		if (navOpen == true){
			// on click closes the nav
	    	marka.set('bars');

			mainContainer.toggleClass('small-nav');
			mainContainer.css({
				width: '100%',
				marginLeft: '0'
			});

			nav.animate({
				left: '-20em'
			}, 400, function(){
				nav.toggleClass('small-nav');
			});
		}
		else{
			// on click opens the nav
	    	marka.set('times');

			nav.toggleClass('small-nav');
			nav.animate({
				left: '0'
			}, 400, function(){
				mainContainer.css({
					width: 'calc(100% - 20em)',
					marginLeft: '20em'
				});

				mainContainer.toggleClass('small-nav');
			});
		};

		navOpen = !navOpen;
	});
});

require(['jquery'], function($){

	window.onkeydown = function(e){
		console.log('keydown');
		e.preventDefault();
		var keyCode = e.keyCode;

		$('.key').each(function(){
			var key = $(this);

			if (key.attr('keyCode') == keyCode) {
				key.addClass('key-down');
			};
		});
	};

	window.onkeyup = function(e){
		console.log('keyup');
		e.preventDefault();
		var keyCode = e.keyCode;

		$('.key').each(function(){
			var key = $(this);

			if (key.attr('keyCode') == keyCode) {
				key.removeClass('key-down');
			};
		});
	};

});


// Backbone app
require(['app'], function(App){
	App.initialize();
});
