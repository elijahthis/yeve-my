import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { Checkbox } from 'antd'
import GridTableRow from './GridTableRow'
import { setFinishDate } from '../GanttChart/helperFunctions'

const GridTable = ({ list, headers, title, groups, setCardList }) => {
  const generateObj = list => {
    const newObj = {}
    list.map(item => {
      newObj[item] = true
    })
    return newObj
  }
  const [groupObj, setGroupObj] = useState(generateObj(groups))

  useEffect(() => {
    const newList = [...list]

    newList.map((card, ind) => {
      // console.log('this is ittt')
      newList[ind].finish = setFinishDate(
        newList[ind].start,
        newList[ind].duration,
      )
    })
    setCardList(newList)
    //this effect sets the finish date of each row, so it reflects on the Gantt chart
  }, [setCardList])

  return (
    <div
      css={css`
        margin-top: 27px;
        table {
          //   border-spacing: 16px;
          width: 100%;
          border-radius: 8px;
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          border: 1px solid #e5e5e5;
          border-collapse: collapse;
        }

        td {
          text-align: left;
          padding: 4px 20px 4px 16px;
          //   border-bottom: 1px solid #e5e5e5;
          border: 1px solid #e5e5e5;
          max-width: 330px;
        }
        th {
          text-align: left;
          padding: 15px 20px 15px 16px;
          border-bottom: 1px solid #e5e5e5;
          max-width: 330px;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          border: 1px solid #e5e5e5;
          color: #767676;
          background-color: transparent;
        }
      `}
    >
      <table>
        <thead>
          <tr>{title ? <th>{title}</th> : null}</tr>
          <tr>
            {headers.map((header, ind) => (
              <th key={ind}>{header.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((item, ind) => {
            return (
              <GridTableRow
                item={item}
                headers={headers}
                key={ind}
                index={ind}
                groupObj={groupObj}
                setGroupObj={setGroupObj}
                cardList={list}
                setCardList={setCardList}
              />
            )
          })}
        </tbody>
      </table>
      <p tw="text-gold text-xs cursor-pointer mt-2">
        <span
          onClick={() => {
            const newTag = list.slice(list.length - 1)
            const newParentObj = {
              duration: '',
              task: 'New Group',
              start: '',
              finish: '',
              predecessor: '',
              assignee: '',
              type: 'parent',
              tag: newTag,
              color: '#343434',
            }
            const newChildObj = {
              duration: 18,
              task: 'New Task',
              start: '2022-05-01',
              finish: '2022-05-05',
              predecessor: '',
              assignee: '',
              type: 'child',
              tag: newTag,
              color: '#343434',
            }
            const newList = [...list, newParentObj, newChildObj]
            setCardList(newList)
          }}
        >
          Add New Group +
        </span>
      </p>
    </div>
  )
}

export default GridTable
