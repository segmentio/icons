
/** @jsx element */

import element from 'virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" viewBox="-3 0 17 4" >
      <g transform="rotate(-90 5.5 2)">
        <path fill="none" d="M10.5,0.5 L5.5,4.5 L0.5,0.5" stroke={color}></path>
      </g>
    </svg>
  );
}
