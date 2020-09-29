import React, { Component } from 'react';
import '../css/Lokasi.component.css';


export default class Lokasi extends Component{
    

    render(){
        return(
            <div className='container'>
                <div className='row'>
                <h1 className='lokasiTitle'>Pilih Lokasi Anda : </h1>
            <select className='dropdown'>
            <option className='dropdownItem'>Pilih Lokasi Anda</option>
            <option className='dropdownItem'>Jakarta Selatan</option>
            <option className='dropdownItem'>Tangerang</option>
            <option className='dropdownItem'>Tangerang Selatan</option>
            <option className='dropdownItem'>Depok</option>
            <option className='dropdownItem'>Bogor</option>
           </select>
                </div>
           </div>
        );
    }
}