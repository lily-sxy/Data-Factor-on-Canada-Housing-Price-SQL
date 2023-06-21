(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.OpenScheduling = templates.OpenScheduling || {};templates['SlotDetails'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReservationExpirationBlurb : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ProviderPhotoUrl : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><div"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DepartmentPhotoUrl : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ProviderName : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div><div class=\"dateTime\"><div class=\"date\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Date","hash":{},"data":data}) : helper)))
    + "</span></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ArrivalTimeLabel : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanShowAppointmentTime : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanShowDepartment : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DepartmentPhotoUrl : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanShowDepartment : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"standardBanner informationalType\">"
    + container.escapeExpression(((helper = (helper = helpers.ReservationExpirationBlurb || (depth0 != null ? depth0.ReservationExpirationBlurb : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ReservationExpirationBlurb","hash":{},"data":data}) : helper)))
    + "</div>";
},"3":function(container,depth0,helpers,partials,data) {
    return " class=\"hasProviderPhoto\"";
},"5":function(container,depth0,helpers,partials,data) {
    return " class=\"hasDepartmentPhoto\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"header medium\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ProviderPhotoUrl : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"providerName\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.ProviderName || (depth0 != null ? depth0.ProviderName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ProviderName","hash":{},"data":data}) : helper)))
    + "</span></div></div>";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"providerPhoto\"><span class=\"roundedimage\" style=\"background-image: url("
    + container.escapeExpression(((helper = (helper = helpers.ProviderPhotoUrl || (depth0 != null ? depth0.ProviderPhotoUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ProviderPhotoUrl","hash":{},"data":data}) : helper)))
    + ")\"></span></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"time\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.ArrivalTimeLabel || (depth0 != null ? depth0.ArrivalTimeLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ArrivalTimeLabel","hash":{},"data":data}) : helper)))
    + "</span></div>";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ArrivalTimeLabel : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.AppointmentTimeLabel || (depth0 != null ? depth0.AppointmentTimeLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AppointmentTimeLabel","hash":{},"data":data}) : helper)))
    + "</span>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DurationString : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"13":function(container,depth0,helpers,partials,data) {
    return "subtle";
},"15":function(container,depth0,helpers,partials,data) {
    return "time";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span>&nbsp;"
    + container.escapeExpression(((helper = (helper = helpers.DurationString || (depth0 != null ? depth0.DurationString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DurationString","hash":{},"data":data}) : helper)))
    + "</span>";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"address\"><div class=\"departmentName\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.DepartmentName || (depth0 != null ? depth0.DepartmentName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DepartmentName","hash":{},"data":data}) : helper)))
    + "</span></div>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DepartmentAddress : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DepartmentPhone : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"20":function(container,depth0,helpers,partials,data) {
    return "<p class=\"addressLine subtle\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>";
},"22":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"phoneNumber subtle\">"
    + container.escapeExpression(((helper = (helper = helpers.DepartmentPhone || (depth0 != null ? depth0.DepartmentPhone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DepartmentPhone","hash":{},"data":data}) : helper)))
    + "</p>";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"departmentPhoto\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DepartmentUrl : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"25":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.DepartmentUrl || (depth0 != null ? depth0.DepartmentUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DepartmentUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.DepartmentPhotoUrl || (depth0 != null ? depth0.DepartmentPhotoUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DepartmentPhotoUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.DepartmentName || (depth0 != null ? depth0.DepartmentName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DepartmentName","hash":{},"data":data}) : helper)))
    + "\" /></a>";
},"27":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<img src=\""
    + container.escapeExpression(((helper = (helper = helpers.DepartmentPhotoUrl || (depth0 != null ? depth0.DepartmentPhotoUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DepartmentPhotoUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.DepartmentName || (depth0 != null ? depth0.DepartmentName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DepartmentName","hash":{},"data":data}) : helper)))
    + "\" />";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.LocationInstructions : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"deptinstructions\"><div class=\"visitinstructionscontent\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.LocationInstructions : depth0),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "<br/>";
},"useData":true});})();