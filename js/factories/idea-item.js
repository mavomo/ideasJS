/*******************************************************
	Factories for idea-item
********************************************************/
define(['views/view-idea-item.tpl'], function(){

	var IdeaItemView = Backbone.View.extend({

		tagName:'tr',

		template: Handlebars.templates['view-idea-item.tpl'],


		initialize: function(options){
		 options || (options={});
		 _.extend(this, _.pick(options, ['ideaItem']));
		 this.model = this.ideaItem;
		 this.listenTo(this.model, 'change', this.render);
		 this.listenTo(this.model, 'tooMuchStars', this.deactivateVotes);
		
		},
		
  		render: function(){
		  $(this.el).empty();
		  this.addNewIdeaLine(this.model);
		
		 return this;
		},

		addNewIdeaLine: function(idea){
		   $(this.el).append(
			 this.template({
				mLine: idea.toJSON()
			})
		   );
		 return this;
		},
		
		
		events:{
		 'click i': 'OneMoreStar',
		 'dblclick td.idea.title': 'editIdea',
		 'keypress td.idea.title': 'updateOnEnter',
		}, 

		OneMoreStar : function(evt){
		  var id = $(evt.currentTarget).data('id');
		  var item = this.model;
		  var nbStar = item.get('nbStars') + 1;
		  if(nbStar<=10){
	   	   item.set({nbStars: nbStar});	
		 }

		else{
		 this.deactivateVotes();
		}		
		  return this;
		},

		deactivateVotes: function(evt){
		  alert("Too many people liked the idea.");
		  this.stopListening(this.model);
		},
	
		editIdea: function(evt){
		  var currentTd = $(evt.currentTarget);
		   currentTd.attr("contentEditable","true");		
		},
		
	 	updateOnEnter: function(k){
		var currentTd = $(k.currentTarget);
		if (k.which === 13 ) {
		   currentTd.attr("contentEditable","false");
		   var item = this.model;
		   item.set({title:currentTd.html()});
		}
	    }
		
	});

	return {
		buildIdeaItemView: function(ideaModel){
		var viewInstance = new IdeaItemView({
			ideaItem: ideaModel
		});	
		return viewInstance;
	      }
	};
});
