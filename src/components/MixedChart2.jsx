import React from 'react';
import {Bar} from 'react-chartjs-2';



  
  const  drawMixedChart2=(props)=> {


    const options = {
      responsive: true,
      maintainAspectRatio: props.aspectRatio===undefined?true:props.aspectRatio,
      title: {
        display: true,
        fontSize:props.TitleSize===undefined?12:props.TitleSize,

        text: props.title
    },legend:{
      display:true,
      labels:{
        boxWidth:props.labelWidth===undefined?20:props.labelWidth,
      fontSize:props.labelSize===undefined?12:props.labelSize,
      
      },
      position:props.labelposition===undefined?'right':props.labelposition
    },tooltips: {
        mode: 'label',
          callbacks: {
            label: function(tooltipItem, data) { return tooltipItem.yLabel*100 + '%'; }
          }
    
    
        ,
      },
      elements: {
        line: {
          fill: false,
          tension: 0,
          bezierCurve : false


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
            gridLines: 
            {
               
              display: true,

            }, scaleLabel: {
              display: true,
              labelString:props.labelString===undefined?'':props.labelString,
              fontColor:props.fontColor===undefined?'#546372':props.fontColor,
              fontSize:props.fontSize===undefined?18:props.fontSize,
              fontFamily: "Montserrat",
              

            },
            ticks: {
              callback: function(label, index, labels) {
                  return label*100+'%'
              },
             
              min:0,
            
              
          },
  
            labels: {
              show: true
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
    
    
        
  
    return (
    
  <Bar data={props.data}
                options={options}/>
    
        
      );
  }
  export default drawMixedChart2;