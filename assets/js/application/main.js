// Main.js

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
			// open
	    	marka.set('bars');

			mainContainer.css({
				width: '100%',
				marginLeft: '0'
			});

			nav.animate({
				left: '-20em'
			}, 400);
		}
		else{
			// closed
	    	marka.set('times');

			nav.animate({
				left: '0'
			}, 400, function(){
				mainContainer.css({
					width: 'calc(100% - 20em)',
					marginLeft: '20em'
				});
			});
		};

		navOpen = !navOpen;
	});
});

// Backbone app
require(['app'], function(App){
	App.initialize();
});
