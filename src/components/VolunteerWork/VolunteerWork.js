import React from 'react';
import { useHistory } from 'react-router-dom';
import './VolunteerWork.css'

const VolunteerWork = ({ work }) => {
    const colors = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF']
    const history = useHistory()
    const handleClick = (title) => {
        history.push(`/register/${title}`)
    }
    return (
        <div className='col-md-3 work__card' onClick={() => handleClick(work.title)}>
            <img src={work.img} width='260' alt="" />
            <div style={{ backgroundColor: colors[Math.floor(Math.random() * 4)]}} className="card-bottom-box">
                <p>{work.name}</p>
            </div>
        </div>
    );
};

export default VolunteerWork;
