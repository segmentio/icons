
/** @jsx element */

import element from 'dekujs/magic-virtual-element';
import icons from './icons';


let defaultProps = {
  size: '16px'
};

function render({ props, state }, updateState) {
  let currentColor = state.isHovering ? props.hoverColor : props.color;
  let { size, inline, type } = props;
  let fn = icons[type];

  if (!fn) {
    throw new Error(`Invalid icon type "${props.type}"`);
  }

  function focus() {
    if (props.hoverColor) updateState({ isHovering: true });
  }

  function blur() {
    if (props.hoverColor) updateState({ isHovering: false });
  }

  return (
    <div style={getStyles(size, inline)} onMouseOver={focus} onMouseOut={blur}>
      {fn(currentColor, size)}
    </div>
  );
}

function getStyles(size, inline) {
  let styles = {
    height: size,
    width: size
  };

  if (inline) {
    styles.display = 'inline-block';
    styles['vertical-align'] = 'middle';
    styles.position = 'relative';
  }

  return styles;
}


export default { defaultProps, render };
