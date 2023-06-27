// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

  $( '.saveBtn' ).click(function( event ) {
    var parentId = $(this).parent().attr("id");
    var descriptionText = $(this).siblings(".description").val();
    localStorage.setItem(parentId, descriptionText);
  });
  
  var currentHour = parseInt(dayjs().format('HA'));
  // var currentHour = 15;

  $( '.row' ).each(function() {
    var thisHour = parseInt($( this ).attr('id').substring(5));
    console.log(thisHour);
    
    if (currentHour === thisHour ) {
      $( this ).addClass("present").removeClass("past future");
    } else if (currentHour < thisHour) {
      $( this ).addClass("future").removeClass("past present");
    } else {
      $( this ).addClass("past").removeClass("present future");
    }
  });

  $( '.row' ).each(function() {
    var loadText = localStorage.getItem($( this ).attr("id"));
    $(this).children(".description").val(loadText);
  });
 
  // displays date 
  var currentDate = dayjs().format('dddd, DD/MM/YYYY')
  $('#currentDay').text(currentDate);
});


