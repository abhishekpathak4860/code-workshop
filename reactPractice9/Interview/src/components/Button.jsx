import Component1 from "./Component1";
import { counterContext } from "../contex/context"
import { useContext } from "react";

export default function Button() {
  const value=useContext(counterContext)
  return (
    <div onClick={()=>value.setCount((count)=>count+1)}><span><Component1/></span>Hi I Am Button</div>
  )
}
