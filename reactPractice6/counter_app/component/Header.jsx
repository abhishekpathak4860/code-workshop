import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Service</li>
                <li>About</li>
            </ul>
        </header>
    )
}
