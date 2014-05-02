$(document).ready(function() {
//signature hello world
	console.log('Smells like updog in here');
//Declaring global var
	var items = 0;
//Gathering data from input on pressing 'enter'
	function enterItem() {
		$("#newitem").bind('keypress', function(e) {
			if (e.keyCode == 13) {
				addItem();
			}
		});
	}
//run
	enterItem();
//add data as item of list, must have value
	function addItem() {
		var item = $("#newitem").val();
		var addli = '<li class="need"><img src="images/check.png" class="check">' + item + '<img src="images/x.png" class="x"></li>';
		if(item.length > 0) {            
			$("#list").append(addli);
			$("#newitem").val('');
		}
		else {
			alert("What do you need?");
		}
	}
//reset button
	$(document).on("click", "#reset", function() {
		$("#list").empty();
		items = 0;
	});
//strike through
	$(document).on("click", ".check", function() {
		$(this).closest('li').toggleClass("strike");
		items = 0;
	}); 
//remove
	$(document).on("click", ".x", function() {
		$(this).closest('li').fadeOut(300);
	});
//mouseover logo animate class change
	$('i img').on('mouseenter',function() {
        $('.logo').addClass('logoh');
    });
    $('i img').on('mouseleave',function() {
        $('.logo').removeClass('logoh');
    });
});