import { ReactNode } from 'react'
import styles from './Hue.module.css'

type Props = {
  saturation: string
  lightness: string
  children: ReactNode
}

export function Hue({ saturation, lightness, children }: Props) {
  return <span className={styles.root}>{children}</span>
}
