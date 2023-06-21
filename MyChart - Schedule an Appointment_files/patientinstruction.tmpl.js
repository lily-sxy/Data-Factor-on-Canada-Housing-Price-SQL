(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Visits = templates.Visits || {};templates['PatientInstruction'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Visits.PatientInstruction",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"instructionContent\" tabindex=\"-1\">"
    + ((stack1 = ((helper = (helper = helpers.PatientInstructionsHTML || (depth0 != null ? depth0.PatientInstructionsHTML : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PatientInstructionsHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div><div class=\"readmore hidden\"><a class=\"button autowidth\" href=\"#\"><!-- the label for the \"expand\" button is appended dynamically. --></a></div><div class=\"readless hidden\"><a class=\"collapse\" href=\"#\" title=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CollapseInstructionLinkTitle",{"name":"getDisplayString","hash":{},"data":data}))
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CollapseInstructionLink",{"name":"getDisplayString","hash":{},"data":data}))
    + "</a></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"useData":true});})();