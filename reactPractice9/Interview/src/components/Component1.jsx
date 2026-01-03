import { useContext } from "react"
import { counterContext } from "../contex/context"

export default function Component1() {
  const value=useContext(counterContext)
  return (
    <div>{value.count}</div>
  )
}
