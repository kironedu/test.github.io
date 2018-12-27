$(document).ready(function(){
  var btn1 = $('.main-form_name');
  var input_btn1 = $('.main-form_name__input');
  var btn2 = $('.main-form_email');
  var input_btn2 = $('.main-form_email__input');
  var btn3 = $('.main-form_date');
  var input_btn3 = $('.main-form_date__input');
  var btn4 = $('.main-form_country__select');
  var input_btn4 = $('.main-form_country__select');

  btn1.click(function(){
    input_btn1.addClass('input-active');
  });
  
  btn2.click(function(){
    input_btn2.addClass('input-active');
  });

  btn3.click(function(){
    input_btn3.addClass('input-active');
  });
  
  btn4.click(function(){
    input_btn4.addClass('input-active');
  });
});
