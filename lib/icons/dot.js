
/** @jsx element */

import element from 'dekujs/virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 7 7">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-409.000000, -341.000000)" stroke={color} stroke-width="1.5">
          <ellipse cx="412.5" cy="344.5" rx="3.5" ry="3.5"></ellipse>
        </g>
      </g>
    </svg>
  );
}
