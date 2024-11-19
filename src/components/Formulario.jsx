import "./Formulario.css";
import sunsucaImg from '../assets/sunsuca2.png';
import { useState } from "react";
import Button from './Button'; // Asegúrate de que la ruta sea correcta

export function Formulario({ setUser  }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");

    // Datos "quemados"
    const usuarios = [
        { nombre: "admin", contraseña: "admin", rol: "administrador" },
        { nombre: "visitante", contraseña: "visitante", rol: "visitante" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || contraseña === "") {
            setError("Todos los campos son obligatorios");
            return;
        }

        // Validación de usuario
        const usuarioEncontrado = usuarios.find(usuario => 
            usuario.nombre === nombre && usuario.contraseña === contraseña
        );

        if (!usuarioEncontrado) {
            setError("Usuario o contraseña incorrectos");
            return;
        }

        setError("");
        
        // Aquí puedes establecer el usuario y su rol
        setUser ({ nombre: usuarioEncontrado.nombre, rol: usuarioEncontrado.rol });
    };

    return (
        <section>
            <form className="formularioLog" onSubmit={handleSubmit}>
                <img src={sunsucaImg} alt="" className="imagen" />
                <input
                    type="text"
                    className="input"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese Su Usuario"
                />
                <input
                    type="password"
                    className="input"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    placeholder="Ingrese Su Contraseña"
                />
                <Button>Iniciar Sesión</Button> {/* Usar el componente Button aquí */}
            </form>
            {error && <p>{error}</p>}
        </section>
    );
}