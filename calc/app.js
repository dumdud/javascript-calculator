var display = document.getElementById("text");
var num;
var num2;
var callback;
var overwrite = false;
display.innerHTML = 0;

document.querySelectorAll("#number").forEach((element) => {
  element.addEventListener("click", function () {
    if (display.innerHTML === "0" || overwrite) {
      overwrite = false;
      display.innerHTML = this.innerHTML;
    } else {
      display.innerHTML += this.innerHTML;
    }
  });
});

document.querySelectorAll("#operation").forEach((element) => {
  element.addEventListener("click", function () {
    if (this.innerHTML === "+") {
      callback = (num1, num2) => num1 + num2;
    } else if (this.innerHTML === "-") {
      callback = (num1, num2) => num1 - num2;
    } else if (this.innerHTML === "/") {
      callback = (num1, num2) => num1 / num2;
    } else if (this.innerHTML === "x") {
      callback = (num1, num2) => num1 * num2;
    }
    num = parseFloat(display.innerHTML);
    overwrite = true;
  });
});

document.getElementById("result").addEventListener("click", function () {
  num2 = parseFloat(display.innerHTML);
  if (num2 !== undefined) {
    if (callback) {
      result = callback(num, num2);
    }

    display.innerHTML = result;
    overwrite = true;
  } else if (num === undefined) {
    display.innerHTML = display.innerHTML;
  }
});

document.getElementById("delete").addEventListener("click", function () {
  if (display.innerHTML.length > 1) {
    display.innerHTML = display.innerHTML.slice(0, -1);
  } else {
    display.innerHTML = 0;
  }
});

document.getElementById("c").addEventListener("click", function () {
  (num = 0), (num2 = 0);
  display.innerHTML = 0;
});

document.getElementById("dot").addEventListener("click", function () {
  if (!display.innerHTML.includes(".")) {
    display.innerHTML = display.innerHTML + ".";
  }
});

document.getElementById("negative").addEventListener("click", function () {
  // (num = 0), (num2 = 0);
  if(display.innerHTML[0] !== '-' && display.innerHTML !== ''){
	  display.innerHTML = '-' +display.innerHTML;
  }else if (display.innerHTML !== '0'){
	  display.innerHTML = display.innerHTML.slice(1);
  }
  
});
