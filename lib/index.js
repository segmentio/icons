
/** @jsx element */

import element from 'magic-virtual-element';
import icons from './icons';


let defaultProps = {
  size: '16px'
};

function render({ props, state }, updateState) {
  let currentColor = state.isHovering ? props.hoverColor : props.color;
  let { size, inline, type, status } = props;
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
      {renderIcon(fn, currentColor, size, status)}
    </div>
  );
}

function renderIcon(fn, color, size, status) {
  let vnode = fn(color, size, status);
  vnode.attributes.style = 'display: block';
  return vnode;
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
