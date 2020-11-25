import React from 'react';
import { Map, GeoJSON, CircleMarker, Tooltip, TileLayer, Pane, Circle } from 'react-leaflet';
import mapDataTest from './../data/Countries.json';
// import centros from './../data/centers.json';
import centros from './../data/countries_centers.json';
import surfaceAreas from './../data/countries_surfaceArea.json';
import 'leaflet/dist/leaflet.css'; //This style is for the scroll and plus controls of the map
import '../css/index.css';
import * as L from 'leaflet';
import { findByPlaceholderText } from '@testing-library/react';
import { rgbToHex } from '@material-ui/core';

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

	var color = [];

	var countriesName = [];

	var years = [];

	var data = [];
	//This function is for the style of countries in the GeoJson
	var htmlCode = ''

	var bubbleInfo = {};

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

	// const addInfoBubbleOnCountry = (index, countryName) => {
	// 	var i = 0
	// 	var suma = 0
	// 	for (const currentValue in years) {
	// 		suma += parseFloat(data[index][i])
	// 		i++
	// 	}
	// 	var randomLol = randomGeo({ "lat": 0, "lon": 0 }, 5000)
	// 	bubbleInfoArray[countryName]= [
	// 		suma,randomLol["lat"],randomLol["lon"]
	// 	];
	// 	if(Object.keys(bubbleInfoArray).length == 1){
	// 		{bubbleInfoArray.map((info, idx) =>
	// 			console.log(info)
	// 		)}
	// 	}
	// }
	const addInfoBubbleOnCountry = (index, countryName) => {
		var i = 0
		var suma = 0
		for (const currentValue in years) {
			suma += parseFloat(data[index][i])
			i++
		}

		var found = false;
		var lat = 0;
		var long = 0;
		var surfaceArea = 0
		var fullName = ""
		for (var center in centros) {
			if (center == countryName) {
				found = true;
				lat = centros[center]['latitude']
				long = centros[center]['longitude']
				break;
			}
		}
		if (!found) {
			return;
		}

		for (var srf in surfaceAreas) {
			if (srf == countryName) {
				surfaceArea = surfaceAreas[srf]['area']
				fullName = surfaceAreas[srf]['country']
				break;
			}
		}

		bubbleInfo[countryName] = [suma.toFixed(2), lat, long, surfaceArea, fullName];
		// console.log(countryName+" agregado a bubble array (len:"+Object.keys(bubbleInfo).length+")")
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

	function randomCoords(radius) {
		var y0 = 20;
		var x0 = 100;
		var rd = radius / 5000;

		var u = Math.random();
		var v = Math.random();

		var w = rd * Math.sqrt(u);
		var t = 2 * Math.PI * v;
		var x = w * Math.cos(t);
		var y = w * Math.sin(t);

		return {
			'lat': y + y0,
			'lon': x + x0
		};
	}

	function whereBelongsCountry(countryName) {
		var indexAux = -1;
		if (R_AFR.includes(countryName)) {
			indexAux = countriesName.indexOf('R_AFR');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('SSA');
			}
		} else if (R_MECAS.includes(countryName)) {
			indexAux = countriesName.indexOf('R_MECAS');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('NMC');
			}
		} else if (R_LAM.includes(countryName)) {
			indexAux = countriesName.indexOf('R_LAM');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('CSA');
			}
		} else if (R_OEU.includes(countryName)) {
			indexAux = countriesName.indexOf('ROEU');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('R_OEU');
			}
		} else if (R_NEU.includes(countryName)) {
			indexAux = countriesName.indexOf('R_NEU');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('NEU');
			}
		} else if (R_ASIPAC.includes(countryName)) {
			indexAux = countriesName.indexOf('R_ASIPAC');
			if (indexAux == -1) {
				indexAux = countriesName.indexOf('ASP');
			}
		} else {
			indexAux = countriesName.indexOf(countryName);
		}
		return indexAux;
	}

	const onEachCountry = (country, layer) => {
		const countryName = country.properties.ISO_A3;
		var indexAux = whereBelongsCountry(countryName);
		if (indexAux !== -1) {
			layer.options.fillColor = color[indexAux];
			popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
			layer.bindPopup(popup)
		}
	}

	function eachCountriesBubbles() {
		for (var country in mapDataTest.features) {
			const countryName = mapDataTest.features[country].properties.ISO_A3;
			var indexAux = whereBelongsCountry(countryName);
			if (indexAux !== -1) {
				addInfoBubbleOnCountry(indexAux, countryName);
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

	// min:0.21 max:3.3
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
				{/* {converter()} */}
				{<GeoJSON style={countryStyle} key={new Date().getMilliseconds()} data={mapDataTest.features} onEachFeature={onEachCountry} />}
				{/* <Pane name="custom" style={{ zIndex: 1000 }}> */}
				{Object.keys(bubbleInfo).map((i, index) => {
					var countryName = i;
					var x = bubbleInfo[countryName];
					var sum = x[0]
					var lat = x[1]
					var lon = x[2]
					var radius = clamp(x[3] * 0.15, 100000, 1_000_000)
					var fullName = x[4]
					var opacity = 0.8
					return (<Circle
						center={[lat, lon]}
						radius={radius}
						fillOpacity={opacity}
						stroke={false}
						color={"red"}
					>
						<Tooltip direction="center" offset={[0, 50]} opacity={1}>
							<span>{fullName + ": " + sum}</span>
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

}
export default TradeReportMap;