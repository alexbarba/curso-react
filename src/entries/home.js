import React from'react';
import { render } from'react-dom';
// Importamos dependencias de React
import Home from '../pages/containers/home';
// Importamos los componentes generados
import data from '../api.json';

const app = document.getElementById('app');
// Referenciamos un elemento con ID app

// const holaMundo = <h1>Hola Mundo</h1>;
// Insertamos en una constante lo que queremos renderizar

render(<Home data={data}/>, app);
// Le decimos a ReactDOM que renderizar y donde renderizar