import React, { memo } from 'react'

const Child = () => {
    console.log("heheheheh")
  return (
    <div>
        Child
    </div>
  )
}

export default memo(Child)