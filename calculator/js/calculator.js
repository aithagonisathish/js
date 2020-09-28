//calculator backend manupulations
document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    let check = event.target.textContent;
    if (check == "=") {
      equalTo();
    } else if (check == "C") {
      clean();
    } else if (check == "D") {
      dele();
    } else if (check == "h") {
      history();
    } else {
      insertnum(check);
    }
  }
});

var exp = "",
  number,
  operator,
  equal = true;
var textview = document.forms["myform"]["textview"];
function insertnum(num) {
  if (equal) {
    exp = num;
    textview.value = exp;
    number = true;
    equal = false;
  } else {
    exp = textview.value + num;
    textview.value = exp;
    number = true;
  }
}

function insertop(op) {
  textview.value = exp + op;
  operator = true;
  equal = false;
}

function equalTo() {
  if (exp) {
    var sam = exp;
    exp = eval(exp);

    textview.value = exp;
    sam = sam + "=" + exp;
    hstry.push(sam);
    equal = true;
    number = false;
  } else {
    var x = textview.value;
    x = eval(x);
    textview.value = x;
  }
}

function clean() {
  exp = "";
  textview.value = exp;
}

function dele() {
  exp = exp.slice(0, -1);
  textview.value = exp;
}

var p = document.querySelector("p");
function history() {
  for (var i = 0; i < hstry.length; i++) {
    p.innerText = hstry[i];
  }
}
function myFunction(event) {
  var x = event.keyCode;
  if (x == 13) {
    event.preventDefault();
    event.stopPropagation();
    equalTo();
  }
}
