import element from 'virtual-element'

export default { name: '__NAME__', initialState, render }

function initialState () {
  return { isHovering: false }
}

function render ({ props, state }, setState) {
  const color = state.isHovering ? props.hoverColor : props.color

  return (
    <span onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
      __SOURCE__
    </span>
  )

  function onMouseOver () {
    setState({ isHovering: true })
  }

  function onMouseOut () {
    setState({ isHovering: false })
  }
}
