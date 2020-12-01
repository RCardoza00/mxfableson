import React from 'react';
import Carousel from 'react-elastic-carousel';

function Slider(){
    
    const state = {
        items: [
          {id: 1, title: 'item #1'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
    }

    return(
        <React.Fragment>
            <Carousel itemPadding={[10, 50]} enableAutoPlay autoPlaySpeed={1500} itemsToShow={3} itemsToScroll={3}>
                <h1 style={{backgroundColor: 'white', paddingLeft: '10%', paddingRight: '10%'}}>Lorem ipsum</h1>
                <h1 style={{backgroundColor: 'white', paddingLeft: '10%', paddingRight: '10%'}}>Lorem ipsum</h1>
                <h1 style={{backgroundColor: 'white', paddingLeft: '10%', paddingRight: '10%'}}>Lorem ipsum</h1>
                <h1 style={{backgroundColor: 'white', paddingLeft: '10%', paddingRight: '10%'}}>Lorem ipsum</h1>
                <h1 style={{backgroundColor: 'white', paddingLeft: '10%', paddingRight: '10%'}}>Lorem ipsum</h1>
                <h1 style={{backgroundColor: 'white', paddingLeft: '10%', paddingRight: '10%'}}>Lorem ipsum</h1>
            </Carousel>
        </React.Fragment>
    )
}

export default Slider;