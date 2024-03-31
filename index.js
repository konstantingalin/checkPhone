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

// Создание объекта ua-parser
var parser = new UAParser();

// Получение информации о текущем устройстве
var result = parser.getResult();

// Вывод информации в консоль
console.log("Производитель: " + result.device.vendor);
console.log("Модель: " + result.device.model);
console.log("Тип устройства: " + result.device.type);
console.log("Операционная система: " + result.os.name + " " + result.os.version);
console.log("Браузер: " + result.browser.name + " " + result.browser.version);

document.querySelector('h3').textContent = result.device.vendor;
document.querySelector('h4').textContent = result.device.model;
document.querySelector('h5').textContent = result.device.type;
document.querySelector('h6').textContent = result.os.name + " " + result.os.version;

