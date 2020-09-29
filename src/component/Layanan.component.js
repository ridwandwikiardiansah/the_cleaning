import React, { Component } from 'react';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Layanan.component.css';



export default class Layanan extends Component {

    render(){
        const { serviceName, idx } = this.props;
        return(     
                <div className='row justify-content-center' key={`suggested_preview_${idx}`}>
                    <FontAwesomeIcon className='mt-2' icon={faCouch}/>
                        <h1 className='textLayanan'>{serviceName}</h1>
                </div>
           
        );
    }
}