$(document).ready(function() {
  //$(".pager.pager_next").find("a").addClass("autopager");
  //var ap = $(".pager.pager_next").find("a").selector;
  //alert(ap);
  
  $.autopager({
    content: '#entries',
    link: '#autopager'
  });
});