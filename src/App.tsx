import { useTime } from './useTime'
import styles from './App.module.css'
import { COLORS } from './constants'

function App() {
  const { day, time } = useTime()

  return (
    <div className="flex flex-col items-center justify-center h-screen pt-12 w-screen">
      <div className={styles.day}>{day.toUpperCase()}</div>
      <div className={styles.time}>
        {time.split('').map((t, index) => {
          const color = COLORS[index]

          return (
            <span key={index} style={{ color }}>
              {t}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default App
