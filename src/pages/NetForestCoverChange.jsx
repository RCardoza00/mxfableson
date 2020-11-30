import React, { useState, useEffect } from "react";
import MixedChart from "../components/MixedChart.jsx";
import ComboBox from '../components/ComboBox'
import NetForestCoverService from '../services/NetForestCoverService';
import ConvertToCSV from '../components/ConvertToCSV';
const DrawNfch = () => {
  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }
  });

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

    
      const [json, setJson] = useState([{
        labels:[],
        datasets:[],
        CSV:[]
      }]);
      
    
      useEffect(() => {
        NetForestCoverService(state).then(setJson);
      
      }, [state]);
    
 


/** const steps = [
    {
      target: ".graph",
      content: "Net Forest Change (loss and gain) describes the sum of all changes in forest area over a specific period of time.",
      title: "Net Forest Change 1",
        styles: {
          //this styles override the styles in the props  
          options: {
            textColor: "black",
            backgroundColor: '#fff',
          }
        },
        locale: { 
          next: <span>End</span>,
        },
        placement: "top"
    }
  ]*/
  
  const DownloadCSV = e => {
    ConvertToCSV(json.CSV)
    }

  return <div style={{height: "80vh",width:"82vw"}}>
<div>
<ComboBox onChange={handleChange} onClick={DownloadCSV}/>
{/**<Tour stepsP={steps}/>
*/}
</div>


<div style={{height: "80vh",width:"82vw"}} className="graph">
  
<MixedChart style={{height: "80vh",width:"82vw"}} data={json}
  title="Net Forest Cover Change"
  aspectRatio={false}
  labelString='1000 ha Per Year'
  fontSize="20"
  labelWidth={40}
	labelSize={18}
  TitleSize={24}

  labelposition="right"/>
     <div>
    <p style={{color:"gray",fontSize:"16px",textAlign:"left",fontFamily: "Montserrat",paddingLeft:"80px"}}>Forest loss due to crop, pasture, and/or urban expansion and forest gain due to afforestation in 1000 ha per year (average annual change over each 5 year-period e.g. 2005 corresponds to 2000 and 2005). 
    Source of historical data:<a href="https://datastudio.google.com/u/0/reporting/77705208-e149-4507-a419-63ddbef26a63/page/uBsMB" target="_blank"> Global Forest Watch (GFW) </a>
</p>
    </div>

  </div>
  
  </div>;
}

 

export default DrawNfch;



