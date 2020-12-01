import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ComboBox from '../components/ComboBox';
import TradeReportMap from './TradeReportMap'
import NetForesTwoService from '../services/NetForesTwoService';
import ConvertToCSV from '../components/ConvertToCSV';



//nfch=NetForestCoverChange
  const DrawNfch2 = () => {




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

    NetForesTwoService(state).then(setJson);


  }, [state]);




  const handleChange = e => {

    var graficaType = state.select.GraficaType;
    var scenathon = state.select.scenathon_id;
    var iteration = state.select.Iteration;

    if (e.name === "GraficaType") {
      graficaType = e.value
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
        GraficaType: graficaType,
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
      <div>
        <ComboBox onChange={handleChange} onClick={DownloadCSV} />
      </div>

      <Row>
        <Col >
          <div style={{ textAlign: 'center', height: "66vh", width: "37vw", "margin-right": -200 }}>
            <BarChart data={json}
              title="Net Forest Cover Change 2"
              labelposition="right"
              display={true}
              labelString='1000ha per year'
              fontSize="20"
              labelWidth={40}
              labelSize={18}
              TitleSize={24}
              aspectRatio={false} />
            <div>
              <p style={{ color: "gray", fontSize: "14px", fontFamily: "Montserrat", paddingLeft: "80px", textAlign: "justify" }}>Contribution by country to cumulated forest loss due to crop, pasture, and/or urban expansion and forest gain due to afforestation in 1000 ha per year (average annual change over each 5 year-period e.g. 2005 corresponds to 2000 and 2005).</p>
            </div>
          </div>
        </Col>

        <Col>
          <br /><br /><br />
          <div style={{ textAlign: 'center', height: "80vh", width: "40vw" }}>
            <TradeReportMap countriesData={json} />
          </div>
        </Col>

      </Row>
    </Container>
  );
}
export default DrawNfch2;
