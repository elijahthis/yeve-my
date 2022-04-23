import 'antd/dist/antd.css'
import Image from 'next/image'
import { BiChevronRight } from 'react-icons/bi'
import tw, { css } from 'twin.macro'
import { actionBtn } from '../../../styles/GeneralStyles'
import {
  ActivateEvent,
  VendorReview,
  ViewQuote,
} from '../Modals/ModalChildren/'

const VendorCard = ({
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
        padding: 16px;
        padding-top: 22px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        color: #767676;
        height: max-content;
      `}
    >
      <div>
        <div tw="flex flex-row items-start justify-between">
          <div tw="flex flex-row items-start gap-3">
            <Image src={cardData.image} alt="" width={43} height={43} />
            <div>
              <p tw="text-black">{cardData.gig}</p>
              <p>{cardData.name}</p>
            </div>
          </div>
          <BiChevronRight color="black" size={22} />
        </div>
        <div tw="flex flex-row items-center justify-between mt-8">
          <div>
            <p>{cardData.date}</p>
            <p>{cardData.time}</p>
          </div>
          <div tw="text-right">
            <p>
              &#163;{cardData.price}/{cardData.duration}
              {cardData.duration > 1 ? 'hrs' : 'hr'}
            </p>
            <p tw="text-xs text-gold">{cardData.status}</p>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: ${['Gig Published', 'In Progress'].includes(cardData.status)
            ? 'none'
            : 'block'};
        `}
        tw="mt-5"
      >
        {cardData.status === 'Pending Acceptance' &&
        cardData.budgetAccepted === true ? (
          <div tw="pt-3 flex flex-row items-center justify-between border-t border-[#E5E5E5]">
            <span tw="px-4 text-[#FD5C47]" css={actionBtn}>
              Decline
            </span>
            <span tw="p-8 text-[#3E9F4D]" css={actionBtn}>
              Accept
            </span>
          </div>
        ) : cardData.status === 'Pending Acceptance' &&
          cardData.budgetAccepted === false ? (
          <div tw="pt-3 border-t border-[#E5E5E5]">
            <span
              tw="w-full grid place-items-center text-gold"
              css={actionBtn}
              onClick={() => {
                setModalChild(<ViewQuote setOpenModal={setOpenModal} />)
                setOpenModal(true)
              }}
            >
              View Quote
            </span>
          </div>
        ) : cardData.status === 'Pending Activation' ? (
          <div tw="pt-3 flex flex-col items-center gap-2 justify-between border-t border-[#E5E5E5]">
            <span
              tw="w-full grid place-items-center text-[#3E9F4D]"
              css={actionBtn}
              onClick={() => {
                setModalChild(<ActivateEvent setOpenModal={setOpenModal} />)
                setOpenModal(true)
              }}
            >
              Confirm activation
            </span>
            <span tw="w-full grid place-items-center text-gold" css={actionBtn}>
              Contact Vendor
            </span>
          </div>
        ) : cardData.status === 'Completed' ? (
          <div tw="pt-3 border-t border-[#E5E5E5]">
            <span
              tw="w-full grid place-items-center text-[#3E9F4D]"
              css={actionBtn}
            >
              Hire Again
            </span>
          </div>
        ) : cardData.status === 'Activated' ? (
          <div tw="pt-3 border-t border-[#E5E5E5]">
            <span
              tw="w-full grid place-items-center text-[#3E9F4D]"
              css={actionBtn}
              onClick={() => {
                setModalChild(<VendorReview setOpenModal={setOpenModal} />)
                setOpenModal(true)
              }}
            >
              Complete Event
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default VendorCard
