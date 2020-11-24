import React from 'react';
import { Bar } from 'react-chartjs-2';
const  BarChart2=(props) => {
	const options = {
		responsive: true,
		maintainAspectRatio: props.aspectRatio===undefined?true:props.aspectRatio,
		title: {
			fontSize:props.TitleSize===undefined?12:props.TitleSize,
			display: true,
			text: props.title
		},
		legend:{
			display:true,
			labels:{
				boxWidth:props.labelwidth===undefined?20:props.labelwidth,
				fontSize:props.labelSize===undefined?12:props.labelSize
			},
			position:props.labelposition===undefined?'right':props.labelposition
		},
		tooltips: {
			mode: 'label',
		},
		elements: {
			line: {
				fill: false
			}
		},
		scales: {
			xAxes: [{
				stacked: false,
				display: true,
				gridLines: {
					display: true,
				},
			}],
			yAxes: [{
				stacked: false,
				display: true,
				position: 'left',
				id: "y-axis-1",
				ticks: {
					
					display: true,
					beginAtZero: true,
					fontSize: 13,
					padding: 10,
					callback: function (tick, index, ticks) {
						return tick;
					}
				  },
				gridLines: {
					display: true,
				}, 
				scaleLabel: {
					display: true,
					labelString:props.labelString===undefined?'':props.labelString,
					fontColor:props.fontColor===undefined?'#546372':props.fontColor,
					fontSize:props.fontSize===undefined?18:props.fontSize,
					fontFamily: "Montserrat",
				},
			},
			{
				stacked: false,
				display: true,
				position: 'right',
				id: "y-axis-2",
				ticks: {
					
					display: true,
					fontSize: 13,
					padding: 10,
				  },
				gridLines: {
					display: true,
				}, 
				scaleLabel: {
					display: true,
					labelString:props.labelString2===undefined?'':props.labelString2,
					fontColor:props.fontColor===undefined?'#546372':props.fontColor,
					fontSize:props.fontSize===undefined?18:props.fontSize,
					fontFamily: "Montserrat",
				},
			
			}]
		}
		
	};
	let data=props.data;
	return (
		<Bar 
			data={data}
			options={options}/>
	);
}
export default BarChart2;