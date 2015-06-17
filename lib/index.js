
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
      {fn(currentColor)}
    </div>
  );
}

/**
 * Generate icon styles.
 *
 * @param {Mixed} size
 * @return {Object}
 */

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
