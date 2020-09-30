import React, { Component } from 'react';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Layanan.component.css';



export default class Layanan extends Component {
    constructor(props){
        super(props)
        this.state = {
            active : false,
        }
    }

    render(){
        const { serviceName } = this.props;
        return(     
                <div className='row ml-5'>
                    <FontAwesomeIcon className='mt-2' icon={faCouch}/>
                        <h1 className='textLayanan'>{serviceName}</h1>
                </div>
           
        );
    }
}