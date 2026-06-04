const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString('en-US'));
  clock.innerHTML = date.toLocaleTimeString('en-US');
}, 1000);
