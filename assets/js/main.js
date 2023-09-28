//  showClock = () => {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
  
//     // Pad the hours and minutes with zeros if they are less than 10let   hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;
  
//     // Set the content of the clock div with the current time.
//     document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
//   }
  
//   // Set the clock to start ticking.
//   setInterval(showClock, 1000);