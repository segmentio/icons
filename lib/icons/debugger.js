import { dom } from 'dekujs/deku';
import { iconStyles } from '../styles';

export default function render (color) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 15 14" style={iconStyles}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g stroke={color} transform="translate(-35.000000, -230.000000)" stroke-linecap="square">
            <g transform="translate(-6.000000, 0.000000)">
                <g transform="translate(26.000000, 130.000000)">
                    <g transform="translate(14.000000, 98.000000)">
                      <path d="M5.5,15.5 L5.5,4.5 L5.5,15.5 Z M7.5,15.5 L7.5,2.5 L7.5,15.5 Z M9.5,15.5 L9.5,7.5 L9.5,15.5 Z M11.5,15.5 L11.5,5.5 L11.5,15.5 Z M3.5,15.5 L3.5,9.5 L3.5,15.5 Z M13.5,15.5 L13.5,12.5 L13.5,15.5 Z M1.5,15.5 L1.5,12.5 L1.5,15.5 Z"></path>
                    </g>
                </g>
            </g>
        </g>
      </g>
    </svg>
  );
}
