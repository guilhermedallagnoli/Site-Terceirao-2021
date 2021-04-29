window.addEventListener('load', function() {
	
	// delay de carregamento
	setTimeout(lazyLoad, 1000);
	
});

function lazyLoad() {
	var card_images = document.querySelectorAll('.card-image');
	
	// loop em cada imagem de cartao
	card_images.forEach(function(card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');
		
		// carregar a foto em alta resolução
		content_image.src = image_url;
		
		content_image.addEventListener('load', function() {
			// trocar img
			card_image.style.backgroundImage = 'url(' + image_url + ')';
			// remove filtro de desfoque
			card_image.className = card_image.className + ' is-loaded';
		});
		
	});
	
}

