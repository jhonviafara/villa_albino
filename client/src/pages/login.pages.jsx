import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo-Club.png";
import StyledButton from "../components/StyledButton"
import StyledInput from "../components/StyledInput"

function Login() {
    const [nombre setnombre] = useState("");
    const
    const
    const
    return (
        <div className="hero bg-green-700 min-h-screen">
            <div className="hero-content text-center flex flex-col">
                <img src={Logo} alt="" className="w-44 block drop-shadow-xl" />
                <form className="max-w-md" type="submit">
                    <StyledInput placeholder={"Ingrese su usuario"}  textColor={"text-white"}/>
                    <StyledInput placeholder={"Ingrese su contraseña"} BRLabel={"Olvide mi Contraseña"} type="password" textColor={"text-white"}/>
                    <StyledButton accept innerText={"Ingresar"} btnType={"submit"} />
                </form>
            </div>
        </div>
    );
}

export default Login;
/* Para implementar la lógica de inicio de sesión en tu componente Login.page.jsx, necesitas hacer lo siguiente:

    Capturar los valores del formulario (nombre de usuario y contraseña).
    Enviar esos valores al backend utilizando fetch.
    Procesar la respuesta del servidor (validar si las credenciales son correctas).

Aquí tienes un ejemplo de cómo hacerlo:

jsx

import React, { useState } from "react";
import Logo from "../assets/Logo-Club.png";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import { useNavigate } from "react-router-dom";

function Login() {
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Si el login es exitoso, redirigir a la ruta "/home"
                navigate("/home");
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            console.error("Error durante el login:", error);
            alert("Hubo un problema con el servidor.");
        }
    };

    return (
        <div className="hero bg-green-700 min-h-screen">
            <div className="hero-content text-center flex flex-col">
                <img src={Logo} alt="" className="w-44 block drop-shadow-xl" />
                <form className="max-w-md" onSubmit={handleLogin}>
                    <StyledInput
                        placeholder={"Ingrese su usuario"}
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        textColor={"text-white"}
                    />
                    <StyledInput
                        placeholder={"Ingrese su contraseña"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        BRLabel={"Olvide mi Contraseña"}
                        textColor={"text-white"}
                    />
                    <StyledButton accept innerText={"Ingresar"} btnType={"submit"} />
                </form>
            </div>
        </div>
    );
}

export default Login;

Explicación:

    Captura de datos: Se utilizan dos estados (nombre y password) para capturar los valores de los inputs.
    Envío de datos: Cuando el formulario se envía, se llama a la función handleLogin, que utiliza fetch para enviar los datos al backend.
    Validación y redirección: Si el servidor responde correctamente (usuario válido), se redirige al usuario a la página /home usando useNavigate.

Recuerda que necesitas un endpoint en tu backend (/login) que valide las credenciales contra la base de datos y devuelva una respuesta adecuada.
/*