import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { Checkbox } from 'antd'
import GridTableRow from './GridTableRow'

const GridTable = ({ list, headers, title, groups, setCardList }) => {
  const generateObj = list => {
    const newObj = {}
    list.map(item => {
      newObj[item] = true
    })
    return newObj
  }
  const [groupObj, setGroupObj] = useState(generateObj(groups))

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
    </div>
  )
}

export default GridTable
