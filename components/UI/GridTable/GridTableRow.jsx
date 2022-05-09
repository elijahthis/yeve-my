import { useEffect, useState } from 'react'
import tw, { css } from 'twin.macro'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { DatePicker } from 'antd'
import GridCell from './GridCell'

const GridTableRow = ({
  item,
  headers,
  index,
  groupObj,
  setGroupObj,
  cardList,
  setCardList,
}) => {
  useEffect(() => {
    // console.log(groupObj)
  }, [])
  return (
    <tr
      css={css`
        transition: background-color 0.3s;
        display: ${!groupObj[item.tag] && item.type === 'child'
          ? 'none'
          : 'table-row'};
        overflow: hidden;
      `}
    >
      <td
        css={css`
          background-color: transparent;
        `}
      >
        {index + 1}
      </td>
      {headers.slice(1).map((header, ind) => (
        <td
          key={ind}
          css={css`
            font-family: 'Open Sans';
            font-size: 14px;
            font-weight: ${item.type === 'parent' ? '600' : '400'};
            line-height: 24px;
            position: relative;
            background: white padding-box;
            border: 1px solid #e5e5e5;

            input {
              font-weight: ${item.type === 'parent' ? '600' : '400'};
              width: 100%;
            }
          `}
        >
          {item.type === 'parent' && ind === 0 ? (
            <span
              css={css`
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                color: #de8e0e;
                left: 0%;
                cursor: pointer;
              `}
              onClick={() => {
                console.log(item.tag)
                const newObj = { ...groupObj }
                newObj[item.tag] = !newObj[item.tag]
                setGroupObj(newObj)
                console.log(groupObj[item.tag])
              }}
            >
              {groupObj[item.tag] ? (
                <BiChevronDown size={16} />
              ) : (
                <BiChevronUp size={16} />
              )}
            </span>
          ) : null}
          <GridCell
            item={item}
            header={header}
            index={index}
            cardList={cardList}
            setCardList={setCardList}
          />
        </td>
      ))}
    </tr>
  )
}

export default GridTableRow
