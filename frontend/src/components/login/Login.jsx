import React from 'react'
import { useState } from 'react';
import axios from "axios"

import "./login.css"

export default function Login({ verifyLogin }) {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });
    const handleChange = (event) => {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (userLogin.email === "" || userLogin.password === "") {
            alert("plz add all field")
        } else {
            const res = await axios.post("http://localhost:3310/api/user/login", userLogin, { withCredentials: true })


            alert(res.data.message)
            verifyLogin(true)
        }

    }

    return (
        <div className='container' >
            <div id="main1" >
                <div className="login">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="chk" aria-hidden="true">
                            Login
                        </label>
                        <input value={userLogin.email} type="email" name="email" placeholder="Email" required="true" onChange={handleChange} />
                        <input value={userLogin.password} type="password" name="password" placeholder="Password" required="true" onChange={handleChange} />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
