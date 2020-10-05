import 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'
import { useForm } from 'react-hook-form';
import './Register.css'
import { UserContext } from '../../App';
import { TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

const Register = () => {
    const { title } = useParams()
    const [user, setUser] = useContext(UserContext)
    const [work, setWork] = useState({})
    const { register, handleSubmit, errors } = useForm()
    const history = useHistory()
    useEffect(() => {
        fetch(`https://volunteer-network-server.herokuapp.com/register/${title}`)
            .then(res => res.json())
            .then(data => setWork(data))
    }, [])

    const onSubmit = data => {
        const { title, img } = work;
        const workName = work.name
        data = { ...data, workName, title, img }
        fetch('https://volunteer-network-server.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(response => {
                if (response.insertedCount > 0) {
                    history.push('/events')
                }
            })
    }
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className='login__body'>
                <img src={logo} className='login__logo' alt="" />
                <div className="register__container">
                    <div className="register__inner-container">
                        <h3 style={{ textAlign: 'left', marginBottom: 0 }} className='login__title'>Register as a Volunteer</h3>
                        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                            <TextField inputRef={register({ required: true })} value={user.name} type="text" name="fullName" id="" required />
                            {errors.fullName && <p>Full name is required</p>}
                            <TextField inputRef={register({ required: true })} value={user.email} type="email" name="email" id="" required />
                            {errors.email && <p>Email is required</p>}
                            <KeyboardDatePicker
                                style={{
                                    width: '460px',
                                    marginTop: 0
                                }}
                                margin="normal"
                                id="date-picker-dialog"
                                format="dd/MM/yyyy"
                                name="date"
                                inputRef={register({ required: true })}
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            {errors.date && <p>Date is required</p>}
                            <TextField placeholder="Description" inputRef={register({ required: true })} type="text" name="description" id="" required />
                            {errors.description && <p>Description is required</p>}
                            <TextField inputRef={register({ required: true })} type="text" value={work.name} name="workName" id="" required />
                            {errors.workName && <p>Volunteer Task is required</p>}
                            <button className='submit-button' type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </MuiPickersUtilsProvider>
    );
};

export default Register;
