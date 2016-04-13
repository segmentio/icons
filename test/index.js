
import { tree, render } from 'deku';
import element from 'virtual-element';
import assert from 'assert';
import icons from '../src/icons';
import Icon from '../src';

describe('Icons', function() {
  let root = null;

  before(function() {
    root = document.createElement('div');
    document.body.appendChild(root);
  });

  afterEach(function() {
    root.innerHTML = '';
  });

  after(function() {
    document.body.removeChild(root);
  });

  Object.keys(icons).forEach(function(type) {
    if (type === 'status-icon') return;
    describe(`<Icon type="${type}" />`, function() {
      it('should render', test({ type }));
    });
  });

  [
    'success',
    'warning',
    'error'
  ].forEach(function(type) {
    describe(`<Icon type="status-icon" status="${type}" />`, function() {
      const props = { type: 'status-icon', status: type };
      it('should render', test(props, '.StatusIcon svg'));
    });
  });

  function test(props, selector) {
    selector = selector || 'svg';
    return function() {
      const app = tree(<Icon {...props} />);
      render(app, root);

      const icon = root.querySelector(selector);
      assert(icon, `did not render icon (${selector})`);
    };
  }
});
