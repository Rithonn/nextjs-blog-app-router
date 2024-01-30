import Link from "next/link"
import styles from './dashboard.module.css'

export default function Dash() {
    return (
        <div className={styles.center}>
            <h3>I am the dashboard component</h3>
            <Link href="/">Go back home</Link>
        </div>
    )
}