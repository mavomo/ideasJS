/***************************************
Bootstrapping the routers of the App
****************************************/
define(['routers/router','factories/page-idea'], function(){

	var initialize = function(){
		console.log("Routing started!");
		this.view = require('factories/page-idea').buildBoardPage();
	};
	
	return {
		initialize: initialize
	};
});
