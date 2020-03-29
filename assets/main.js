// Initialize MDC Top App Bar
const topAppBar = [].map.call(document.querySelectorAll('.mdc-top-app-bar'), function(el) {
  return mdc.topAppBar.MDCTopAppBar.attachTo(el);
});

// Initialize MDC Ripple
const ripple = [].map.call(document.querySelectorAll('.mdc-icon-button, .mdc-button'), function(el) {
  return mdc.ripple.MDCRipple.attachTo(el);
});
