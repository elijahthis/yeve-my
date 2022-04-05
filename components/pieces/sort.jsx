import tw, { css } from 'twin.macro'
import { DropdownMenu } from '../../components/formTools'
import { BsSortDownAlt, BsSortUp } from 'react-icons/bs'
import { useState } from 'react'

const SortComponent = () => {
  const sortDirections = ['ascending', 'descending']
  const [sortDirection, setSortDirection] = useState(sortDirections[0])

  return (
    <div tw="flex flex-row items-center gap-4">
      <div
        css={css`
          > * {
            height: 48px;
          }
          ~ div {
            cursor: pointer;
          }
          button {
            background-color: transparent;
          }
        `}
      >
        <DropdownMenu list={['name', 'size']} placeholder="Sort by" />
      </div>
      <div
        onClick={() => {
          setSortDirection(
            sortDirections[
              (sortDirections.findIndex(x => x === sortDirection) + 1) % 2
            ],
          )
          console.log(sortDirection)
        }}
      >
        {sortDirection === 'ascending' ? (
          <BsSortDownAlt size={16} />
        ) : (
          <BsSortUp size={16} />
        )}
      </div>
    </div>
  )
}

export default SortComponent
