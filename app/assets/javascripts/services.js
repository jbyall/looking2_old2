function updateTags(){
	  	var c1 = $("#cat1").val();
	  	var c2 = $("#cat2").val();
	  	var c3 = $("#cat3").val();
	  	var c4 = $("#cat4").val();
	  	var c5 = $("#cat5").val();
	  	$("#tags-ex").text(c1 + " | " + c2 + " | " + c3 + " | " + c4 + " | " + c5);
	  };
function updateLocation(){
		var city = $("#service_contact_city").val();
	  	var state = $("#service_contact_state").val();
	  	var output = city + ", " + state;
	  	$("#location-ex").text(output);
};

function ready(){
	// Updating the title
	$("#title").keyup(function(){
	  	var str = $(this).val();
	  	$("#title-ex").text(str);
	  });

	  // Updating the category
	  $("#category").keyup(function(){
	  	var str = $(this).val();
	  	$("#category-ex").text(str);
	  });

	  // Updating the tags
	  $("#cat1").keyup(updateTags);
	  $("#cat2").keyup(updateTags);
	  $("#cat3").keyup(updateTags);
	  $("#cat4").keyup(updateTags);
	  $("#cat5").keyup(updateTags);

	  // Updating the location
	  $("#service_contact_city").keyup(updateLocation);//function(){
	  	//var city = $("#service_contact_city").val();
	  	//var state = $("#service_contact_state").val();
	  	//var output = city + ", " + state;
	  	//$("#location-ex").text(output);
	  //});

	  $("#service_contact_state").change(updateLocation);//function(){
	  	//var city = $("#service_contact_city").val();
	  	//var state = $("#service_contact_state").val();
	  	//var output = city + ", " + state;
	  	//$("#location-ex").text(output);
	  //});

	  // Updating the phone number

};


$(document).ready(ready);
$(document).on('page:load', ready)