
/** @jsx element */

import element from 'virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" viewBox="-1.5 -3 16 16" preserveAspectRatio="xMidYMid meet">
      <path d="M3,0 L13,0 L13,1 L3,1 L3,0 L3,0 Z M3,3 L13,3 L13,4 L3,4 L3,3 L3,3 Z M3,6 L13,6 L13,7 L3,7 L3,6 L3,6 Z M0,0 L1,0 L1,1 L0,1 L0,0 L0,0 Z M0,3 L1,3 L1,4 L0,4 L0,3 L0,3 Z M0,6 L1,6 L1,7 L0,7 L0,6 L0,6 Z M3,9 L13,9 L13,10 L3,10 L3,9 L3,9 Z M0,9 L1,9 L1,10 L0,10 L0,9 L0,9 Z" fill={color}></path>
    </svg>
  );
}