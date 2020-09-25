var container = document.querySelector(".container");
//class for Creating element
class CustomElement {
  constructor(tag) {
    this.tag = tag;
  }
  create(props) {
    var elem = document.createElement(this.tag);
    this.elem = elem;

    if (props) {
      if (props.class) {
        elem.classList.add(props.class);
      }
      if (props.label) {
        elem.innerText = props.label;
      }
      if (props.onClick) {
        elem.addEventListener("click", props.onClick);
      }
    }
  }
  render(parent) {
    if (parent && parent.appendChild) {
      parent.appendChild(this.elem);
    }
  }
}

//class for creating button
class CustomButton extends CustomElement {
  constructor() {
    super("button");
  }
}

document.addEventListener("DOMContentLoaded", init); //for event listners whenever events are created

//buttons and inner text
var arr = [
  " ",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "zero",
  "add",
  "sub",
  "mul",
  "div",
  "eq",
  "clr",
];
var arrinner = [
  " ",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "0",
  "+",
  "-",
  "*",
  "/",
  "=",
  "c",
];

function init() {
  //loop for buttons and props
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == "one") {
      var label = one;
    } else if (arr[i] == "two") {
      label = two;
    } else if (arr[i] == "three") {
      label = three;
    } else if (arr[i] == "four") {
      label = four;
    } else if (arr[i] == "five") {
      label = five;
    } else if (arr[i] == "six") {
      label = six;
    } else if (arr[i] == "seven") {
      label = seven;
    } else if (arr[i] == "eight") {
      label = eight;
    } else if (arr[i] == "nine") {
      label = nine;
    } else if (arr[i] == "zero") {
      label = zero;
    } else if (arr[i] == "add") {
      label = add;
    } else if (arr[i] == "sub") {
      label = sub;
    } else if (arr[i] == "mul") {
      label = mul;
    } else if (arr[i] == "div") {
      label = div;
    } else if (arr[i] == "eq") {
      label = eq;
    } else if (arr[i] == "clr") {
      label = clr;
    } else {
      label = error;
    }

    arr[i] = new CustomButton();
    arr[i].create({
      class: "btn" + i,
      label: arrinner[i],
      onClick: label,
    });
    arr[i].render(container);
  }
}

function one() {
  numb(1);
}
function two() {
  numb(2);
}
function three() {
  numb(3);
}
function four() {
  numb(4);
}
function five() {
  numb(5);
}
function six() {
  numb(6);
}
function seven() {
  numb(7);
}
function eight() {
  numb(8);
}
function nine() {
  numb(9);
}
function zero() {
  numb(0);
}
function add() {
  oper("+");
}
function sub() {
  oper("-");
}
function mul() {
  oper("*");
}
function div() {
  oper("/");
}
function eq() {}
function clr() {}

var exp = "",
  number,
  operator,
  equal = true;
var hstry = [];
var textview = document.forms["myform"]["textview"];
function numb(num) {
  if (equal) {
    textview.value = exp;
    number = true;
    equal = false;
  } else {
    exp = textview.value + num;
    textview.value = exp;
    number = true;
  }
}

function oper(op) {
  textview.value = exp + op;
  operator = true;
  equal = false;
}

function eq() {
  if (exp) {
    var sam = exp;
    exp = eval(exp);
    sam = sam + "=" + exp;
    hstry.push(sam);
    textview.value = exp;
    equal = true;
    number = false;
  } else {
    var x = textview.value;
    x = eval(x);
    textview.value = x;
  }
}

function clr() {
  exp = "";
  textview.value = exp;
}
function history() {
  for (var i = 0; i < hstry.length; i++) {
    textview.value = hstry[i];
  }
}
