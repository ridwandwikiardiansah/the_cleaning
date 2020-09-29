import React from 'react';
import { BrowserRouter as Router, Link, } from 'react-router-dom';
import axios from 'axios';


class Register extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
			username: '',
			email: '',
			phone: '',
			password: '',
			repassword: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(e){
		const { password } = this.state;
		let name = e.target.name;
		let value = e.target.value;
		console.log(name,value,'change')
		console.log(password, 'pass')
		let data={};
		data[name]=value;
		if(name === 'repassword'){
			if(value === password){
				console.log('cocok')
			} else {
				console.log('gacocok')
			}
		}
		this.setState(data)
	}

	async handleSubmit(e){
		try{
		const { username,email,phone, password, repassword } = this.state;
		e.preventDefault();
		const response = await axios.post('http://api.inkustudio.com/user/register',
		{
		username: username,
		email: email,
		password: password,
		phone: phone,
		repassword:repassword,
		}).then(
			response=>{
				console.log( response,'response')
			}
		)
	} catch(error){
		console.error(error, 'eror');
	}
	}

    render(){
		const { username,email,password,phone,repassword } = this.state;
		console.log(this.state,'state')
        return(
			<div className='loginContainer container-fluid p-0 '>	
				<div className= 'row no-gutters'>
					<div className='col-lg-8 col-md-12 col-sm-12 imageLogin'>	
					</div>
					<div className='col-lg-4 col-md-12 col-sm-12 p-4 bg-warning'>
					<div class="btn-group" role="group" aria-label="Basic example">
					<Link 
						to='/login'
						className="btn btn-outline-deep-purple btn-lg rounded-pill text-info"> 
						SignIn
					</Link>
					<Link 
						to='/register'
						className="btn btn-outline-deep-purple btn-lg rounded-pill text-info">	
						SignUp
					</Link>
					</div>
					<h3 className='text-lg-left p-2'>Daftar Akun Yuk!</h3>
					<form onSubmit={this.handleSubmit}>
                        <div class="form-group">
						<label> Username </label>
						<input
							onChange={this.handleChange} 
							type="text" 
							name='username' 
							value={this.state.username}
							className='form-control'
							placeholder='Masukkan username Anda'/>
						</div>
					<div class="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							onChange={this.handleChange} 
							type="email" 
							name='email' 
							value={this.state.email}
							className='form-control'
							placeholder='Masukkan Email Anda'/>
					</div>
                    <div class="form-group">
						<label> Phone Number </label>
						<input
							onChange={this.handleChange} 
							type="text" 
							name='phone' 
							value={this.state.phone}
							className='form-control'
							placeholder='Masukkan Nomor Telepon Anda'/>
						</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input 
							onChange={this.handleChange}
							type="text" 
							value={this.state.password}
							className="form-control" 
							name='password' 
							placeholder='Masukkan Password Anda'/>
					</div>
                    <div class="form-group">
						<label for="exampleInputPassword1">Re-password</label>
						<input 
							onChange={this.handleChange}
							type="text" 
							value={this.state.repassword}
							className="form-control" 
							name='repassword' 
							placeholder='Masukkan Password Anda Kembali'/>
					</div>
					<button type="submit" className="btn btn-primary btn-lg btn-block rounded-pill">Create Account</button>
					</form>
					</div>
				</div>
			</div>
        );
    }
}
export default Register;