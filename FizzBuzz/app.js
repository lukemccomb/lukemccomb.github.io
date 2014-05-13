$(document).ready(function() {
    
    function addNum() {
        var num = $("#num").val();
        if(num.length > 0 || num % 1 === 0) {            
            for (var i = 1; i <= num; i++) {
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
        }
        else {
            alert("Please Enter a number and press enter");
        }
    }

    function enterItem() {
		$("#num").bind('keypress', function(e) {
			if (e.keyCode == 13) {
				addNum();
			}
		});
	}
	enterItem();       
});     