import React from 'react'

function WhiteKey({ config }) {
  return (
    <div className="piano-keys key-white">
      <div className="key">{ config[2].toUpperCase() }</div>
      <div className="node">{ config[0] + config[1] }</div>
    </div>
  )
}

export default WhiteKey
