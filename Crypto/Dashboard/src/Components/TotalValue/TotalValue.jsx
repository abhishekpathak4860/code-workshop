import styles from './TotalValue.module.css'
import { IoMdInformationCircle } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import { LuArrowUpToLine } from "react-icons/lu";
import Button from '../Button/Button';
import Amount from '../Amount/Amount';

export default function TotalValue() {
  return (
    <div className={styles.value_container}>
        <div className={styles.portfolio_value}>
            <div className={styles.value}>
              <p>Total Portfolio Value</p>
            <IoMdInformationCircle />
            </div>
            <Amount>₹ 112,312.24</Amount>
        </div>

        <div className={styles.walletbalance}>
          <p>Wallet Balances</p>
          <div className={styles.amount}>
                 <div className={styles.amount1}>
                 <Amount>22.39401000</Amount>
                 <p>BTC</p>
                 </div>
                 <div className={styles.amount2}>
                <Amount>₹ 1,300.00</Amount>
                 <p>INR</p>
                 </div>
          </div>
        </div>

        <div className={styles.deposit_withdraw}>
          <Button className="btn">
            <FaDownload /> Deposit
            </Button>
          <Button className="btn">
            <LuArrowUpToLine /> Withdraw
            </Button>
        </div>
       
    </div>
  )
}
