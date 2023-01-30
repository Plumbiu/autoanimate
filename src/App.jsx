import React, { useState } from 'react'
import './App.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const App = () => {
  const [animationParent] = useAutoAnimate()
  const [lisData, setListData] = useState([
    { name: 'xj', age: 19 },
    { name: 'sx', age: 20 },
    { name: 'xm', age: 20 },
    { name: 'yq', age: 20 }
  ])
  function addItem() {
    setListData([
      ...lisData,
      { name: 'sj', age: 19 }
    ])
  }
  return (
    <>
      <button onClick={addItem}>添加</button>
      <ul ref={animationParent}>
        {lisData.map(item => {
          return <li>
            name: {item.name}, age: {item.age}
          </li>
        })}
      </ul>
    </>
  )
}

export default App