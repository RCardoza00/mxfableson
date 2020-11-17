import React from "react"
import ReactJoyride from 'react-joyride';
const Tour = (props) => {

    return (
          <ReactJoyride
          steps={props.stepsP}
          continuous={true}
          showProgress
          showSkipButton
          styles={{
           options: {
              // modal arrow and background color
              arrowColor: "white",
              backgroundColor: "white",
              // page overlay color
              overlayColor: "rgba(180, 132, 133, 0)",
              //button color
              primaryColor: "pink",
              //spotlightShadow: '1 1 15px rgba(0, 0, 0, 0)',
              beaconSize: 36,
              //width of modal
              width: 500,
              //zindex of modal
              zIndex: 9998
          }
      }}
        />
    );
  };
  
export default Tour;