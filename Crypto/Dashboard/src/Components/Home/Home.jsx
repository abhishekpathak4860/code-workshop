import styles from './Home.module.css'
import { FaRegCircleUser } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineHeadsetMic } from "react-icons/md";
import TotalValue from '../TotalValue/TotalValue';
import CurrentPrice from '../CurrentPrice/CurrentPrice';

export default function Home() {
    return (
        <div className={styles.home}>
            {/* Navbar */}
            <div className={styles.nav}>
                <h3>@InnateGammaPrivateLimited</h3>
                <div className={styles.dashboard}>
                    <BiSolidDashboard />
                    <p>Dashboard</p>
                </div>
                <div className={styles.transaction}>
                    <GrTransaction />
                    <p>Transactions</p>
                </div>
                <div className={styles.support}>
                    <MdOutlineHeadsetMic />
                    <p>Support</p>
                </div>
            </div>
            {/* Herosection */}
            <div className={styles.hero_section}>
                <div className={styles.top_content}>
                    <h2>Dashboard</h2>
                    <FaRegCircleUser className={styles.user} />
                </div>
                <div className={styles.subhero1}>
                   <div className={styles.subhero2}>
                   <TotalValue/>
                   <CurrentPrice/>
                   </div>
                </div>
            </div>
        </div>
    )
}
