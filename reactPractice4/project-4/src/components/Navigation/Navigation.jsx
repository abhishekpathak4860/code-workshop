import styles from './Navigation.module.css'

export default function Navigation() {
    return (
        <header>
            <div className={styles.logo}>
                <img src="/logo.png" alt="" />
            </div>
            <ul className={styles.nav}>
                <li className={styles.abhi}>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Service</li>
            </ul>
        </header>
    )
}
