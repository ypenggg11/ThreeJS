'use client'

// import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './NavBar.module.scss'
import spacingStyles from '@/styles/global-spacing.module.scss'
import { close, logo, menu } from '@/public/assets'
import { navLinks } from '@/constants/data'

export default function Navbar() {
  const [active, setActive] = useState<string>()
  const [toggle, setToggle] = useState(false)

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
            className={styles.image}
          />
          <p className={styles.author}>
            Peng &nbsp; <span className={styles.block}>| Portfolio</span>
          </p>
        </Link>
        <ul className={styles.list}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${styles['list-item']} ${
                active === link.title ? styles.active : ''
              }`}
            >
              <Link href={`#${link.id}`} onClick={() => setActive(link.title)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.menu}>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            width={28}
            height={28}
            className={styles.image}
            onClick={() => setToggle((prevState) => !prevState)}
          />
          <div
            className={`black-gradient ${styles['menu-modal']} ${
              !toggle ? styles.hide : ''
            }`}
          >
            <ul className={styles['menu-list']}>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${styles['list-item']} ${
                    active === link.title ? styles.active : ''
                  }`}
                >
                  <Link
                    href={`#${link.id}`}
                    onClick={() => {
                      setActive(link.title)
                      setToggle((prevState) => !prevState)
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
