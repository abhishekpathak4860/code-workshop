import styles from './Button.module.css'

export default function Button(props) {

  return (
 <button className={props.isOutline ? styles.outline_btn :styles.btn1} onClick={props.onButtonclick}>  
     {props.icon}
    {props.text}
 </button>
  )
}
