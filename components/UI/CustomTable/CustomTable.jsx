import { Checkbox } from 'antd'
import { useState } from 'react'
import tw, { css } from 'twin.macro'
import TableRow from './TableRow'

const CustomTable = ({ list, headers, title, draggable,onDragStart }) => {
  const [checkAll, setCheckAll] = useState(false)
  const badgeCols = {
    green: '#3E9F4D',
    gold: '#DE8E0E',
    red: '#E3394D',
    grey: '#8C8C8C',
  }

  return (
    <div
      css={css`
        margin-top: 27px;
        table {
          //   border-spacing: 16px;
          width: 100%;
          background: #ffffff;
          border-radius: 8px;
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }

        td {
          text-align: left;
          padding: 20px;
          border-bottom: 1px solid #e5e5e5;
          max-width: 330px;
        }
        th {
          text-align: left;
          padding: 12px 20px;
          border-bottom: 1px solid #e5e5e5;
          max-width: 330px;
          font-weight: 600;
        }
      `}
    >
      <table>
        <thead>
          <tr>{title ? <th>{title}</th> : null}</tr>
          <tr>
            <th>
              <Checkbox
                checked={checkAll}
                onChange={() => {
                  setCheckAll(!checkAll)
                }}
              />
            </th>
            {headers.map((header, ind) => (
              <th key={ind}>{header.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((item, ind) => {
            return (
              <TableRow
                item={item}
                headers={headers}
                badgeCols={badgeCols}
                key={ind}
                checkAll={checkAll}
                draggable={draggable}
                onDragStart={onDragStart}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CustomTable
