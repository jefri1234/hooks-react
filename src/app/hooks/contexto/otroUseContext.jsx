import React, { useContext, createContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

function DisplayUser() {
  const { user, updateUser } = useContext(UserContext); // Accedemos al usuario y a la función de actualización

  return (
    <div>
      <p>Nombre del usuario: {user.name}</p>
      <p>Edad del usuario: {user.age}</p>
      <p>Correo electrónico: {user.email}</p>
      
      <button onClick={() => updateUser({ name: 'Carlos', age: 32, email: 'carlos@example.com' })}>
        Actualizar usuario
      </button>
    </div>
  );
}

function App() {
  const [user, setUser] = useState({
    name: 'Juan',
    age: 30,
    email: 'juan@example.com',
  });

  // Función para actualizar los datos del usuario
  const updateUser = (newUserData) => {
    setUser(newUserData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <DisplayUser />
    </UserContext.Provider>
  );
}

export default App;
