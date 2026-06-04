const randomColor = function () {
  const hex = '123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interValId;
const startChagingColor = function () {
  if (!interValId) {
    interValId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChagingColor = function () {
  clearInterval(interValId);
  interValId = null;
};

document.querySelector('#start').addEventListener('click', startChagingColor);

document.querySelector('#stop').addEventListener('click', stopChagingColor);
