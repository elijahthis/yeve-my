import { useEffect, useState } from 'react'
import tw, { css } from 'twin.macro'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { DatePicker } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/lib/locale/zh_CN'

import {
  setFinishDate,
  dateDifference,
  getEarliestDate,
  getLatestDate,
} from '../GanttChart/helperFunctions'

const GridCell = ({ item, header, index, cardList, setCardList }) => {
  useEffect(() => {
    const newList = [...cardList]
    newList[index].finish = setFinishDate(
      cardList[index].start,
      parseInt(cardList[index].duration),
    )
    setCardList(newList)
  }, [])

  switch (header.key) {
    case 'start':
      if (item.type === 'parent') {
        const newList = [...cardList]
        const dateList = []
        cardList
          .filter(card => card.tag === item.tag && card.type === 'child')
          .forEach(card => {
            dateList.push(card.start)
          })
        newList[index].start = getEarliestDate(dateList)

        return <span>{item[header.key]}</span>
      } else
        return (
          <DatePicker
            picker="date | week | month"
            defaultValue={moment(cardList[index][header.key], 'YYYY-MM-DD')}
            onChange={(date, dateString) => {
              const newList = [...cardList]
              newList[index][header.key] = dateString
              newList[index].finish = setFinishDate(
                dateString,
                parseInt(cardList[index].duration),
              )
              setCardList(newList)
              console.log(date)
            }}
          />
        )
      break

    case 'finish':
      if (item.type === 'parent') {
        const newList = [...cardList]
        const dateList = []
        cardList
          .filter(card => card.tag === item.tag && card.type === 'child')
          .forEach(card => {
            dateList.push(card.finish)
          })
        newList[index].finish = getLatestDate(dateList)

        return <span>{item[header.key]}</span>
      } else
        return (
          <DatePicker
            picker="date | week | month"
            value={moment(
              setFinishDate(
                cardList[index].start,
                parseInt(cardList[index].duration),
              ),
              'YYYY-MM-DD',
            )}
            onChange={(date, dateString) => {
              const newList = [...cardList]
              newList[index][header.key] = dateString
              newList[index].duration = dateDifference(
                newList[index].start,
                dateString,
              )
              setCardList(newList)
              console.log(dateString)
            }}
          />
        )

    case 'duration':
      if (item.type === 'child')
        return (
          <input
            type="text"
            size=""
            pattern="[0-9]{10}"
            value={item[header.key]}
            onChange={ev => {
              const newList = [...cardList]

              newList[index][header.key] = Number.isNaN(
                parseInt(ev.target.value),
              )
                ? 0
                : parseInt(ev.target.value)
              newList[index].finish = setFinishDate(
                cardList[index].start,
                parseInt(cardList[index].duration),
              )

              setCardList(newList)
            }}
          />
        )
      else {
        let val = 0
        const newList = [...cardList]
        newList.forEach(card => {
          if (card.tag === item.tag && card.type === 'child')
            val = card.duration > val ? card.duration : val
        })
        newList[index].duration = val
        return <span>{item[header.key]}</span>
      }

    default:
      return (
        <input
          type="text"
          value={item[header.key]}
          onChange={ev => {
            const newList = [...cardList]
            newList[index][header.key] = ev.target.value
            setCardList(newList)
          }}
        />
      )
      break
  }
}

export default GridCell
