import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { BooleanToggle, CrudOptions, MoreOptions } from '../formTools'
import { StatusBadge } from './badges'

const GridView = ({ list, headers }) => {
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
        }
        th {
          text-align: left;
          padding: 12px 20px;
          border-bottom: 1px solid #e5e5e5;
          font-weight: 600;
        }
      `}
    >
      <table>
        <tr>
          <th>
            <input type="checkbox" name="" id="" />
          </th>
          {headers.map((header, ind) => (
            <th key={ind}>{header}</th>
          ))}
        </tr>
        {list.map(item, ind => {
          return (
            <tr key={ind}>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <div tw="flex flex-row items-center gap-4">
                  <Image src={item.image} alt="" width={24} height={24} />
                  {item.name}
                </div>
              </td>
              <td>{item.gig}</td>
              <td>
                &#163;{item.price}/{item.duration}
                {item.duration > 1 ? 'hrs' : 'hr'}
              </td>
              <td>{item.date}</td>
              <td tw="font-semibold text-gold">
                <div
                  css={css`
                    width: max-content;
                    font-weight: 600;
                    color: #de8e0e;
                    border: 1px solid #e5e5e5;
                    border-radius: 4px;
                    padding: 4px 12px;
                  `}
                >
                  {item.status}
                </div>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
export const GridView2 = ({ list, headers }) => {
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
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            {headers.map((header, ind) => (
              <th key={ind}>{header.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((item, ind) => {
            return (
              <tr key={ind}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                {headers.map(header => (
                  <td>
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
          })}
        </tbody>
      </table>
    </div>
  )
}

export default GridView
