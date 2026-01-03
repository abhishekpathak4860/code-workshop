import { useContext, useEffect, useState } from 'react'
import styles from './counter.module.css'
import themecontext from './usecontext';

export default function Counter() {

    const theme=useContext(themecontext);
     const [count,setCount]=useState(()=>{
        return Number(localStorage.getItem("currentValue"))||0
     });
     const updateCount=()=>{
       setCount((prev)=>{
             const new_count=prev+1;
              localStorage.setItem("currentValue",new_count);
              return new_count;
       })
     }

     useEffect(()=>{
       console.log("inside useeffect");
     },[count])

  return (
//    <div className={styles.counter}>
//     <button onClick={updateCount}>Add Count</button>
//     <p>{count}</p>
//    </div>
<button >current theme: {theme}</button>
  )
}
