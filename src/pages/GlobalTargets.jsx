import React, { useState, useEffect } from "react";
import "../css/index.css";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import { WidthProvider, Responsive } from "react-grid-layout";
import MixedChart from "../components/MixedChart";
import MixedChart2 from "../components/MixedChart2";
import BarChart from '../components/BarChart'
import ComboBox from '../components/ComboBox';
import GlobalTargetService from '../services/GlobalTargetService';
import GreenHouseTarget from '../services/GreenHouseTarget';
import FoodSecurityService from '../services/FoodSecurityService';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DrawGlobalTargets = () => {

	const [state, setState] = useState({
		select: {
			GraficaType: 'group',
			scenathon_id: '6',
			Iteration: '4',
		}
	});
	
	const [targetOne, seTargetOne] = useState({ labels:[], datasets:[] });

	const [targetTwo, seTargetTwo] = useState({ labels:[], datasets:[] });

	const [targetThree, seTargetThree] = useState({	labels:[], datasets:[] });

	const [targetFour, seTargetFour] = useState({ labels:[], datasets:[] });
	const [targetFourCharTwo, seTargetFourTwo] = useState({ labels:[], datasets:[] });

	const [targetSix, seTargetSix] = useState({ labels:[], datasets:[] });

	const [targetFive, seTargetFive] = useState({ labels:[], datasets:[] });

	useEffect( () => {
		GlobalTargetService(state).then(function(value) {
			seTargetOne(value.targetOne);
			seTargetTwo(value.targetTwo);
			seTargetThree(value.targetThree);
		});
		GreenHouseTarget(state).then(function(value){
			seTargetFour(value.targetFour);
			seTargetFourTwo(value.targetFourCharTwo);
			seTargetSix(value.targetSix)

		});
		FoodSecurityService(state).then(function(value){
			seTargetFive(value);
		});
	}, [state]);

	const handleChange = e => {
		var group = state.select.GraficaType;
		var scenathon = state.select.scenathon_id;
		var iteration = state.select.Iteration;
		if(e.name === "GraficaType"){ group=e.value }
		else if (e.target.name === "scenathon_id") {
			switch (e.target.value) {
				case '6':
					iteration = state.select.Iteration === "1" ? "3" : "4";
					scenathon = "6";
					break;
				case '5':
					scenathon = "5";
					iteration = state.select.Iteration === "3" ? "1" : "2";
					break;
				default: iteration = state.select.Iteration === "1" ? "3" : "4";
			}
		} 
		else {
			iteration =scenathon === "6" ? e.target.value === "after" ? "4" : "3" : e.target.value === "after" ? "2" : "1" ;
		}
		setState({
			select: {
				GraficaType: group,
				scenathon_id: scenathon,
				Iteration: iteration,
			}
		});
	}
	return (
		<div style={{width:"75vw",height:"1000px",marginTop:"20px"}}>
			<ComboBox onChange={handleChange}/>
			<ResponsiveReactGridLayout
				className="layout"
				cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
				rowHeight={30}
				isDraggable={false}
				isResizable={false}
				>
				<div key="t1" data-grid={{x: 0, y: 0, w: 2.2, h: 7,}} >
					<MixedChart 
						data={targetOne}
						title="Target 1.- Zero net deforestation"
						aspectRatio={false}
						labelString='1000h/year'
						fontSize='12'
						fontColor='black'
						labelposition="bottom"/>
				</div>
				<div key="t2" data-grid={{x: 2.3, y: 0, w: 2.3, h: 7}} >
					<MixedChart2
						data={targetTwo}
						aspectRatio={false}
						labelposition="bottom"
						title="Target 2.- Share of total land which is protected"/>
				</div>
				<div key="t3" data-grid={{x: 4.7, y: 0, w: 2.5, h: 7}}>
					<MixedChart2 
						data={targetThree}
						aspectRatio={false}
						labelposition="bottom"
						
						title="Target 3.- Share of land where natural processes predominate"/>
				</div>
				<div key="t4" data-grid={{x: 7.2, y: 0, w: 2.3, h:7}}>
				<div>
					<p style={{position:"fixed",paddingLeft:"160px",paddingBottom:"500px"}}></p>
				</div>

					<BarChart 
						data={targetFour}
						aspectRatio={false}
						labelWidth={6}
						labelSize={10}
						labelposition="right"
						labelString='GtCo2'
						fontSize="10"
						TitlePosition="bottom"
						title="From Agriculture "/>
				</div>

				<div key="t5" data-grid={{x: 9.5, y: 0, w: 2.4, h: 7}}>

					<MixedChart 
					
						data={targetFourCharTwo}
						aspectRatio={false}
						labelposition="right"
						labelString='GtCo2'
						fontSize="10"
						title="From Land use change"
						TitlePosition="bottom"
						/>
						
				</div>
				<div key="t6" data-grid={{x: 0, y: 1, w: 9, h: 9}} style={{borderStyle:'none'}}>
					<MixedChart 
						data={targetFive}
						aspectRatio={false}
						labelposition="top"
						labelString='Kcal per capita /day'
						fontSize='15'
						fontColor='black'
						title="Target 5.-  Food security"/>
						<div>
							<p style={{fontFamily: "Montserrat",color:'gray',fontSize:18}}>kilocalories per capita per day by country from the year 2030 of energy intake and Minimum Dietary Energy Requirement (MDER).

</p>
						</div>

				</div>
				<div key="t7" data-grid={{x: 9, y: 1, w: 3, h: 9}} style={{borderStyle:'none'}}>
					
					<MixedChart
						data={targetSix}
						aspectRatio={false}
						labelposition="bottom"
						labelString='blue water in million cubic meters'
						fontSize='14'
						fontColor='black'
						title="Target 6.- Fresh water use"/>
						<div>
							<p style={{fontFamily: "Montserrat",color: 'gray',fontSize:16}}>Water use for irrigation for crops and livestock production 
</p>
						</div>

				</div>
			</ResponsiveReactGridLayout>
		</div>
	);
};
export default DrawGlobalTargets;