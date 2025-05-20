'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Optional icon library

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/coencers.jpg"
            alt="Coencers Logo"
            width={50}
            height={40}
            className={styles.logoImage}
          />
          <span className={styles.brandName}>COENCERS</span>
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <div
        className={`${styles.center} ${menuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <a href="/">Home</a>
        <a href="/reviews">Reviews</a>
        <a href="/about">About</a>
      </div>

      <div className={styles.right}>
        <button className={styles.loginBtn}>Log In</button>
      </div>
    </nav>
  );
}
