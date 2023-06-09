'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './Hero.module.scss'
import spacingStyles from '@/styles/global-spacing.module.scss'
import { ComputerCanvas } from '../ComputerCanvas'

export default function Hero() {
  return (
    <section className={styles['hero-container']}>
      <div className={`${spacingStyles['padding-x']} ${styles['hero-title']}`}>
        <div className={styles['timeline-container']}>
          <div className={styles['timeline-dot']} />
          <div className={`${styles.timeline} violet-gradient`} />
        </div>
        <div>
          <h1
            className={` ${spacingStyles['hero-head-text']} ${styles['name-container']}`}
          >
            Hi, I&apos;m&nbsp;
            <span className={styles.name}>Peng</span>
          </h1>
          <p className={`${styles.desc} ${spacingStyles['hero-sub-text']}`}>
            I develop 3D visuals, user
            <br className={styles.break} />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputerCanvas />
      <div className={styles['scroll-button']}>
        <Link href='#about'>
          <div className={styles.button}>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className={styles['button--motion']}
            />
          </div>
        </Link>
      </div>
    </section>
  )
}
