/*****************************************
	Backbone tutorial 
	Organising code with require.js 
	CONFIGURATION FILE
******************************************/
//Configuration des alias 
//http://stackoverflow.com/questions/13605600/requirejs-difference-between-requirejs-and-require-functions
require.config({

	paths:{
		jquery:'libs/jquery/jquery-min',
		underscore:'libs/underscore/underscore-min',
		backbone:'libs/backbone/backbone-min',
		handlebars:'libs/handlebars/handlebars-runtime',
		bootstrap:'libs/bootstrap/bootstrap.min'
	}, 
	shim:{
		'jquery':{
			exports:'$'
		},
		'backbone':{
			deps:['underscore', 'jquery'],
			exports:'Backbone' 
		},

		'underscore':{
			exports: '_'				
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
require(['jquery','backbone','app'], function($){
	Backbone.$ = $;
	//Alias to JQuery's DOMReady function
	//http://stackoverflow.com/questions/10371539/why-define-anonymous-function-and-pass-it-jquery-as-the-argument
	$(function(){
		require('app').initialize();
		console.log('DOM Ready !!!');
	});
	
});
