import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import React, { useState } from "react"; //
import { useHistory } from "react-router-dom"; //

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(null); //
    const history = useHistory(); //

    const header = (
        <Image
            src="https://utec.edu.pe/sites/all/themes/utec_theme/assets/landings/integra-utec/img/logo-utec-negro-h.svg"
            className="pointer-events-none"
        />
    );

    const footer = (
        <div className="flex gap-3 mt-1">
            <Button
                label="Login"
                className="w-full"
                onClick={handleLogin}
            />
        </div>
    );

    const handleLogin = async () => {
        const response = await authAPI(email, password);
        //if (response.role === 'admin') {
        if (getRoleBasedOnToken() === 'ROLE_DRIVER'){
            history.push('/admin/dashboard');
        } else {
            alert('No eres un administrador');
        }
    };

    const authAPI = async (email, password) => {
        try {
            const response = await fetch('https://localhost:5173/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            return data; 
        } catch (error) {
            console.error('Error al autenticar:', error);
            alert('Error de autenticación');
            return { role: 'guest' }; 
        }
    };

    return (
        <Card
            title="¡XTRADIVE!"
            subTitle="Inicie sesión para poder ingresar"
            footer={footer}
            header={header}
            className="max-w-lg select-none rounded-xl"
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <InputText
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="mail"
                        id="email"
                        aria-describedby="Email"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <InputText
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        aria-describedby="password"
                    />
                </div>
            </div>
        </Card>
    );
}


/*import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const header = (
        <Image
            src="https://utec.edu.pe/sites/all/themes/utec_theme/assets/landings/integra-utec/img/logo-utec-negro-h.svg"
            className="pointer-events-none"
        />
    );

    const footer = (
        <div className="flex gap-3 mt-1">
            <Link to="/home" className="w-full">
                <Button
                    label="Register"
                    severity="warning"
                    outlined
                    className="w-full hover:bg-red-600 hover:text-white"
                />
            </Link>

            <Link to="/home" className="w-full">
                <Button label="Login" className="w-full" />
            </Link>
        </div>
    );



    return (
        <Card
            title="¡XTRADIVE!"
            subTitle="Inicie sesión para poder ingresar"
            footer={footer}
            header={header}
            className="max-w-lg select-none rounded-xl"
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <InputText
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="mail"
                        id="email"
                        aria-describedby="Email"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <InputText
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        aria-describedby="password"
                    />
                </div>
            </div>
        </Card>
        // </div>
    );
}*/