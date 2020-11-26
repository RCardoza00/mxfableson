import React from 'react';
import { Map, GeoJSON, CircleMarker, Tooltip, TileLayer, Pane, Circle } from 'react-leaflet';
import mapDataTest from './../data/Countries.json';
import centros from './../data/countries_centers.json';
import regionsCenters from './../data/regions_centers.json';
import surfaceAreas from './../data/countries_surfaceArea.json';
import 'leaflet/dist/leaflet.css'; //This style is for the scroll and plus controls of the map
import '../css/index.css';
import * as L from 'leaflet';

const TradeReportMap = (props) => {

	const converter = () => {
		if (props.countriesData.datasets !== null) {
			for (const country in props.countriesData.datasets) {
				color.push(props.countriesData.datasets[country].backgroundColor);
				countriesName.push(props.countriesData.datasets[country].label);
				data.push(props.countriesData.datasets[country].data);
			}
			years = props.countriesData.labels;
		}
	}
	var popup = null;

	var R_ASIPAC = [
		'BGD',
		'BRN',
		'KHM',
		'FJI',
		'PYF',
		'JPN',
		'PRK',
		'KOR',
		'LAO',
		'MNG',
		'MMR',
		'NPL',
		'NZL',
		'NCL',
		'PHL',
		'WSM',
		'SLB',
		'LKA',
		'THA',
		'VUT',
		'VNM',
		'TLS'
	];

	var R_LAM = [
		'BHS',
		'BLZ',
		'BOL',
		'CHL',
		'CRI',
		'CUB',
		'DOM',
		'ECU',
		'SLV',
		'GTM',
		'GUY',
		'HTI',
		'HND',
		'JAM',
		'NIC',
		'PAN',
		'PRY',
		'PER',
		'SUR',
		'TTO',
		'URY',
		'VEN'
	];

	var R_MECAS = [
		'AFG',
		'DZA',
		'ARM',
		'AZE',
		'EGY',
		'GEO',
		'IRN',
		'IRQ',
		'ISR',
		'JOR',
		'KAS',
		'KWT',
		'KGZ',
		'LBN',
		'LBY',
		'MAR',
		'PAK',
		'SAU',
		'SYR',
		'TJK',
		'TUN',
		'TKM',
		'ARE',
		'UZB',
		'YEM',
		'PSE'
	];

	var R_AFR = [
		'AGO',
		'BEN',
		'BWA',
		'BFA',
		'CMR',
		'CPV',
		'CAF',
		'TCD',
		'COG',
		'CIV',
		'DJI',
		'GAB',
		'GMB',
		'GHA',
		'GIN',
		'GBN',
		'KEN',
		'LSO',
		'LBR',
		'MDG',
		'MWI',
		'MLI',
		'MRT',
		'MUS',
		'MOZ',
		'NAM',
		'NER',
		'NGA',
		'SEN',
		'SLE',
		'SOM',
		'SWZ',
		'TZA',
		'TGO',
		'UGA',
		'ZMB',
		'ZWE'
	];

	var R_NEU = [
		'ALB',
		'BLR',
		'BIH',
		'ISL',
		'MKD',
		'MDA',
		'SRB',
		'CHE',
		'TUR',
		'UKR'
	];

	var R_OEU = [
		'AUT',
		'BEL',
		'BGR',
		'HRV',
		'CYP',
		'CZE',
		'DNK',
		'EST',
		'FRA',
		'GRC',
		'HUN',
		'IRL',
		'ITA',
		'LVA',
		'LTU',
		'LUX',
		'MLT',
		'NLD',
		'POL',
		'PRT',
		'ROU',
		'SVK',
		'SVN',
		'ESP'
	];

	var regionColors = {
		"R_ASIPAC": "#EBE24D",
		"R_NEU": "#1FBEEB",
		"R_OEU": "#31EBAA",
		"R_LAM": "#0A844A",
		"R_MECAS": "#570039",
		"R_AFR": "#ED1755"
	}

	var color = [];

	var countriesName = [];

	var years = [];

	var data = [];
	//This function is for the style of countries in the GeoJson
	var htmlCode = ''

	//Claudio
	var bubbleInfo = [];
	var selectedYear = 2050;
	var minValue = 999
	var maxValue = -999

	const createListInfoCountry = (index, countryName) => {
		htmlCode = '<p class="popup-list--header"><strong>' + countryName + '</strong></p>'
		htmlCode = htmlCode + '<ul class="popup-list">'
		var i = 0
		for (const currentValue in years) {
			htmlCode = htmlCode + '<li><strong>' + years[i] + '</strong>: ' + data[index][i]
			if (props.graphType === 'Biodiversity') htmlCode = htmlCode + '%';
			htmlCode = htmlCode + '</li>';
			i++;
		}
		htmlCode = htmlCode + '</ul>'
		return htmlCode;
	}

	const addInfoBubbleOnCountry = (index, countryName) => {
		var found = false;

		var valor = 0
		var lat = 0;
		var long = 0;
		var surfaceArea = 0
		var fullName = ""
		for (const currentValue in years) {
			var currentYear = years[currentValue]
			// console.log(`[Burbujas Debug] ${currentYear} ${selectedYear} ${typeof currentYear} ${typeof selectedYear}`)
			if (currentYear == selectedYear) {
				valor = parseFloat(data[index][currentValue])
				found = true;
				if (valor == 0.0) {
						console.log(`[Burbujas Error] ${countryName} saltado porque el valor es 0, seleccione otro año`)
					return NaN;
				}
				break;
			}
		}
		if (!found) {
			console.log(`[Burbujas Error] ${countryName} saltado porque año seleccionado (${selectedYear}) no esta en array years`)
			return;
		}
		found = false

		for (var center in centros) {
			if (center == countryName) {
				found = true;
				lat = centros[center]['latitude']
				long = centros[center]['longitude']
				break;
			}
		}
		if (!found) {
			// console.log(`[Burbujas Error] ${countryName} saltado porque no se encontraron coordenadas centro??`)
			return;
		}

		for (var srf in surfaceAreas) {
			if (srf == countryName) {
				surfaceArea = surfaceAreas[srf]['area']
				fullName = surfaceAreas[srf]['country']
				break;
			}
		}

		bubbleInfo.push([valor.toFixed(6), lat, long, surfaceArea, fullName, countryName, increaseBrightness(color[index],20), false]);
		return bubbleInfo[bubbleInfo.length - 1];
	}

	const addInfoBubbleOnCountryCustom = (index, countryName, region, lat, long, size) => {
		var found = false;
		var valor = 0
		var surfaceArea = size
		var fullName = region;
		var color = "#000000"
		if(region in regionColors){
			color = regionColors[region]
			// if(region == "R_LAM"){
			// 	color = increaseBrightness(regionColors[region],-10);
			// } else {
			// 	color = increaseBrightness(regionColors[region],15);
			// }
		}

		for (const currentValue in years) {
			var currentYear = years[currentValue]
			if (currentYear == selectedYear) {
				valor = parseFloat(data[index][currentValue])
				found = true;
				// if (valor == 0.0) {
				// 	console.log(`[Burbujas Error 2] ${countryName} (${region}) saltado porque el valor es 0, seleccione otro año`)
				// 	return NaN;
				// }
				break;
			}
		}
		if (!found) {
			console.log(`[Burbujas Error 2] ${countryName} saltado porque año seleccionado (${selectedYear}) no esta en array years`)
			return;
		}
		bubbleInfo.push([valor.toFixed(6), lat, long, surfaceArea, fullName, countryName, color, true]);
		return bubbleInfo[bubbleInfo.length - 1];
	}

	// function getPolyCenter(countryName) {
	// 	var lat = 0;
	// 	var lon = 0;

	// 	var i = 0
	// 	mapDataTest.features.forEach(each => {
	// 		if(i == 0){
	// 			console.log(each)
	// 			i++
	// 		}

	// 		if (countryName === each.properties.ISO_A3) {
	// 			var polys = each.geometry.coordinates;

	// 			var allLats = new Array();
	// 			var allLongs = new Array();

	// 			//Obtener todos los lats y longs separados
	// 			for (var set in polys) {
	// 				allLats.push(set[0])
	// 				allLongs.push(set[1])
	// 			}

	// 			//Ordenar mayor a menor
	// 			allLats.sort()
	// 			allLongs.sort()

	// 			//Obtener maximos y minimos de las coords
	// 			const lowX = allLats[0];
	// 			const highX = allLats[allLats.length - 1];
	// 			const lowy = allLongs[0];
	// 			const highy = allLongs[allLongs.length - 1];

	// 			//Centro del poligono lol
	// 			lat = lowX + ((highX - lowX) / 2);
	// 			lon = lowy + ((highy - lowy) / 2);

	// 			return;
	// 		}
	// 	});
	// 	return lat,lon;
	// }

	function whereBelongsCountry(countryName) {
		var indexAux = -1;
		var fromRegion = undefined
		if (R_AFR.includes(countryName)) {
			indexAux = countriesName.indexOf('R_AFR');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('SSA');
			}
			fromRegion = "R_AFR,SSA"
		} else if (R_MECAS.includes(countryName)) {
			indexAux = countriesName.indexOf('R_MECAS');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('NMC');
			}
			fromRegion = "R_MECAS,NMC"
		} else if (R_LAM.includes(countryName)) {
			indexAux = countriesName.indexOf('R_LAM');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('CSA');
			}
			fromRegion = "R_LAM,CSA"
		} else if (R_OEU.includes(countryName)) {
			indexAux = countriesName.indexOf('ROEU');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('R_OEU');
			}
			fromRegion = "ROEU,R_OEU"
		} else if (R_NEU.includes(countryName)) {
			indexAux = countriesName.indexOf('R_NEU');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('NEU');
			}
			fromRegion = "R_NEU,NEU"
		} else if (R_ASIPAC.includes(countryName)) {
			indexAux = countriesName.indexOf('R_ASIPAC');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('ASP');
			}
			fromRegion = "R_ASIPAC,ASP"
		} else {
			indexAux = countriesName.indexOf(countryName);
		}
		return [indexAux, fromRegion];
	}

	const onEachCountry = (country, layer) => {
		const countryName = country.properties.ISO_A3;
		var belongs = whereBelongsCountry(countryName);
		var indexAux = belongs[0]
		var fromRegion = belongs[1]
		if (indexAux !== -1) {
			if(fromRegion == undefined){
				layer.options.fillColor = color[indexAux];
				popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
				layer.bindPopup(popup)
			}
		}
	}

	var regionsAlreadyShowing = []
	function eachCountriesBubbles() {
		for (var country in mapDataTest.features) {
			const countryName = mapDataTest.features[country].properties.ISO_A3;
			var belongs = whereBelongsCountry(countryName);
			var indexAux = belongs[0]
			var fromRegion = belongs[1]
			if (indexAux !== -1) {
				if (fromRegion != undefined) {
					// for (var regionName in regionsCenters) {
					// 	// console.log(`fromRegion:${fromRegion}, regionName:${regionName} lol:${(fromRegion.includes(regionName))}`)
					// 	if (!fromRegion.includes(regionName)) {
					// 		// console.log(`region:${regionName} already:${regionsAlreadyShowing} lol:${(!regionsAlreadyShowing.includes(regionName))}`)
					// 		if (!regionsAlreadyShowing.includes(regionName)) {
					// 			var coords = regionsCenters[regionName]
					// 			for (var pos in coords) {	
					// 				var newvalues = addInfoBubbleOnCountryCustom(indexAux, countryName, regionName, coords[pos]['lat'], coords[pos]['lon'], coords[pos]['size']);
					// 				if (newvalues !== undefined) {
					// 					if (newvalues[0] > maxValue) {
					// 						maxValue = newvalues[0]
					// 					} else if (newvalues[0] < minValue) {
					// 						minValue = newvalues[0]
					// 					}
					// 					regionsAlreadyShowing.push(regionName)
					// 				}
					// 			}
					// 			break;
					// 		}
					// 	}
					// }
				} else {
					var newvalues = addInfoBubbleOnCountry(indexAux, countryName);
					if (newvalues !== undefined) {
						if (newvalues[0] > maxValue) {
							maxValue = newvalues[0]
						} else if (newvalues[0] < minValue) {
							minValue = newvalues[0]
						}
					}
				}
			}
		}
	}

	var corner1 = L.latLng(-90, -200)
	var corner2 = L.latLng(90, 200)
	var bounds = L.latLngBounds(corner1, corner2)

	var countryStyle = {
		fillColor: '#dddddd', //Color countries
		fillOpacity: 1, //This number is between cero to one. For example 0 0.1 0.2 0.3 .. 0.9 1
		color: 'white', //The border color of the countries 
		weight: 1, //The weight of the countries border
		//dashArray: 5
	};

	converter()
	eachCountriesBubbles()

	//aumentar tamaño de burbuja de los paises normales
	for(var i in bubbleInfo){
		if (!bubbleInfo[i][7]) {
			bubbleInfo[i][3] = clamp(bubbleInfo[i][3], 0, 1_500_000)
		}
	}
	
	//ordenar mayor a menor por surfaceArea
	bubbleInfo.sort(function (a, b) {
		return a[3] < b[3] ? 1 : -1;
	});

	// console.log(`min:${minValue}, max:${maxValue}`)

	return (
		<div>
			<Map
				key={new Date().getMilliseconds()}
				style={{ height: '74vh' }}
				zoom={1}
				center={[20, 100]}
				maxBoundsViscosity={1.0}
				maxBounds={bounds}
			>
				{<GeoJSON style={countryStyle} key={new Date().getMilliseconds()} data={mapDataTest.features} onEachFeature={onEachCountry} />}
				{Object.keys(bubbleInfo).map((i, index) => {
					var countryName = i;
					var x = bubbleInfo[countryName];
					// var isRegion = x[7]
					var sum = x[0]
					var lat = x[1]
					var lon = x[2]
					var radius = x[3]
					// if (isRegion) {
					// 	radius = x[3]
					// } else {
					// 	radius = clamp(x[3], 0, 1_500_000)
					// }
					var fullName = x[4]
					var countryCode = x[5]
					var color = x[6]
					return (<Circle
						center={[lat, lon]}
						radius={radius}
						fillOpacity={0.35}
						stroke={false}
						color={color}
					>
						<Tooltip direction="center" offset={[0, 50]} opacity={1}>
							<span>{`${fullName} (${selectedYear}): ${sum}`}</span>
						</Tooltip>
					</Circle>)
				})}
				{/* TODO: despues hacerlo bn */}
				{/* http://tile.stamen.com/toner-labels/{z}/{x}/{y}.png */}
				<TileLayer
					url="https://a.tile.openstreetmap.org/7/56/46.png"
					id="lolllllll"
				/>
				{/* </Pane> */}

			</Map>
		</div>
	);

	function clamp(num, min, max) {
		return num <= min ? min : num >= max ? max : num;
	}

	function increaseBrightness(color,percent){
		var ctx = document.createElement('canvas').getContext('2d');
		ctx.fillStyle = color;
		ctx.fillRect(0,0,1,1);
		var color = ctx.getImageData(0,0,1,1);
		var r = color.data[0] + Math.floor( percent / 100 * 255 );
		var g = color.data[1] + Math.floor( percent / 100 * 255 );
		var b = color.data[2] + Math.floor( percent / 100 * 255 );
		return 'rgb('+r+','+g+','+b+')';
	}

}
export default TradeReportMap;