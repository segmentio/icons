import { dom } from 'dekujs/deku';
import { iconStyles } from '../styles';

export default function render (color) {
  return (
    <svg viewBox="0 0 9 9" width="56.25%" height="56.25%" style={iconStyles}>
      <g fill={color}>
        <path d="M4.90909091,4.09090909 L4.90909091,0 L4.09090909,0 L4.09090909,4.09090909 L-8.38079232e-16,4.09090909 L-8.8817842e-16,4.90909091 L4.09090909,4.90909091 L4.09090909,9 L4.90909091,9 L4.90909091,4.90909091 L9,4.90909091 L9,4.09090909 L4.90909091,4.09090909 Z"></path>
      </g>
    </svg>
  );
}