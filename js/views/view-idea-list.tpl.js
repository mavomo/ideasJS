(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['view-idea-list.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table class=\"table\">\n				<thead>\n					<tr>\n						<th>\n							#\n						</th>\n						<th>\n							Idea\n						</th>\n						<th>\n							votes\n						</th>\n						<th>\n							Submission date\n						</th>\n						<th>\n						<i class=\"glyphicon glyphicon-plus-sign\"></i>						\n						</th>\n					</tr>\n				</thead>\n				<tbody>\n					\n				</tbody>\n			</table>\n";
  });
})();