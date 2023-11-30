//Get elements from the DOM
const menu = document.querySelector('.menu');
// const menuBtn = document.querySelector('.menu-btn');

//Toggle open/close menu 
// menuBtn.addEventListener('click', () => {
//   menu.classList.toggle('menu-open');
// });


const toggles = document.querySelectorAll('.faq-toggle')
 
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

// Set the date we're counting down to https://www.geeksforgeeks.org/create-countdown-timer-using-javascript/
  // Set the date we're counting down to
  // Set the date we're counting down to
  var deadline = new Date("aug 5, 2023 15:37:25").getTime();
  var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("demo1").innerHTML = days + "d " 
  + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("demo2").innerHTML = days + "d " 
  + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("demo3").innerHTML = days + "d " 
  + hours + "h " + minutes + "m " + seconds + "s ";
      if (t < 0) {
          clearInterval(x);
          document.getElementById("demo1").innerHTML = "EXPIRED";
          document.getElementById("demo2").innerHTML = "EXPIRED";
          document.getElementById("demo3").innerHTML = "EXPIRED";
      }
  }, 1000);