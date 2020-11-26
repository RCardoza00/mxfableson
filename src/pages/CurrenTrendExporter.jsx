import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import { Container, Row, Col } from "react-bootstrap";
import ComboBoxTradeReportersImporters from "../components/ComboBoxTradeReporters";
import CurrenTrendExporterService from '../services/CurrenTrendExporterService';


const SustainableExporter = () => {



  const [state, setState] = useState({
    select: {
      Product: 'abaca',
      iteration: "2",
      column: "Export_quantity",
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
    CurrenTrendExporterService(state).then(setJson);

  }, [state]);






  return (
    <Container fluid >
      <div >
        <ComboBoxTradeReportersImporters metodo={handleChange} />

      </div>
      <Row  >
        <Col>

          <div className="chart" style={{height: "80vh",width:"70vw"}}>
            <BarChart data={json} title="Current trend net exporters"
              labelString='Export quantity (unit 1000 tons)'
              aspectRatio={false}
              TitleSize={20}
              labelposition="bottom" />
          </div>

        </Col>
      
      </Row>

    </Container>
  );
}

export default SustainableExporter;