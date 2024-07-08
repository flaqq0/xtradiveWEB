import React, { useState } from "react"; 
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from "../../services/api";
import { getRoleBasedOnToken } from "../../services/api";

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
                const response = await fetchLogin(formData);
                console.log(response)
            if (getRoleBasedOnToken() == 'ROLE_ADMIN'){
                setError(null);
                navigate('/home');
            } else {
                alert('No eres un administrador');
            }
            } catch (error) {
                setError(error.message);
            }
    };

    const header = (
        <img
            src="https://utec.edu.pe/sites/all/themes/utec_theme/assets/landings/integra-utec/img/logo-utec-negro-h.svg"
            className="pointer-events-none"
            alt="Logo UTEC"
        />
    );

    const footer = (
        <div className="flex gap-3 mt-1">
            <button
                className="w-full"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );

    return (
        <div className="card max-w-lg select-none rounded-xl">
            <div className="card-header">{header}</div>
            <div className="card-title">¡XTRADIVE!</div>
            <div className="card-subtitle">Inicie sesión para poder ingresar</div>
            <div className="card-footer">{footer}</div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        id="email"
                        name="email"
                        aria-describedby="Email"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        id="password"
                        name="password"
                        aria-describedby="password"
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
        </div>
    );
}