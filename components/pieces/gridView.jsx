import tw, { css } from 'twin.macro'
import Image from 'next/image'

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

export default GridView
