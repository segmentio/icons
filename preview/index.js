
/** @jsx element */

import element from 'dekujs/virtual-element';
import {tree,render} from 'dekujs/deku';
import {Icon,names} from '../';

function renderIcons (size, color) {
  return (
    <div style="margin: 25px auto; width: 700px; overflow: hidden">
      {names.map(function(name){
        return (
          <div style="float:left; margin: 10px; background: whiteSmoke;">
            <Icon type={name} size={size} color={color} />
          </div>
        )
      })}
    </div>
  )
}

let Preview = {
  render() {
    return (
      <div style="margin-top: 100px">
        {renderIcons('16px', '#4D4741')}
        {renderIcons('32px', '#CCBEAD')}
        {renderIcons('64px', '#3CC76A')}
      </div>
    )
  }
}

render(
  tree(<Preview />),
  document.body
)
