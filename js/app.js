$(document).ready(function() {
	var userInput = window.prompt("Enter a number");
	var userNumber = parseInt(userInput);
	
	
		for(var i = 1; i <= userNumber; i++) {
			

			if(i % 15 === 0){


				$('#fizzbuzz').append('Fizz Buzz' + '<br />');


			}else if(i % 3 === 0){


				$('#fizzbuzz').append('Fizz' + '<br />');


			}else if(i % 5 === 0){


				$('#fizzbuzz').append('Buzz' + '<br />');


			}else{


				$('#fizzbuzz').append(i + '<br />');

			}
		}
	})


