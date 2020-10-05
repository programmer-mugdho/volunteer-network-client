import React, { useState } from 'react';
import RegisterList from '../RegisterList/RegisterList';
import './Admin.css'
import logo from '../../images/logos/Group 1329.png'
import AddEvent from '../AddEvent/AddEvent';
import { useHistory } from 'react-router-dom';

const Admin = () => {
    const [showing, setShowing] = useState('list')
    const history = useHistory()
    return (
        <div className='row'>
            <aside className='col-md-2'>
                <img onClick={() => history.push('/')} style={{ marginTop: 20, width: '150px', paddingBottom: '30px', cursor: 'pointer' }} src={logo} alt="" />
                <p onClick={() => setShowing('list')}>Register List</p>
                <p onClick={() => setShowing('event')}>Add Event</p>
            </aside>
            <div className="col-md-10">
                <div className="topBar">
                    <h3 style={{ textAlign: 'left', paddingTop: '20px', paddingLeft: '30px' }} className="login__title">Volunteer Register List</h3>
                </div>
                <div className="admin__body">
                    {
                        showing === 'list'
                            ?
                            <RegisterList />
                            :
                            <AddEvent />
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;
