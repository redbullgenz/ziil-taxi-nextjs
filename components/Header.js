import React from 'react'
import styles from '../styles/header/header.module.css'
import { navLinks } from "../pages/data";
import Link from "next/link";


export default function Header() {
  return (
<header>
    <div className={styles.header}>
    <div alt="Logo firma">ZIIL-TAXI</div>

    <div className={styles.menuNav}>
    <nav className={styles.navbar}>
        {navLinks.map((link, index) => {
            return (
                <ul key={index}>
                <Link href={link.path}>
                <a className={styles.buttonNav}>{link.name}</a>
                </Link>
                </ul>
            );
        })}
    </nav>
    </div>
    {/* right */}
    <div className={styles.iconsTel}>
        <div></div>
        <a alt="Telefon Nummer" href={"tel:+41794001111"}>079 400 11 11</a>
    </div>
    </div>

    {/* PhoneMenu */}
    <div className={styles.phoneMenu}>
        
    </div>
    </header>
  )
}