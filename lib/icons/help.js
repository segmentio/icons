import { dom } from 'dekujs/deku';
import { iconStyles } from '../styles';

export default function render (color) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 16 16" style={iconStyles}>
        <g stroke={color} stroke-width="1" transform="translate(-22.000000, -996.000000)">
            <g transform="translate(-6.000000, 0.000000)">
                <g transform="translate(5.000000, 994.000000)">
                    <g transform="translate(23.000000, 0.000000)">
                      <path d="M13,12 L13,12 L13,15 L9.249,12 L5,12 C3.343,12 2,10.656 2,9 L2,5 C2,3.343 3.343,2 5,2 L13,2 C14.656,2 16,3.343 16,5 L16,9 C16,10.656 14.656,12 13,12 L13,12 Z M15,5 C15,3.895 14.104,3 13,3 L5,3 C3.896,3 3,3.895 3,5 L3,9 C3,10.105 3.896,11 5,11 L9.332,11 L12,13 L12,11 L13,11 C14.104,11 15,10.104 15,9 L15,5 L15,5 Z M4,14 L4,16 L6.668,14 L9,14 L9,15 L6.75,15 L3,18 L3,15 C1.343,15 0,13.657 0,12 L0,8 C0,7.115 0.39,6.328 1,5.779 L1,8 L1,12 L1,12.499 C1,12.673 1.094,12.818 1.228,12.908 C1.56,13.554 2.224,13.999 3,13.999 L4,13.999 L4,14 Z"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
}
