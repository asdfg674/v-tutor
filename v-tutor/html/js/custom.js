$(document).ready(function() {
  $(".click_open").click(function() {
    $(".open_menu").slideToggle();
  });
});

$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('.open_menu').length && !$target.closest('.click_open').length && $('.open_menu').is(":visible")) {
    $('.open_menu').slideUp();
  }
});
$(document).ready(function() {
  $("#action4").click(function() {
    $("#show-action4").slideToggle();
  });
});
$(document).ready(function() {
  $("#action5").click(function() {
    $("#show-action5").slideToggle();
  });
});
$(document).ready(function() {
  $("#action6").click(function() {
    $("#show-action6").slideToggle();
  });
});
$(document).ready(function() {
  $("#action7").click(function() {
    $("#show-action7").slideToggle();
  });
});
$(document).ready(function() {
  $("#action8").click(function() {
    $("#show-action8").slideToggle();
  });
});
$(document).ready(function() {
  $("#action9").click(function() {
    $("#show-action9").slideToggle();
  });
});
$(document).ready(function() {
  $("#action10").click(function() {
    $("#show-action10").slideToggle();
  });
});
$(document).ready(function() {
  $("#action1").click(function() {
    $("#show-action1").slideToggle();
  });
});
$(document).ready(function() {
  $("#action2").click(function() {
    $("#show-action2").slideToggle();
  });
});
$(document).ready(function() {
  $("#action3").click(function() {
    $("#show-action3").slideToggle();
  });
});
$(document).ready(function() {
  $("#action11").click(function() {
    $("#show-action11").slideToggle();
  });
});
$(document).ready(function() {
  $("#action12").click(function() {
    $("#show-action12").slideToggle();
  });
});
$(document).ready(function() {
  $("#action13").click(function() {
    $("#show-action13").slideToggle();
  });
});
$(document).ready(function() {
  $("#action14").click(function() {
    $("#show-action14").slideToggle();
  });
});
$(document).ready(function() {
  $("#action15").click(function() {
    $("#show-action15").slideToggle();
  });
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action1').length && !$target.closest('#action1').length && $('#show-action1 ').is(":visible")) {
    $('#show-action1 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action2').length && !$target.closest('#action2').length && $('#show-action2 ').is(":visible")) {
    $('#show-action2 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action3').length && !$target.closest('#action3').length && $('#show-action3 ').is(":visible")) {
    $('#show-action3 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action4').length && !$target.closest('#action4').length && $('#show-action4 ').is(":visible")) {
    $('#show-action4').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action5').length && !$target.closest('#action5').length && $('#show-action5 ').is(":visible")) {
    $('#show-action5 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action6').length && !$target.closest('#action6').length && $('#show-action6 ').is(":visible")) {
    $('#show-action6 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action7').length && !$target.closest('#action7').length && $('#show-action7 ').is(":visible")) {
    $('#show-action7 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action8').length && !$target.closest('#action8').length && $('#show-action8 ').is(":visible")) {
    $('#show-action8 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action9').length && !$target.closest('#action9').length && $('#show-action9 ').is(":visible")) {
    $('#show-action9 ').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action10').length && !$target.closest('#action10').length && $('#show-action10').is(":visible")) {
    $('#show-action10').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action11').length && !$target.closest('#action11').length && $('#show-action11').is(":visible")) {
    $('#show-action11').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action12').length && !$target.closest('#action12').length && $('#show-action12').is(":visible")) {
    $('#show-action12').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action13').length && !$target.closest('#action13').length && $('#show-action13').is(":visible")) {
    $('#show-action13').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action14').length && !$target.closest('#action14').length && $('#show-action14').is(":visible")) {
    $('#show-action14').slideUp();
  }
});
$(document).on('click', function() {
  var $target = $(event.target);
  if(!$target.closest('#show-action15').length && !$target.closest('#action15').length && $('#show-action15').is(":visible")) {
    $('#show-action15').slideUp();
  }
});

/*===================================*
  24. CHECKBOX CHECK THEN ADD CLASS JS
  *===================================*/
$('.new-diif').show();
$('#radio1:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diif').slideUp();
  } else {
    $('.new-diif').slideDown();
  }
});
$('.new-diif').hide();
$('#radio2:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.new-diif').slideDown();
  } else {
    $('.new-diif').slideUp();
  }
});

