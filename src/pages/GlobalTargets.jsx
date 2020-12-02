import React, { useState, useEffect } from "react";
import "../css/index.css";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import { WidthProvider, Responsive } from "react-grid-layout";
import * as ReactBootStrap from "react-bootstrap";
import MixedChart from "../components/MixedChart";
import MixedChart2 from "../components/MixedChart2";
import BarChart from '../components/BarChart'
import ComboBox from '../components/ComboBox';
import GlobalTargetService from '../services/GlobalTargetService';
import GreenHouseTarget from '../services/GreenHouseTarget';
import FoodSecurityService from '../services/FoodSecurityService';
import ConvertToCSV from '../components/ConvertToCSV';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DrawGlobalTargets = () => {

	const [state, setState] = useState({
		select: {
			GraficaType: 'group',
			scenathon_id: '6',
			Iteration: '4',
		}
	});
	
	const [targetOne, seTargetOne] = useState({ labels:[], datasets:[]  ,  CSV:[]
	});

	const [targetTwo, seTargetTwo] = useState({ labels:[], datasets:[],  CSV2:[] });

	const [targetThree, seTargetThree] = useState({	labels:[], datasets:[],  CSV:[] });

	const [targetFour, seTargetFour] = useState({ labels:[], datasets:[],  CSV:[] });
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
	 

	const DownloadCSV = e => {
		ConvertToCSV(targetOne.CSV)


		}
	
	return (
		
		<div style={{width:"75vw", minHeight:"1000px",marginTop:"20px"}}>
			
			
			<ReactBootStrap.Container fluid style={{widht: "75vw"}}>
			<ComboBox onChange={handleChange}    onClick={DownloadCSV} />
				<ReactBootStrap.Row className="centerX pd-3" style={{justifyContent:"center"}}>
					<ReactBootStrap.Col lg={3} md={6} key="t1" style={{height: 300}} >
						<MixedChart 
							data={targetOne}
							title="Target 1.- Zero net deforestation"
							aspectRatio={false}
							labelString='1000h/year'
							fontSize='12'
							fontColor='black'
							labelposition="right"/>
					</ReactBootStrap.Col>
					<ReactBootStrap.Col lg={3} md={6} key="t2" style={{height: 300}} >
						<MixedChart2
							data={targetTwo}
							aspectRatio={false}
							labelposition="right"
							title="Target 2.- Share of total land which is protected"/>
					</ReactBootStrap.Col>
					<ReactBootStrap.Col lg={3} md={6} key="t3" style={{height: 300}} >
						<MixedChart2 
							data={targetThree}
							aspectRatio={false}
							labelposition="right"
							
							title="Target 3.- Share of land where natural processes predominate"/>
					</ReactBootStrap.Col>
					

				</ReactBootStrap.Row>
				<ReactBootStrap.Row className="pt-5" style={{justifyContent:"center"}}>
				<ReactBootStrap.Col lg={3} md={6} key="t4" style={{height: 300}}>
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
							TitlePosition="right"
							title="From Agriculture "/>
					</ReactBootStrap.Col>
				<ReactBootStrap.Col lg={3} md={5} key="t5" style={{height: 300}}>
					<MixedChart 
						data={targetFourCharTwo}
						aspectRatio={false}
						labelposition="right"
						labelString='GtCo2'
						fontSize="10"
						title="From Land use change"
						TitlePosition="right"
						/>
				</ReactBootStrap.Col>

					{/* <ReactBootStrap.Col lg={6} md={7} key="t6"le={{borderStyle:'none'}} style={{height: 350}} >
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
					</ReactBootStrap.Col> */}
					<ReactBootStrap.Col lg={3} md={12} key="t7"le={{borderStyle:'none'}} style={{height: 300}}>
						
						<MixedChart
							data={targetSix}
							aspectRatio={false}
							labelposition="right"
							labelString='blue water in  cubic meters'
							fontSize='14'
							fontColor='black'
							title="Target 6.- Fresh water use"/>
							<div>
								<p style={{fontFamily: "Montserrat",color: 'gray',fontSize:16}}>Water use for irrigation for crops and livestock production </p>
							</div>

					</ReactBootStrap.Col>
				</ReactBootStrap.Row>
				<ReactBootStrap.Row className="centerX pt-5" style={{justifyContent:"center"}}>
					<ReactBootStrap.Col lg={6} md={7} key="t6"le={{borderStyle:'none'}} style={{height: 300}} >
						<MixedChart 
							data={targetFive}
							aspectRatio={false}
							labelposition="right"
							labelString='Kcal per capita /day'
							fontSize='15'
							fontColor='black'
							title="Target 5.-  Food security"/>
							<div>
								<p style={{fontFamily: "Montserrat",color:'gray',fontSize:18}}>kilocalories per capita per day by country from the year 2030 of energy intake and Minimum Dietary Energy Requirement (MDER).
								</p>
							</div>
							
					</ReactBootStrap.Col>
				</ReactBootStrap.Row>
			</ReactBootStrap.Container>
		</div>
	);
};
export default DrawGlobalTargets;