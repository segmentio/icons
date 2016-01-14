
/** @jsx element */

import element from 'virtual-element';

export default function render(color) {
  return (
    <svg height="100%" width="100%" viewBox="0 2 12 15" preserveAspectRatio="xMidYMid meet">
        <path fill={color} d="M12,14.5 L11.898,14.5 C11.419,15.917 8.97,16.999 6,16.999 C3.03,16.999 0.58,15.917 0.101,14.5 L0,14.5 L0,13.999 L0,13.998 L0,10.999 L0,8 L0,5.5 L0.101,5.5 C0.045,5.337 0,5.171 0,5 C0,3.342 2.686,2 6,2 C9.313,2 12,3.342 12,5 C12,5.171 11.954,5.337 11.898,5.5 L12,5.5 L12,14.5 L12,14.5 Z M6,2.998 C3.238,2.998 1,3.894 1,4.999 C1,6.103 3.238,6.999 6,6.999 C8.762,6.999 11,6.103 11,4.999 C11,3.894 8.762,2.998 6,2.998 L6,2.998 Z M11,6.653 C9.926,7.463 8.09,7.998 6,7.998 C3.91,7.998 2.074,7.463 1,6.653 L1,7.999 C1,9.103 3.238,9.999 6,9.999 C8.761,9.999 10.999,9.103 11,7.999 L11,7.999 L11,6.653 L11,6.653 Z M11,9.653 C9.926,10.463 8.09,10.998 6,10.998 C3.91,10.998 2.074,10.463 1,9.653 L1,10.999 C1,12.103 3.238,12.999 6,12.999 C8.761,12.999 10.999,12.103 11,10.999 L11,10.999 L11,9.653 L11,9.653 Z M6,13.999 C3.91,13.999 2.074,13.464 1,12.654 L1,13.999 C1,15.104 3.238,15.999 6,15.999 C8.761,15.999 10.999,15.103 11,13.999 L11,13.999 L11,12.654 C9.926,13.463 8.09,13.999 6,13.999 L6,13.999 Z"></path>
    </svg>
  );
}
