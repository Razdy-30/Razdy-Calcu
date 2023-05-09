function one() {
	document.getElementById("screen").value += '1';
};

function two() {
	document.getElementById("screen").value += '2';
};

function three() {
	document.getElementById("screen").value += '3';
};

function four() {
	document.getElementById("screen").value += '4';
};

function five() {
	document.getElementById("screen").value += '5';
};

function six() {
	document.getElementById("screen").value += '6';
};

function seven() {
	document.getElementById("screen").value += '7';
};

function eight() {
	document.getElementById("screen").value += '8';
};

function nine() {
	document.getElementById("screen").value += '9';
};

function dot() {
	document.getElementById("screen").value += '.';
};

function zero() {
	document.getElementById("screen").value += '0';
};

function add() {
	document.getElementById("screen").value += ' + ';
};

function mini() {
	document.getElementById("screen").value += ' - ';
};

function multi() {
	document.getElementById("screen").value += ' * ';
};

function divi() {
	document.getElementById("screen").value += ' / ';
};

function funclear() {
	document.getElementById("screen").value = '';
};

function equal() {
	var evaluate = eval(document.getElementById("screen").value);
	document.getElementById("screen").value = evaluate;
};


function del() {
	document.getElementById("screen").value = document.getElementById("screen").value.substr(0,document.getElementById("screen").value.length-1);
};

