
/** @jsx element */

import element from 'virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" viewBox="0 3 15 13" preserveAspectRatio="xMidYMid meet">
        <path fill={color} d="M13.125,16.125 L1.875,16.125 C0.8390625,16.125 0,15.2859375 0,14.25 L0,9.5625 L0,5.8125 L0,4.875 C0,3.8390625 0.8390625,3 1.875,3 L13.125,3 C14.16,3 15,3.8390625 15,4.875 L15,5.8125 L15,9.5625 L15,14.25 C15,15.2859375 14.16,16.125 13.125,16.125 L13.125,16.125 Z M14.0625,4.875 C14.0625,4.3565625 13.6425,3.9375 13.125,3.9375 L1.875,3.9375 C1.3565625,3.9375 0.9375,4.3575 0.9375,4.875 L0.9375,5.8125 L14.0625,5.8125 L14.0625,4.875 L14.0625,4.875 Z M14.0625,6.75 L0.9375,6.75 L0.9375,8.625 L14.0625,8.625 L14.0625,6.75 L14.0625,6.75 Z M14.0625,9.5625 L0.9375,9.5625 L0.9375,14.25 C0.9375,14.7684375 1.3565625,15.1875 1.875,15.1875 L13.125,15.1875 C13.6425,15.1875 14.0625,14.7675 14.0625,14.25 L14.0625,9.5625 L14.0625,9.5625 Z M6.5625,12.375 L9.375,12.375 L9.375,13.3125 L6.5625,13.3125 L6.5625,12.375 L6.5625,12.375 Z M1.875,12.375 L5.625,12.375 L5.625,13.3125 L1.875,13.3125 L1.875,12.375 L1.875,12.375 Z"></path>
    </svg>
  );
}
