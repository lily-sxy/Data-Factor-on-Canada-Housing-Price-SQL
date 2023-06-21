(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.OpenScheduling = templates.OpenScheduling || {};templates['DateOfBirthVerification'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"verificationFormParent\"><form class=\"verificationForm\"><p>"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DOBVerificationPrompt","EmbeddedSchedule",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p><input autocomplete=\"off\" id=\"DOBVerify\" name=\"DOBVerify\" type=\"text\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ValidationSettings : depth0),true,{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DOBVerify",{"name":"messageDisplay","hash":{},"data":data}))
    + "<div class=\"visibleCaptchaContainer\"></div><a href=\"#\" class=\"button\" id=\"captchaConfirm\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CaptchaContinueButton","EmbeddedSchedule",{"name":"getDisplayString","hash":{},"data":data}))
    + "</a></form></div>";
},"useData":true});})();