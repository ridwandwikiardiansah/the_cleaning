import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import '../css/OrderCard.css'


export default class OrderCard extends Component {


    render(){
      const { name, Durasi, Title , Desc,
      onChange, saveOrder, value, alamat, notes}=this.props;
        return(
          <div className='container pb-4 radiuscard white shadow'>
            <div className='container p-1 left  '>
              <h1 className='titleOrderCard mt-1'>{Title}</h1>
            </div>
            <div className='row '>
              <div className='col-lg-2 col-md-2 col-sm-2 p-2 radius white'>
                <div className='mb-4'>
                <h3 className='titleDurasi'>Durasi</h3>
                </div>
                <select className='dropdowndurasi' name={name} onChange={onChange}>
                {Durasi.map(Durasi =>(
                    <option >{Durasi}</option>
                ))
                }
           </select>
                { Title !== 'Cuci Sofa' && Title !=='Springbed' ? (
                  <h1 className='text'>Jam</h1>
                ) : Title === undefined  ? (
                  <h1 className='text'>Jam</h1>
                ) : (
                  <h1 className='text'>Unit</h1>
                )

                }
                
              </div>
              <div className='col-lg-7 col-md-7 col-sm-7 p-2 white'>
                <div className='mb-4'>
                <h3 className='titleDurasi left ml-4'>Deskripsi Pekerjaan</h3>
                </div>
        <h1 className='deskripsi left ml-4'>{Desc}</h1>
              <input
                onChange={onChange}
                className='address'
                placeholder='Masukkan Alamat'
                name={'address'}
                value={alamat}/>

              <input
                onChange={onChange}
                name={'notes'}
                className='address mt-2'
                placeholder='Catatan Pemesan'
                value={notes}/>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-3 p-2 radius white'>
                <div className='mb-4'>
                <h3 className='titleDurasi'>Estimasi Harga</h3>
                </div>
                <CurrencyFormat 
                className='priceTotal'
                value={value} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'Rp'}/>
                  <button className='buttonSimpan mt-5' onClick={saveOrder}>Simpan</button>
              </div>
            </div>
          </div>
        );
    }
}