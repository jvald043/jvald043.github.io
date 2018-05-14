//JQuery
$(function(){
 $('.header').height($(window).height());


$(".navbar a, #smore").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
});


})




//Main Javascript