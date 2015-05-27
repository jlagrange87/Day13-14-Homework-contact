$(document).ready(start);

function start(e){

	$("#form-box").on("submit",function(e){
    	e.preventDefault();
  	});

	var $form = $("#form-box");
	var $name = $("#name");
	var $email = $("#email");
	var $website = $("#website");
	var $message = $("#message");
	var $btn = $("#btn");
	
	$form.on("submit", validate);
	$form.on("keyup", invalidText);

	function validate(e){
		var foundError = false;
			var $nameError = ("#name-error");
			var $emailError = ("#email-error");
			var $websiteError = ("#website-error");
			var $messageError = ("#message-error");

			if($name.val() == ""){
				$("#name").siblings('#name-error').addClass('active-error').html("Name cannot be left empty");
				foundError = true;
			}
			else {
				$("#name").siblings("#name-error").removeClass("active-error");
				foundError = false;
			}

			if($email.val() == ""){
				$("#email").siblings('#email-error').addClass('active-error').html("Email cannot be left empty");
				foundError = true;
			}
			else if($email.val().indexOf("@") == -1){
				$("#email").siblings('#email-error').addClass('active-error').html("Email must contain an '@'");
				foundError = true;
			}
			else {
				$("#email").siblings("#email-error").removeClass("active-error");
				foundError = false;
			}

			if($website.val() == ""){
				$("#website").siblings('#website-error').addClass('active-error').html("Website cannot be left empty");
				foundError = true;
			}
			else if($website.val().indexOf("http://") == -1){
				$("#website").siblings('#website-error').addClass('active-error').html("Website must start with http://");
				foundError = true;
			}
			else {
				$("#website").siblings("#website-error").removeClass("active-error");
				foundError = false;
			}

			if($message.val() == ""){
				$("#message").siblings('#message-error').addClass('active-error').html("Message cannot be left empty");
				foundError = true;
			}
			else {
				$("#message").siblings("#message-error").removeClass("active-error");
				foundError = false;
			}

		if(foundError === false){
			$("form").css("display", "none");
			$("div").addClass("success");
			$("div").html("Thank you for contacting us " +$name.val()+ ". We will be in touch shortly.")
		}
	}

	function invalidText(e){
		var $nameError = ("#name-error");
		var $emailError = ("#email-error");
		var $websiteError = ("#website-error");
		var $messageError = ("#message-error");
		
		if($name.val() == ""){
			$("#name").css("border-left-color", "red");

		}
		else {
			$("#name").css("border-left-color", "black");
		}

		if($email.val() == ""){
			$("#email").css("border-left-color", "red");
		}
		else if($email.val().indexOf("@") == -1){
			$("#email").css("border-left-color", "red");
		}
		else {
			$("#email").css("border-left-color", "black");
		}

		if($website.val() == ""){
			$("#website").css("border-left-color", "red");

		}
		else if($website.val().indexOf("http://") == -1){
			$("#website").css("border-left-color", "red");

		}
		else {
			$("#website").css("border-left-color", "black");
		}

		if($message.val() == "" || $message.val() == "O"){
			$("#message").css("border-left-color", "red");

		}
		else {
			$("#message").css("border-left-color", "black");
		}
	}
}