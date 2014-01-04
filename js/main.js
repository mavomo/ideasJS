/*****************************************
	Backbone tutorial 
	Organising code with require.js 
	CONFIGURATION FILE
******************************************/
//Configuration des alias 
//http://stackoverflow.com/questions/13605600/requirejs-difference-between-requirejs-and-require-functions
require.config({
	//Force files to be retrieved from the server, not the cache.
	urlArgs: "bust=" +  (new Date()).getTime(),
	waitSeconds: 200,
	paths:{

		jquery:'libs/jquery/1.10.2/jquery',
		underscore:'libs/underscore/1.5.2/underscore',
		backbone:'libs/backbone/1.1.0/backbone',
		handlebars:'libs/handlebars/handlebars-runtime',
		bootstrap:'libs/bootstrap/bootstrap.min',
		localstorage: 'libs/localstorage/localStorage',
		"jqueryui": "//ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/jquery-ui.min",
	}, 
	shim:{
		'jquery':{
			exports:'$'
		},	

		'underscore':{
			deps:[],
			exports: '_'				
		},
		
		'backbone':{
			deps:['underscore', 'jquery'],
			exports:'Backbone' 
		},

		'localstorage': {
			deps: ['underscore','jquery','backbone'],
			exports: 'localStorage'
    		},

		'handlebars':{
			exports:'Handlebars'
		},

		'bootstrap':{
			deps:['jquery'],
		        exports:'bootstrap'
		}

	}
	
	
});
define(['jquery','underscore','backbone','handlebars','localstorage','app'], function($,_,Backbone,Handlebars,localStorage){
	Backbone.$ = $;
	console.log("Test output");
        console.log("$: " + typeof $);
        console.log("_: " + typeof _);
        console.log("Backbone: " + typeof Backbone);
	//Alias to JQuery's DOMReady function
	//http://stackoverflow.com/questions/10371539/why-define-anonymous-function-and-pass-it-jquery-as-the-argument
	$(function(){
		require('app').initialize();
		console.log('DOM Ready !!!');
	});
	
});
