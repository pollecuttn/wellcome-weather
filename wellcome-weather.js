(function() {
	// script to get current weather and provide weather plus a relevant random image
	var xhr = new XMLHttpRequest(),
		json = '',
		openweathermapId = '',
		weathers = {
			stormy: [200,201,202,210,211,212,221,230,231,232,771,781,900,901,902,960,961,962],
			rainy: [300,301,302,310,311,312,313,314,312,500,501,502,503,504,511,520,521,522,531,906],
			snowy: [600,601,602,611,612,615,616,620,621,622],
			foggy: [701,721,741],
			dusty: [711,731,751,761,762],
			clear: [800,801,904],
			cloudy: [802,803,804],
			windy: [905,952,953,954,955,956,957,958,959]
		},
		imgsCloudy = [ 'L0041083.jpg', 'L0041084.jpg', 'L0053624.jpg' ],
		imgsDusty = [ 'V0013642.jpg', 'V0013643.jpg', 'V0021369.jpg' ],
		imgsFoggy = [ 'L0032640.jpg', 'V0010880.jpg'],
		imgsRainy = [ 'L0044109.jpg', 'V0040529.jpg', 'V0046708.jpg', 'V0050307.jpg' ],
		imgsSnowy = [ 'L0029207.jpg', 'L0031713.jpg', 'L0031718.jpg', 'L0044108.jpg', 'V0021371.jpg', 'V0021373.jpg', 'V0022839.jpg', 'V0039050.jpg', 'V0040891.jpg', 'V0040892.jpg', 'V0041046.jpg', 'V0047377.jpg', 'V0050354.jpg' ],
		imgsStormy = [ 'V0010565.jpg', 'V0012901.jpg', 'V0025061.jpg', 'V0049619.jpg' ],
		imgsSunny = [ 'L0040558.jpg', 'L0041342.jpg', 'L0052309.jpg', 'L0053261.jpg', 'L0053268.jpg', 'L0072364.jpg', 'L0072384.jpg', 'L0074515.jpg', 'V0049411.jpg' ],
		imgsClear = [ 'L0049053.jpg', 'L0053694.jpg', 'M0003797', 'V0024749.jpg', 'V0024755.jpg', 'V0049625.jpg', 'V0049627.jpg'],
		imgsWindy = [ 'L0041083.jpg', 'L0044104.jpg', 'V0011238.jpg', 'V0040869.jpg', 'V0049281.jpg' ],
	
		//weather = 'windy',
		weather = '',
		wiLink = "<a href='http://wellcomeimages.org/indexplus/image/",
		wiImageNo = '',
		fullPath = "./images/",
		imagePrepend = "<img src='" + fullPath,
		image = '',
		imageAppend = '',
		alt = '',
		weatherDesc = '';
		
	//xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=13fbb15391be78f71a96fafc8bc7d4d7", false);
	xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=51.53&lon=-0.13&APPID=13fbb15391be78f71a96fafc8bc7d4d7", false);
	// send request
	xhr.send();
	// parse returned JSON
	json = JSON.parse(xhr.response);
	openweathermapId = json.weather[0].id;
	//weatherDesc = document.getElementById("weather").innerHTML = weather;
	
	for (giraffe in weathers) {
	var length = weathers[giraffe].length;
		for ( var i = 0; i < length; i++ ) {
			if (weathers[giraffe][i] == openweathermapId) {
				// if clear and daytime
				if ( giraffe=="clear" && (json.weather[0].icon.indexOf("d") != -1) ) {
					document.getElementById("weather").innerHTML = "sunny";
					weather = "sunny";
				} else {
					//console.log("the weather is " + weathers[giraffe][i]);
					document.getElementById("weather").innerHTML = giraffe;
					weather = giraffe;
				}
			}
		}
	}
			
	switch (weather) {
		case "cloudy":
			var random = Math.floor( (Math.random() * imgsCloudy.length) ),
				imageUrl = imgsCloudy[random];
			break;
		case "dusty":
			var random = Math.floor( (Math.random() * imgsDusty.length) ),
				imageUrl = imgsDusty[random];
			break;
		case "foggy":
			var random = Math.floor( (Math.random() * imgsFoggy.length) ),
				imageUrl = imgsFoggy[random];
			break;
		case "rainy":
			var random = Math.floor( (Math.random() * imgsRainy.length) ),
				imageUrl = imgsRainy[random];
			break;
		case "snowy":
			var random = Math.floor( (Math.random() * imgsSnowy.length) ),
				imageUrl = imgsSnowy[random];
			break;
		case "stormy":
			var random = Math.floor( (Math.random() * imgsStormy.length) ),
				imageUrl = imgsStormy[random];
			document.getElementById("image").innerHTML = image;
			break;
		case "sunny":
			var random = Math.floor( (Math.random() * imgsSunny.length) ),
				imageUrl = imgsSunny[random];
			break;
		case "clear":
			var	random = Math.floor( (Math.random() * imgsClear.length) ),
				imageUrl = imgsClear[random];
			break;
		case "windy":
			var	random = Math.floor( (Math.random() * imgsWindy.length) ),
				imageUrl = imgsWindy[random];
			break;
		default:
			break;
	}
	
	wiImageNo = imageUrl.replace('jpg','html')+"'";
	alt = weather + " weather";
	imageAppend = "' alt='" + alt + "'/></a>"
	image = wiLink + wiImageNo + ">" + imagePrepend + weather + "/" + imageUrl + imageAppend;
	// Put weather on the page
	weatherDesc;
	// Put image on the page
	document.getElementById("image").innerHTML = image;

})();