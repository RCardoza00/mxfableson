import React, { useState, useEffect } from "react";
import MixedChart from "../components/MixedChart.jsx";
import ComboBox2 from "../components/ComboBox2.jsx";
import Tour from "../components/Tour.js";
import FoodEnergyService from '../services/FoodEnergyService';
const FoodEnergyIntakePerCapita = () => {

  const [state, setState] = useState({
    select: {
      Year: '2000',
      scenathon_id: '6',
      Iteration: '4',
    }
   
  });

  const [json, setJson] = useState([{
    labels:[],
    datasets:[]
  }]);

  useEffect(() => {
 
    FoodEnergyService(state).then(setJson);
  }, [state]);


const handleChange = e => {
  var year = state.select.Year;
  var scenathon = state.select.scenathon_id;
  var iteration = state.select.Iteration;

  if(e.target.name==="scenathon_id"){
    switch (e.target.value) {
      case '6':
        iteration=state.select.Iteration==="1"? "3":"4";
        scenathon="6";
        break;
      case '5':
        scenathon="5";
        iteration=state.select.Iteration==="3"? "1":"2";
      break;    
      default:  iteration=state.select.Iteration==="1"? "3":"4";
    }
  }
  else{ 
    year= e.target.name==="Year"? e.target.value: state.select.Year;
    iteration=e.target.name==="Iteration"?scenathon==="6" ? e.target.value==="after"? "4":"3" : e.target.value==="after"? "2":"1":state.select.Iteration;
  }
  setState({
    select: {
      Year: year,
      scenathon_id:scenathon,
      Iteration:iteration,
    }
  });
}
/** 
    const steps = [
      {
        target: ".graph",
        content: "Energy intake and the minimum dietary energy requirement (MDER) per capita, in kilocalories per day.",
        title: "Food energy intake per capita 1",
          styles: {
            //this styles override the styles in the props  
            options: {
              textColor: "black"
            }
          },
          locale: { 
            next: <span>End</span>,
          },
          placement: "top"
      }
    ]
*/
  return (

    <div>
      
      <div>
        <ComboBox2 onChange={handleChange} />
      </div>
{/**<Tour stepsP={steps}/>*/}
<div className="graph" style={{height: "60vh" ,width:"70vw"} }>
      <MixedChart data={json}
        aspectRatio={false}
        labelposition="top"
        labelwidth={50}
        labelSize={24}
        TitleSize={45}
        labelString='Kcal per capita/day'
        title="Food energy intake per capita"/>
         <div>
    <p style={{color:"gray",fontSize:"18px",fontFamily: "Montserrat",paddingTop:"40px",paddingLeft:"200px", textAlign:"justify"}}>Energy intake and Minimum Dietary Energy Requirement (MDER) in kilocalories per capita per day.
  
 
</p>
    </div>

    </div>

    </div>
  )
}
export default FoodEnergyIntakePerCapita;