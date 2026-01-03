import styles from './PriceTransaction.module.css'
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import Amount from '../Amount/Amount';
import Button from '../Button/Button';

export default function PriceTransaction() {
  return (
    <>
    <div className={styles.price}>
      <div className={styles.cont1}>
       <div>
        <p>Current Price</p>
        <Amount>₹26,670.25</Amount>
       </div>
        <div>
          <Button className="btn"><IoAddCircleOutline /> Buy</Button>
          <Button className="btn"><GrSubtractCircle /> Sell</Button>
        </div>
      </div>
      <div className={styles.cont2}>
        <div className={styles.sub_cont2}>
           <p>1H</p>
           <p>1D</p>
           <p>1W</p>
           <p>1M</p>
        </div>
      </div>

      <div className={styles.cont3}>
        <img src="./Graph.png" alt="" />
      </div>
      <div></div>
    </div>
    <div className={styles.recent_transaction}>klmmkmopm</div>
    </>
  )
}
