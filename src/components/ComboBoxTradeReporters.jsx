import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.contenedor selects{
  background-color: #528D93 ;
}
.conetenedor-select {
  color:white;
  &: hover{
    color:#94B046;
  }
}
`;

function ComboBoxTradeReportersImporters(props) {



  return (
    <Styles>

      <div className="contenedor-selects">
 
        <div>
        <h6 > Pathway </h6>
        <select className="selectBox" name="scenathon_id" onChange={props.metodo}>
        <option value="6">Sustainable</option>
        <option value="5">Current trend</option>

      </select>
      </div>
        <br></br>
        <div>
        <h6 > Trade adjustment </h6>
        <select class="selectBox" name="iteration" onChange={props.metodo}>
          <option value="after">After</option>
          <option value="before">Before</option>
        </select>
        </div>

        <div>
        <h6 > Product </h6>
        <select class="selectBox" name="product" onChange={props.metodo}>
       
          <option value="abaca">Abaca</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="barley">Barley</option>
          <option value="beans">Beans</option>
          <option value="beef">Beef</option>
          <option value="cassava">Cassava</option>
          <option value="cattle">Cattle</option>
          <option value="cattle">Cattle</option>
          <option value="cereal_other">Cereal other</option>
          <option value="chicken">Chicken</option>
          <option value="chickens">Chickens</option>
          <option value="chickens">Chickens</option>
          <option value="chips_and__particles">Chips and particles</option>
          <option value="cirus_other">Cirus other</option>
          <option value="clove">Clove</option>
          <option value="cocoa">Cocoa</option>
          <option value="coconut">Coconut</option>
          <option value="cocooil">Cocooil</option>
          <option value="coffe">Coffe</option>
          <option value="corn">Corn</option>
          <option value="cottcake">Cottcake</option>
          <option value="cottlint">Cottlint</option>
          <option value="cottoil">Cottoil</option>
          <option value="cotton">Cotton</option>
          <option value="date">Date</option>
          <option value="eggs">Eggs</option>
          <option value="fiber_hard_other">Fiber hard other</option>
          <option value="fruit_soft_other">Fruit soft other</option>
          <option value="fruit_other">Fruit other</option>
          <option value="grape">Grape</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="groundnut">Groundnut</option>
          <option value="groundnutcake">Groundnutcake</option>
          <option value="groundnutoil">Groundnutoil</option>
          <option value="honey">Honey</option>
          <option value="jute">Jute</option>
          <option value="lemon">Lemon</option>
          <option value="meat_other">Meat other</option>
          <option value="mech_pulp">Mech pulp</option>
          <option value="milk">Milk</option>
          <option value="millet">Millet</option>
          <option value="mutton_goat">Mutton goat</option>
          <option value="nuts">Nuts</option>
          <option value="oats">Oats</option>
          <option value="oilpalmfruit">Oilpalmfruit</option>
          <option value="oilseed_other">Oilseed other</option>
          <option value="olive">Olive</option>
          <option value="oliveoil">Oliveoil</option>
          <option value="onion">Onion</option>
          <option value="orange">Orange</option>
          <option value="other_oil">Other oil</option>
          <option value="other_olscake">Other olscake</option>
          <option value="palm_oil">Palm oil</option>
          <option value="palmkernelcake">Palmkernel cake</option>
          <option value="palmkerneloil">Palmkernel oil</option>
          <option value="peas">Peas</option>
          <option value="pepper">Pepper</option>
          <option value="pigs">Pigs</option>
          <option value="pigs">Pigs</option>
          <option value="piment">Piment</option>
          <option value="pinapple">Pinapple</option>
          <option value="plantain">Plantain</option>
          <option value="pork">Pork</option>
          <option value="potato">Potato</option>
          <option value="pulses_other">Pulses other</option>
          <option value="repecake">Repecake</option>
          <option value="rapeoil">Rapeoil</option>
          <option value="rapeseed">Rapeseed</option>
          <option value="rice">Rice</option>
          <option value="rubber">Rubber</option>
          <option value="rye">Rye</option>
          <option value="sesame">Sesame</option>
          <option value="sesamoil">Sesam oil</option>
          <option value="sheep_goats">Sheep goats</option>
          <option value="sheep_goats">Sheep goats</option>
          <option value="sisal">Sisal</option>
          <option value="sorghum">Sorghum</option>
          <option value="soyabean">Soy abean</option>
          <option value="soycake">Soy cake</option>
          <option value="soyoil">Soy oil</option>
          <option value="spices_other">Spices other</option>
          <option value="sugarbeet">Sugar beet</option>
          <option value="sugarcarne">Sugar carne</option>
          <option value="sugarraw">Sugar raw</option>
          <option value="sunflcake">Sunfl cake</option>
          <option value="sunfloil">Sunfl oil</option>
          <option value="sunflower">Sunflower</option>
          <option value="sweet_potato">Sweet potato</option>
          <option value="tea">Tea</option>
          <option value="tabacco">Tabacco</option>
          <option value="tomato">Tomato</option>
          <option value="tuber_other">Tuber other</option>
          <option value="vegetable_other">Vegetable other</option>
          <option value="wheat">Wheat</option>
          <option value="yams">Yams</option>




        </select>
        </div>

      
       
      </div>
    </Styles>


  )

}
export default ComboBoxTradeReportersImporters;

