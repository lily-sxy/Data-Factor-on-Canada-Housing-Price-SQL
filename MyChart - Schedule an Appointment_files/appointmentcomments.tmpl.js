(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.OpenScheduling = templates.OpenScheduling || {};templates['AppointmentComments'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"comments\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.showComments : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<form><div class=\"ghostInput\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.requireComments : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "<textarea id=\"Comments\" name=\"Comments\" rows=\"2\" cols=\"20\" autocomplete=\"off\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.commentsValidationSettings : depth0),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.appointmentComments || (depth0 != null ? depth0.appointmentComments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"appointmentComments","hash":{},"data":data}) : helper)))
    + "</textarea></div>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Comments",{"name":"messageDisplay","hash":{},"data":data}))
    + "<span class=\"helptext\">"
    + container.escapeExpression((helpers.getString || (depth0 && depth0.getString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"commentsMaximumCharacterLimit",{"name":"getString","hash":{},"data":data}))
    + "</span></form>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<label for=\"Comments\" class=\"required\">"
    + container.escapeExpression((helpers.getString || (depth0 && depth0.getString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"commentsRequiredLabel",{"name":"getString","hash":{},"data":data}))
    + "</label>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<label for=\"Comments\">"
    + container.escapeExpression((helpers.getString || (depth0 && depth0.getString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"commentsLabel",{"name":"getString","hash":{},"data":data}))
    + "</label>";
},"useData":true});})();