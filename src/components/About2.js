import React from 'react';
import styled from 'styled-components';

const Styles= styled.div`

.about-container{
    overflow:hidden;
    align-items:center;
    margin:0;
    
    justify-content:space-between;
    width:100%;
    
    .about-title{
        text-align:left;
        color:#306973;
        font-size:32px;
        font-weight: bold;
        margin-bottom:30px;
    }
    
    .about-content{
        color:#4E4E4E;
        text-align: justify;
        font-size:15px;
    }
    }
    
    `;

const About2=(props)=>{
    return(
        <Styles ref={props.fableRef}>
            <div className="about-container">
            <div className="about-content">Key findings and policy implications Current Trends Pathways lead most countries towards unsustainable land-use and food systems, but through decisive action governments and other stakeholders can meet the related SDGs and objectives of the Paris Agreement. The Sustainable Pathways concurrently meet the objectives related to food security, greenhouse gas emissions, water use, and biodiversity (Table B).</div>
            <div className="about-content">Scenathons were conceived at IIASA as participatory decision-making exercises that integrate models, stakeholders, and technology to collectively solve complex, large-scale multi-objective problems. <br/><br/>

            The Food, Agriculture, Biodiversity, Land, and Energy (FABLE) Consortium has applied the Scenathon concept to answer questions concerned with sustainability transformations of food and land use systems. Within this setting, the Scenathon process allows country teams to progressively align national pathways with the global FABLE targets and to balance trade flows.
            </div>

            </div>
        </Styles>
    )
};
export default About2;