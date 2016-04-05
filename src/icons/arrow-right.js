
import element from 'virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 10 9">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(-1063.000000, -295.000000)" stroke={color} stroke-width="1.5">
          <g transform="translate(1063.000000, 296.000000)">
            <path d="M6.1076,7.25 L9.2686,3.793 L6.1086,0.402"></path>
            <path d="M8.8698,3.8262 L4.1238,3.8262"></path>
            <path d="M6.1076,7.25 L9.2686,3.793 L6.1086,0.402"></path>
            <path d="M1.1512,3.8262 L0.7502,3.8262"></path>
            <path d="M8.8698,3.8262 L4.1238,3.8262"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
