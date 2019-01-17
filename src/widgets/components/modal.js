import React from 'react';
import './modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      Esto es un modal
      {props.children}
      <button onClick={props.handleClick} class="btn waves-effect waves-light red lighten-2" type="submit" name="action">Cerrar
        <i class="material-icons close"></i>
      </button>
      
    </div>
  )
}

export default Modal;