import React from 'react';
import '../../css/Login.css';
import axios from 'axios';
import {
	BrowserRouter as Router, Route, Link, Redirect
} from 'react-router-dom';
import {isEmpty} from 'lodash';

export default class Login extends React.PureComponent{
	constructor(props){
		super(props);
		this.state={
			email: '',
			password:'',
			isLogin: false,
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		let name = e.target.name;
		let value = e.target.value;
		let data={};
		data[name]=value;
		this.setState(data)
	}

	async handleSubmit(e){
		const { email, password } = this.state;
		
		try{
		e.preventDefault();
		const response = await axios.post('http://api.inkustudio.com/user/login',
		{email: email,
		password: password}).then(
			response=>{
				alert(response.data.message);
				if (!isEmpty(response.data.data)){
					this.setState({
						isLogin:true
					})
					console.log(response, 'login')
					 sessionStorage.setItem('user', JSON.stringify(response.data.data.userfound))
				
				} else{
					alert(response.data.message);
				}	
				console.log( response,'response')
			}
			
		)
	} catch(error){
		console.error(error, 'eror');
	}
	}


    render(){
		const { email, password, isLogin} = this.state;
		if(isLogin){
			return <Redirect to='/'/>
		}
		console.log(email,password, 'data')
        return(
			<div className='loginContainer container-fluid p-0 '>	
				<div className= 'row no-gutters'>
					<div className='col-lg-8 col-md-12 col-sm-12 imageLogin'/>
					<div className='col-lg-4 col-md-12 col-sm-12 p-4 bg-warning'>
					<div class="btn-group" role="group" aria-label="Basic example">
					<button 
						type="button" 
						className="btn btn-outline-deep-purple btn-lg rounded-pill text-info"> 
						SignIn
					</button>
					<Link 
					to='/register' 
					className="btn btn-outline-deep-purple btn-lg rounded-pill text-info"> SignUp</Link>
					{/* <button 
						type="button" 
						className="btn btn-outline-deep-purple btn-lg rounded-pill text-info">	
						SignUp
					</button> */}
					</div>
						<h3 className='text-lg-left p-2'>Masuk untuk memulai memesan jasa kami</h3>
					<form onSubmit={this.handleSubmit}>
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
						<label for="exampleInputPassword1">Password</label>
						<input 
							onChange={this.handleChange}
							type="password" 
							value={this.state.name}
							className="form-control" 
							name='password' 
							placeholder='Masukkan Password Anda'/>
					</div>
					<div class="form-group form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
						<div className='form-row '>
							<div className='form-group col-md-7'>
							<label class="form-check-label" for="exampleCheck1">Remember Me</label>
							</div>
							<div className='form-group col-md-5'>
							<a href='#' className='border-bottom border-info ml-2'>Forgot Password?</a>
							</div>
						</div>
					</div>
					<button type="submit" className="btn btn-primary btn-lg btn-block rounded-pill">Sign In</button>
					</form>
					</div>
				</div>
			</div>
        );
    }
}