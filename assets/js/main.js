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

		$("#broken-counter").html(counter);
		if (counter == 7) {
			$("#video").append(`<iframe width="560" height="315" src="https://www.youtube.com/embed/L397TWLwrUU" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
		}
		$("#messages").append(message);
    	$("#message-" + counter).fadeTo(2000, 0).slideUp(500, function(){
        	$(this).remove(); 
    	});
	});
});