import React from 'react';
import '../css/Slider.component.css';
import logo from '../asset/boruto.jpg';
import { Carousel } from 'react-bootstrap';


export default class CarouselImage extends React.PureComponent {
    // constructor(props) {
    //     super(props);
        
    // }


    render() {
        return(       
           <Carousel className='carousel'>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src={logo}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={logo}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={logo}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
         


        // <div className='container'>
        // <img className='image' src={logo} alt="logo"/>
        // </div>
        );

    }
}