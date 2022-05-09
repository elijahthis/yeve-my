import { useState } from 'react'
import { IoClose } from 'react-icons/io'
import tw, { css } from 'twin.macro'
import GridTable from '../../GridTable'
import GanttChart from '../../GanttChart'

export const Plan = ({ setOpenModal, cardList, setCardList }) => {
  return (
    <div
      tw="relative bg-white text-center"
      css={css`
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
        max-width: 1149px;
        min-height: 240px;
        h5 {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
          color: #343434;
          text-align: left;
        }
      `}
      onClick={ev => ev.stopPropagation()}
    >
      <h5 tw="mt-6 ml-6">Plan</h5>'
      <div
        css={css`
          overflow-x: auto;
        `}
      >
        <GanttChart cardList={cardList}  />
      </div>
    </div>
  )
}

export default Plan
