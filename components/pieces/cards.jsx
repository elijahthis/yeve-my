import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { BiChevronRight } from 'react-icons/bi'
import {
  ActivateEvent,
  CancelRecurring,
  CompleteEvent,
  ViewQuote,
  VendorReview,
} from '../modalChildren'
import { ProgressBar } from '../formTools'

export const actionBtn = css`
  font-size: 14px;
  line-height: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 32px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`
export const VendorCard = ({
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

export const RecurringCard = ({
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

export const EventCard = ({ cardData }) => {
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
        <div tw="flex flex-col items-start justify-between w-full">
          <p tw="text-black">{cardData.gig}</p>
          <div tw="flex flex-row items-start justify-between h-12 w-full">
            <p>{cardData.day}</p>
            <p
              css={css`
                color: ${cardData.live === 'Live' ? '#3E9F4D' : '#DE8E0E'};
              `}
            >
              {cardData.live}
            </p>
          </div>
        </div>
      </div>
      <div tw="mt-5">
        <ProgressBar percent={cardData.percent} />
      </div>
    </div>
  )
}

export const VendorInfoCard = ({ cardData }) => {
  return (
    <div
      css={css`
        padding-top: 26px;
        padding-bottom: 30px;
        padding-left: 14px;
        max-width: 196px;
        min-width: 170px;
        height: 98px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        background: #ffffff;
        font-weight: 600;

        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
      `}
    >
      <div
        css={css`
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          background-color: #fdf9f3;
          color: #de8e0e;
          border-radius: 50%;
        `}
      >
        {cardData.icon}
      </div>
      <div>
        <h5>
          {cardData.money ? <span>&#163;</span> : ''}
          {cardData.value}
        </h5>
        <p tw="text-xs text-[#767676]">{cardData.title}</p>
      </div>
    </div>
  )
}

export const UpcomingLiveList = ({ cardData }) => {
  return (
    <div
      css={css`
        background: #fefefe;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
        padding-bottom: 12px;
      `}
    >
      <ul tw="font-semibold text-sm text-[#767676]">
        {cardData.map((card, ind) => (
          <div
            css={css`
              padding: 22px 32px;
              border-bottom: 1px solid #ebebeb;
              > * {
                list-style-type: disc;
              }
            `}
            key={ind}
          >
            <li>
              <p tw="text-black">{card.gig}</p>
              <p>{card.clientName}</p>
              <div tw="text-gold text-xs flex flex-row items-center gap-2 my-1">
                <span>{card.date}</span>
                <span>{card.time}</span>
              </div>
              <p tw="text-xs">{card.address}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export const NewsCard = ({ cardData }) => {
  return (
    <div
      css={css`
        color: #767676;
        padding: 16px 14px 21px 12px;
        background: #fefefe;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
      `}
    >
      <div>
        <Image src={cardData.image} />
      </div>
      <div tw="flex flex-row items-center justify-between">
        <p tw="text-black">{cardData.title}</p>
        <span tw="text-xs text-[#8c8c8c]">{cardData.time}</span>
      </div>
      <p tw="text-xs">{cardData.body}</p>
    </div>
  )
}
