$(document).ready(function() {
	//text input
	console.log('Smells like updog in here');
	
	var items = 0;

	function enterItem() {
		$("#newitem").bind('keypress', function(e) {
			if (e.keyCode == 13) {
				addItem();
			}
		});
	}

	enterItem();

	function addItem() {
		var item = $("#newitem").val();
		var addli = '<li class="need"><img src="images/check.png" class="check">' + item + '<img src="images/x.png" class="x"></li>';
		if(item.length > 0){            
			$("#list").append(addli);
			$("#newitem").val('');
		}
		else {
			alert("What do you need?");
		}
	}

	$(document).on("click", "#reset", function() {
		$("#list").empty();
		items = 0;
	});

	$(document).on("click", ".check", function() {
		$(this).closest('li').toggleClass("strike");
		items = 0;
	}); 

	$(document).on("click", ".x", function() {
		$(this).closest('li').fadeOut(300);
	});
});