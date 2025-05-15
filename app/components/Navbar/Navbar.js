'use client'
import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link href="/"><Image
          src="/coencers.png"
          alt="Coencers Logo"
          width={50}
          height={40}
        /></Link>
      </div>

      <div className={styles.center}>
        <a href="/">Home</a>
        <a href="/reviews">Reviews</a>
        <a href="/about">About</a>
      </div>

      <div className={styles.right}>
        <button className={styles.loginBtn}>Log In</button>
      </div>
    </nav>
  )
}
