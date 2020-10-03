import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const EventTasks = () => {
    const [user, setUser] = useContext(UserContext)
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/events?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
    }, [])

    return (
        <div>
            <h1>EventTasks</h1>
            {
                events.map(event => <><li key={event._id}>{event.workName}</li><img src={event.img} alt="" /></>)
            }
        </div>
    );
};

export default EventTasks;
