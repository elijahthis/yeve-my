export const morphData = (list, tableNumber) => {
  const newList = []
  list.map(listItem => {
    const { seatNumber, person } = listItem

    const outputData = {
      id: seatNumber, //id doubles as seat Number
      label: seatNumber < 10 ? '0' + seatNumber : '' + seatNumber,
      value: 1,
      color: person ? '#de8e0e' : '#000000',
      tableNumber: tableNumber || null,
    }
    newList.push(outputData)
  })
  return newList
}

export const generateTableData = list => {
  const newList = []

  list.map(listItem => {
    const { tableNumber, name, guests } = listItem

    guests.map(guest => {
      const outputData = {
        attendee: guest,
        tableNumber: tableNumber,
      }
      newList.push(outputData)
    })
  })
  return newList
}
