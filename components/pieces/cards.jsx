import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { FiCheck } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { BiChevronRight } from 'react-icons/bi'
import {
  ActivateEvent,
  CancelRecurring,
  CompleteEvent,
  ViewQuote,
  VendorReview,
  EventAccepted,
  CancelEvent,
  QuoteSent,
} from '../modalChildren'
import { ProgressBar } from '../formTools'
import { HiStar } from 'react-icons/hi'
import { Tooltip } from 'antd'
import 'antd/dist/antd.css'
import imgPlaceholder from '../../images/card-banner.png'
import profilePlaceholder from '../../images/profile-placeholder.png'
import premiumIcon from '../../images/premium-icon.png'
import { ProceedButton } from './Buttons'

export const actionBtn = css`
  font-size: 14px;
  line-height: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 32px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`

// General / Client side / shared

export const ServiceCard1 = ({ cardData, clickFunc }) => {
  return (
    <div
      css={css`
        background-color: #fefefe;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        padding: 14px 12px;
        cursor: pointer;
        width: 100%;
        height: 100%;
        @media (max-width: 1140px) {
          padding: 9px 8px;
        }
      `}
      onClick={clickFunc}
    >
      <div
        css={css`
          width: 100%;
          height: 78%;
          overflow: hidden;
          border-radius: 8px;
          @media (max-width: 1140px) {
            width: 137px;
            height: 84px;
          }
        `}
      >
        <Image src={cardData.image} alt={cardData.name} />
      </div>
      <div
        tw="flex flex-row justify-between items-center"
        css={css`
          margin-top: 8px;

          @media (max-width: 1140px) {
            margin-top: 6px;
          }
        `}
      >
        <h5 style={{ marginBottom: '0' }}>{cardData.name}</h5>
        <BiChevronRight size={18} />
      </div>
    </div>
  )
}
export const ServiceCard2 = ({ cardData, clickFunc, referenceList }) => {
  return (
    <div tw="relative w-full h-full" onClick={clickFunc}>
      <Image src={cardData.image} layout="fill" />
      <div
        tw="w-full h-full absolute top-0 left-0 font-bold grid place-items-center cursor-pointer rounded"
        css={
          referenceList.includes(cardData.title)
            ? css`
                background-color: rgba(222, 142, 14, 0.8);
                h5 {
                  color: white;
                }
              `
            : css`
                h5 {
                  color: white;
                }
              `
        }
      >
        {' '}
        <div tw="flex flex-col items-center gap-1">
          {referenceList.includes(cardData.title) ? (
            <div tw="p-2 bg-white rounded-full text-[rgba(222, 142, 14, 0.8)]">
              <FiCheck strokeWidth={5} />
            </div>
          ) : (
            <></>
          )}
          <h5>{cardData.title}</h5>
        </div>
      </div>
    </div>
  )
}

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

