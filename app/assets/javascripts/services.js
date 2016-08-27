function updateCategoryTags(){
	  	var c1 = ""//"Towing";
	  	var c2 = ""//"Roadside Assistance";
	  	var c3 = ""//"Inspection";
	  	var c4 = ""//"Repairs";
	  	var c5 = ""//"Maintenance";
	  	var separator = " | "
	  	var output = "";

	  	//if all category text boxes are empty
	  	if(!$("#cat1").val() && !$("#cat2").val() && !$("#cat3").val() && !$("#cat4").val() && !$("#cat5").val()){
	  		// re-populate the example
	  		c1 = "Towing";
	  		c2 = "Roadside Assistance";
	  		c3 = "Inspection";
	  		c4 = "Repairs";
	  		c5 = "Maintenance";
	  		// add the placeholders
	  		$("#cat1").attr("placeholder", c1);
	  		$("#cat2").attr("placeholder", c2);
	  		$("#cat3").attr("placeholder", c3);
	  		$("#cat4").attr("placeholder", c4);
	  		$("#cat5").attr("placeholder", c5);
	  		output = c1 + separator + c2 + separator + c3 + separator + c4 + separator + c5;
	  	}
	  	else{
	  		// remove placeholders
	  		$("#cat1").removeAttr("placeholder");
	  		$("#cat2").removeAttr("placeholder");
	  		$("#cat3").removeAttr("placeholder");
	  		$("#cat4").removeAttr("placeholder");
	  		$("#cat5").removeAttr("placeholder");
	  		
	  		// get values
	  		c1 = $("#cat1").val();
	  		c2 = $("#cat2").val();
	  		c3 = $("#cat3").val();
	  		c4 = $("#cat4").val();
	  		c5 = $("#cat5").val();

	  		cArray = [];
	  		if ($("#cat1").val()) {
	  			cArray.push(c1);
	  			$("#cat1-ex-detail").text(c1);

	  		}
	  		if ($("#cat2").val()) {
	  			cArray.push(c2);
	  			$("#cat2-ex-detail").text(c2);
	  		}
	  		if ($("#cat3").val()) {
	  			cArray.push(c3);
	  			$("#cat3-ex-detail").text(c3);
	  		}
	  		if ($("#cat4").val()) {
	  			cArray.push(c4);
	  			$("#cat4-ex-detail").text(c4);
	  		}
	  		if ($("#cat5").val()) {
	  			cArray.push(c5);
	  			$("#cat5-ex-detail").text(c5);
	  		}
	  		cArray.forEach(function(item){
	  			output = output + item + separator;
	  		});
	  		output = output.substring(0, output.length - 3);
	  	}

	  	// if($("#cat1").val()){
	  	// 	c1 = $("#cat1").val();
	  	// }
	  	// if($("#cat2").val()){
	  	// 	c2 = $("#cat2").val();
	  	// }
	  	// if($("#cat3").val()){
	  	// 	c3 = $("#cat3").val();
	  	// }
	  	// if($("#cat4").val()){
	  	// 	c4 = $("#cat4").val();
	  	// }
	  	// if($("#cat5").val()){
	  	// 	c5 = $("#cat5").val();
	  	// }

	  	// $("#tags-ex").text(c1 + " | " + c2 + " | " + c3 + " | " + c4 + " | " + c5);
	  	$("#tags-ex").text(output);
	  	$("#tags-ex-detail").text(output);
	  };
function updateLocation(){
		var output;
		var city = "Pittsburgh";
		if($("#service_contact_city").val()){
			city = $("#service_contact_city").val();
		}
	  	var state = "PA";
	  	if($("#service_contact_state").val()){
	  		state = $("#service_contact_state").val();
	  	}
	  	var local = "Shadyside";
	  	if($("#service_contact_local").val()){
	  		local = $("#service_contact_local").val();
	  		output = city + ", " + state + " - " + local;
	  	}
	  	else{
	  		output = city + ", " + state;
	  	}
	  	$("#location-ex").text(output);
	  	$("#location-ex-detail").text(output);
};
function updatePhone(){
	var phone = "555.555.5555";
	if($("#service_contact_phone").val()){
		phone = $("#service_contact_phone").val();
	}
	$("#phone-ex").text(phone);
	$("#phone-ex-detail").text(phone);
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
	  	 $("#title-ex-detail").text($("#title-ex").text() + " - " + $("#category-ex").text());
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
	  	$("#title-ex-detail").text($("#title-ex").text() + " - " + $("#category-ex").text());
	  });

	  // Updating the tags
	  $("#cat1").keyup(updateCategoryTags);
	  $("#cat2").keyup(updateCategoryTags);
	  $("#cat3").keyup(updateCategoryTags);
	  $("#cat4").keyup(updateCategoryTags);
	  $("#cat5").keyup(updateCategoryTags);

	  // Updating the location
	  $("#service_contact_city").keyup(updateLocation);
	  $("#service_contact_state").change(updateLocation);
	  $("#service_contact_local").keyup(updateLocation);

	  // Updating the phone number
	  $("#service_contact_phone").keyup(updatePhone);


	  $("#service_brag").keyup(function(){
	  	var str = $(this).val();
	  	 if(!$(this).val()){
	  	 	$("#brag-ex").text("Best customer service in town");
	  	 }
	  	 else{
	  		$("#brag-ex").text(str);
	  	 }
	  });


	  $("#service_tell_me_more").keyup(function(){
	  	var str = $(this).val();
	  	 if(!$(this).val()){
	  	 	$("#tell-me-more-detail").text("Tell me more...");
	  	 }
	  	 else{
	  		$("#tell-me-more-detail").text(str);
	  	 }
	  });

	  $("#service_contact_name").keyup(function(){
	  	var str = $(this).val();
	  	 if(!$(this).val()){
	  	 	$("#name-ex-detail").text("Bob's Towing");
	  	 }
	  	 else{
	  		$("#name-ex-detail").text(str);
	  	 }
	  });


	  $("#service_contact_street").keyup(function(){
	  	var str = $(this).val();
	  	 if(!$(this).val()){
	  	 	$("#street-ex-detail").text("101 Abc Ave");
	  	 }
	  	 else{
	  		$("#street-ex-detail").text(str);
	  	 }
	  });


	  $("#service_contact_zip").keyup(function(){
	  	var str = $("#service_contact_city").val() + ", " + $("#service_contact_state").val() + " " + $(this).val();
	  	 if(!$(this).val()){
	  	 	$("#city-state-zip-ex-detail").text("Pittsburgh, PA 15000");
	  	 }
	  	 else{
	  		$("#city-state-zip-ex-detail").text(str);
	  	 }
	  });

	  $("#service_contact_url").keyup(function(){
	  	var str = $("#service_contact_url").val();
	  	 if(!$(this).val()){
	  	 	$("#url-ex-detail").text("www.website.com");
	  	 }
	  	 else{
	  		$("#url-ex-detail").text(str);
	  	 }
	  });
	  
};


$(document).ready(ready);
$(document).on('page:load', ready)