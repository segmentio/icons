
/** @jsx element */

import element from 'dekujs/virtual-element';
import { tree, render } from 'dekujs/deku';
import { Icon, names } from '../';

function renderIcons(size, color) {
  return (
    <div style="margin: 25px auto; width: 700px; overflow: hidden">
      {names.map(function(name) {
        let body = [];

        if (name == 'status-icon') {
          let statuses = [ 'success', 'warning', 'error' ];
          for (let i = 0; i < statuses.length; i++) {
            body.push(<Icon type={name} status={statuses[i]} size={size} />)
          }
        } else {
          body.push(<Icon type={name} size={size} color={color} />);
        }

        return (
          <div style="float:left; margin: 10px; background: whiteSmoke;">
            {body}
          </div>
        );
      })}
    </div>
  );
}

let Preview = {
  render() {
    return (
      <div style="margin-top: 100px">
        {renderIcons('16px', '#4D4741')}
        {renderIcons('32px', '#CCBEAD')}
        {renderIcons('64px', '#3CC76A')}
      </div>
    );
  }
};

render(tree(<Preview />), document.body);
