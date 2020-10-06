import React, {Component} from 'react';
import { isEmpty } from 'lodash'
import { Button, Container } from 'react-bootstrap';
import  '../css/Card.component.css';
import CurrencyFormat from 'react-currency-format';


export default class Order extends Component {

    render(){
        const { orderNow, data } = this.props
        console.log(data, 'order')
        return(
            <div className='container radius pt-4 white shadow'>
            {
            !isEmpty(data.namaService) ? (
                <div>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 col-sm-2 p-2 '>
                    <h3 className='hour mt-1'>{data.durasiService}</h3>
                    <h3 className='hour mt-1'>Jam</h3>
                    </div>
                    <div className='col-lg-7 col-md-7 col-sm-7 p-2 white'>
                        <h1 className='title mt-1'>{data.namaService}</h1>
                        <CurrencyFormat 
                            className='price'
                            value={data.hargaService} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'Rp'}/>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-3 p-2 white'>
                    <span className='ubahText mt-1'>Ubah</span>
                    </div>
                </div>
              
                <div className='container borderorange p-0 white'>
                    <div className='row mb-2'>
                        <div className='col-lg-2 col-md-2 col-sm-2 p-2 white'>
                        <h1 className='hour'>Total</h1>
                        </div>
                        <div className='col-lg-10 col-md-10 col-sm-10 p-2 white'>
                          <CurrencyFormat 
                            className='price right mr-2'
                            value={data.hargaService} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'Rp'}/>
                        {/* <h2 className='price right mr-2'>Rp 200.000</h2> */}
                        </div>
                    </div> 
                    <button className='btn btn-primary btn-md btn-block' type='submit' onClick={orderNow}>Pesan Sekarang</button>
                </div>
                </div>
                  ): <h1 className='text p-4'>Untuk Memesan Silahkan Simpan Orderan Terlebih Dahulu ya...</h1>
            }
            </div>



        //     <div>
        //     <div className='cardContainer'>
        //    <div className={'card'}>
        //        <div className={'content'}>
        //         <div className='time'>
        //        <h3 className='hour'>2 Jam</h3>
        //        </div>
        //        <div className='order'>
        //        <h1 className='title'>Daily Cleaning</h1>
        //        <h2 className={'price'}>Rp. 200.000</h2>
        //        </div>
        //        <div className='ubah'>
        //        <span className='ubahText'>Ubah</span>
        //        </div>
        //        </div>
        //        </div>
        //        <div className={'card'}>
        //        <div className={'content'}>
        //         <div className='time'>
        //        <h3 className='hour'>2 Jam</h3>
        //        </div>
        //        <div className='order'>
        //        <h1 className='title'>Daily Cleaning</h1>
        //        <h2 className={'price'}>Rp. 200.000</h2>
        //        </div>
        //        <div className='ubah'>
        //        <span className='ubahText'>Ubah</span>
        //        </div>
        //        </div>
        //        </div>
        //       <div className='total'>
        //         <h1 className='totalText'>Total</h1>
        //         <h2 className='priceTotal'>Rp 200.000</h2>
        //       </div>  
        //    </div>
        //     <button className='buttonOrder'>Pesan Sekarang</button>
        //     </div>
        );
    }
}