import React, { useEffect, useState, useRef } from 'react'
import classes from './Practice.module.css'
import autoAnimate from '@formkit/auto-animate'
const Pracitce = () => {
  const numsData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ]
  const parent = useRef(null)
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
  const [nums, setNums] = useState(numsData)
  function randomArr() {
    setNums([...numsData.sort(randomSort)])
  }
  function randomSort(a, b) {
    return Math.random() > 0.5 ? -1 : 1
  }
  return (
    <>
      <div className={classes.Container} ref={parent}>
        {nums.map(item => {
          return <div key={item} className={classes.Item}>{item}</div>
        })}
      </div>
      <button onClick={randomArr}>打乱</button>
    </>
  )
}

export default Pracitce