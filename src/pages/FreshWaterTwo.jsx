import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import {Container,Row,Col} from "react-bootstrap";
import ComboBox from '../components/ComboBox';
import Tour from '../components/Tour';
import FreshWaterTwoService from '../services/FreshWaterTwoService';

import TradeReportMap from './TradeReportMap'

const DrawFreshWater2 = () => {




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
    console.log("entre")
    FreshWaterTwoService(state).then(setJson);
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
      content: "Distribution of freshwater use for crop irrigation and livestock production by country.",
      title: "Fresh Water Use 2",
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
    <Container fluid>
      <div>
        {/*<Tour stepsP={steps}/>*/}
        
        <ComboBox onChange={handleChange} />
     
      </div>
      <Row  >
        <Col >
          <div className="graph"  style={{ textAlign: 'center',height: "72vh", width: "40vw", "margin-right":-100 }}>

            <BarChart data={json}
              title="Fresh Water Use 2"
              labelposition="right"
              labelwidth={20}
              labelSize={15}
              TitleSize={24}
              labelString="Blue water/million cubic metres"
              aspectRatio={false} />
 <div>
    <p style={{color:"gray",fontSize:"20px",fontFamily: "Montserrat",paddingLeft:"80px", textAlign:"justify"}}>Water use for irrigation for crops and livestock production by country 
 
</p>
    </div>


          </div>
        </Col>
        <Col>
        <br/><br/>
 
          <div style={{textAlign: 'center', height: "70vh", width: "35vw" }}>
          <TradeReportMap countriesData = {json}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}





export default DrawFreshWater2