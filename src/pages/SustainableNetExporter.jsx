import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import { Container, Row, Col } from "react-bootstrap";
import ComboBoxTradeReportersImporters from "../components/ComboBoxTradeReporters";

import SustainableExporterService from '../services/SustainableExporterService';
import TradeReportMap from './TradeReportMap'

const SustainableExporter = () => {



  const [state, setState] = useState({
    select: {
      Product: 'abaca',
      iteration: "4",
      column: "Export_quantity",
      scenathon_id: "6"
    }
  });



  const [json, setJson] = useState({
    labels: [],
    datasets: []
  });


  const handleChange = e => {
    var iteration = e.target.name === "iteration" ? e.target.value === "after" ? '4' : '3' : state.select.iteration;
    setState({
      select: {

        ...state.select,

        [e.target.name]: e.target.value,
        iteration: iteration
      }

    })

  }


  useEffect(() => {
    SustainableExporterService(state).then(setJson);

  }, [state]);


  return (

    <Container fluid >
      <div >
      {console.log("entre")}

        <ComboBoxTradeReportersImporters metodo={handleChange} />

      </div>
      <Row  >
        <Col>

          <div className="trade-chart">

                      <BarChart data={json} title="Sustainable net exporters"
                        labelString='Export quantity'
                        aspectRatio={false}
                        labelposition="bottom"/> 
          </div>
        </Col>
        <Col>
          <br /><br />
          <div className="trade-map">
                  <TradeReportMap countriesData = {json}/>
          </div>
        </Col>
      </Row>
   
    </Container>
  );
}

export default SustainableExporter;