
/** @jsx element */

import element from 'virtual-element';

export default function render(color) {
  return (
    <svg viewBox="-1 -1 12 15.6" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
      <path fill={color} d="M0,13 L0,5 L1,5 L1,3.93774605 C1,1.7641102 2.82548909,0 5,0 C7.17451091,0 9,1.7641102 9,3.93774605 L9,5 L10,5 L10,13 L0,13 Z M8.00000001,3.93774614 C8.00000001,2.24626542 6.69148073,1 5.00000001,1 C3.30851929,1 2.00000001,2.24626542 2.00000001,3.93774614 L2.00000001,4.99999985 L8.00000001,4.99999985 L8.00000001,3.93774614 Z"></path>
    </svg>
  );
}
