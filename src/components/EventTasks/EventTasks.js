import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import EventTask from '../EventTask/EventTask';
import Navbar from '../Navbar/Navbar';

const EventTasks = () => {
    const [user, setUser] = useContext(UserContext)
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch(`https://volunteer-network-server.herokuapp.com/events?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
    }, [])

    const handleDelete = (id) => {
        const selectedEvent = events.filter(event => event._id !== id)
        fetch(`https://volunteer-network-server.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setEvents(selectedEvent);
                }
            })
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    {
                        events.map(event => <EventTask key={event._id} event={event} handleDelete={handleDelete} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default EventTasks;
