import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header'


export default class Profile extends React.PureComponent{
    render(){
        return(
            <div className='container-fluid column p-0 bg-info'>
                <Header/>
                <h1 className='ml-4 mt-4'>Selamat Datang, Username</h1>
                <div className='row justify-center p-4'>
                    <div className='col-lg-2 col-md-2 col-sm-2 p-4 ml-2 mr-4 radiuscard center bg-danger'>
                        <div className='column justify-center white'>
                        <Link className='text'>Profile</Link>
                        <Link className='text'>Pesanan</Link>
                        </div> 
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 radiuscard p-4 ml-4 bg-success '>
                        <h1 className='text'>Account Details</h1>
                        <div className='row p-3'>
                        <div className="form-group mr-4 editprofile">
						<label>Fullname</label>
						<input
							onChange={this.handleChange} 
							name='fullname' 
							// value={this.state.email}
							className='form-control'
							placeholder='Nama Lengkap'/>
					</div>
                    </div>
                    <div className= 'row  p-3'>
					<div className="form-group mr-4 editprofile">
						<label>Phone Number</label>
						<input 
							onChange={this.handleChange}
							// value={this.state.name}
							className="form-control" 
							name='phone' 
							placeholder='Nomor Telepon'/>
                    </div>
                    <button className='btn-warning rounded-pill update center'>Update</button>
                    </div>
                        </div>
                        
                </div>
            </div>
        )
    }
}