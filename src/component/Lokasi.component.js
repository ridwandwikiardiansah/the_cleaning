import React, { Component } from 'react';
import '../css/Lokasi.component.css';


export default class Lokasi extends Component{
    

    render(){
        const { Item, name, onChange } = this.props;
        return(
            <div className='container'>
                <div className='row'>
                <h1 className='lokasiTitle'>Pilih Lokasi Anda : </h1>
            <select className='dropdown' name={name} onChange={onChange}>
                {Item.map(item =>(
                    <option className='dropdownItem'>{item}</option>
                ))
                }
           </select>
                </div>
           </div>
        );
    }
}