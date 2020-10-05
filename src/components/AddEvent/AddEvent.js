import React, { useState } from 'react';
import './AddEvent.css'

const AddEvent = () => {
    const [input, setInput] = useState('')
    const handleClick = () => {
        fetch('https://volunteer-network-server.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: input })
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedCount) {
                    alert("Event Added Successfully")
                }
            })
    }
    return (
        <div style={{ height: '305px' }} className='registerList__container row'>
            <div className="col-md-6">
                <p>Event Title</p>
                <input onChange={e => setInput(e.target.value)} className='form-control' placeholder='Enter Title' type="text" required />
                <p style={{ marginTop: '20px' }}>Description</p>
                <textarea rows='3' placeholder="Enter Description" style={{ height: '120px' }} className='form-control' type="text" />
            </div>
            <div className="col-md-6">
                <p>Event Date</p>
                <input className='form-control' type="date" name="" id="" />
                <p style={{ marginTop: '20px' }}>Banner</p>
                <button className='upload'>Upload Image</button>
            </div>
            <button onClick={handleClick} style={{ marginTop: '0px', marginLeft: 'auto' }} className='btn btn-primary'>Submit</button>
        </div>
    );
};

export default AddEvent;