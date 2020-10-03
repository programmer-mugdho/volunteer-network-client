import React, { useEffect, useState } from 'react';

const RegisterList = () => {
    const [registers, setRegisters] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/registerList')
            .then(res => res.json())
            .then(data => setRegisters(data))
    }, [])
    return (
        <div>
            <h1>RegisterList</h1>
            {
                registers.map(register => <li>{register.name}  {register.email}  {register.date}  {register.workName}</li>)
            }
        </div>
    );
};

export default RegisterList;