import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

const Dropdown = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])


  return <div ref={parent}>
    <button onClick={() => setShow(!show)}>点我一下</button>
    { show && <p>测试文本</p> }
  </div>
}

export default Dropdown
