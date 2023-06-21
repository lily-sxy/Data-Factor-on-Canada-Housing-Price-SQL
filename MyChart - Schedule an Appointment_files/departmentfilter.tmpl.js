(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.OpenScheduling = templates.OpenScheduling || {};templates['DepartmentFilter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"departmentFilter"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsFiltered : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><div class=\"departmentDetails prettycheck container\"><input id=\""
    + container.escapeExpression(((helper = (helper = helpers.getGuid || (depth0 != null ? depth0.getGuid : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"getGuid","hash":{},"data":data}) : helper)))
    + "_scheduleOpenings_locationsFilterColumn_0_d_"
    + container.escapeExpression(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ID","hash":{},"data":data}) : helper)))
    + "\" class=\"locationFilter prettycheck filter"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsFiltered : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ID","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsFiltered : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-filter-group=\"locations\" ><label for=\""
    + container.escapeExpression(((helper = (helper = helpers.getGuid || (depth0 != null ? depth0.getGuid : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"getGuid","hash":{},"data":data}) : helper)))
    + "_scheduleOpenings_locationsFilterColumn_0_d_"
    + container.escapeExpression(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ID","hash":{},"data":data}) : helper)))
    + "\"><span class=\"departmentName";
  stack1 = ((helper = (helper = helpers.hasDistance || (depth0 != null ? depth0.hasDistance : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"hasDistance","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.hasDistance) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">"
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</span>";
  stack1 = ((helper = (helper = helpers.hasDistance || (depth0 != null ? depth0.hasDistance : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"hasDistance","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.hasDistance) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</label><br />"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.FormattedAddress : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"2":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {})," ",{"name":"toUpperCase","hash":{},"data":data}))
    + "hidden";
},"4":function(container,depth0,helpers,partials,data) {
    return "checked ";
},"6":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {})," ",{"name":"toUpperCase","hash":{},"data":data}))
    + "hasDistance";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"departmentDistance\">"
    + container.escapeExpression(((helper = (helper = helpers.getDistanceString || (depth0 != null ? depth0.getDistanceString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"getDistanceString","hash":{},"data":data}) : helper)))
    + "</span>";
},"10":function(container,depth0,helpers,partials,data) {
    return "<span class=\"departmentAddress\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span><br />";
},"useData":true});})();