$('.moreless-button1').click(function() {
  $('.moretext1').slideToggle();
  if ($('.moreless-button1').text() == "Read More +") {
    $(this).text("Read Less -")
  } else {
    $(this).text("Read More +")
  }
});
$('.moreless-button2').click(function() {
  $('.moretext2').slideToggle();
  if ($('.moreless-button2').text() == "Read More +") {
    $(this).text("Read Less -")
  } else {
    $(this).text("Read More +")
  }
});
$('.moreless-button3').click(function() {
  $('.moretext3').slideToggle();
  if ($('.moreless-button3').text() == "Read More +") {
    $(this).text("Read Less -")
  } else {
    $(this).text("Read More +")
  }
});
$('.moreless-button4').click(function() {
  $('.moretext4').slideToggle();
  if ($('.moreless-button4').text() == "Read More +") {
    $(this).text("Read Less -")
  } else {
    $(this).text("Read More +")
  }
});
$('.moreless-button9').click(function() {
  $('.moretext9').slideToggle();
  if ($('.moreless-button5').text() == "Read More +") {
    $(this).text("Read Less -")
  } else {
    $(this).text("Read More +")
  }
});
$('.moreless-button10').click(function() {
  $('.moretext10').slideToggle();
  if ($('.moreless-button10').text() == "Read More +") {
    $(this).text("Read Less -")
  } else {
    $(this).text("Read More +")
  }
});
$('.moreless-button11').click(function() {
  $('.moretext11').slideToggle();
  if ($('.moreless-button11').text() == "Read More +") {
    $(this).text("Read Less -")
  } else {
    $(this).text("Read More +")
  }
});

/*===================================*
  24. CHECKBOX CHECK THEN ADD CLASS JS
  *===================================*/
$('.tutor-c').show();
$('#radio4:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.tutor-c').slideUp();
  } else {
    $('.tutor-c').slideDown();
  }
});
$('.tutor-c').hide();
$('#radio3:radio').on('change', function() {
  if($(this).is(":checked")) {
    $('.tutor-c').slideDown();
  } else {
    $('.tutor-c').slideUp();
  }
});

$(function() {
  $("#datepicker").datepicker();
});
$(function() {
  $("#datepicker2").datepicker();
});
$(function() {
  $("#datepicker3").datepicker();
});


$('#example2').calendar({
  type: 'date'
});
$('#example1').calendar({
  type: 'date'
});
$('#example3').calendar({
  type: 'time'
});
$('#example4').calendar({
  type: 'time'
});
$('#example5').calendar({
  type: 'time'
});
$('#example6').calendar({
  type: 'time'
});
$('#example7').calendar({
  type: 'time'
});
$('#example8').calendar({
  type: 'time'
});
$('#example9').calendar({
  type: 'time'
});
$('#example10').calendar({
  type: 'time'
});
$('#example11').calendar({
  type: 'time'
});
$('#example12').calendar({
  type: 'time'
});
$('#example13').calendar({
  type: 'time'
});
$('#example15').calendar({
  type: 'time'
});
$('#example118').calendar({
  type: 'time'
});
$('#example119').calendar({
  type: 'time'
});

$('#rangestart').calendar({
  type: 'date',
  endCalendar: $('#rangeend')
});
$('#rangeend').calendar({
  type: 'date',
  startCalendar: $('#rangestart')
});
$('#example24').calendar({
  startMode: 'year'
});
$('#example25').calendar();
$('#example26').calendar({
  ampm: false,
  type: 'time'
});
$('#example17').calendar({
  type: 'month'
});
$('#example18').calendar({
  type: 'year'
});
$('#example19').calendar();
$('#example20').calendar({
  on: 'hover'
});
var today = new Date();
$('#example31').calendar({
  minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
  maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)
});
$('#example32').calendar({
  monthFirst: false
});
$('#example33').calendar({
  monthFirst: false,
  formatter: {
    date: function (date, settings) {
      if (!date) return '';
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      return day + '/' + month + '/' + year;
    }
  }
});
$('#example34').calendar({
  inline: true
});
$('#example35').calendar();