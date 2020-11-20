import React from 'react';
import {Bar} from 'react-chartjs-2';

//draw triple style chart
const  drawSuperGraph=(props) => {

    const options = {
      responsive: true,
      maintainAspectRatio: props.aspectRatio===undefined?false:props.aspectRatio,
      title: {
        display: true,
        fontSize:props.TitleSize===undefined?12:props.TitleSize,

        text: props.title
    },legend:{
      labels:{
        boxWidth:props.labelWidth===undefined?20:props.labelWidth,
      fontSize:props.labelSize===undefined?12:props.labelSize
      },
      position:props.labelposition===undefined?'right':props.labelposition
    },tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: false,
          bezierCurve : false,
          lineTension: 0,       

        }
      },
      scales: {
        xAxes: [
          {
              stacked: true,
  
            display: true,
            gridLines: {
              display: true
            },
            
            
          }
        ],
        yAxes: [
          {
              stacked: true,
  
            type: 'linear',
            display: true,    
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: true,
            },
            scaleLabel: {
              display: true,
              labelString:props.labelString===undefined?'':props.labelString,
              fontColor:props.fontColor===undefined?'#546372':props.fontColor,
              fontSize:props.fontSize===undefined?18:props.fontSize,
              fontFamily: "Montserrat",
  
            },
  
            labels: {
              show: true,
              usePointStyle: true,

            }
          },
          {
            type: 'linear',
            display: false,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: false
            }
          ,
            labels: {
              show: true
            }
          }
        ]
      }
    };
    
  //  let data = props.data;
    return (
          <Bar data={props.data}
                options={options}/>
      );
  }
  export default drawSuperGraph;