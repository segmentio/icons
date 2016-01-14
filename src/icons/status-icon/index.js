
/**
 * Module dependencies.
 */

import element from 'magic-virtual-element';
import ErrorIcon from './error';
import WarningIcon from './warning';
import SuccessIcon from './success';

/**
 * Type map.
 */

const ICON_TYPES = {
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon
};

/**
 * Render.
 */

export default function render(color, size, status) {
  let Type = ICON_TYPES[status || 'success'];
  if (!Type) throw new Error(`StatusIcon: Unknown type "${status}"`)
  return (
    <div class="StatusIcon">
      <Type size={size} />
    </div>
  );
}
