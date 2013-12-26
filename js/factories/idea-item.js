/*******************************************************
	Factories for idea-item
********************************************************/
define(['views/view-idea-item.tpl'], function(){

	var IdeaItemView = Backbone.View.extend({

		tagName:'tr',

		template: Handlebars.templates['view-idea-item.tpl'],
		
		initialize: function(){
		   console.log("addNewIdeaLine:: you are line factory.");
		},

		addNewIdeaLine: function(idea){
		   $(this.el).append(
			 this.template({
				mLine: idea.toJSON()
			})
		   );	
		 return this;
		}
		
	});

	return {
		buildIdeaItemView: function(){
		 
		var viewInstance = new IdeaItemView();	
		return viewInstance;
	      }
	};
});
