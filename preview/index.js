import {dom,tree,render} from 'dekujs/deku';
import {Icon,names} from '../';

function renderIcons () {
  return (
    <div style="margin: 100px auto; width: 360px">
      {names.map(function(name){
        return (
          <div style="float:left; margin: 10px">
            <Icon type={name} size="16px" color="#000000" />
          </div>
        )
      })}
    </div>
  )
}

let Preview = {
  render: renderIcons
}

render(
  tree(<Preview />),
  document.querySelector('main')
)