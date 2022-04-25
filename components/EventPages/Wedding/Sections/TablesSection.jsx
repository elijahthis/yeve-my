import tw, { css } from 'twin.macro'
import { weddingSection } from '../../Regular/styles'
import CustomTable from '../../../UI/CustomTable'
import { SeatingChart2 } from '../../../pieces/seatingChart'
import { IoPersonOutline } from 'react-icons/io5'

const TablesSection = () => {
  const seatList = [
    {
      name: 'Joseph Pegg',
      table: 1,
    },
    {
      name: 'Joseph Pegg',
      table: 1,
    },
    {
      name: 'Joseph Pegg',
      table: 1,
    },
    {
      name: 'Joseph Pegg',
      table: 1,
    },
    {
      name: 'Joseph Pegg',
      table: 1,
    },
    {
      name: 'Joseph Pegg',
      table: 1,
    },
    {
      name: 'Joseph Pegg',
      table: 1,
    },
  ]
  return (
    <section css={weddingSection} style={{ padding: '72px' }}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-self: flex-start;
          width: 100%;

          h3 {
            font-size: 24px;
            line-height: 32px;
            font-weight: 700;
            color: #1a1a1a;
            font-family: Montserrat;
          }

          h4,
          h2,
          .text-body {
            text-align: left;
          }
        `}
      >
        <div
          css={css`
            width: 50%;
          `}
        >
          <div tw="flex flex-row items-center gap-6">
            <h4 style={{ fontWeight: '700', marginBottom: '0' }}>TABLE</h4>
            <p tw="flex flex-row items-center gap-3">
              <IoPersonOutline size={22} />
              07
            </p>
          </div>
          {/* <h2>TABLE</h2> */}
          <p className="text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
            lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. A magna ut lorem consequat.Lorem ipsum dolor sit amet
          </p>
        </div>
        <section
          css={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 106px;
            width: 100%;
          `}
        >
          <div>
            <CustomTable
              list={seatList}
              headers={[
                { title: 'Name', key: 'name' },
                { title: 'Seat', key: 'table' },
              ]}
            />
          </div>
          <div>
            <SeatingChart2
              title="T1"
              index={1}
              dataList={seatList}
              group={{ name: "Bride's Family", ind: 1 }}
              capacity={12}
            />
          </div>
          <div
            css={css`
              margin-left: 115px;
            `}
          >
            <div>Food</div>
            <div>
              <h3>Select Meals</h3>
              <div>
                <p>Fried Rice</p>
                <p>Fried rice and coleslaw</p>
              </div>
              <div>
                <p>Jollof Rice</p>
                <p>Jollof rice and meat</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default TablesSection
