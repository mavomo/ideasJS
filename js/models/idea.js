/***************************************
		models/idea.js
****************************************/
//Declare the dependencies
define([], function(){

var IdeaModel = Backbone.Model.extend({

	defaults:{
		id: null,
		author:"Michelle",
		submitionDate: "",
		comments: "",
		nbStars: 0	
	},

	initialize: function(){
	//TODO: to complete after
	}
});
	
 var ideaInstance = new IdeaModel();
  return ideaInstance;

});
