var validateInput = function(x, y){
	if ( (isNaN(x)) && (isNaN(y)) )  {
		return false;
		// postXError(x);
		// postYError(y);
	}
	else if (isNaN(x)) {
		return false;
		// postXError(x);
	}
	else if (isNaN(y)) {
		return false;
		// postYError(y);
	}
};

var missingValues = function(x){
	if (isNaN(x)) {
		$('#inputalert').text('Did you even fill out the form?');
	}
};

// display NaN errors for user
var postXError = function(x) {
	$('#x-alert').text("Are you sure "+"'"+x+"'"+" is a number bro?");
};

var postYError = function(y) {
	$('#y-alert').text("Are you sure "+"'"+y+"'"+" is a number bro?");
};

var clearAlerts = function() {
	$('#x-alert').text('');
	$('#y-alert').text('');
	$('#inputalert').text('');
};


var addNumbers = function(x, y){
	var answer = parseFloat(x) + parseFloat(y);
	missingValues(answer);

	$('#xvalue').text(x);
	$('#yvalue').text(y);
	$('#operation').text(' plus ');
	$('#result').text(answer);
};

var subtractNumbers = function(x, y){
	var answer = parseFloat(x) - parseFloat(y);
	missingValues(answer);

	$('#xvalue').text(x);
	$('#yvalue').text(y);
	$('#operation').text(' minus ');
	$('#result').text(answer);
};

var postResults = function(x, y, result, operator){
	$('#xvalue').text(x);
	$('#yvalue').text(y);
	$('#result').text(result);
	if (operator === '+') {
		$('#operation').text(' plus ');
	} else if (operator === '-') {
		$('#operation').text(' minus ');
	}
};

var calculate = function(x, y, operator) {
	if (operator === '+') {
		return parseFloat(x) + parseFloat(y);
	} else if (operator === '-') {
		return parseFloat(x) - parseFloat(y);
	}
};

// click events
$(document).ready(function(){
	$('#plus').on('click', function(event){
    event.preventDefault();
		clearAlerts();

		var x = $('#x').val();
		var y = $('#y').val();

		validateInput(x, y);
		addNumbers(x, y);
	});

	$('#minus').on('click', function(event){
		clearAlerts();
    event.preventDefault();
		var x = $('#x').val();
		var y = $('#y').val();

		validateInput(x, y);
		subtractNumbers(x, y);
	});
});