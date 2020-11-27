import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";

import ComboBox from '../components/ComboBox';
import { Container, Row, Col } from "react-bootstrap";
import GreenHouseTwoService from '../services/GreenHouseTwoService';
import TradeReportMap from './TradeReportMap'
import Tour from '../components/Tour'

//nfch=NetForestCoverChange
const GreenHouse = () => {





  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }

  });


  const [data, setdata] = useState({
    chartOne: [],
    charTwo: []
  });



  useEffect(() => {
    GreenHouseTwoService(state).then(setdata);

  }, [state]);







  const handleChange = e => {

    var group = state.select.GraficaType;
    var scenathon = state.select.scenathon_id;
    var iteration = state.select.Iteration;
    if (e.name === "GraficaType") {
      group = e.value
    } else if (e.target.name === "scenathon_id") {
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


      iteration = scenathon === "6" ? e.target.value === "after" ? "4" : "3" : e.target.value === "after" ? "2" : "1";
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
        content: "Average annual distribution of CO2e emissions in Gt per country globally derived from crops and livestock (left), and from land use change and peat oxidation in Gt CO2e. (right)",
        title: "Greenhouse Gas Emissions 2",
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
        <ComboBox onChange={handleChange} />
      </div>

      <div className="graph">
        <Row>
          <Col>
            <div style={{ textAlign: 'center', height: "80vh", width: "37vw", "margin-right": -200 }}>
              <BarChart data={data.chartOne}
                title="             Annual GHG emissions from crops and livestock in Gt CO2e." aspectRatio={false}
                labelposition="right"
                labelwidth={20}
                labelSize={12}
                labelString="Gt CO2e"
                TitleSize={20} />
            </div>
          </Col>

          <Col>
            <br /><br /><br />
            <div style={{ textAlign: 'center', height: "80vh", width: "40vw" }}>
              <TradeReportMap countriesData={data.chartOne} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div style={{ textAlign: 'center', height: "80vh", width: "37vw", "margin-right": -200 }}>
              <BarChart data={data.charTwo}
                title="                      Average annual GHG emissions from land use change and peat oxidation in Gt CO2e." aspectRatio={false}
                labelposition="right"
                labelwidth={20}
                labelString="Gt CO2e"
                labelSize={12}
                TitleSize={20}
              />
            </div >
          </Col>

          <Col>
            <br /><br /><br />
            <div style={{ textAlign: 'center', height: "80vh", width: "40vw" }}>
              <TradeReportMap countriesData={data.charTwo} />
            </div>
          </Col>
        </Row>
      </div>

    </Container>
  );
}




export default GreenHouse;
