import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import VolunteerWork from '../VolunteerWork/VolunteerWork';
import './Home.css'

const Home = () => {
    const [search, setSearch] = useState('')
    const [works, setWorks] = useState([])
    useEffect(() => {
        fetch("https://volunteer-network-server.herokuapp.com/works")
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [search])
    return (
        <div className='top-banner'>
            <Navbar />
            <div className="container">
                <h1 className='home__title'>I grow by helping people in need</h1>
                <div className="home__form">
                    <form>
                        <input className='form-control' onBlur={e => setSearch(e.target.value)} type="text" />
                        <button className='btn btn-primary'>Search</button>
                    </form>
                </div>
                <div className="home__works row">
                    {
                        works.map(work => <VolunteerWork key={work._id} work={work} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
