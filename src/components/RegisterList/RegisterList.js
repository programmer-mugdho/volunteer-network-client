import React, { useEffect, useState } from 'react';
import './RegisterList.css'
import trash from '../../images/logos/trash-2 9.png'

const RegisterList = () => {
    const [registers, setRegisters] = useState([])
    const handleDelete = (id) => {
        const selectedRegister = registers.filter(register => register._id !== id)
        fetch(`https://volunteer-network-server.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setRegisters(selectedRegister);
                }
            })
    }

    useEffect(() => {
        fetch('https://volunteer-network-server.herokuapp.com/registerList')
            .then(res => res.json())
            .then(data => {
                setRegisters(data)
            })
    }, [])

    return (
        <div className='registerList__container'>
            <div className="list-header">
                <span>Name</span>
                <span>Email ID</span>
                <span>Registration Date</span>
                <span>Event Name</span>
                <span>Action</span>
            </div>
            {
                registers.map(register => <li key={register._id} className='row'>
                    <span style={{ marginLeft: '20px' }} className='col-md-3'>{register.fullName}</span>
                    <span style={{ marginLeft: '-60px' }} className='col-md-3'>{register.email}</span>
                    <span className='col-md-2'>{register.date}</span>
                    <span style={{ marginLeft: '35px' }} className='col-md-3'>{register.workName}</span>
                    <span onClick={() => handleDelete(register._id)} style={{ cursor: 'pointer' }} className='col-md-1'><div style={{ height: '30px', width: '30px', backgroundColor: 'red' }}><img src={trash} width='30' alt="" /></div></span>
                </li>
                )
            }
        </div>
    );
};

export default RegisterList;