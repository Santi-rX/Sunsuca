import React, { useState, useRef } from 'react';
import './admin.css'; // Asegúrate de que la ruta sea correcta
import Navbar from './Navbar'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importar FontAwesomeIcon
import { faFileImage, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'; // Importar los íconos
import userImage from '../assets/user.svg'; // Importar la imagen correctamente
import verifiImage from '../assets/verify.svg'; // Importar la imagen correctamente

export function HomeAdmin({ user, onLogout, onNewPublication, publicaciones }) {
    const [texto, setTexto] = useState('');
    const [imagen, setImagen] = useState(null);
    const fileInputRef = useRef();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImagen(URL.createObjectURL(file)); // Crear una URL temporal para la imagen seleccionada
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaPublicacion = { texto, imagen }; // Crear nueva publicación
        onNewPublication(nuevaPublicacion); // Llama a la función para agregar la publicación
        setTexto('');
        setImagen(null);
    };

    return (
        <div>
            <Navbar onLogout={onLogout} />

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '3rem' }}>
                <h2>Crear Publicación</h2>
                <div
                    style={{
                        display: 'flex', // Alineación horizontal
                        alignItems: 'center', // Alineación vertical uniforme
                        justifyContent: 'flex-start', // Alinear elementos a la izquierda
                        gap: '8px', // Espacio entre los elementos
                        marginBottom:'10px'
                    }}
                >
                    <img
                        src={userImage}
                        alt="Usuario"
                        style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: 'white',
                            padding: '5px',
                            borderRadius: '50%',
                            border: '2px solid #97b84f',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                    <h3 style={{ margin: 0, fontSize: '1rem', lineHeight: '1.2' }}>Sunsuca</h3>
                    <img
                        src={verifiImage}
                        alt="Verificación"
                        style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: '2px solid #97b84f',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                </div>



                <div>
                    <textarea
                        id="texto"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        required
                        placeholder="Agrega el texto de tu publicación"
                    />
                </div>
                {imagen && <img src={imagen} alt="Imagen seleccionada" style={{ maxWidth: '100px', marginTop: '10px' }} />}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',  // Centra los elementos horizontalmente
                        alignItems: 'center',  // Centra los elementos verticalmente
                        marginTop: '1em',
                        borderRadius: '5px',
                        border: 'none',
                        padding: '10px',
                        backgroundColor: "#97b84f",
                        gap: '10px',  // Espacio entre los elementos
                    }}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        id="imagen"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    <button
                        type="button"
                        onClick={() => fileInputRef.current.click()} // Usar ref en lugar de getElementById
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: "#004D4D",
                            border: 'none',
                            cursor: 'pointer',
                            marginRight: '1em',
                        }}
                    >
                        <FontAwesomeIcon icon={faFileImage} style={{ fontSize: '24px' }} />
                        <span style={{ marginLeft: '8px' }}>Seleccionar Imagen</span>
                    </button>
                    <button
                        type="submit"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: "#004D4D",
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <FontAwesomeIcon icon={faShareFromSquare} style={{ marginRight: '8px', fontSize: '24px' }} />
                        Publicar
                    </button>
                </div>

            </form>

            <h2 style={{ marginTop: '40px' }}>Mis Publicaciones</h2>
            <div>
                {Array.isArray(publicaciones) && publicaciones.length > 0 ? (
                    publicaciones.map((pub, index) => (
                        <div key={index} className="publicacion-container">
                            <div className="texto-container">
                                <div className="texto-container2"><p>{pub.texto}</p></div>
                                {pub.imagen && (
                                    <div className="imagen-container">
                                        <img src={pub.imagen} alt="Publicación" style={{ maxWidth: '200px' }} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay publicaciones disponibles.</p>
                )}
            </div>
        </div>
    );
}
