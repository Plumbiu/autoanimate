import React, { useState } from 'react'
import './App.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Dropdown from './components/Dropdown'
import Pracitce from './components/Pracitce'
const App = () => {
  const [animationParent, enableAnimation] = useAutoAnimate()
  const [lisData, setListData] = useState([
    {},
    {},
    {},
    {}
  ])
  function addItem() {
    setListData([
      ...lisData,
      {}
    ])
  }
  return (
    <>
      {/* <button onClick={addItem}>添加</button>
      <button onClick={() => enableAnimation(false)}>关闭动画</button>
      <button onClick={() => enableAnimation(true)}>启动动画</button>
      <ul ref={animationParent}>
        {lisData.map(item => {
          return <li>
            
          </li>
        })}
      </ul>
      <Dropdown /> */}
      <Pracitce />
    </>
  )
}

export default App