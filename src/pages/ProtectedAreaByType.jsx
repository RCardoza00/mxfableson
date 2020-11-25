import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart.jsx";
import ComboBox from '../components/ComboBox'
import ProtectedAreaService from '../services/ProtectedAreaService';

import Tour from '../components/Tour'
const DrawProtected = () => {
  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }
  });
  const [json, setJson] = useState([{
    labels:[],
    datasets:[]
  }]);


  useEffect(() => {
    ProtectedAreaService(state).then(setJson);

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
  
  
/** const steps = [
      {
        target: ".graph",
        content: "Different types of protected areas and their extension.",
        title: "Protected Area By Type",
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
    ]*/
    

 

    return (

      <div className="graph" style={{height: "100vh",width:"70vw"}}>
{/**<Tour stepsP={steps}/>
*/}
      
      <ComboBox onChange={handleChange}/>
    
      

      <BarChart data={json}
        labelString='1000ha per year'
        fontSize='25'
        labelposition="bottom"
        labelwidth={50}
        labelSize={16}
        TitleSize={24}
        title="Protected Areas By Type"/>
    
    </div>
    )
  }

  export default DrawProtected;
