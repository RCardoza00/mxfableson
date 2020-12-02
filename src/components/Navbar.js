import React from 'react';
import "../css/App.css"
import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import About from '../pages/About';
import styled from 'styled-components';
import IIASA_LOGO_WHITE from '../assets/IIASA_LOGO_WHITE.png';
import IIASA_LOGO_COLOR from '../assets/IIASA_LOGO.png';
import SDSN_LOGO_WHITE from '../assets/SDSN_LOGO_WHITE.png';
import SDSN_LOGO_COLOR from '../assets/SDSN_LOGO.png';
import FoodAndLand_LOGO_WHITE from '../assets/FoodAndLand_LOGO_WHITE.png';
import FoodAndLand_LOGO_COLOR from '../assets/FoodAndLand_LOGO.png';

const Styles = styled.div`
.navbar, #navbar{
  display:flex;
  position: fixed;
  transition: 1s;
  align-items:center;
  background-color: transparent ;
  padding:0 0%;
  justify-content:space-between;
  width:100%;
  z-index: 9999;
.router-container {
   
  .navbar-brand{
    margin-left:40px;
  }
  
  }

.banner-container{
 
  margin-right: 90px;


#IIASA_LOGO{
  width:140px;
}
#SDSN_LOGO{
margin-right:20px;
width: 100px;
}
#FoodAndLand_LOGO{
  width: 130px;
}

}

  navbar-brand: hover{
    color:#306973;
    width:inherit;
  }
.navbar-brand, .navbar-nav .nav-link {
  color: white;
  text-shadow: .5px .5px 2px #000000;
  .navbar-link{
    margin-left:70px;
  }
}
`;

const NavBar = (props) => {

  const handleClick = (reference) => {
    reference.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }


  const openExternalUrL = () => {
    window.open("https://scenathon.org/", "_self")
  }
  

  return (
    <Styles>
      <Router>
        <ReactBootStrap.Navbar expand="lg" className="nav navBarWidth" id="navbar" variant="light">

          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <div className="banner-container">

              <ReactBootStrap.Navbar.Brand href="#banners">
                <img
                  alt=""
                  className="banner"
                  id="IIASA_LOGO"
                  src={IIASA_LOGO_WHITE}
                />
                <img
                  alt=""
                  src={SDSN_LOGO_WHITE}
                  className="banner"
                  id="SDSN_LOGO"
                />
                <img
                  alt=""
                  src={FoodAndLand_LOGO_WHITE}
                  className="banner"
                  id="FoodAndLand_LOGO"
                />

              </ReactBootStrap.Navbar.Brand>
            </div>
            <div className="router-container" id="router-container">

              <Link onClick={() => {handleClick(props.references.fable)}} >
                <ReactBootStrap.Navbar.Brand  className="navbar-link" id="navbar-link-home">Home</ReactBootStrap.Navbar.Brand>
              </Link>
              
              <Link onClick={() => {handleClick(props.references.fable)}}>
                <ReactBootStrap.Navbar.Brand className="navbar-link" id="navbar-link-fable">Fable</ReactBootStrap.Navbar.Brand>
              </Link>
              <Link onClick={() => {handleClick(props.references.scenathon2020)}}>
                <ReactBootStrap.Navbar.Brand className="navbar-link" id="navbar-link-scenathon2020"> Scenathon 2020</ReactBootStrap.Navbar.Brand>
              </Link>
              <Link onClick={() => {}} to={""}>
                <ReactBootStrap.Navbar.Brand className="navbar-link" id="navbar-link-scenathon2019" href="#scenathon2019">Scenathon 2019</ReactBootStrap.Navbar.Brand>
              </Link>
              <Link onClick={() => {}} to={""}>
                <ReactBootStrap.Navbar.Brand className="navbar-link" id="navbar-link-contact" href="#">Contact us</ReactBootStrap.Navbar.Brand>
              </Link>
              <Link onClick={() => {openExternalUrL()}} to={""}>
                <ReactBootStrap.Navbar.Brand className="navbar-link" id="navbar-link-login" href="#scenathon">Login</ReactBootStrap.Navbar.Brand>
              </Link>
            </div>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        <Switch>

          <Route path="/About" render={
            () => {
              return (<h1>About</h1>);
            }
          }>
            <About />
          </Route>

        </Switch>

      </Router>

    </Styles>

  )



}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if(document.getElementById("navbar")){

  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    
  } else {

    document.getElementById("navbar").style.top = "-120px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("IIASA_LOGO").src = IIASA_LOGO_COLOR;
    document.getElementById("SDSN_LOGO").src = SDSN_LOGO_COLOR;
    document.getElementById("FoodAndLand_LOGO").src = FoodAndLand_LOGO_COLOR;
    document.getElementById("navbar-link-home").style.color="#306973";

   
    document.getElementById("navbar-link-fable").style.color="#306973";
    document.getElementById("navbar-link-scenathon2020").style.color="#306973";
    document.getElementById("navbar-link-scenathon2019").style.color="#306973";
    
  }
  if (currentScrollPos === 0) {
 
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("IIASA_LOGO").src = IIASA_LOGO_WHITE;
    document.getElementById("SDSN_LOGO").src = SDSN_LOGO_WHITE;
    document.getElementById("FoodAndLand_LOGO").src = FoodAndLand_LOGO_WHITE;

   //change switch of color using getByClassName method
   document.getElementById("navbar-link-home").style.color="white";
   document.getElementById("navbar-link-fable").style.color="white";
   document.getElementById("navbar-link-scenathon2020").style.color="white";
   document.getElementById("navbar-link-scenathon2019").style.color="white";
  }
}
  prevScrollpos = currentScrollPos;
}

export default NavBar; 