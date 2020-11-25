import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart.jsx";
import ComboBox from '../components/ComboBox';
import LandCoverService from '../services/LandCoverService';
import Tour from '../components/Tour'

const DrawLandCover = () => {





  const [state, setState] = useState({
    select: {
      GraficaType:'group',
      scenathon_id:'6',
      Iteration:'4',
    }
   
  });

 

  const [json, setJson] = useState([{
    labels:[],
    datasets:[]
  }]);

  useEffect(() => {
    LandCoverService(state).then(setJson);
  }, [state]);





  

  const handleChange = e => {

    var group = state.select.GraficaType;
    var scenathon = state.select.scenathon_id;
    var iteration = state.select.Iteration;
  if(e.name === "GraficaType")
  {
  group=e.value 
  }else if (e.target.name === "scenathon_id") {
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
    } else {
  
    
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

/**      const steps = [
        {
          target: ".graph",
          content: "Distribution of land cover area in 1000 ha.",
          title: "Land Cover",
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

    <div className="graph">
      {/**<Tour stepsP={steps}/>*/}

    <div >
    <ComboBox onChange={handleChange}/>
 
    </div>

    <div style={{height: "80vh",width:"70vw"}}>
    <BarChart data={json}
    labelwidth={40}
    labelSize={24}
    TitleSize={24}
    title="Land Cover"
    labelposition='right'
    labelString='1000Ha per year'
    fontSize='20'
   aspectRatio={false}/>
    </div>

   </div>
    )
  }
  

  export default DrawLandCover;
