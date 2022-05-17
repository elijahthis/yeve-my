import tw, { css } from 'twin.macro'
import { useEffect, useState } from 'react'
import { dateDifference, dateBegin, morphMonths } from './helperFunctions'
import { Card, Tooltip } from 'antd'

const GanttChart = ({ cardList, setCardList }) => {
  const baseMonths = [
    { name: 'Jan', length: 31, ind: 0 },
    { name: 'Feb', length: 29, ind: 1 },
    { name: 'Mar', length: 31, ind: 2 },
    { name: 'Apr', length: 30, ind: 3 },
    { name: 'May', length: 31, ind: 4 },
    { name: 'Jun', length: 30, ind: 5 },
    { name: 'Jul', length: 31, ind: 6 },
    { name: 'Aug', length: 31, ind: 7 },
    { name: 'Sep', length: 30, ind: 8 },
    { name: 'Oct', length: 31, ind: 9 },
    { name: 'Nov', length: 30, ind: 10 },
    { name: 'Dec', length: 31, ind: 11 },
  ]
  const [months, setMonths] = useState([
    { name: 'Jan', length: 31, ind: 0 },
    { name: 'Feb', length: 29, ind: 1 },
    { name: 'Mar', length: 31, ind: 2 },
    { name: 'Apr', length: 30, ind: 3 },
    { name: 'May', length: 31, ind: 4 },
    { name: 'Jun', length: 30, ind: 5 },
    { name: 'Jul', length: 31, ind: 6 },
    { name: 'Aug', length: 31, ind: 7 },
    { name: 'Sep', length: 30, ind: 8 },
    { name: 'Oct', length: 31, ind: 9 },
    { name: 'Nov', length: 30, ind: 10 },
    { name: 'Dec', length: 31, ind: 11 },
  ])

  useEffect(() => {
    setMonths(morphMonths(cardList, baseMonths))
  }, [cardList])

  return (
    <table
      css={css`
        text-align: left;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        border: 1px solid #e5e5e5;
        border-collapse: collapse;

        td {
          text-align: left;
          padding: 4px 16px;
          //   border-bottom: 1px solid #e5e5e5;
          border: 1px solid #e5e5e5;
          max-width: 330px;
        }
        th {
          text-align: left;
          padding: 4px 12px;
          border-bottom: 1px solid #e5e5e5;
          max-width: 330px;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          border: 1px solid #e5e5e5;
          color: #767676;
          background-color: transparent;
        }

        input[type='color'] {
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 2px;
          border: none;
          cursor: pointer;
          ::-webkit-color-swatch {
            border-radius: 2px;
          }
          ::-webkit-color-swatch-wrapper {
            padding: 0;
          }
          ::-moz-color-swatch {
            border-radius: 2px;
          }
        }
      `}
    >
      <thead>
        <tr>
          <th rowSpan={2}></th>
          <th
            rowSpan={2}
            css={css`
              width: 200px;
            `}
          >
            Tasks
          </th>
          {months.map(month => (
            <th colSpan={month.length}>{month.name}</th>
          ))}
        </tr>
        <tr>
          {months.map(month =>
            Array(month.length)
              .fill()
              .map((month, ind) => <th>{ind + 1}</th>),
          )}
        </tr>
      </thead>
      <tbody>
        {cardList.map((card, ind) => (
          <tr>
            <td>{ind + 1}</td>
            <td
              width="200"
              css={css`
                // width: 200px;
                white-space: nowrap;
                font-weight: ${card.type === 'parent' ? '600' : '400'};
              `}
              tw="flex flex-row items-center gap-8 justify-between"
            >
              {card.task}
              {card.type === 'parent' ? (
                <input
                  type="color"
                  name=""
                  id=""
                  value={card.color}
                  onChange={ev => {
                    const newList = [...cardList]
                    newList.forEach((item, ind) => {
                      if (item.tag === card.tag) {
                        newList[ind].color = ev.target.value
                        console.log(ev.target.value)
                      }
                    })
                    setCardList(newList)
                    console.log(cardList[ind].color)
                  }}
                />
              ) : null}
            </td>
            {dateBegin(card.start, months) ? (
              <td colSpan={dateBegin(card.start, months)}></td>
            ) : null}
            <td
              style={{
                padding: '4px 0',
              }}
              css={css`
                margin: 4px 0;
              `}
              colSpan={dateDifference(card.start, card.finish)}
            >
              <div
                css={css`
                  background: ${cardList[ind].color};
                  border-radius: 4px;
                  color: white;
                  position: relative;
                  width: 100%;
                  height: 100%;

                  button {
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: transparent;
                  }
                `}
              >
                <Tooltip
                  title={
                    <div
                      css={css`
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 12px;
                        line-height: 18px;
                        color: #fafafa;
                      `}
                    >
                      <p>START - {card.start}</p>
                      <p>FINISH - {card.finish}</p>
                      <p>DURATION - {card.duration} days</p>
                    </div>
                  }
                  overlayInnerStyle={{
                    maxWidth: '172px',
                  }}
                  // placement="bottom"
                >
                  <button>&nbsp;</button>
                </Tooltip>
              </div>
            </td>
            <td
              colSpan={
                365 -
                (dateBegin(card.start, months) +
                  dateDifference(card.start, card.finish))
              }
            ></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GanttChart
