import dayjs from 'dayjs'

export const getMonthMatrix = (month = dayjs().month()) => {
  const year = dayjs().year()
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day()
  let currentMonthCount = 0 - firstDayOfMonth

  const daysMatrix = new Array(5).fill([]).map(week =>
    new Array(7).fill(null).map(item => {
      currentMonthCount++
      return dayjs(new Date(year, month, currentMonthCount))
    }),
  )

  return daysMatrix
}
