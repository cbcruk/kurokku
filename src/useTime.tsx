import { useState } from 'react'
import { getDate } from './getDate'
import { useInterval } from './useInterval'

export function useTime() {
  const [date, setDate] = useState(getDate())
  const [day, time] = date

  useInterval(() => {
    setDate(getDate())
  }, 1000)

  return {
    day,
    time,
  }
}
