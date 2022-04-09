import React from 'react'
import styles from '../styles/header/Footer.module.css'
import { navLinks } from "../pages/data";
import Link from "next/link";

export default function Footer() {
  return (
      <>
    <div className={styles.footer}>
        <div className={styles.footerDiv}>
        <div className={styles.itemTitle}>ZIIL-TAXI</div>
            <p className={styles.item}>
                Fahre war noch nie so schnell und bequem.
            </p>
        </div>

        <div className={styles.footerDiv2}>
            MENU
            {navLinks.map((link, index) => {
            return (
                <ul key={index}>
                <Link href={link.path}>
                <a className={styles.buttonNav}>{link.name}</a>
                </Link>
                </ul>
            );
        })}
        </div>

        <div className={styles.footerDiv2}>
        PATNER
        <div className={styles.itemHead}>K-12 Kiosk</div>
        </div>

        <div className={styles.footerDiv2}>
        SOCIAL MEDIA
            <div className={styles.itemHead }>Instagram</div>
            <div className={styles.item}>Facebook</div>
        </div>

        <div className={styles.footerDiv2}>
            KONTAKT
            <div className={styles.itemHead}>Tel: 077 777 77 77</div>
            <div className={styles.item}>E-Mail: info@mail.ch</div>
            <div className={styles.item}>8280 Kreuzlingen</div>
            <div className={styles.item}>Finkerstrasse 1</div>
        </div>
    </div>
        <div className={styles.linkAlbert}>AlbertZ </div>
        </>
  )
}