import {
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from '@/components'
import styles from './page.module.scss'
import { Navbar } from './components/NavBar'

export default function RootPage() {
  return (
    <div className={styles['root-container']}>
      <div className={styles['root-background']}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className={styles['contact-container']}>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}
