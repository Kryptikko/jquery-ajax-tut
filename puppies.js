$(document).ready(function(){
	var onRecievedPuppies = function (data) {
		//mojesh da vidish samo w consolata na dev tools (F12 na chrome)
		console.log('Puppies have been loaded!');
		data.responseJSON.forEach(function(item){
			var rendered = '<div class="image-grid-item">' +
								'<header>' +
									'<h3 class="puppy-name">' + item.name + '</h3>' +
									'<p class="puppy-contnet">' + item.content + '</p>' +
								'</header>' +
								'<img src="' + item.image + '" />' +
							'</div>';
			$(rendered) //ot texta syzdawa dom nodeove
				.data(item) // kym dom nodovete zakacha vsi4kata informaciq za kuchenceto za da moje da q polzwame po kusno
				.appendTo($("#image-grid")) //pribavq dom node-a kym image-grid containera
				.click(function(){ // dobavqme funkcionalnost na klik
					// izpozlwame informaciqta ot data() metoda (vish 16ti red)
					// $(this) ni dobawq jQuery funcionalnosta kum don node-a
					// .data('key') proverqwa ima li stoinost kym 'key' (primerno item.key)
					var name = $(this).data('name') || "Puppy";
					var bark = $(this).data('bark');
					// || "Puppy" se rawnqwa na 3te reda po nadoly (proverqwat dali bark ima stoinost ako ne my zadawa defaultna
					if(!bark) {
						bark = "Baw Baw";
					}
					// djaf djaf
					console.log(name + ' says: "' + bark + '"')
				});
		});
	}

	var onNotRecievedPuppies = function (error) {
		// slu4ila se e nqkakwa greshka
	}


	//prashta GET zaqwka
	//identi4no s towa w browsera da otworish http://localhost/puppies.json
	$.ajax({
		url: 'puppies.json',
		dataType: 'json',
		//kogato poluchish informaciqta ot zaqwkata onRecievedPuppies shte q izpolzwa
		complete: onRecievedPuppies,
		//ako ne polu4ish informciq ot zaqwkata
		failure: onNotRecievedPuppies
	});

});

