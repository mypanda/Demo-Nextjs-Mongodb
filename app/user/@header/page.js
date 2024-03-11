'use client'
import { useEffect, useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)
  const handleClickCount = () => {
    setCount(count => count + 1)
    console.log(count)
    setCount(count => count + 1)
    console.log(count)
    setCount(count => count + 1)
    console.log(count)
    setCount(count + 1)
    console.log(count)
    setCount(count + 1)
    console.log(count)
    setCount(count + 1)
    console.log(count)
  }

  useEffect(() => {
    console.log('----', count)
  }, [count])
  return (
    <div>
      <span>header {count} </span>
      <button onClick={handleClickCount}>setCount</button>
    </div>
  )
}