import React from 'react'
// import Immutable from 'immutable';
var d3 = Object.assign({}, require('d3-time-format'))

const Dots = (props) => {
  let circles = props.data.map((d, i) => {
    let xDataKey = d.x
    if (props.xDataType === 'date') {
      xDataKey = d3.timeFormat('%b %e')(d.x)
    }
    return (
      <circle
        className='dot' r='5'
        cx={props.xScale(d.x)}
        cy={props.yScale(d.y)}
        fill='#F3F4F2'
        stroke='#3f5175' strokeWidth='5px' key={i}
        onMouseOver={props.showToolTip}
        onMouseOut={props.hideToolTip}
        data-key={xDataKey}
        data-value={d.y}
      />
    )
  })

  return (
    <g> {circles} </g>
  )
}

Dots.propTypes = {
  showToolTip: React.PropTypes.func,
  hideToolTip: React.PropTypes.func,
  data: React.PropTypes.array,
  xScale: React.PropTypes.func,
  yScale: React.PropTypes.func,
  xDataType: React.PropTypes.string
}

Dots.defaultProps = {
  xDataType: 'number'
}

export default Dots
