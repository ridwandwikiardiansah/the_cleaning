import React, { Component } from 'react';
import '../css/Kalendar.css';
import moment from 'moment';
import { AnimationWrapper } from 'react-hover-animation'


export default class Kalender extends Component {

    render(){
        const now = moment().format('DD');
        const now2 = moment().add(1,'days').format('DD');
        const now3 = moment().add(2,'days').format('DD');
        const now4 = moment().add(3,'days').format('DD');
        const now5 = moment().add(4,'days').format('DD');
        const now6 = moment().add(5,'days').format('DD');
        const hari = moment().format('ddd');
        const hari2 = moment().add(1,'days').format('ddd');
        const hari3 = moment().add(2,'days').format('ddd');
        const hari4 = moment().add(3,'days').format('ddd');
        const hari5 = moment().add(4,'days').format('ddd');
        const hari6 = moment().add(5,'days').format('ddd');
        
        return(
            <div className='container'>
                <div className='row justify-content-center p-2'>
                    <AnimationWrapper>
                    <div className='col-lg-2 col-md-2 col-sm-2 radius m-1 p-2 '>
                        <h1 className='date'>{now}</h1>
                        <h1 className='date'>{hari}</h1>
                    </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                    <div className='col-lg-2 col-md-2 col-sm-2 radius m-1 p-2 '>
                        <h1 className='date'>{now2}</h1>
                        <h1 className='date'>{hari2}</h1>
                    </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                    <div className='col-lg-2 col-md-2 col-sm-2 radius m-1 p-2 '>
                        <h1 className='date'>{now3}</h1>
                        <h1 className='date'>{hari3}</h1>
                    </div> 
                    </AnimationWrapper>                       
                </div>
            </div>



            // <div className='kalenderContainer'>
            //     <div className='cardCalender'>
            //     <h1 className='date'>{now}</h1>
            //     <h1 className='date'>{hari}</h1>
            //     </div>
            //     <div className='cardCalender'>
            //     <h1 className='date'>{now2}</h1>
            //     <h1 className='date'>{hari2}</h1>
            //     </div>
            //     <div className='cardCalender'>
            //     <h1 className='date'>{now3}</h1>
            //     <h1 className='date'>{hari3}</h1>
            //     </div>
            //     <div className='cardCalender'>
            //     <h1 className='date'>{now4}</h1>
            //     <h1 className='date'>{hari4}</h1>
            //     </div>
            //     <div className='cardCalender'>
            //     <h1 className='date'>{now5}</h1>
            //     <h1 className='date'>{hari5}</h1>
            //     </div>
            //     <div className='cardCalender'>
            //     <h1 className='date'>{now6}</h1>
            //     <h1 className='date'>{hari6}</h1>
            //     </div>
            // </div>
        );
    }
}