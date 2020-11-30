import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import { Container, Row, Col } from "react-bootstrap";
import ComboBoxTradeReportersImporters from "../components/ComboBoxTradeReporters";
import ConvertToCSV from '../components/ConvertToCSV';


import TradeReportService from '../services/TradeReportService';


const SustainableExporter = () => {


  const [state, setState] = useState({
    select: {
      product: 'abaca',
      iteration: "4",
      scenathon_id: "6"
    }
  });


  const [json, setJson] = useState({
    importertChart: [],
    exporterChart: [],
    CSV:[]
  });



  const handleChange = e => {
    var product = state.select.product;
    var scenathon = state.select.scenathon_id;
    var iteration = state.select.iteration;
  
    if(e.target.name==="scenathon_id"){
      switch (e.target.value) {
        case '6':
          iteration=state.select.iteration==="1"? "3":"4";
          scenathon="6";
          break;
        case '5':
          scenathon="5";
          iteration=state.select.iteration==="3"? "1":"2";
        break;    
        default:  iteration=state.select.iteration==="1"? "3":"4";
      }
    }
    else{ 
      product= e.target.name==="product"? e.target.value: state.select.product;
      iteration=e.target.name==="iteration"?scenathon==="6" ? e.target.value==="after"? "4":"3" : e.target.value==="after"? "2":"1":state.select.iteration;
    }
    setState({
      select: {
        product: product,
        iteration:iteration,
        scenathon_id:scenathon,
      }
    });
  }
  
  useEffect(() => {
console.log(state);
    TradeReportService(state).then(setJson);
  }, [state]);



  const DownloadCSV = e => {
    ConvertToCSV(json.CSV)
    }
  return (
    <Container fluid >
      <div >
        <ComboBoxTradeReportersImporters metodo={handleChange} onClick={DownloadCSV}/>

      </div>
      <Row  >
        <Col>

          <div className="chart" style={{ height: "75vh", width: "35vw" }}>

            <BarChart data={json.importertChart} title="Sustainable net importers "
              labelString='Import quantity (unit 1000 tons)'
              aspectRatio={false}
              TitleSize={20}
              labelposition="bottom" />
          </div>

        </Col>
        <Col >
          <div style={{ height: "75vh", width: "35vw" }}>


            <BarChart data={json.exporterChart} title="Sustainable net exporters"
              labelString='Export quantity (unit 1000tons)'
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