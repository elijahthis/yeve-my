import { Tooltip } from 'antd'
import 'antd/dist/antd.css'
import { BiChevronRight } from 'react-icons/bi'
import tw, { css } from 'twin.macro'
import { actionBtn } from '../../../styles/GeneralStyles'
import { ActivateEvent, CompleteEvent } from '../Modals/ModalChildren/'

const VendorCard2 = ({
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

export default VendorCard2
