/***************************************
	collection of models/ideas.js
****************************************/
define(['../main'],function(){

var IdeaModel = Backbone.Model.extend({
	defaults:{
		id: null,
		title: "untitled",
		author:"unknown",
		submitionDate: new Date(),		
		nbStars: 0	
	}
});

var IdeaCollection =  Backbone.Collection.extend({
	model: IdeaModel,
	
	initialize: function(){
	 //this.listenTo(this.model,'change', this.changesDetected);
	},
	
	changesDetected: function(){
	alert("A change has been detected!");
	}
	
	
});

var ideas = [
	{
	 id : 1,
	 title: 'weird idea',
	 author:'Michelle',
	 comments: "Cool stuff!"
	},
	{
	 id : 2,
	 title: 'revolutionary one!!!!',
	 comments: "Cool stuff2!"
	},
	{
	 id: '3',
	 title: 'Not proud but it does the trick',
	 comments: "Cool stuff3!"
	}
];

var modelCollectionInstance = new IdeaCollection(ideas);
console.log("#modelCollectionInstance.models", modelCollectionInstance.models);  	
return modelCollectionInstance;

});
