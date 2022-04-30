import { Checkbox, message } from 'antd'
import { useEffect, useState } from 'react'
import tw, { css } from 'twin.macro'
import { BooleanToggle, CrudOptions, MoreOptions } from '../../formTools'
import { StatusBadge } from '../../pieces/badges'

const TableRow = ({
  badgeCols,
  item,
  headers,
  checkAll,
  draggable,
  onDragStart,
}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (checkAll) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [checkAll])

  return (
    <tr
      css={css`
        background-color: ${checked ? '#FDF9F3' : 'white'};
        transition: background-color 0.3s;
        cursor: ${draggable ? 'grab' : ''};
      `}
      draggable={draggable}
      onDragStart={ev => {
        onDragStart(item)
      }}
    >
      <td>
        <Checkbox
          checked={checked}
          onChange={() => {
            setChecked(!checked)
          }}
        />
      </td>
      {headers.map((header, ind) => (
        <td key={ind}>
          {header.type === 'Bool' ? (
            <BooleanToggle
              list={header.list}
              value={item[header.key]}
              valueList={header.list}
            />
          ) : header.type === 'actions-crud' ? (
            <CrudOptions more={true} moreList={header.moreList} />
          ) : header.type === 'actions-ud' ? (
            <CrudOptions more={false} />
          ) : header.type === 'actions-mud' ? (
            <CrudOptions
              more={false}
              message={true}
              // messageFunc={() => {}}
              messageFunc={header.messageFunc}
            />
          ) : header.type === 'actions-more' ? (
            <MoreOptions moreList={header.moreList} />
          ) : header.type === 'badge' ? (
            <StatusBadge
              color={
                badgeCols[
                  Object.keys(header.badgeList).find(
                    key => header.badgeList[key] === item[header.key],
                  )
                ]
              }
            >
              {item[header.key]}
            </StatusBadge>
          ) : (
            item[header.key]
          )}
        </td>
      ))}
    </tr>
  )
}

export default TableRow
