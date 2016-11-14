import React, { Component, PropTypes } from 'react'

export default class extends Component {
  static propTypes = {
    color: PropTypes.string,
    hoverColor: PropTypes.string
  };

  constructor () {
    super()
    this.displayName = '__NAME__'
    this.state = { isHovering: false }
  }

  render () {
    const color = state.isHovering ? this.props.hoverColor : this.props.color
    return (
      <span onMouseOut={::this.onMouseOut} onMouseOver={::this.onMouseOver}>
        __SOURCE__
      </span>
    )
  }

  onMouseOut () {
    this.setState({ isHovering: false })
  }

  onMouseOver () {
    this.setState({ isHovering: true })
  }
}
