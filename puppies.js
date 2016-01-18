$(document).ready(function(){
	$.ajax({
		url: 'puppies.json',
		dataType: 'json',
		complete: function (data) {
			notie.alert(1, 'PUPPIES!!', 1.5); //izkarva saobshtenie "puppies"
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
						//alertva usera che kuchenceto djavka
						notie.alert(4, name + ' says: "' + bark + '"', 1.5);
					});
			});

			//narejda kartnikite, mojesh da go mahnesh za da se zarejdat 1 pod druga
			$("#image-grid").masonry({
				itemSelector: '.image-grid-item',
				gutter: 10,//margin between images
				columnWidth: 200
			});
		},
		failure: function (error) {
			notie.error('no puppies');
		}
	});
});

