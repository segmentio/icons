import { dom } from 'dekujs/deku';
import { iconStyles } from '../styles';

export default function render (color) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 16 16" style={iconStyles}>
        <g stroke={color} transform="translate(-33.000000, -189.000000)" stroke-linecap="square">
            <g transform="translate(-6.000000, 0.000000)">
                <g id="Nav" transform="translate(26.000000, 130.000000)">
                    <g transform="translate(13.000000, 58.000000)">
                      <path d="M8,17 C12.4182782,17 16,13.4182782 16,9 C16,4.58172178 12.4182782,1 8,1 C3.58172178,1 0,4.58172178 0,9 C0,13.4182782 3.58172178,17 8,17 Z M14.5,9 C14.5,5.41014896 11.589851,2.5 8,2.5 C4.41014896,2.5 1.5,5.41014896 1.5,9 C1.5,12.589851 4.41014896,15.5 8,15.5 C11.589851,15.5 14.5,12.589851 14.5,9 Z M8,14 C10.7614239,14 13,11.7614239 13,9 C13,6.23857611 10.7614239,4 8,4 C5.23857611,4 3,6.23857611 3,9 C3,11.7614239 5.23857611,14 8,14 Z"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
}
