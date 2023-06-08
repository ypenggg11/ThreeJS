'use client'

// import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './NavBar.module.scss'
import spacingStyles from '@/styles/global-spacing.module.scss'
import { logo } from '@/public/assets'
import { navLinks } from '@/constants/data'

export default function Navbar() {
  const [active, setActive] = useState<string>()
  console.log(active)

  return (
    <nav className={`${spacingStyles['padding-x']} ${styles['nav-container']}`}>
      <div className={styles['link-container']}>
        <Link
          href='/'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
          className={styles.link}
        >
          <Image
            src={logo}
            alt='logo'
            width={36}
            height={36}
            style={{ objectFit: 'contain' }}
          />
          <p className={styles.author}>
            Peng <span>| Portfolio</span>
          </p>
        </Link>
        <ul className={styles.list}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
