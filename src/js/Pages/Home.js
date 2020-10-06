import React, { Component } from 'react';
import Header from '../Header';
import CarouselImage from '../../component/CarouselImage.component.js';
import Order from '../../component/Order.component';
import Layanan from '../../component/Layanan.component';
import Lokasi from '../../component/Lokasi.component';
import { isEmpty, isEqual, map } from 'lodash';
import { getAllPriceList } from '../../utils/Price.utils'
import Kalendar from '../../component/Kalender.component';
import '../../css/Home.css';
import DateTimePicker from '../../component/Picker.component';
import OrderCard from '../../component/OrderCard.component';
import {AnimationWrapper} from 'react-hover-animation'
import Axios from 'axios';
import moment from 'moment';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            isActive: false,
            user: {},
            time: '10:00',
            pricename: '',
            description: '',
            price: [],
            order: {
                namaService:'',
                durasiService:0,
                hargaService:0,
            },
            saveOrder:[],
            location:'',
            priceOrder: 0,
            date: '5 oktober 2020',
            duration: 2,
            total: 120000,
            notes: '',
            address: '',
            durasi:[2,3,4,5,6,7],
            lokasi: [
                {id:'', nama: 'Pilih Lokasi Anda'},
                {id:'JAKSEL', nama: 'Jakarta Selatan'},
                {id: 'TANGKOT', nama:'Tangerang'},
                {id: 'TANGSEL', nama:'Tangerang Selatan'},
                {id: 'DEPOK', nama:'Depok'},
                {id: 'BGR', nama:'Bogor'},
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleClickService = this.handleClickService.bind(this);
        this.handleOrderNow = this.handleOrderNow.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

        componentDidMount(){
            const user = sessionStorage.getItem('user')
            const data = JSON.parse(user)
            this.setState({
                user:data
            })
        getAllPriceList().then(
            ()=>{
                const datas = sessionStorage.getItem('userPriceList');
                const json = JSON.parse(datas)
                console.log(json, 'datas')
                this.setState({
                    price: json
                })})
        }

    handleClickService(name,desc, price){
        this.setState({
            isActive:true,
            priceName: name,
            description:desc,
            priceOrder: price
        })
    }

    async handleOrderNow(){
        const { priceName, user,date,duration,total,notes } = this.state;
        const { id, accessToken } = user
        console.log(id, accessToken, 'order')
        try{
            const response = await Axios.post(('http://api.inkustudio.com/order/orderNow'),
            { priceName , customerId: id, date , duration, total,notes},
            {headers :{ 'User-Agent': 'request',
            'Authorization': `Bearer ${accessToken}`} }).then(
                response => {
                    console.log(response)
                }
            )
        }catch(err){
            console.log(err)}
    }

    handleChange(e){
		let name = e.target.name;
		let value = e.target.value;
		let data={};
		data[name]=value;
        this.setState(data)
    }
    
    handleSave(){
        const {order, priceName, duration, priceOrder} = this.state;
        const {namaService,durasiService,hargaService} = order
        this.setState({
            order : {
                    namaService: priceName,
                    durasiService:duration,
                    hargaService:(priceOrder * duration)
                    }
        })
    }

    render(){
        const { price, duration, priceName, description,
        durasi, lokasi, user, priceOrder, notes, address, order } = this.state;
        const total = (duration * priceOrder)
        console.log(user,this.state, ' user')
        const active = {backgroundColor:'#f56942', marginTop: '2px', cursor: 'pointer'}
        const inActive = {marginTop: '2px', cursor: 'pointer'}
        const lokasiName = map(lokasi, 'nama');
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
                                                 <div onClick={()=> this.handleClickService(data.priceName, data.priceDesc, data.price)} 
                                                 style={isEqual(data.priceName, priceName) ? active:inActive }>
                                                     <Layanan serviceName={data.priceName}/>
                                                 </div>
                                                 </AnimationWrapper>
                                            ))
                                        ): null}
                                    </div>
                            </div>
                            <div className='col-lg-6 p-2 center'>
                                <div className='m-2 mb-2'>
                                    <Lokasi 
                                    Item={lokasiName} 
                                    name='lokasi' 
                                    onChange={this.handleChange}/>
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
                                    <OrderCard
                                        name={'duration'}
                                        notes={notes}
                                        alamat={address}
                                        value={total}
                                        saveOrder={this.handleSave}
                                        onChange={this.handleChange} 
                                        Title={priceName} 
                                        Desc={description} 
                                        Durasi={durasi}/>       
                            </div>
                            <div className='col-lg-3 p-2 background center'>
                            <h1 className='text'>Rincian Pesanan</h1>
                              <Order
                              data={order}
                              orderNow ={this.handleOrderNow}/>
                            </div>
                        </div>    
                    </div>
                </div>
               
        );
    }
}
export default Home;