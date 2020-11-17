import React from 'react';
import styled from 'styled-components';

const Styles= styled.div`

.about-container{
overflow:hidden;
padding: 10px 10%;
align-items:center;
margin:0;

justify-content:space-between;
margin-bottom:2em;
width:100%;
height: 160px;

.about-title{
    text-align:left;
    color:#306973;
    font-size:32px;
    font-weight: bold;
    margin-bottom:2em;
}

.about-content{
    color: #4E4E4E;
    text-align: justify;
    font-size: 15px;
}
}

`;

const About1=()=>{
return(
<Styles>
<div className="about-container">

</div>


</Styles>


)
};
export default About1;