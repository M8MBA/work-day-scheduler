// current day is displayed at the top of the calendar
var dateTime = function () {
  var currentDay = document.getElementById("currentDay");
  var time = moment();

    currentDay.textContent = time.format("dddd, MMMM Do YYYY, h:mm:ss a");

    setInterval(function () { dateTime(); }, 1000);

}

dateTime();

// each time block is color-coded to indicate whether it is in the past, present, or future
$('.time-block').each(function () {
  var time = $(this).data('time')
  var current = moment().hours()

  if (current < time) {
    $(this).children('.reminders').addClass('future')
  } else if (current > time) {
    $(this).children('.reminders').addClass('past')
  } else if (current === time) {
    $(this).children('.reminders').addClass('present')
  }

});

// save text input to the local storage
function clickHandler() {
  var data = $(this).siblings("textarea");
  var userInput = data.val();
  var id = data.attr("id");
  localStorage.setItem(id, userInput);
};

$(".saveBtn").click(clickHandler)

// retrieve & display text
$("#x1").val(localStorage.getItem("x1"))
$("#x2").val(localStorage.getItem("x2"))
$("#x3").val(localStorage.getItem("x3"))
$("#x4").val(localStorage.getItem("x4"))
$("#x5").val(localStorage.getItem("x5"))
$("#x6").val(localStorage.getItem("x6"))
$("#x7").val(localStorage.getItem("x7"))
$("#x8").val(localStorage.getItem("x8"))
$("#x9").val(localStorage.getItem("x9"))

