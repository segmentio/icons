
/** @jsx element */

import element from 'virtual-element';

export default function render(color) {
  return (
    <svg viewBox="0 0 16 15" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
     <path d="M1.98688213e-08,15 L1.98688221e-08,0 L16,0 L16,15 L1.98688213e-08,15 L1.98688213e-08,15 Z M15,1 L1,1 L1,4 L15,4 L15,1 L15,1 Z M1.00000002,5 L1.00000002,14 L15,14 L15,5 L1.00000002,5 L1.00000002,5 Z M3,3 L2,3 L2,2 L3,2 L3,3 L3,3 Z M5,3 L4,3 L4,2 L5,2 L5,3 L5,3 Z M7,3 L6,3 L6,2 L7,2 L7,3 L7,3 Z" fill={color}></path>
    </svg>
  );
}
