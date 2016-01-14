
/** @jsx element */

import element from 'virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="-3.5 -3 18 18">
      <path d="M3.609375,12.2089844 L0,12.2089844 L0,0 L3.609375,0 L3.609375,1.01855469 L1.24414062,1.01855469 L1.24414062,11.1835938 L3.609375,11.1835938 L3.609375,12.2089844 Z M7.56054688,11.1835938 L9.92578125,11.1835938 L9.92578125,1.01855469 L7.56054688,1.01855469 L7.56054688,0 L11.1699219,0 L11.1699219,12.2089844 L7.56054688,12.2089844 L7.56054688,11.1835938 Z" fill={color}></path>
    </svg>
  );
}
