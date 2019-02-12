$(document).ready(function() {
	var counter = 1;
	let message = `<div id="message-${counter}" class="alert alert-success alert-dismissible fade show" role="alert">` +
  					`<strong>Oh No!</strong> You just broke the law ${counter} times!` +
  					`<button type="button" class="close" data-dismiss="alert" aria-label="Close">` + 
    					`<span aria-hidden="true">&times;</span>` +
  					`</button>` +
					`</div>`

	$("#messages").append(message);
    $("#message-" + counter).fadeTo(2000, 0).slideUp(500, function(){
      	$(this).remove(); 
    });

	$("#break-the-law").click(function() {
		counter += 1;
		let message = `<div id="message-${counter}" class="alert alert-success alert-dismissible fade show" role="alert">` +
  					`<strong>Oh No!</strong> You just broke the law ${counter} times!` +
  					`<button type="button" class="close" data-dismiss="alert" aria-label="Close">` + 
    					`<span aria-hidden="true">&times;</span>` +
  					`</button>` +
					`</div>`

		let invite = `<div id="message-badass" class="alert alert-primary alert-dismissible fade show" role="alert">` +
  					`<strong>Wow!</strong> You really are a badass. You're invited to <a href='https://0x00sec.org/'>0x00sec.org</a>` +
  					`<button type="button" class="close" data-dismiss="alert" aria-label="Close">` + 
    					`<span aria-hidden="true">&times;</span>` +
  					`</button>` +
					`</div>`

		$("#broken-counter").html(counter);
		if (counter == 5) {
			$("#video").append(`<iframe width="560" height="315" src="https://www.youtube.com/embed/L397TWLwrUU?autoplay=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>`);
		}

		if (counter == 34) {
			$("#messages").append(invite)
		}
		$("#messages").append(message);
    	$("#message-" + counter).fadeTo(2000, 0).slideUp(500, function(){
        	$(this).remove(); 
    	});
	});
});
