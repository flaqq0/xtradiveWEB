import React, { useState } from "react"; 
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from "../../services/api";
import { getRoleBasedOnToken } from "../../services/api";
import './Login.css'; 
import XtraDive from '../../assets/XtraDive.png'

export const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;        
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));      
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetchLogin(formData.email, formData.password);
            console.log(response);
            if (getRoleBasedOnToken() === 'ROLE_ADMIN') {
                setError(null);
                navigate('/home');
            } else {
                alert('No eres un administrador');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="login-form">
            <div className="header">
                <img src = {XtraDive} alt="Logo" />
            </div>
            <div className="title">¡XTRADIVE!</div>
            <div className="subtitle">Inicie sesión para poder ingresar</div>
            <div className="form">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};
