
/** @jsx element */

import element from 'dekujs/virtual-element';

export default function render(color) {
  return (
    <svg viewBox="-2 -2 13 13" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <path fill={color} d="M4.90909091,4.09090909 L4.90909091,0 L4.09090909,0 L4.09090909,4.09090909 L-8.38079232e-16,4.09090909 L-8.8817842e-16,4.90909091 L4.09090909,4.90909091 L4.09090909,9 L4.90909091,9 L4.90909091,4.90909091 L9,4.90909091 L9,4.09090909 L4.90909091,4.09090909 Z"></path>
    </svg>
  );
}