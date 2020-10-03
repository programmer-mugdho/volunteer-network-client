import React, { useState } from 'react';
import { useEffect } from 'react';
import VolunteerWork from '../VolunteerWork/VolunteerWork';

const Home = () => {
    const [search, setSearch] = useState('')
    const [works, setWorks] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/works")
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [search])
    return (
        <div>
            <h3>HOME</h3>
            <h1>I grow by helping people in need</h1>
            <input onBlur={e => setSearch(e.target.value)} type="text" />
            <button>Search</button>
            {
                works.map(work=> <VolunteerWork key={work._id} work={work}/>)
            }
        </div>
    );
};

export default Home;
