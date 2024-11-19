import React from 'react';
import './Navbar.css'; // Asegúrate de que la ruta sea correcta
import logo from '../assets/logoSuncanavbar.png'; // Importa la imagen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono

const Navbar = ({ onLogout }) => {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="logoNav" /> {/* Usa la variable importada */}
            <div className="logout-icon" onClick={onLogout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon-button" />
            </div>
        </div>
    );
};

export default Navbar;
