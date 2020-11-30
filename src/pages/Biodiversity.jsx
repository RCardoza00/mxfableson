import React, { useState, useEffect } from "react";
import BarChart3 from "../components/BarChart3";
import { Container, Row, Col } from "react-bootstrap";
import ComboBox from '../components/ComboBox';
import TradeReportMap from './TradeReportMap'
import BiodiversityService from '../services/BiodiversityService';
import ConvertToCSV from '../components/ConvertToCSV';

//nfch=NetForestCoverChange
const DrawBiodiversity = () => {

  const [state, setState] = useState({
    select: {
      GraficaType: 'group',
      scenathon_id: '6',
      Iteration: '4',
    }

  });

  const [json, setJson] = useState({
    labels: [],
    datasets: [],
    CSV: []
  });
  useEffect(() => {
    BiodiversityService(state).then(setJson);
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

  const DownloadCSV = e => {
    ConvertToCSV(json.CSV)
    }
  return (
    <Container fluid >
      <div >
        <ComboBox onChange={handleChange} onClick={DownloadCSV}/>
      </div>
      <Row>
        <Col>

          <div className="biodiversity-chart" style={{ width: "37vw", "margin-right": -200 }}>
            <BarChart3 data={json} title="Share of total land which is protected"
              aspectRatio={false}
              labelString='1000ha per year'
              fontSize="20"
              labelWidth={40}
              labelSize={15}
              TitleSize={24}
              labelposition="right" />
          </div>

        </Col>
        <Col>
          <br /><br /><br />
          <div style={{ width: "40vw" }}>
            <TradeReportMap countriesData={json} from="Biodiversity" />
          </div>

        </Col>
      </Row>

    </Container>

  );
}
export default DrawBiodiversity;
