import PropTypes from 'prop-types'
import React from 'react'

const DateHeader = ({ label, drilldownView }) => {
  if (!drilldownView) {
    return <span>{label}</span>
  }

  return (
    <span className="day-header">
      {label}
    </span>
  )
}

DateHeader.propTypes = {
  label: PropTypes.node,
  date: PropTypes.instanceOf(Date),
  drilldownView: PropTypes.string,
  onDrillDown: PropTypes.func,
  isOffRange: PropTypes.bool,
}

export default DateHeader
