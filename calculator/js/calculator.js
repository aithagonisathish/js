//getting container element into js

var container = document.querySelector('.container'); 

//display creation
var display = document.createElement('form');
display.setAttribute('name','myform');
var input=document.createElement("input");
input.setAttribute('type','text');
input.setAttribute('placeholder','0');
input.setAttribute('name','textview');
display.append(input);
//creating buttons in js

var btn1    = document.createElement('button');
var btn2    = document.createElement('button');
var btn3    = document.createElement('button');
var btn4    = document.createElement('button');
var btn5    = document.createElement('button');
var btn6    = document.createElement('button');
var btn7    = document.createElement('button');
var btn8    = document.createElement('button');
var btn9    = document.createElement('button');
var btn0    = document.createElement('button');
var btnc    = document.createElement('button');
var btnmul  = document.createElement('button');
var btnadd  = document.createElement('button');
var btnsub = document.createElement('button');
var btndiv = document.createElement('button');
var btnoper = document.createElement('button');
//button onclick event

btn1.setAttribute('onclick','insertnum(1)');
btn2.setAttribute('onclick','insertnum(2)');
btn3.setAttribute('onclick','insertnum(3)');
btn4.setAttribute('onclick','insertnum(4)');
btn5.setAttribute('onclick','insertnum(5)');
btn6.setAttribute('onclick','insertnum(6)');
btn7.setAttribute('onclick','insertnum(7)');
btn8.setAttribute('onclick','insertnum(8)');
btn9.setAttribute('onclick','insertnum(9)');
btn0.setAttribute('onclick','insertnum(0)');
btnmul.setAttribute('onclick','insertop("*")');
btnadd.setAttribute('onclick','insertop("+")');
btnsub.setAttribute('onclick','insertop("-")');
btndiv.setAttribute('onclick','insertop("/")');
btnoper.setAttribute('onclick','equalTo()');
btnc.setAttribute('onclick','clean()');

//assinging value to buttons

btn1.innerText = '1';
btn2.innerText = '2';
btn3.innerText = '3';
btn4.innerText = '4';
btn5.innerText = '5';
btn6.innerText = '6';
btn7.innerText = '7';
btn8.innerText = '8';
btn9.innerText = '9';
btn0.innerText = '0';
btnc.innerText = 'clear';
btnmul.innerText = '*';
btnadd.innerText = '+';
btnsub.innerText = '-';
btndiv.innerText = '/';
btnoper.innerText = '=';


// css stuff
container.style.cssText ='';
container.style.cssText ='border-radius:0px 25px 0px;position:absolute;top:80px;left:500px;width:25%;grid-gap: 10px;background-color: #2196F3;padding: 10px;display: grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;text-align: center;'
btn1.style.cssText = '  padding: 20px;font-size: 30px; grid-column: 1/2;grid-row:3/4;';
btn2.style.cssText = ' padding: 20px;font-size: 30px; grid-column: 2/3;grid-row:3/4;';
btn3.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 3/4;grid-row:3/4;';
btn4.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 1/2;grid-row:4/5;';
btn5.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 2/3;grid-row:4/5;';
btn6.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 3/4;grid-row:4/5;';
btn7.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 1/2;grid-row:5/6;';
btn8.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 2/3;grid-row:5/6;';
btn9.style.cssText = ' padding: 20px;font-size: 30px; grid-column: 3/4;grid-row:5/6;';
btn0.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 1/4;grid-row:6/7;';
btnc.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 1/4;grid-row:2/3;';
btnmul.style.cssText = 'padding: 20px;font-size: 30px;  grid-column: 4/5;grid-row:2/3;';
btnadd.style.cssText = 'padding: 20px;font-size: 30px;  grid-column:  4/5;grid-row:3/4;';
btnsub.style.cssText = 'padding: 20px;font-size: 30px; grid-column:  4/5;grid-row:4/5';
btndiv.style.cssText = ' padding: 20px;font-size: 30px; grid-column:  4/5;grid-row:5/6;';
btnoper.style.cssText = 'padding: 20px;font-size: 30px;  grid-column:  4/5;grid-row:6/7;';
display.style.cssText = 'grid-column: 1/5;grid-row:1/2;';
input.style.cssText = 'height:80%;font-size: 30px;direction:RTL;color: transparent;text-shadow: 0 0 0 #2196f3;width:98%';
container.append(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn0,btnadd,btnc,btndiv,btnmul,btnoper,btnsub,display);

//calculator backend manupulations
var exp = '',number,operator,equal=true ;
var textview = document.forms['myform']['textview'];
function insertnum(num){
    if(equal){
    exp = num;
    textview.value = exp;
    number = true;
    equal = false ;
    }
    else{
        exp = textview.value+num;
        textview.value = exp;
        number = true ;
    }
}

function insertop(op){
textview.value = exp + op;
operator = true ;
equal = false;

}

function equalTo()
{
if(exp){

    exp = eval(exp);
    textview.value = exp;
    equal = true ;
    number = false;


}
else{
    var x = textview.value;
    x = eval(x);
    textview.value=x;
}
}

function clean()
{
    exp = '';
    textview.value = exp;
}
console.log(document);