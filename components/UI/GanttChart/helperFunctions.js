export const dateDifference = (start, finish) => {
  // date format: 2020-02-01, being 1st of February 2021
  const startDate = new Date(start)
  const finishDate = new Date(finish)

  const difference = Math.abs(finishDate - startDate)
  const days = difference / (1000 * 3600 * 24)

  return parseInt(days)
}

export const dateBegin = (start, monthList) => {
  const firstMonth = monthList[0].ind + 1
  const startDate = new Date(start)
  const baseDate = new Date(
    startDate.getFullYear() +
      `-${firstMonth < 10 ? '0' : ''}` +
      `${firstMonth}` +
      '-01',
  )

  return dateDifference(startDate, baseDate)
}

export const sortCards = cardList => {
  const newList = []
  const tags = []

  cardList.forEach(card => {
    if (tags.includes(card.tag)) {
      const index = newList.findIndex(obj => obj.tag === card.tag)
      if (card.type === 'parent') {
        newList[index].parent = card
      } else if (card.type === 'child') {
        newList[index].children.push(card)
      }
    } else {
      const newObj = { parent: {}, children: [] }
      if (card.type === 'parent') {
        newObj.parent = card
      } else if (card.type === 'child') {
        newObj.children.push(card)
      }
      newObj.tag = card.tag
      tags.push(card.tag)
      newList.push(newObj)
    }
  })
  return newList
}

export const morphMonths = (cardList, monthList) => {
  let earliestDate
  let newDate
  cardList.map(card => {
    if (earliestDate) {
      newDate = new Date(card.start)
      earliestDate = earliestDate > newDate ? newDate : earliestDate
    } else {
      earliestDate = new Date(card.start)
    }
  })
  const earliestMonth = earliestDate.getMonth()

  const newList = [
    ...monthList.slice(earliestMonth, 12),
    ...monthList.slice(0, earliestMonth),
  ]
  console.log(newList)
  return newList
}

export const setFinishDate = (start, duration) => {
  const startDate = new Date(start)
  startDate.setDate(startDate.getDate() + duration)
  return startDate.toISOString().slice(0, 10)
}

export const setDuration = (start, finish) => {}

export const getEarliestDate = dateList => {
  let earliestDate
  dateList.forEach(date => {
    if (earliestDate) {
      const newDate = new Date(date)
      earliestDate = newDate < earliestDate ? newDate : earliestDate
    } else {
      earliestDate = new Date(date)
    }
  })
  return earliestDate.toISOString().slice(0, 10)
}

export const getLatestDate = dateList => {
  let earliestDate
  dateList.forEach(date => {
    if (earliestDate) {
      const newDate = new Date(date)
      earliestDate = newDate > earliestDate ? newDate : earliestDate
    } else {
      earliestDate = new Date(date)
    }
  })
  return earliestDate.toISOString().slice(0, 10)
}
