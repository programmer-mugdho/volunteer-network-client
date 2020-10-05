import React from 'react';
import './EventTask.css'

const EventTask = (props) => {
    const { event, handleDelete } = props
    const { img, workName, date, _id } = event
    return (
        <div className="col-md-6">
            <div className='event-task-card'>
                <div className="task__card row">
                    <div className="col-md-5 task_card_image">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-md-7 details">
                        <p className="login__title">{workName}</p>
                        <p className="login__title">{date}</p>
                        <button onClick={() => handleDelete(_id)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventTask;