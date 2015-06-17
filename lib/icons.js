
/**
 * Export the icon types as an object map. The user will use
 * the name on the left to select a function to render the type
 * of icon in the <Icon /> component.
 */

import ArrowDown from './icons/arrow-down';
import ArrowRight from './icons/arrow-right';
import Debugger from './icons/debugger';
import Events from './icons/events';
import Integrations from './icons/integrations';
import Billing from './icons/billing';
import Builder from './icons/builder';
import Redshift from './icons/redshift';
import Docs from './icons/docs';
import Help from './icons/help';
import Cog from './icons/cog';
import Lock from './icons/lock';
import Plus from './icons/plus';

let icons = {
  'cog': Cog,
  'lock': Lock,
  'plus': Plus,
  'arrow-down': ArrowDown,
  'arrow-right': ArrowRight,
  'debugger': Debugger,
  'tracking-plan': Events,
  'integrations': Integrations,
  'billing': Billing,
  'builder': Builder,
  'redshift': Redshift,
  'docs': Docs,
  'help': Help
};

export default icons;
