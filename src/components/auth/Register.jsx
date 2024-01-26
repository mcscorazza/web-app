import React, { useState } from 'react'
import axios from "axios";
import './Register.css';
import { Link } from 'react-router-dom';

const baseURL = "http://127.0.0.1:8001/api/auth/register";

export default function Register() {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (ev) => {
        ev.preventDefault();
        axios.post(baseURL, {
            'name': formData.name,
            'email': formData.email,
            'password': formData.password 
    }).then((response) => {
        console.log(response.data);
        setFormData({...formData, name: "", email: "", password:"" });
    });

    }
  return (
    <div className='form'>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" value={formData.name} onChange={(ev) => setFormData({...formData, name:ev.target.value})} />
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" value={formData.email} onChange={(ev) => setFormData({...formData, email:ev.target.value})} />
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" value={formData.password} onChange={(ev) => setFormData({...formData, password:ev.target.value})} />
            <input type="submit" value="Registrar" />
        </form>

        <Link to="/auth/login">Login</Link>
    </div>
  )
}
