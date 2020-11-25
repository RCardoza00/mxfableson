import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import { Container, Row, Col } from "react-bootstrap";
import ComboBoxTradeReportersImporters from "../components/ComboBoxTradeReporters";
import CurrenTrendImporterService from '../services/CurrenTrendImporterService';
import TradeReportMap from './TradeReportMap'

const SustainableExporter = () => {

  const [state, setState] = useState({
    select: {
      Product: 'abaca',
      iteration: "2",
      column: "Import_quantity",
      scenathon_id: "5"
    }
  });


  const [json, setJson] = useState({
    labels: [],
    datasets: []
  });



  const handleChange = e => {
    var iteration = e.target.name === "iteration" ? e.target.value === "after" ? '2' : '1' : state.select.iteration;

    setState({
      select: {

        ...state.select,

        [e.target.name]: e.target.value,
        iteration: iteration
      }

    })

  }

  useEffect(() => {
    CurrenTrendImporterService(state).then(setJson);
  }, [state]);



  return (
    <Container fluid >
      <div >
        <ComboBoxTradeReportersImporters metodo={handleChange} />
      
      </div>
      <Row  >
        <Col>

          <div style={{ height: "78vh", width: "35vw" }}>
            <BarChart data={json} title="Current trend net Importers"
              labelString='Import quantity'
              TitleSize={20}
              labelSize={12}

              aspectRatio={false}
              labelposition="bottom" />
          </div>

        </Col>
        <Col>
          <br /><br />
          <div style={{ textAlign: 'center', height: "70vh", width: "30vw" }}>
            <TradeReportMap countriesData={json} />
          </div>
        </Col>
      </Row>

    </Container>

  );

}
export default SustainableExporter;