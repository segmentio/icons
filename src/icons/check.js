
/** @jsx element */

import element from 'virtual-element';

export default function render(color) {
  return (
    <svg viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
      <path fill={color} d="M3.77437098,9.37324214 C4.12520951,9.35156191 4.45118669,9.16991671 4.6706924,8.87275522 L9.6120802,2.17615813 C10.0382749,1.59857663 9.95187782,0.755558762 9.41913445,0.293577271 C8.88639108,-0.168487929 8.1089718,-0.0748192769 7.6827771,0.502008855 L3.60358426,6.03088683 L2.10889166,4.41022662 C1.62641147,3.88705498 0.844282431,3.88705498 0.361802238,4.41022662 C-0.120600746,4.93264491 -0.120600746,5.78143859 0.361802238,6.30385687 L2.83249614,8.982412 C3.06481857,9.23437146 3.37929158,9.375 3.70604085,9.375 C3.72866314,9.375 3.75151706,9.37416293 3.77437098,9.37324214 Z"></path>
    </svg>
  );
}
