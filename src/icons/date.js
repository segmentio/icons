
/** @jsx element */

import element from 'dekujs/virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 16">
      <path d="M14,16 L1,16 C0.447,16 0,15.553 0,15 L0,5.001 L0,4 L0,2 C0,1.448 0.447,1 1,1 L4,1 L4,0 L5,0 L5,1 L10,1 L10,0 L11,0 L11,1 L14.5,1 C15.052,1 15,1.448 15,2 L15,4 L15,5.001 L15,15 C15,15.553 14.552,16 14,16 L14,16 Z M14,2.501 C14,2.225 13.776,2 13.5,2 L11,2 L11,3.001 L10,3.001 L10,2 L5,2 L5,3.001 L4,3.001 L4,2 L1.5,2 C1.224,2 1,2.225 1,2.501 L1,4 L14,4 L14,2.501 L14,2.501 Z M14,5.001 L1,5.001 L1,14.5 C1,14.777 1.224,15 1.5,15 L13.5,15 C13.776,15 14,14.777 14,14.5 L14,5.001 L14,5.001 Z" fill={color}></path>
    </svg>
  );
}
