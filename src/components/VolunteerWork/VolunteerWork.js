import React from 'react';
import { useHistory } from 'react-router-dom';

const VolunteerWork = ({ work }) => {
    const history = useHistory()
    const handleClick = (title) => {
        history.push(title)
    }
    return (
        <div onClick={() => handleClick(work.title)}>
            <img src={work.img} height="300" alt="" />
            <h4>{work.name}</h4>
        </div>
    );
};

export default VolunteerWork;