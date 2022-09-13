//Important Variables
const color = document.querySelector('.color');
const text = document.querySelector('.text');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const colorList = ['#FFFFFF'];
let nowColor = colorList[colorList.length - 1];
let index = colorList.indexOf(`${nowColor}`);

//Obtains a Hex value of a color and pushes it into the colorList array.
function getColor() {
  function stringHex(num) {
    const hex = '0123456789ABCDEF';
    let string = '';
    for (let i = 0; i < num; ++i) {
      string += hex.charAt(Math.random() * hex.length); // hex.length is 16.
    }
    return string;
  }
  let newColor = stringHex(6); // 6 because the color is only of 6 digits.
  colorList.push(`#${newColor}`);
}

// Actually puts the color and color name on the DOM.
function theAction() {
  color.style.backgroundColor = `${colorList[index]}`;
  text.textContent = `${colorList[index]}`;
}

// To create a Dangling Pointer.
function dangling(kee) {
  if (kee == 'd') {
    if ((nowColor = colorList[colorList.length - 1])) {
      index++;
      getColor();
      theAction();
      console.log(index);
    } else {
      theAction();
      console.log(index);
    }
  }
  if (kee == 'a') {
    if (nowColor == colorList[0]) {
      theAction();
      console.log(index);
    } else if (index > 0) {
      index--;
      theAction();
      console.log(index);
    } else return;
  }
}

//Events.
//(keypress)
document.addEventListener('keypress', function (e) {
  let nowColor = color.style.background;
  dangling(e.key);
});
//(click/tap)
right.addEventListener('click', function () {
  let kee = 'd';
  dangling(kee);
});
left.addEventListener('click', function () {
  let kee = 'a';
  dangling(kee);
});

//To not keep the page empty on load up.
text.textContent = `${colorList[index]}`;
