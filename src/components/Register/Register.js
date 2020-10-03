import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Register.css'
import { UserContext } from '../../App';

const Register = () => {
    const { title } = useParams()
    const [user, setUser] = useContext(UserContext)
    const [work, setWork] = useState({})
    const { register, handleSubmit, errors } = useForm()
    const history = useHistory()
    useEffect(() => {
        fetch(`http://localhost:5000/register/${title}`)
            .then(res => res.json())
            .then(data => setWork(data))
    }, [])

    const onSubmit = data => {
        const { title, img } = work;
        const workName = work.name
        data = { ...data, workName, title, img }
        // console.log(data)
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.insertedCount > 0) {
                    history.push('/events')
                }
            })
    }

    return (
        <div>
            <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <input ref={register({ required: true })} value={user.name} type="text" name="fullName" id="" />
                {errors.fullName && <p>Full name is required</p>}
                <input ref={register({ required: true })} value={user.email} type="email" name="email" id="" />
                {errors.email && <p>Email is required</p>}
                <input ref={register({ required: true })} type="date" name="date" id="" />
                {errors.date && <p>Date is required</p>}
                <input ref={register({ required: true })} type="text" name="description" id="" />
                {errors.description && <p>Description is required</p>}
                <input ref={register({ required: true })} type="text" value={work.name} name="workName" id="" />
                {errors.workName && <p>Volunteer Task is required</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;
