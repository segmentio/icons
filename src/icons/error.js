
import element from 'virtual-element';

export default function render(color) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 3 13">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-180.000000, -764.000000)">
          <g transform="translate(180.000000, 764.000000)">
            <path d="M1.2221625,0.7921875 L1.2221625,7.3929375" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M0.22208125,11.7778375 C0.22208125,12.3296544 0.670183137,12.7777563 1.222,12.7777563 C1.77381686,12.7777563 2.22191875,12.3296544 2.22191875,11.7778375 C2.22191875,11.2260206 1.77381686,10.7779188 1.222,10.7779188 C0.670183137,10.7779188 0.22208125,11.2260206 0.22208125,11.7778375" fill={color}></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
