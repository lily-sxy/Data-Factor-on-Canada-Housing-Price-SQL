(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.OpenScheduling = templates.OpenScheduling || {};templates['OpeningsGrouped'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<div>"
    + container.escapeExpression(((helper = (helper = helpers.setGroupByDepartment || (depth0 != null ? depth0.setGroupByDepartment : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"setGroupByDepartment","hash":{},"data":data}) : helper)))
    + container.escapeExpression(((helper = (helper = helpers.setCanShowAddress || (depth0 != null ? depth0.setCanShowAddress : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"setCanShowAddress","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ByDateThenProviderCollated : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = 
  "<div class=\"card";
  stack1 = ((helper = (helper = helpers.showProvider || (depth0 != null ? depth0.showProvider : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"showProvider","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.showProvider) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"><h3 class=\"header medium extraWide\">"
    + container.escapeExpression(((helper = (helper = helpers.FormattedDate || (depth0 != null ? depth0.FormattedDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FormattedDate","hash":{},"data":data}) : helper)))
    + "</h3>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ProvidersAndHours : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"2":function(container,depth0,helpers,partials,data) {
    return " withProvider";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.showProvider || (depth0 != null ? depth0.showProvider : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"showProvider","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.showProvider) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "<div class=\"cardline";
  stack1 = ((helper = (helper = helpers.showProviderPhoto || (depth0 != null ? depth0.showProviderPhoto : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"showProviderPhoto","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.showProviderPhoto) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " withPopup\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DepartmentAndSlots : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"cardline name heading\">";
  stack1 = ((helper = (helper = helpers.hasUrl || (depth0 != null ? depth0.hasUrl : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"hasUrl","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.hasUrl) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>";
  stack1 = ((helper = (helper = helpers.showProviderPhoto || (depth0 != null ? depth0.showProviderPhoto : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"showProviderPhoto","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.showProviderPhoto) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(container,depth0,helpers,partials,data) {
    return "<a href=\""
    + container.escapeExpression((helpers.getProvider || (depth0 && depth0.getProvider) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HomePageUrl",{"name":"getProvider","hash":{},"data":data}))
    + "\" target=\"_blank\" title=\""
    + container.escapeExpression((helpers.getTitleTextString || (depth0 && depth0.getTitleTextString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ProviderID : depth0),{"name":"getTitleTextString","hash":{},"data":data}))
    + "\">"
    + container.escapeExpression((helpers.getProvider || (depth0 && depth0.getProvider) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DisplayName",{"name":"getProvider","hash":{},"data":data}))
    + "<svg class=\"jumpArrow\" aria-hidden=\"true\">"
    + container.escapeExpression((helpers.referenceSvg || (depth0 && depth0.referenceSvg) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"library.svg#hyperlink",{"name":"referenceSvg","hash":{},"data":data}))
    + "</svg></a>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.isGroupByDepartment || (depth0 != null ? depth0.isGroupByDepartment : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"isGroupByDepartment","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(16, data, 0),"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.isGroupByDepartment) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"providername\">"
    + container.escapeExpression((helpers.getProvider || (depth0 && depth0.getProvider) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DisplayName",{"name":"getProvider","hash":{},"data":data}))
    + "</div>";
  stack1 = ((helper = (helper = helpers.canShowAddress || (depth0 != null ? depth0.canShowAddress : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"canShowAddress","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.canShowAddress) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"departmentInfo\">"
    + ((stack1 = (helpers.departmentHasProperty || (depth0 && depth0.departmentHasProperty) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Distance",{"name":"departmentHasProperty","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.departmentHasProperty || (depth0 && depth0.departmentHasProperty) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FormattedAddress",{"name":"departmentHasProperty","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"departmentDistance subtle\">"
    + container.escapeExpression((helpers.getDepartment || (depth0 && depth0.getDepartment) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Distance",{"name":"getDepartment","hash":{},"data":data}))
    + "</span>"
    + ((stack1 = (helpers.departmentHasProperty || (depth0 && depth0.departmentHasProperty) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FormattedAddress",{"name":"departmentHasProperty","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "<span class=\"departmentSeparator subtle\">&bull;</span>";
},"14":function(container,depth0,helpers,partials,data) {
    return "<span class=\"departmentAddress subtle\">"
    + container.escapeExpression((helpers.getDepartment || (depth0 && depth0.getDepartment) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AddressConcatenated",{"name":"getDepartment","hash":{},"data":data}))
    + "</span>";
},"16":function(container,depth0,helpers,partials,data) {
    return "<span>"
    + container.escapeExpression((helpers.getProvider || (depth0 && depth0.getProvider) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DisplayName",{"name":"getProvider","hash":{},"data":data}))
    + "</span>";
},"18":function(container,depth0,helpers,partials,data) {
    return "<div class=\"cardline partial photo\"><span class=\"roundedimage\" style=\"background-image: url("
    + container.escapeExpression((helpers.getProvider || (depth0 && depth0.getProvider) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PhotoUrl",{"name":"getProvider","hash":{},"data":data}))
    + ")\"></span></div>";
},"20":function(container,depth0,helpers,partials,data) {
    return " partial";
},"22":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = 
  "<div class=\"departmentSlots\">";
  stack1 = ((helper = (helper = helpers.showDepartment || (depth0 != null ? depth0.showDepartment : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"showDepartment","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.showDepartment) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<div class=\"slotslist\">"
    + container.escapeExpression(((helper = (helper = helpers.resetSlotsCount || (depth0 != null ? depth0.resetSlotsCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"resetSlotsCount","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HoursAndSlots : depth0),{"name":"each","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"departmentName\">"
    + container.escapeExpression((helpers.getDepartment || (depth0 && depth0.getDepartment) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Name",{"name":"getDepartment","hash":{},"data":data}))
    + "</div>";
  stack1 = ((helper = (helper = helpers.canShowAddress || (depth0 != null ? depth0.canShowAddress : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"canShowAddress","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.canShowAddress) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"25":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = 
  container.escapeExpression(((helper = (helper = helpers.incrementSlotsCount || (depth0 != null ? depth0.incrementSlotsCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"incrementSlotsCount","hash":{},"data":data}) : helper)))
    + "<div class=\"subslotslist "
    + container.escapeExpression(((helper = (helper = helpers.AmPm || (depth0 != null ? depth0.AmPm : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AmPm","hash":{},"data":data}) : helper)));
  stack1 = ((helper = (helper = helpers.closeHidden || (depth0 != null ? depth0.closeHidden : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"closeHidden","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.closeHidden) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"><div class=\"moreslots extraWide\">"
    + container.escapeExpression(((helper = (helper = helpers.resetSubSlotsCount || (depth0 != null ? depth0.resetSubSlotsCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"resetSubSlotsCount","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Slots : depth0),{"name":"each","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.isOtherSubSlot || (depth0 != null ? depth0.isOtherSubSlot : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"isOtherSubSlot","hash":{},"fn":container.program(37, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.isOtherSubSlot) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div></div>";
},"26":function(container,depth0,helpers,partials,data) {
    return " morerows";
},"28":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = 
  container.escapeExpression(((helper = (helper = helpers.incrementSubSlotsCount || (depth0 != null ? depth0.incrementSubSlotsCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"incrementSubSlotsCount","hash":{},"data":data}) : helper)))
    + "<a class=\"slotdetailaction button primary positive ";
  stack1 = ((helper = (helper = helpers.isOtherSubSlot || (depth0 != null ? depth0.isOtherSubSlot : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"isOtherSubSlot","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.program(31, data, 0, blockParams, depths),"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.isOtherSubSlot) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" href=\"#slotdetails\" data-slot-daykey=\""
    + container.escapeExpression(((helper = (helper = helpers.DayKey || (depth0 != null ? depth0.DayKey : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DayKey","hash":{},"data":data}) : helper)))
    + "\" data-slot-index=\""
    + container.escapeExpression(((helper = (helper = helpers.SlotIndex || (depth0 != null ? depth0.SlotIndex : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"SlotIndex","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanShowAppointmentTime : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.program(35, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</a>";
},"29":function(container,depth0,helpers,partials,data) {
    return "otherslot dismissed";
},"31":function(container,depth0,helpers,partials,data) {
    return "firstslot";
},"33":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return container.escapeExpression((helpers.getAccessibleSlotString || (depth0 && depth0.getAccessibleSlotString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.FormattedStartTimeLong : depth0),(depths[4] != null ? depths[4].FormattedDate : depths[4]),(depths[2] != null ? depths[2].DepartmentID : depths[2]),(depths[3] != null ? depths[3].ProviderID : depths[3]),{"name":"getAccessibleSlotString","hash":{},"data":data}));
},"35":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return container.escapeExpression((helpers.getAccessibleSlotString || (depth0 && depth0.getAccessibleSlotString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.FormattedArrivalTimeLong : depth0),(depths[4] != null ? depths[4].FormattedDate : depths[4]),(depths[2] != null ? depths[2].DepartmentID : depths[2]),(depths[3] != null ? depths[3].ProviderID : depths[3]),{"name":"getAccessibleSlotString","hash":{},"data":data}));
},"37":function(container,depth0,helpers,partials,data) {
    return "<a class=\"moreslotslabel subtle\" href=\"#\">"
    + container.escapeExpression((helpers.getString || (depth0 && depth0.getString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"expandSlotsLabel",{"name":"getString","hash":{},"data":data}))
    + "</a>";
},"useData":true,"useDepths":true});})();