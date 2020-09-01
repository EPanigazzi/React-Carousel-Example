import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import haedo from '../assets/haedo.png';
import plaza8 from '../assets/plaza8.png';
import lineal from '../assets/lineal.png';
import biblioteca from '../assets/biblioteca.png';

class DemoCarousel extends React.Component{
    render(){
        return(
            <div style={styles}>
                <Carousel>
                <div>
                    <img src={haedo} alt="Haedo"/>
                    <p className="legend" >Haedo</p>
                </div>
                <div>
                    <img src={biblioteca} alt="Biblioteca"/>
                    <p className="legend" >Biblioteca</p>
                </div>
                <div>
                    <img src={plaza8} alt="Plaza 8"/>
                    <p className="legend" >Plaza 8</p>
                </div>
                <div>
                    <img src={lineal} alt="Plaza lineal"/>
                    <p className="legend" >Plaza lineal</p>
                </div>
            </Carousel>
            </div>
        )
    }
}

const styles={
    margin: 'auto',
    width: '500px'
};

export default DemoCarousel;