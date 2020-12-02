import React from 'react';
import styled from 'styled-components';

const Styles= styled.div`
	.about-container{
		overflow:hidden;
		// padding: 10px 10%;
		align-items:center;
		margin:0;
		justify-content:space-between;
		padding-bottom:2em;
		

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

@media(max-width 1200px){

}

@media(max-width 992px){
   
}


@media( max-width: 768px){
    .about-title{
        font-size:15px;
    }

    .about-content{
        font-size:5px;
    }
}
@media (max-width 576px){  
    .about-title{
        font-size:5px;
    }

    .about-content{
        font-size:3px;
    }

}
    
`;

const About1=(props)=>{
return(
<Styles>
<div className="about-container" ref={props.aboutRef}>
<div className="about-title">Food, Agriculture, Biodiversity, Land and <br/> Energy Consortium</div>
<div className="about-content"> The Food, Agriculture, Biodiversity, Land-Use, and Energy (FABLE) Consortium is convened as part of the Food and Land-Use Coalition (FOLU). It aims to understand how countries can transition towards sustainable land-use and food systems. In particular, we ask how countries can collectively meet associated Sustainable Development Goals (SDGs) and the objectives of the Paris Agreement. FABLE comprises 20 country teams, which develop data and modelling infrastructure to promote ambitious, integrated strategies towards sustainable land-use and food systems.
The FABLE consortium has applied the Scenathon concept to answer questions concerned with sustainability transformations of food and land use systems. Within this setting, the Scenathon process allows country teams to progressively align national pathways with the global FABLE targets and to balance trade flows.
 <br/><br/>

The Food, Agriculture, Biodiversity, Land-Use, and Energy (FABLE) Consortium is convened as part of the Food and Land-Use Coalition (FOLU). It aims to understand how countries can transition towards sustainable land-use and food systems. In particular, we ask how countries can collectively meet associated Sustainable Development Goals (SDGs) and the objectives of the Paris Agreement. FABLE comprises 20 country teams, which develop data and modelling infrastructure to promote ambitious, integrated strategies towards sustainable land-use and food systems.
</div>

</div>


</Styles>


)
};
export default About1;
