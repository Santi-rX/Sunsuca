// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HomeAdmin } from './components/AdminPage';
import { HomeVisitante } from './components/HomeVisitante';
import { Formulario } from './components/Formulario'; // Asegúrate de que este componente maneje el inicio de sesión
import './App.css';

function App() {
  const [user, setUser ] = useState(null);
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const storedUser  = localStorage.getItem('user');
    if (storedUser ) {
      setUser (JSON.parse(storedUser ));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser (userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser (null);
    localStorage.removeItem('user');
  };

  const handleNewPublication = (nuevaPublicacion) => {
    setPublicaciones((prevPublicaciones) => [...prevPublicaciones, nuevaPublicacion]);
  };

  return (
    <div className="App">
          {user === null ? (
            <Formulario setUser ={handleLogin} />
          ) : user.rol === "administrador" ? (
            <HomeAdmin 
              user={user} 
              onLogout={handleLogout} 
              onNewPublication={handleNewPublication} 
              publicaciones={publicaciones} 
            />
          ) : (
            <HomeVisitante 
              user={user} 
              onLogout={handleLogout} 
              publicaciones={publicaciones} 
            />
          )}
        </div>
  );
}

export default App;