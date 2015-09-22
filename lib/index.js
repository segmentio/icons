
/** @jsx element */

import element from 'dekujs/magic-virtual-element';
import icons from './icons';


function render({ props, state }, updateState) {
  let currentColor = state.isHovering ? props.hoverColor : props.color;
  let size = props.size || '16px';
  let fn = icons[props.type];
  if (!fn) {
    throw new Error(`Invalid icon type "${props.type}"`);
  }
  function focus() {
    if (props.hoverColor) updateState({ isHovering: true })
  }
  function blur() {
    if (props.hoverColor) updateState({ isHovering: false })
  }
  return (
    <div style={getStyles(size)} onMouseOver={focus} onMouseOut={blur}>
      {fn(currentColor, size)}
    </div>
  );
}

function getStyles(size) {
  return {
    'display': 'inline-block',
    'vertical-align': 'middle',
    'height': size,
    'width': size,
    'position': 'relative'
  };
}


export default { propTypes, render }
