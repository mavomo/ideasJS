/*************************************************************************************************

		Board : binds the collection and allows some operations on his HTML componenents

*************************************************************************************************/
define(['factories/ideas', 'views/page-ideas.tpl'],
	function(){
		var boardView = Backbone.View.extend({

			el: '.container', 
			template: Handlebars.templates['page-ideas.tpl'],

			initialize: function(){
			   console.log('Initialize:::: Initialize the views');
			   this.render();
			},

			render: function(){			

			this.$el.append(
				this.template({})
			  );

			var ideasView = require('factories/ideas').buildIdeasListView();
				
			 return this;
			}, 

		
	});

	return {
		buildBoardPage: function(){
			var viewInstance = new boardView();			
			return viewInstance;
		}
	};
});
