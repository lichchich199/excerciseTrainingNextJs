import Link from 'next/link'
import  style from  './Header.module.css';

//Header
export default function Header() {
    return (
        <header className={style.headerHeader}>
        <nav>
            <ul className={style.ulHeader}>
            <li className={style.liHeader}>
                <Link href="/" legacyBehavior>
                <a>Home</a>
                </Link>
            </li>
            <li className={style.liHeader}>
            </li>
            </ul>
        </nav>
        </header>
    )
    }
