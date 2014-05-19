// check if input is NaN
var useNumbersBro = function(x, y){
	if ( (isNaN(x)) && (isNaN(y)) )  {
		postXError(x);
		postYError(y);
	}
	else if (isNaN(x)) {
		postXError(x);
	}
	else if (isNaN(y)) {
		postYError(y);
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

// click events
$(document).ready(function(){
	$('#plus').on('click', function(){
		clearAlerts();

		var x = $('#x').val();
		var y = $('#y').val();

		useNumbersBro(x, y);
		addNumbers(x, y);
	});

	$('#minus').on('click', function(){
		clearAlerts();

		var x = $('#x').val();
		var y = $('#y').val();

		useNumbersBro(x, y);
		subtractNumbers(x, y);
	});
});