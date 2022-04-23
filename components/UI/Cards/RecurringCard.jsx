import 'antd/dist/antd.css'
import Image from 'next/image'
import tw, { css } from 'twin.macro'
import { actionBtn } from '../../../styles/GeneralStyles'
import { CancelRecurring } from '../Modals/ModalChildren/'

const RecurringCard = ({
  cardData,
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  return (
    <div
      css={css`
        width: 247px;
        background: #ffffff;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
        padding: 12px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        color: #767676;
        height: max-content;
      `}
    >
      <div>
        <Image src={cardData.image} />
        <div tw="flex flex-row items-center justify-between">
          <div tw="flex flex-col items-start justify-between h-12">
            <p tw="text-black">{cardData.gig}</p>
            <p>{cardData.day}</p>
          </div>
          <div tw="flex flex-col items-end justify-between h-12">
            <p
              tw="text-xs text-gold"
              css={css`
                line-height: 24px;
              `}
            >
              {cardData.frequency}
            </p>
            <p>
              &#163;{cardData.price}/{cardData.duration}
              {cardData.duration > 1 ? 'hrs' : 'hr'}
            </p>
          </div>
        </div>
      </div>
      <div tw="mt-5">
        <div tw="pt-3 border-t border-[#E5E5E5]">
          <span
            tw="w-full grid place-items-center text-gold"
            css={actionBtn}
            onClick={() => {
              setModalChild(<CancelRecurring setOpenModal={setOpenModal} />)
              setOpenModal(true)
            }}
          >
            Cancel recurring
          </span>
        </div>
      </div>
    </div>
  )
}

export default RecurringCard
