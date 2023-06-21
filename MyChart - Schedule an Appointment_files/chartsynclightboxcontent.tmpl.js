(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.ChartSync = templates.ChartSync || {};templates['ChartSyncLightboxContent'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ChartSync.ChartSyncLightbox",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"synchronizationLightboxContent\"><div class=\"center section loading\" data-model-id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Synchronization : depth0)) != null ? stack1.ModelId : stack1), depth0))
    + "\" data-view-binder-id=\""
    + container.escapeExpression(((helper = (helper = helpers.ViewBinderId || (depth0 != null ? depth0.ViewBinderId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ViewBinderId","hash":{},"data":data}) : helper)))
    + "\" aria-live=\"polite\"><h1>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SynchronizationHeader",{"name":"getStringResource","hash":{},"data":data}))
    + "</h1><p class=\"bold countdown\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LoadingEstimatedTimeLeft",{"name":"getStringResource","hash":{},"data":data}))
    + "</p><span class=\"section content progbarsquares\"><span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SynchronizationProgress",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></span><div class=\"section\"><a class=\"button cancelworkflow\" href=\"#\" role=\"button\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelButtonLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</a></div></div></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"useData":true});})();