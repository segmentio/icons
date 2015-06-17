import { dom } from 'dekujs/deku';
import { iconStyles } from '../styles';

export default function render (color) {
  return (
    <svg width="62.5%" height="31.25%" viewBox="0 0 10 5" style={iconStyles}>
        <g fill={color} stroke={color} transform="translate(-59.000000, -15.000000)" stroke-linecap="square">
            <g transform="translate(-6.000000, 0.000000)">
                <g transform="translate(6.000000, 0.000000)">
                    <g transform="translate(59.000000, 10.000000)">
                        <g transform="translate(2.525000, 9.625000) rotate(90.000000) translate(-2.525000, -9.625000) translate(-2.475000, 7.125000)">
                            <path d="M0.395061728,0.357142857 L4.34567901,3.92857143"></path>
                            <path d="M4.34567901,3.92857143 L9.08641975,0.357142857"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
}
