import React from'react';
import ReactDOM from'react-dom';
// Importamos dependencias de React
import Playlist from './src/playlist/components/playlist';
// Importamos los componentes generados
import data from './src/api.json';

const app = document.getElementById('app');
// Referenciamos un elemento con ID app

// const holaMundo = <h1>Hola Mundo</h1>;
// Insertamos en una constante lo que queremos renderizar

ReactDOM.render(<Playlist data={data}/>, app);
// Le decimos a ReactDOM que renderizar y donde renderizar