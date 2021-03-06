import React, { Component } from 'react';
import NewSidemenu from '../components/NewSidemenu';
//dashboards
import NetForestCoverChange from '../pages/NetForestCoverChange'
import Biodiversity from '../pages/Biodiversity'
import GlobalTargets from '../pages/GlobalTargets'
import ProtectedAreaByType from '../pages/ProtectedAreaByType'
import LandCover from '../pages/LandCover'
import FoodEnergyIntakePerCapita from '../pages/FoodEnergyIntakePerCapita'
import FoodEnergyIntakePerCapita2 from '../pages/FoodEnergyIntakePerCapita2'
import FreshWaterUse from '../pages/FreshWaterUse'
import NetForestCoverChange2 from '../pages/NetForestCoverChange2'
import GreenHouse2 from '../pages/GreenHouse2'
import GreenHouseOne from '../pages/GreenHouseOne'
import FreshWaterTwo from '../pages/FreshWaterTwo'
//assets
import styled from 'styled-components';
import BannerLifeOnLand from '../assets/netForestNew.png';
import BannerLifeOnLandByCountry from '../assets/coverByCountry.png';
import BiodiversityIMG from '../assets/biodiversity.png';
import ProtectedAreas from '../assets/protectedAreas.png';
import LandCoverNew from '../assets/LandCoverNew.png';
import newFood1 from '../assets/newFood1.png';
import food2 from '../assets/food2.png';
import freshNew from '../assets/freshWaterNew.png';
import ghgnew from '../assets/ghgnew.png';

import BannerCleanWater from '../assets/banners/Mesa de trabajo 8.png';
import BannerZeroHunger from '../assets/banners/Mesa de trabajo 2.png';
import BannerZeroHunger2 from '../assets/banners/Mesa de trabajo 2-1.png';
import BannerClimateAction from '../assets/banners/Mesa de trabajo 16.png';
import BannerCustom from '../assets/xdxd.png';
import TradeReport from './TradeReport'
import DashboardCover from '../assets/DashboardCover2.jpg';

const Styles = styled.div`
.header{
    overflow:hidden;
    background-color: transparent;
    color: transparent;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size: 50px;
    margin: 0;
    transition: all 0.5s ease;
    width: 100%;
    max-height: 12vh;

    .banner{
        max-width:100%;
        transition: all 0.5s ease;
    }
}
#container-fluid{ 
   background-size:cover;
}
`;


class Scenathon extends Component {
    constructor(props) {
        super(props);
        this.fableRef = props.fableRef;
    }
    state = {
        select: {
            GraficaType: 'group',
            Iteration: 'before',
            scenathon_id: '6',
            Year: '2000'
        },
        dashboard: 'Global Target Summary'
    }

    //recibe valor de class component "ComboBox" 
    handleChange = e => {
        if (e.target === undefined) {

            this.setState({
                select: {
                    //el next code evitara que se sobrescriba cuando reciba un valor new
                    GraficaType: this.state.select.GraficaType,
                    Iteration: this.state.select.Iteration,
                    scenathon_id: this.state.select.scenathon_id,
                    Year: this.state.select.Year
                },
                dashboard: e

            })
        } else {
            this.setState({
                select: {
                    //el next code evitara que se sobrescriba cuando reciba un valor new
                    ...this.state.select,

                    [e.target.name]: e.target.value
                },
                dashboard: e.target.value
            });
        }
    }
    selectDashboard() {
        switch (this.state.dashboard) {
            case 'Background':
               //document.getElementById('container-fluid').style.backgroundImage="url(../assets/DashboardCover.png)"; ;
                break;
            case 'Global Target Summary':
                this.combobox = null;
                this.dash = <GlobalTargets combinacion={this.state} />;
                try {
                    document.getElementById("banner").src = BannerCustom;     
                } catch (Error) {
                }
                break;
            case 'Net Forest Cover Change 1':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = BannerLifeOnLand;
                this.combobox = null;
                this.dash = <NetForestCoverChange combinacion={this.state} />;
                break;
            case 'Net Forest Cover Change 2':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = BannerLifeOnLandByCountry;
                this.combobox = null;
                this.dash = <NetForestCoverChange2 />;
                break;
            case 'Biodiversity':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = BiodiversityIMG;
                this.combobox = null;
                this.dash = <Biodiversity />;
                break;
            case 'Protected Areas by Type':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = ProtectedAreas;
                //  <ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <ProtectedAreaByType />;
                break;
            case 'Land Cover':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = LandCoverNew;
                // this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <LandCover />;
                break;
            case 'Fresh Water 1':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = freshNew;
                 //  this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <FreshWaterUse />;
               
                break;
            case 'Fresh Water 2':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = freshNew;
                //  this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <FreshWaterTwo />;
                break;
            case 'Green House Gas (GHG) Emissions 1':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = ghgnew;
                //   this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <GreenHouseOne />;
                break;
            case 'Green House Gas (GHG) Emissions 2':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = ghgnew;
                // this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <GreenHouse2 />;
                break;
            case 'Food Energy Intake Per Capita 1':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = newFood1;
                //   this.combobox=<ComboBox2 onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <FoodEnergyIntakePerCapita />;
                break;
            case 'Food Energy Intake Per Capita 2':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = food2;
                this.combobox = null;
                this.dash = <FoodEnergyIntakePerCapita2 />;
                break;
           
            case 'Trade_Report':
                document.getElementById('container-fluid').style.background="transparent";
                document.getElementById("banner").src = "";
                this.combobox = null;
                this.dash = <TradeReport/>;
                break;
            default: this.combobox = null;
            document.getElementById("banner").src = "";
            document.getElementById('container-fluid').style.background="transparent";
                this.dash = <GlobalTargets combinacion={this.state} />;
        }
    }
    render() {
        return (

            <Styles>
                <div className="header" ref={this.fableRef}>
                    <img className="banner" id="banner" src={BannerCustom} alt=""/>
                </div>
                <div id="container-fluid" className="container-fluid" style={{ display: 'flex' , padding:'0 0'}} >

                    <div>
                        <NewSidemenu onChange={this.handleChange} />
                        {/* <Aside onChange={this.handleChange}/>   */}
                    </div>
                    <div>
                        {this.selectDashboard()}
                        {this.combobox}
                        {this.dash}
                    </div>

                </div>
            </Styles>

        )
    }

  


    
}
export default Scenathon;   
