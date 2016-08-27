function updateCategoryTags(){
	  	var c1 = "Towing";
	  	var c2 = "Roadside Assistance";
	  	var c3 = "Inspection";
	  	var c4 = "Repairs";
	  	var c5 = "Maintenance";

	  	if($("#cat1").val()){
	  		c1 = $("#cat1").val();
	  	}
	  	if($("#cat2").val()){
	  		c2 = $("#cat2").val();
	  	}
	  	if($("#cat3").val()){
	  		c3 = $("#cat3").val();
	  	}
	  	if($("#cat4").val()){
	  		c4 = $("#cat4").val();
	  	}
	  	if($("#cat5").val()){
	  		c5 = $("#cat5").val();
	  	}

	  	$("#tags-ex").text(c1 + " | " + c2 + " | " + c3 + " | " + c4 + " | " + c5);
	  };
function updateLocation(){
		var city = "Pittsburgh";
		if($("#service_contact_city").val()){
			city = $("#service_contact_city").val();
		}
	  	var state = "PA";
	  	if($("#service_contact_state").val()){
	  		state = $("#service_contact_state").val();
	  	}
	  	var output = city + ", " + state;
	  	$("#location-ex").text(output);
};
function updatePhone(){
	var phone = "555.555.5555";
	if($("#service_contact_phone").val()){
		phone = $("#service_contact_phone").val();
	}
	$("#phone-ex").text(phone);
}

function ready(){
	// Updating the title
	$("#service_title").keyup(function(){
	  	var str = $(this).val();
	  	if(!$(this).val()){
	  		$("#title-ex").text("Bob's Towing");
	  	}
	  	else{
	  		$("#title-ex").text(str);
	  	}
	  });

	  // Updating the category
	  $("#service_category").keyup(function(){
	  	var str = $(this).val();
	  	if(!$(this).val()){
	  		$("#category-ex").text("Auto Service");
	  	}
	  	else{
	  		$("#category-ex").text(str);
	  	}
	  });

	  // Updating the tags
	  $("#cat1").keyup(updateCategoryTags);
	  $("#cat2").keyup(updateCategoryTags);
	  $("#cat3").keyup(updateCategoryTags);
	  $("#cat4").keyup(updateCategoryTags);
	  $("#cat5").keyup(updateCategoryTags);

	  // Updating the location
	  $("#service_contact_city").keyup(updateLocation);//function(){
	  $("#service_contact_state").change(updateLocation);//function(){

	  // Updating the phone number
	  $("#service_contact_phone").keyup(updatePhone);

	  // resetting any empty values
	  // if(!$("service_title").val() && !$("service_title").is(":focus")){
	  // 	$("service_title").text("Bob's Towing");
	  // }
};


$(document).ready(ready);
$(document).on('page:load', ready)