jQuery(document).ready(function() {
  var menuToggle = jQuery('#js-mobile-menu').unbind();
  jQuery('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    jQuery('#js-navigation-menu').slideToggle(function(){
      if(jQuery('#js-navigation-menu').is(':hidden')) {
        jQuery('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});