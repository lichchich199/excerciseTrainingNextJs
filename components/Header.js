import Link from 'next/link'
import Image from 'next/image'
import  style from  './Header.module.css';

//Header
export default function Header() {
    return (
        <header className={style.headerHeader}>
        <nav className='d-flex justify-content-between'>
            <div className={style.logo}>
                <Image
                    src="/images/logo.png"
                    alt="Picture of the author"
                    width={200}
                    height={70}
                    />
            </div>
            <ul className={style.ulHeader}>
                <li className={style.liHeader}>
                    <Link className="text-light text-decoration-none" href="/">
                        Topic 1
                    </Link>
                </li>
                <li className={style.liHeader}>
                    <Link className="text-light text-decoration-none" href="/">
                        Topic 2
                    </Link>
                </li>
                <li className={style.liHeader}>
                    <Link className="text-light text-decoration-none" href="/">
                        Topic 3
                    </Link>
                </li>
                <li className={style.liHeader}>
                    <Link className="text-light text-decoration-none" href="/">
                        Topic 4
                    </Link>
                </li>
            <li className={style.liHeader}>
            </li>
            </ul>
        </nav>
        </header>
    )
    }
