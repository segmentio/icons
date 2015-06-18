import { dom } from 'dekujs/deku';

export default function render (color) {
  return (
    <svg width="100%" height="100%" viewBox="-1 -2 16 16" preserveAspectRatio="xMidYMid meet">
      <path d="M3,5 L5,5 L5,13 L3,13 L3,5 Z M0,9 L2,9 L2,13 L0,13 L0,9 Z M6,1 L8,1 L8,13 L6,13 L6,1 Z M9,0 L11,0 L11,13 L9,13 L9,0 Z M12,4 L14,4 L14,13 L12,13 L12,4 Z" fill={color}></path>
    </svg>
  );
}
