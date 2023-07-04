var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{

      // display the string on the webpage
      var clock = document.getElementById('clock');
   
      var currentTime = new Date();
   
      // extract the hours, minutes, and seconds from the current time
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();

   
   // determine the meridian (AM or PM) based on the hours component
   var meridian = "AM";
   if (hours >= 12) {
       meridian = "PM";
      }

    
      //cambia hora para ponerlo en formato 12 horas
    if (hours > 12) {
      hours = hours - 12;
    }
    
    // Agregar un cero delante de los minutos y segundos si tienen solo un dígito
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
   
      // put together the string that displays the time
      var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
   
      // display the time string in the clock element
      clock.innerText = clockTime;
  };


// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
var currentTime = new Date();
time = currentTime.getHours();
var timeEventJS = document.getElementById("timeEvent");

  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  
  
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {

    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
setInterval(showCurrentTime, 1000);
updateClock();
setInterval(updateClock, 1000);


// Getting the clock to increment once a second


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;

};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);