import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';



class Header extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            
        }
        this._clickDashboard = this._clickDashboard.bind(this);
    }

    _clickDashboard(){
        console.log('clicked')
    }


    render(){
        return(
            <nav className='navbar navbar-expand-lg navbar-light headerContainer'>
                <div className='container-fluid p-0'>
                    <div className='navbar-header'>
                        <Link to='/' className='navbar-brand text'> The Cleaning</Link>
                    </div>
                <div className=' collapse navbar-collapse'> 
                    <Link className='navbar-brand'> Layanan</Link>
                    <Link className='navbar-brand'> Pengaduan</Link>
                    <Link className='navbar-brand'> Tentang Kami</Link>     
                <div className='header-right'>
                    <Link className='navbar navbar-brand' to='/login'> Masuk</Link>
                    <Link className='navbar-brand' to='/register'> Register</Link>
                </div>
                    </div>
                </div>
            </nav>
        );
    }

}
export default Header;