
/** @jsx element */

import element from 'dekujs/virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" viewBox="0 1 15 14">
      <path stroke={color} d="M5.5,15.5 L5.5,4.5 L5.5,15.5 Z M7.5,15.5 L7.5,2.5 L7.5,15.5 Z M9.5,15.5 L9.5,7.5 L9.5,15.5 Z M11.5,15.5 L11.5,5.5 L11.5,15.5 Z M3.5,15.5 L3.5,9.5 L3.5,15.5 Z M13.5,15.5 L13.5,12.5 L13.5,15.5 Z M1.5,15.5 L1.5,12.5 L1.5,15.5 Z"></path>
    </svg>
  );
}
