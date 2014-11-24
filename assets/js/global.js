$().ready(function() {
	// carousel
	$(document).ready(function(){
	     $('.bxslider').bxSlider({
		  touchEnabled:true,
		  pager: false,
		});
	});
	// faq taggle
	$( "#faqHelp h3" ).click(
	  function() {
		if($(this).hasClass( "selectedElement" )){
			$(this).removeClass( "selectedElement" );
			$(this).next().slideUp();
		}else{
			$( this ).addClass( "selectedElement" );
			$(this).next().slideDown();
		}
	  });
	// validate login form on keyup and submit
	$("#loginform").validate({
		rules: {
			login_email: {
				required: true,
				email: true
			},
			login_password: {
				required: true
			}
			
		},
		messages: {
			login_email: "Please enter a valid email address",
			login_password: {
				required: "Please provide a password"
			}				
		},
		submitHandler: function() {
			alert("login!");
		}
	});
	// validate signup form on keyup and submit
	$("#pie_regiser_form").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			password: {
				required: true,
				minlength: 8
			},
			confirm_password: {
				required: true,
				minlength: 8,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			agree: "required"
		},
		messages: {
			firstname: "Please enter your first name",
			lastname: "Please enter your last name",
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 8 characters long"
			},
			confirm_password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 8 characters long",
				equalTo: "Password confirm and Password does not match"
			},
			email: "Please enter a valid email address",
			agree: "Please accept our policy"
		},
		submitHandler: function() {
			alert("registration!");
		}
	});

	// propose username by combining first- and lastname
	$("#agentProfileform").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 8
			},
			confirm_password: {
				required: true,
				minlength: 8,
				equalTo: "#password"
			},
			country: "required"
		},
		messages: {
			firstname: "Please enter your first name",
			lastname: "Please enter your last name",
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 8 characters long"
			},
			confirm_password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 8 characters long",
				equalTo: "Password confirm and Password does not match"
			},
			email: "Please enter a valid email address",
			country: "Please enter the country"
		},
		submitHandler: function() {
			alert("agentProfileform!");
		}
	});
	
	// Datepicker
	$(function() {
		$('.popupDatepicker').datepick();
	});
    //  Customise Select Option
	$('select').chosen({
		disable_search_threshold: 10
	});
	$("#viewOrder_chzn .chzn-results li").on('click', function(){
		var changableElement = $("#viewOrder_chzn .chzn-single span");
		var currentValue = $.trim($("#viewOrder_chzn .chzn-single span").text().toLowerCase());
		if(currentValue == 'grid'){
			$(".properties-grid-view").css('display','block');
			$(".properties-list-view").css('display','none');
			imageUrl = "../assets/img/grid.png";
			changableElement.css('background-image','url(' + imageUrl + ')');
		}
		else if(currentValue == 'list'){
			$(".properties-grid-view").css('display','none');
			$(".properties-list-view").css('display','block');
			imageUrl = "../assets/img/list.png";
			changableElement.css('background-image','url(' + imageUrl + ')');
		}
	});
});

$(document).ready(function() {
	$('#inputRent').prop('checked', true).change();
	$("#inputRent").ezMark();
	$('#inputRent').on('change', function(){
		$("#display_map").toggle("slow");
	});
  });
