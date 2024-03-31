var userAgent = navigator.userAgent;

if (/Android/i.test(userAgent)) {
	var manufacturer = /Android\s([\w\s\d\.]+)/.exec(userAgent)[1];
	var model = /Android\s[\w\s\d\.]+;\s(\S+\s\S+)\sBuild/.exec(userAgent)[1];
	document.querySelector('h1').textContent = manufacturer;
	document.querySelector('h2').textContent = model;

	console.log("Мобильное устройство: " + manufacturer + ", Модель: " + model);
} else if (/iPhone|iPad|iPod/i.test(userAgent)) {
	var model = /iPhone\sOS\s([\d_]+)\slike\sMac\sOS\sX/.exec(userAgent)[1].replace(/_/g, '.');
	console.log("Мобильное устройство: Apple, Модель: " + model);

	document.querySelector('h1').textContent = 'Apple';
	document.querySelector('h2').textContent = model;
} else if (/Windows Phone/i.test(userAgent)) {
	var model = /Windows Phone\s(?:OS\s)?([\d\.]+)/.exec(userAgent)[1];
	console.log("Мобильное устройство: Windows Phone, Модель: " + model);

	document.querySelector('h1').textContent = 'Windows Phone';
	document.querySelector('h2').textContent = model;
} else {
	console.log("Невозможно определить производителя и модель мобильного устройства.");
	document.querySelector('h1').textContent = 'Невозможно определить производителя и модель мобильного устройства';
	
}


