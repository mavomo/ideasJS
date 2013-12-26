(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['view-idea-item.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.mLine)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.mLine)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n<td><i class=\"glyphicon glyphicon-star\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.mLine)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.mLine)),stack1 == null || stack1 === false ? stack1 : stack1.nbStars)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.mLine)),stack1 == null || stack1 === false ? stack1 : stack1.submitionDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n<td></td>\n";
  return buffer;
  });
})();