export const ReviewCard = ({ cardData }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        padding: 20px 16px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
      `}
    >
      <Image src={cardData.avatar} alt="avatar" width="43px" height="43px" />
      <p tw="font-semibold">{cardData.event}</p>
      <div tw="flex flex-row items-center gap-2 mb-4">
        <HiStar />
        <p tw="font-semibold">{cardData.rating}</p>
        {cardData.date}
      </div>
      <p tw="italic">{cardData.comment}</p>
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

// Vendor side
export const VendorCard2 = ({
  cardData,
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  cardList,
  setCardList,
  cardInd,
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
            <div>
              <p tw="text-black">{cardData.gig}</p>
              <p>{cardData.name}</p>
            </div>
          </div>
          <BiChevronRight color="black" size={22} />
        </div>
        {cardData.status === 'Event Completed' ? null : (
          <p tw="mt-4">{cardData.address}</p>
        )}
        <div tw="flex flex-row items-center justify-between mt-2">
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
          display: ${['Pending Acceptance', 'Event Completed'].includes(
            cardData.status,
          )
            ? 'none'
            : 'block'};
        `}
        tw="mt-5"
      >
        {cardData.status === 'Accepted' ? (
          <div tw="pt-3 border-t border-[#E5E5E5]">
            <Tooltip
              title="Activate to confirm you have arrived the venue"
              overlayInnerStyle={{
                maxWidth: '172px',
              }}
              placement="bottom"
            >
              <span
                tw="w-full grid place-items-center text-[#3E9F4D]"
                css={actionBtn}
                onClick={() => {
                  setModalChild(
                    <ActivateEvent
                      setOpenModal={setOpenModal}
                      vendor={true}
                      cardList={cardList}
                      setCardList={setCardList}
                      cardInd={cardInd}
                    />,
                  )
                  setOpenModal(true)
                }}
              >
                Activate
              </span>
            </Tooltip>
          </div>
        ) : cardData.status === 'Activated' ? (
          <div tw="pt-3 border-t border-[#E5E5E5]">
            <span
              tw="w-full grid place-items-center text-[#3E9F4D]"
              css={actionBtn}
              onClick={() => {
                setModalChild(
                  <CompleteEvent
                    setOpenModal={setOpenModal}
                    setModalChild={setModalChild}
                    vendor={true}
                  />,
                )
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

export const ServicesListCard = ({ cardData }) => {
  return (
    <div
      css={css`
        color: #767676;
        background: #fefefe;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
        > :first-child {
          padding-top: 28px;
        }
        > :last-child {
          padding-bottom: 28px;
        }
      `}
    >
      {cardData.map((item, ind) => (
        <div
          tw="flex flex-row items-start justify-between border-b border-[#EBEBEB]"
          css={css`
            padding: 18px 20px;
          `}
        >
          <div>
            <p tw="text-sm">{item}</p>
            <p tw="text-xs">{ind === 0 ? 'Primary' : 'Secondary'} Service</p>
          </div>
          <p tw="text-gold cursor-pointer">Add+</p>
        </div>
      ))}
    </div>
  )
}

export const ViewGig = ({ setOpenModal, setModalChild, setRequestsPhase }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 16px 24px;
        width: 564px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h5 {
          font-size: 18px;
          line-height: 24px;
          font-weight: 700;
          color: #343434;
          font-family: Montserrat;
        }
        p {
          width: 100%;
          margin-top: 12px;
          color: #1a1a1a;
          font-size: 14px;
        }
        span {
          color: #343434;
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <IoClose
        size={24}
        tw="absolute right-6 cursor-pointer"
        onClick={() => {
          setOpenModal(false)
        }}
      />
      <div>
        <Image src={imgPlaceholder} />
      </div>
      <div tw="flex flex-row items-center gap-2 mt-5 mb-8">
        <div tw="w-8 h-8 relative">
          <Image src={profilePlaceholder} />
          <div tw="w-3 h-3 absolute bottom-0 right-0">
            <Image src={premiumIcon} />
          </div>
        </div>
        <div tw="flex flex-col items-start">
          <span tw="text-[#343434]">by John Smith</span>
          <span tw="text-[#767676] text-xs">5m ago</span>
        </div>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Event Details</h5>
        <div
          tw="w-full mt-3"
          css={css`
            > * {
              > :first-child {
                font-size: 12px;
              }
            }
          `}
        >
          <div tw="flex flex-row items-center justify-between w-full mb-2">
            <span>Event Type:</span>
            <span>Birthday Party</span>
          </div>
          <div tw="flex flex-row items-center justify-between w-full mb-2">
            <span>Date:</span>
            <span>09 May 2020</span>
          </div>
          <div tw="flex flex-row items-center justify-between w-full mb-2">
            <span>Time:</span>
            <span>13:00</span>
          </div>
          <div tw="flex flex-row items-center justify-between w-full mb-2">
            <span>Dress Code:</span>
            <span>Smart Casual</span>
          </div>
          <div tw="flex flex-row items-center justify-between w-full mb-4">
            <span>Price:</span>
            <span>£120</span>
          </div>
        </div>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Location</h5>
        <p>1 London Street, London Road, Greater, London SE1 2AB</p>
      </div>
      <div tw="flex flex-row items-center gap-9 w-full mt-4">
        <ProceedButton bg="#f8f8f8" col="#767676" content="Reject" />
        <div
          css={css`
            width: 150%;
          `}
        >
          <ProceedButton
            bg="#1a1a1a"
            col="#ffffff"
            content="Generate Quote"
            onClick={() => {
              setRequestsPhase(1)
            }}
          />
        </div>
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Accept"
          onClick={() => {
            setModalChild(
              <EventAccepted
                setOpenModal={setOpenModal}
                setRequestsPhase={setRequestsPhase}
              />,
            )
            setOpenModal(true)
          }}
        />
      </div>
    </div>
  )
}

export const PreviewQuoteCard = ({
  setOpenModal,
  setModalChild,
  setRequestsPhase,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 16px 24px;
        width: 564px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h5 {
          font-size: 18px;
          line-height: 24px;
          font-weight: 700;
          color: #343434;
          font-family: Montserrat;
        }
        p {
          width: 100%;
          margin-top: 12px;
          color: #1a1a1a;
          font-size: 14px;
        }
        span {
          color: #343434;
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <IoClose
        size={24}
        tw="absolute right-6 cursor-pointer"
        onClick={() => {
          setOpenModal(false)
        }}
      />
      <div>
        <Image src={imgPlaceholder} />
      </div>
      <div tw="flex flex-row items-center gap-2 mt-5 mb-8">
        <div tw="w-8 h-8 relative">
          <Image src={profilePlaceholder} />
          <div tw="w-3 h-3 absolute bottom-0 right-0">
            <Image src={premiumIcon} />
          </div>
        </div>
        <span tw="text-[#343434]">by John Smith</span>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Description</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
          lorem consequat. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum
          dolor sit.
        </p>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Pricing</h5>
        <p>&#163;120</p>
      </div>
      <div tw="flex flex-row items-center gap-9 w-full mt-4">
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Publish"
          onClick={() => {
            setModalChild(
              <QuoteSent
                setOpenModal={setOpenModal}
                setRequestsPhase={setRequestsPhase}
              />,
            )
            setOpenModal(true)
          }}
        />
      </div>
    </div>
  )
}
