import React from 'react';
import Navbar from './Navbar'; // Asegúrate de que la ruta sea correcta
import './admin.css'; // Asegúrate de que la ruta sea correcta
import userImage from '../assets/user.svg'; // Importar la imagen correctamente
import verifiImage from '../assets/verify.svg'; // Importar la imagen correctamente

export function HomeVisitante({ user, onLogout, publicaciones }) {
    return (
        <div>
            <Navbar onLogout={onLogout} />
            <div style={{marginBottom: '-5rem'}}>
                {publicaciones.length > 0 ? (
                    publicaciones.map((pub, index) => (
                        <div key={index} className="publicacion-container"> {/* Contenedor principal */}
                            <div className="texto-container"> {/* Contenedor del texto */}
                            <div
                                style={{
                                    display: 'flex', // Alineación horizontal
                                    alignItems: 'center', // Alineación vertical uniforme
                                    justifyContent: 'flex-start', // Alinear elementos a la izquierda
                                    gap: '8px', // Espacio entre los elementos
                                    marginBottom: '10px'
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
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                />
                            </div>
                                <div className="texto-container2">
                                    <p>{pub.texto}</p>
                                </div>
                                {pub.imagen && (
                                    <div className="imagen-container"> {/* Contenedor de la imagen */}
                                        <img src={pub.imagen} alt="Publicación" style={{ maxWidth: '250px', maxHeight: '320px' }} />
                                    </div>
                                )}
                                {pub.video && (
                                    <video width="300" height="200" controls>
                                        <source src={pub.video} type="video/mp4" />
                                        Tu navegador no soporta el video.
                                    </video>
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