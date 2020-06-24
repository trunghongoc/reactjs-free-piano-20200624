import React from 'react'
import WhiteKey from './WhiteKey'
import BlackKey from './BlackKey'
import {
  whiteKeys,
  whiteKeysMapping,
  blackKeys,
  blackKeysMapping
} from './../CONST/key'

function Piano()  {
  const whiteKeysComponent =
    whiteKeys.map((key, index) => <WhiteKey config={key} key={index} />)
  const blackKeysComponent =
    blackKeys.map((key, index) => <BlackKey config={key} key={index} />)

  return (
    <>
      <p>Piano component</p>
      <div className="page">
        <div className="piano">
          {blackKeysComponent}
          <div>
            {whiteKeysComponent}
          </div>
        </div>
      </div>
    </>
  );
}

export default Piano