import styles from './Button.module.css'

export default function Button({children,className}) {
  return (
  <>
   <button className={styles[className]}>{children}</button>
  </>
  )
}
