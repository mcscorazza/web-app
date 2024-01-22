import React, { useState } from 'react'
import axios from "axios";
import './Register.css';
import { Link, Navigate } from 'react-router-dom';

const baseURL = "https://www.essenzadfiori.com.br/api-stk/public/api/auth/login";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [msg, setMsg] = useState(''); 
    const [token, setToken] = useState(''); 

    const handleSubmit = (ev) => {
        ev.preventDefault();
        axios.post(baseURL, {
            'email': formData.email,
            'password': formData.password 
    }).then((response) => {
        if(response.status == 200) {
            setMsg(response.status + " - Login efetuado com sucesso!")
            localStorage.setItem('auth-token', response.data.data['token'] )
            //<Navigate to="/" />
        }        
        setFormData({...formData, name: "", email: "", password:"" });
        setToken(response.data.data['token'])
    }).catch((er) => {setMsg(er + " - Erro")});

    }
  return (
    <div className='form'>
        <h1>Login</h1>
        
        { msg && <div className='msg'>{msg}</div> }

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" value={formData.email} onChange={(ev) => setFormData({...formData, email:ev.target.value})} />
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" value={formData.password} onChange={(ev) => setFormData({...formData, password:ev.target.value})} />
            <input type="submit" value="Registrar" />
        </form>
        {token && <div>Token: <span>{ token }</span></div> }

        <Link to="/auth/register">Register</Link>
    </div>
  )
}
