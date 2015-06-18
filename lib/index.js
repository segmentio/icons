
/**
 * Module dependencies.
 */

import { dom } from 'dekujs/deku';
import icons from './icons';

/**
 * Define properties.
 */

let propTypes = {
  'type': { type: 'string' },
  'size': { type: 'string', optional: true },
  'color': { type: 'string' },
  'hoverColor': { type: 'string', optional: true }
};

/**
 * Render.
 */

function render({ props, state }, updateState) {
  let currentColor = state.isHovering ? props.hoverColor : props.color;
  let size = props.size || '16px';
  let fn = icons[props.type];

  if (!fn) {
    throw new Error('Invalid icon type');
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
    'height': size,
    'width': size
  };
}

export default { propTypes, render }
