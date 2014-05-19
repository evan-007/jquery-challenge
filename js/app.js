


// check to see if input values are numbers

// plus logic
var addNumbers = function(x, y){
	var answer = parseFloat(x) + parseFloat(y);
	$('#xvalue').text(x);
	$('#yvalue').text(y);
	$('#operation').text(' plus ');
	$('#result').text(answer);
};

// subtraction logic
var subtractNumbers = function(x, y){
	var answer = parseFloat(x) - parseFloat(y);
	$('#xvalue').text(x);
	$('#yvalue').text(y);
	$('#operation').text(' minus ');
	$('#result').text(answer);
};


$(document).ready(function(){
	$('#plus').on('click', function(){
		var x = $('#x').val();
		console.log(x);
		var y = $('#y').val();
		console.log(y);
		addNumbers(x, y);
	});

	$('#minus').on('click', function(){
		var x = $('#x').val();
		console.log(x);
		var y = $('#y').val();
		console.log(y);
		subtractNumbers(x, y);
	});
});