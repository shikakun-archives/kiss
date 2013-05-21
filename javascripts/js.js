$(document).ready(function() {
  var page_now = 0;
  var page_num = $('#page_num').text();
  
  $.autopager({
    content: '#entries',
    link: '#page_next',
    load: function() {
      page_now = $(this).find('#page_now').text();
      if( page_now == page_num ){
        $('#page').hide();
      }
    }
  });
});