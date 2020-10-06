import React from 'react';
import { Table } from 'react-bootstrap';
import Header from '../Header'


export default class HistoryOrder extends React.PureComponent{
    render(){
        return(
            <div className='container-fluid column p-0 bg-info'>
                <Header/>
                <h1 className='ml-4 mt-4'>Selamat Datang, Username</h1>
                <div className='row center p-4'>
                    <div className='col-lg-2 p-4 mr-4 radiuscard center bg-danger'>
                        <h1>Profile</h1>
                        <h1>Pesanan</h1>
                    </div>
                    <div className='col-lg-8 radiuscard p-4 ml-4 bg-warning center'>
                    <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>ID ORDER</th>
                            <th>TANGGAL PESAN</th>
                            <th>JENIS PESANAN</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        </tbody>
                    </Table>
                    </div>
                </div>
            </div>
        )
    }
}