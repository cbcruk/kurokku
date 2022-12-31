import dayjs from 'dayjs'

export function getDate() {
  return dayjs().format('ddd//HH:mm').split('//')
}
