import PriceTransaction from '../PriceTransaction/PriceTransaction'
import styles from './CurrentPrice.module.css'

export default function CurrentPrice() {
  return (
    <div className={styles.currentprice}>
        <div className={styles.sub1}><PriceTransaction/></div>
        <div className={styles.sub2}></div>
    </div>
  )
}
