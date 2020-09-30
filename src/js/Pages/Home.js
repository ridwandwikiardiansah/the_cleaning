import React, { Component } from 'react';
import Header from '../Header';
import CarouselImage from '../../component/CarouselImage.component.js';
import Order from '../../component/Order.component';
import Layanan from '../../component/Layanan.component';
import Lokasi from '../../component/Lokasi.component';
import logo from '../../asset/boruto.jpg';
import { isEmpty, isEqual } from 'lodash';
import { getAllPriceList } from '../../utils/Price.utils'
import Kalendar from '../../component/Kalender.component';
import '../../css/Home.css';
import DateTimePicker from '../../component/Picker.component';
import OrderCard from '../../component/OrderCard.component';
import {AnimationWrapper} from 'react-hover-animation'



class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            isActive: false,
            time: '10:00',
            pricename: 'Daily Cleaning',
            description: '',
            price:[],
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleClickService = this.handleClickService.bind(this);
    }

        componentDidMount(){
        getAllPriceList().then(
            ()=>{
                const datas = sessionStorage.getItem('userPriceList');
                const json = JSON.parse(datas)
                console.log(json, 'datas')
                this.setState({
                    price: json
                })})
        }

    handleClickService(name,desc){
        this.setState({
            isActive:true,
            priceName: name,
            description:desc
        })
    }

    render(){
        const { price,isActive, priceName, description } = this.state;
        const active = {backgroundColor:'#f56942', marginTop: '4px'}
        const inActive = {marginTop: '4px'}
        const activeStyle = isActive ? active : null
        return(
           
            <div className='container=fluid background'>
                <Header/>
                    <div>
                    <CarouselImage/>
                    </div>
                    <div className='container-expand-lg mt-2 background shadow'>
                        <div className='row no-gutters p-2'>
                             <div className='col-lg-3 p-2 background center'>
                                <h1 className='text'>Layanan Kami</h1>
                                    <div className='container mt-2 '>
                                        { !isEmpty(price) ? (
                                             price.map( data => (
                                                <AnimationWrapper>
                                                 <div onClick={()=> this.handleClickService(data.priceName, data.priceDesc)} 
                                                 style={isEqual(data.priceName, priceName) ? active:inActive }>
                                                     <Layanan serviceName={data.priceName}/>
                                                 </div>
                                                 </AnimationWrapper>
                                            ))
                                        ): null
                                           
                                        }
                                    </div>
                            </div>
                            <div className='col-lg-6 p-2 center'>
                                <div className='m-2 mb-2'>
                                    <Lokasi/>
                                </div>
                                <div className='container row center mb-3'>  
                                <div className='cardimage col-lg-4 col-sm-4 col-md-4'/> 
                                </div>
                                <h1 className='text'>Tanggal Pesanan Layanan</h1>
                                <Kalendar/> 
                                <div className='container'>
                                    <div className='row p-2'>
                                    <h1 className='text mr-2'>Jam Kehadiran :</h1>
                                     <DateTimePicker/>
                                    </div>
                                </div>
                                    <OrderCard data={price} Title={priceName} Desc={description}/>       
                            </div>
                            <div className='col-lg-3 p-2 background center'>
                            <h1 className='text'>Rincian Pesanan</h1>
                              <Order/>
                            </div>
                        </div>    
                    </div>
                </div>
               
        );
    }
}
export default Home;