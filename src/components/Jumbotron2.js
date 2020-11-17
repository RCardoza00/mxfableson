  
import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import Banner2 from '../assets/banner_2.jpg';

const Styles = styled.div`
   
    .jumbo2{
        background: url(${Banner2});
        background-size: cover;
        color: #ccc;
        position: absoulte;
        margin: 0;
        padding: 0;
        background-position: center;
        min-height: 50vh;
    }
    .overlay{
        background-color: #000;
        opacity:0.6;
        position: absolute;
        top:0;
        left: 0;
        bottom: -5;
        right: 0;
        
    }
    
    
    @media(max-width 1200px){

    }

    @media(max-width 992px){
        .jumbo2{
            height: 40vh;
        }
    }

    
    @media( max-width: 768px){
       .jumbo2{
           height: 170px;
       }
    }
    @media (max-width 576px){
        .jumbo2{
            height: 25px;
        }
    }
    `;


export default () => {
    return(

    <Styles>
        <Jumbo fluid className= "jumbo2">
            <div className= "overlay"></div>
        </Jumbo>
    </Styles>
    )
};
