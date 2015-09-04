
/** @jsx element */

import element from 'dekujs/virtual-element';

export default function render (color) {
  return (
    <svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <circle fill={color} cx="8" cy="8" r="5"></circle>
      <circle stroke={color} fill="none" stroke-width="1" cx="8" cy="8" r="7"></circle>
    </svg>
  );
}
