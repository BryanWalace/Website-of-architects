import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Button.css';

// Info basic button component
// This component can be used for navigation or form submission
/**
 * Componente de Botão Reutilizável
 * @param {object} props
 * @param {string} props.text - O texto a ser exibido no botão.
 * @param {'primary' | 'secondary'} [props.variant='primary'] - O estilo do botão.
 * @param {() => void} [props.onClick] - Função para o clique.
 * @param {string} [props.to] - O ID da seção para rolar.
 * @param {'button' | 'submit'} [props.type='button'] - O tipo do botão.
 */

function Button({ text, variant = 'primary', onClick, to, type = 'button' }) {
  const buttonClasses = `btn btn-${variant}`;

  if (to) {
    return (
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        className={buttonClasses}
        offset={-70}
      >
        {text}
      </ScrollLink>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
}

export default Button;