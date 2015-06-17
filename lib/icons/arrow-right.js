import { dom } from 'dekujs/deku';
import { iconStyles } from '../styles';

export default function render (color) {
  return (
    <svg width="62.5%" height="31.25%" viewBox="0 0 10 5" style={iconStyles}>
        <g fill={color} transform="translate(-195.000000, -145.000000)" stroke-linecap="square" stroke="#CCBEAE">
            <g transform="translate(-6.000000, 0.000000)">
                <g transform="translate(26.000000, 130.000000)">
                    <g transform="translate(177.857143, 19.142857) rotate(-90.000000) translate(-177.857143, -19.142857) translate(172.857143, 16.642857)">
                        <path d="M0.395061728,0.357142857 L4.34567901,3.92857143"></path>
                        <path d="M4.34567901,3.92857143 L9.08641975,0.357142857"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
}
