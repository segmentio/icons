
/** @jsx element */

import element from 'dekujs/virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" viewBox="0 -3.5 16 16" preserveAspectRatio="xMidYMid meet">
        <path d="M5,9 L5,8 L15,8 L15,9 L5,9 L5,9 Z M5,4 L15,4 L15,5 L5,5 L5,4 L5,4 Z M5,0 L15,0 L15,1 L5,1 L5,0 L5,0 Z M1,8 L2,8 L2,9 L1,9 L1,8 L1,8 Z M1,0 L2,0 L2,1 L1,1 L1,0 Z M3.6537309,2.20375 L1.48027451,4.47077737 C1.41725732,4.53220321 1.31477482,4.53220321 1.25175764,4.47077737 L0.680783736,3.91508036 L0.22375,4.35938335 L1.47709182,5.5789887 L4.22375,2.75881047 L3.6537309,2.20375 Z" fill={color}></path>
    </svg>
  );
}
