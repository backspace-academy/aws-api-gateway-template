// Self-invoking anonymous function
(function($) {
	'use strict';
	
	// Click event listener
	$('#petBtn').click(function() {
	  getPet();
	});

	// Send request to API
	function getPet(){
		// Put your endpoint here, not mine!!!!
		var apiEndpoint = 'https://60hwiz4rfi.execute-api.us-east-1.amazonaws.com/Demo/pets';
		var petId = $('#petId').val();
		var numPets = 3;
		if (petId>numPets) {
			alert('Invalid entry - exceeds number of pets');
		}
		else if (petId<1) {
			alert('Invalid entry - must be greater than zero');
		}
		else{
			// Send the request
			var apiRequest = apiEndpoint + "/" + petId;
			$.get(apiRequest, function(data, status){
				// Display the response
				alert( '\nStatus: ' + status + '\nType: ' + data.type + '\nPrice: $' + data.price);
				});		
		}
	}

// End 	self-invoking anonymous function
})(jQuery);
