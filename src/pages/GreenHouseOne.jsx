import React, { useState, useEffect } from "react";
import SuperGraph from "../components/SuperGraph";
import ComboBox from '../components/ComboBox';
import { Container, Row, Col } from "react-bootstrap";
import Tour from '../components/Tour'
import GreenHouseService from '../services/GreenHouseService';
import ConvertToCSV from '../components/ConvertToCSV';

const DrawGreenhouse1 = () => {



  const [state, setState] = useState({
    select: {
      GraficaType:'group',
      scenathon_id:'6',
      Iteration:'4',
    }
   
  });
  const [data, setdata] = useState({
    chartOne:[],
    charTwo:[]
  });

 

  useEffect(() => {
    GreenHouseService(state).then(setdata);
    
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


/** 
  const steps = [
    {
      target: ".graph",
      content: "Computed annual global greenhouse gas emissions from crops and livestock (left), and from land use and peat oxidation (right) in Gt.",
      title: "Greenhouse Gas Emissions 1",
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
  ConvertToCSV(data.CSV)
  }

  return (
    <Container fluid>
{/**<Tour stepsP={steps}/>*/}
      <ComboBox onChange={handleChange} onClick={DownloadCSV}/>
     
      <div className="graph">
      <Row>
        <Col >
          <div style={{  height: "75vh", width: "35vw" }}>
          

            <SuperGraph data={data.chartOne}
            title="            Annual GHG emissions from cops and livestock in Gt CO2e."
            aspectRatio={false} 
            labelposition="bottom"
            labelwidth={20}
            labelSize={15}
            labelString="Gt CO2e"

          TitleSize={18}/> 

    </div>

            </Col>
        <Col > 
        <div style={{height: "75vh", width: "35vw"}}>

          <SuperGraph data={data.charTwo}
          title="                Average annual GHG emissions from land use change and peat oxidation in Gt CO2e."
          aspectRatio={false} 
            labelposition="bottom" 
            labelwidth={20}
            labelSize={15}
            labelString="Gt CO2e"
          TitleSize={18}/> 

            </div>
            </Col>
      </Row>
      </div>
    </Container>
 ); 
}


export default DrawGreenhouse1
