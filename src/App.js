import React from 'react';
import './css/App.css';
import Navbar from "./components/Navbar";
import About1 from "./components/About1";
import About2 from "./components/About2";
import Tour from "./components/Tour";
import Jumbotron from './components/Jumbotron'
import Jumbotron2  from './components/Jumbotron2'
import Jumbotron3 from './components/Jumbotron3'
import JumbotronFin from './components/JumbotronFin'
import 'react-hint/css/index.css';
import Scenathon from './pages/Scenathon';
import steps from './components/TOUR_STEPS';
import Sidebar from './components/Sidebar';
import CookieDisclaimer from 'react-cookie-disclaimer';
import CookieDisclaimer2 from './components/CookieContainer'

{/*import SwipeableDrawe from './components/SwipeableDrawer';*/}


const App = (props) => {
  console.groupEnd();
  const references = {
    fable: React.createRef(),
    scenathon2020: React.createRef(),
    scenathon: React.createRef(),
    home: React.createRef()
  }

    return (
        <React.Fragment>
        <div>
          // <Tour stepsP={steps}/>
        </div>

        <CookieDisclaimer
          background='#306973' 
          bottomPosition={true}
          closeIconSize={30}
          closeIconPositionTop={false}
          color='#fff'
          cookiePolicyName='Cookie Policy'
          cookiePolicyText='By continuing to use the service, you agree to our'
          text='This website uses cookies to improve service.'/>

        <div className="Nav">
          <Navbar references={references}/>
        </div>

            {/*<CookieDisclaimer2 />*/}
            <Jumbotron/>

        <div className="About1" id="About1">
          <About1 aboutRef={references.fable}/>
        </div>
      
        
        <div className="Scenathon2020">
          <Scenathon fableRef={references.scenathon2020} className="Scenathon2020" id="Scenathon2020"/>
        </div>

        <div className="scenathon-info">
          <About2 fableRef={references.scenathon}/>
        </div>
      
        <div id="Jumbotron_3" >
          {<Jumbotron3 />}
        </div>
        <div id="JumbotronFin" data-rh="Copyright" data-rh-at="top" id="final">
          <JumbotronFin/>
        </div>
    </React.Fragment>
  )
};
export default App;