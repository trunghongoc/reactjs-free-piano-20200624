import React from 'react'

function BlackKey({ config }) {
  return (
    <div
      className="piano-keys key-black"
      style={{ left: config[2] + 'px', top: '5px' }}>
      <div className="key">A</div>
      <div className="node">C3</div>
    </div>
  )
}

export default BlackKey