var validateInput = function(x, y){
	if ( (isNaN(x)) && (isNaN(y)) )  {
		console.log('x and y fail');
		return false;
	}
	else if (isNaN(x)) {
		console.log('x fails');
		return 'x';
	}
	else if (isNaN(y)) {
		console.log('y fails');
		return 'y';
	}
	else {
		console.log('both ok');
		return true;
	}
};

var postError = function(id, x) {
	$('#'+id+'-alert').text('Are you sure '+"'"+x+"'"+" is a number?");
};

var clearAlerts = function() {
	$('#x-alert').text('');
	$('#y-alert').text('');
	$('#inputalert').text('');
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

var calculateAndPost = function(operator){
	clearAlerts();
	var first = getInput('x');
	var second = getInput('y');
	if((validateInput(first, second)) === false) {
		postError('x', first);
		postError('y', second);
	}
	else if ((validateInput(first,second)) === 'x') {
		postError('x', first);
	}
	else if ((validateInput(first, second)) === 'y') {
		postError('y', second);
	}
	else {
		postResults(first, second, calculate(first, second, operator), operator);
	}
};

var getInput = function(x){
	var input = $("#"+x).val();
	console.log(input);
	return input;
};

$(document).ready(function(){
	$('#plus').on('click', function(event){
    event.preventDefault();
    calculateAndPost('+');
	});

	$('#minus').on('click', function(event){
    event.preventDefault();
    calculateAndPost('-');
	});
});