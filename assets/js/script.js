// current day is displayed at the top of the calendar
var dateTime = function () {
  var currentDay = document.getElementById("currentDay");
  var time = moment();

    currentDay.textContent = time.format("dddd, MMMM Do YYYY, h:mm a");

    setInterval(function () { dateTime(); }, 60000);

}

dateTime();

// each time block is color-coded to indicate whether it is in the past, present, or future
$('.time-block').each(function () {
  var time = $(this).data('time')
  console.log(time)
  var current = moment().hours()
  console.log(current)

  if (current < time) {
    $(this).children('.reminders').addClass('future')
  } else if (current > time) {
    $(this).children('.reminders').addClass('past')
  } else if (current === time) {
    $(this).children('.reminders').addClass('present')
  }

});

var storage = JSON.parse(localStorage.getItem("reminders")) || {};

//create a object loop that will take the key and assign the value of the key to the corresponding id of the textarea
for (var [key, value] of Object.entries(storage)) {
  var textArea = document.getElementById(key)
  localStorage.getItem(key)
  textArea.innerHTML = value
};


// this works only partially doesn;t save when refreshed
//event listener for saving button on reminders
$('.saveBtn').each(function(){
  $(this).on('click', function(event) {
    // click the save button for that time block, text for that event is saved in local storage
    var dataObject = ('description')

    // Set localStorage item
    localStorage.setItem('description', JSON.stringify(dataObject));

    // Retrieve the object from localStorage
    var retrievedObject = localStorage.getItem('description');

    // console.log retrieved item
    console.log('retrieved data Object: ', JSON.parse(retrievedObject));
  })
});





//     var id = "x" + event.target.id
//    var reminders = $('#'+ id).val();
//    storage[id] = reminders
//    localStorage.setItem("reminders", JSON.stringify(storage));
//      console.log("reminder was saved")