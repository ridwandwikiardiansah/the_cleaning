import React, { Component } from 'react';
import '../css/OrderCard.css'


export default class OrderCard extends Component {


    render(){
      const { data, Title , Desc}=this.props;
      console.log(data,'props')
        return(
          <div className='container pb-4 radiuscard white shadow'>
            <div className='container p-1 left '>
              <h1 className='titleOrderCard mt-1'>{Title}</h1>
            </div>
            <div className='row bg-secondary'>
              <div className='col-lg-2 col-md-2 col-sm-2 p-2 white'>
                <div className='mb-4'>
                <h3 className='titleDurasi'>Durasi</h3>
                </div>
                <h1 className='text'>2 Jam</h1>
              </div>
              <div className='col-lg-7 col-md-7 col-sm-7 p-2 white'>
                <div className='mb-4'>
                <h3 className='titleDurasi left ml-4'>Deskripsi Pekerjaan</h3>
                </div>
        <h1 className='deskripsi left ml-4'>{Desc}</h1>
                <input
                 className='address'
                 placeholder='Masukkan Alamat'/>
                 <input
                 className='address mt-2'
                 placeholder='Catatan Pemesan'/>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-3 p-2 white'>
                <div className='mb-4'>
                <h3 className='titleDurasi'>Estimasi Harga</h3>
                </div>
                  <h2 className='priceTotal'>Rp 200.000</h2>
                  <button className='buttonSimpan mt-5'>Simpan</button>
              </div>
            </div>
          </div>
        );
    }
}