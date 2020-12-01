import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import ComboBox from '../components/ComboBox';
import Tour from "../components/Tour";
import FreshWaterService from '../services/FreshWaterService';
import ConvertToCSV from '../components/ConvertToCSV';

const DrawFreshWaterUse = () => {


  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }

  });

  const [json, setJson] = useState([{
    Chart:[],
    CSV:[]
  }]);

  useEffect(() => {
    FreshWaterService(state).then(setJson);
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
const DownloadCSV = e => {
  ConvertToCSV(json.CSV)
  }
  return (
    <div>
      {/**<Tour stepsP={steps}*/}

      <div>
        <ComboBox onChange={handleChange} onClick={DownloadCSV}/>
     
      </div>

      <div className="graph" style={{height: "80vh",width:"70vw"}}>

        <BarChart data={json.Chart}
          aspectRatio={false}
          labelposition="top"
          labelwidth={40}
          labelSize={18}
          labelString="Blue water/million cubic metres"
          TitleSize='24'
          title="Fresh Water use"
          
          />
     <div>
    <p style={{color:"gray",fontSize:"20px",fontFamily: "Montserrat",paddingLeft:"296px"}}> 
    Water use for irrigation for crops and livestock production 

</p>
    </div>

      </div>
    </div>
  );
}
export default DrawFreshWaterUse;
