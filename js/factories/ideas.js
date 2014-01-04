/*******************************************************
	Factories for ideas Collection
********************************************************/
define(['models/ideas','views/view-idea-list.tpl', 'factories/idea-item',''], function(){

	var IdeasListView = Backbone.View.extend({

		el:'.col-md-12.column',
		template: Handlebars.templates['view-idea-list.tpl'],

		initialize: function (options){
		   options || (options={});
		   _.extend(this, _.pick(options, ['ideasCollection']));
		   this.model = this.ideasCollection;
  	           this.render();
		}, 		

		render: function(){
		this.$el.append(
				this.template({})
			  );

		  _.each(this.model.models, function (idea) {
			var itemView = require('factories/idea-item').buildIdeaItemView(idea);			
			$('tbody').append(itemView.addNewIdeaLine(idea).$el);
  	    	   });
			return this;	
		},
	
		events: {
		  'click i.glyphicon.glyphicon-plus-sign': 'addAnIdea'
		}, 
		
		addAnIdea : function(){
		 alert("Creating a brand new idea!!!");
		}
	});

	return {
		buildIdeasListView: function(){
		var viewInstance = new IdeasListView({
			ideasCollection : require('models/ideas')
		});	
		return viewInstance;
	      }
	};
});
