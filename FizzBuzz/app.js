$(document).ready(function() {

		for (var i = 1; i < 101; i++) {
			if (i % 3 === 0 ) {
				if (i % 5 === 0) {
					document.write("<p>FizzBuzz</p>");
				} else {
					document.write("<p>Fizz</p>");
				}   
			} else if (i % 5 === 0) {
				if (i % 3 === 0) {
					document.write("<p>FizzBuzz</p>");
				} else {
					document.write("<p>Buzz</p>");
				}
			} else {
				document.write("<p>" + i + "</p>");
			}
			
		}
		
});