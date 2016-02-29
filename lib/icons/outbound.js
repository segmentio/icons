
/** @jsx element */

import element from 'dekujs/virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 35 22">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-240.000000, -1432.000000)">
          <g transform="translate(240.000000, 1432.000000)">
            <path d="M11.66,15.0608526 L7.99989474,11.0580105 L11.6588421,7.13158947" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8.46166316,11.0964526 L27.8517684,11.0964526" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M32.9877263,9.57428421 C33.8283579,9.57428421 34.5103579,10.2562842 34.5103579,11.0969158 C34.5103579,11.9375474 33.8283579,12.6183895 32.9877263,12.6183895 C32.1470947,12.6183895 31.4650947,11.9375474 31.4650947,11.0969158 C31.4650947,10.2562842 32.1470947,9.57428421 32.9877263,9.57428421" fill={color} ></path>
            <path d="M20.9385579,16.8875474 C20.9385579,19.2311263 19.0384526,21.1312316 16.6948737,21.1312316 L5.11245263,21.1312316 C2.76887368,21.1312316 0.868768421,19.2311263 0.868768421,16.8875474 L0.868768421,5.30512632 C0.868768421,2.96154737 2.76887368,1.06144211 5.11245263,1.06144211 L16.6948737,1.06144211 C19.0384526,1.06144211 20.9385579,2.96154737 20.9385579,5.30512632" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}