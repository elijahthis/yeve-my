import tw, { css } from 'twin.macro'
import { useState } from 'react'
import Image from 'next/image'
import TabBar from '../pieces/tabBar'
import {
  PendingRequests,
  ActiveBookings,
  PastBookings,
  RecurringBookings,
} from './requestParts'
import { SearchBar, DropdownMenu } from '../formTools'
import { BsSortDownAlt, BsSortUp, BsListTask, BsGridFill } from 'react-icons/bs'
import { sectionStyles } from '../../styles/GeneralStyles'
import Modal from '../modal'
import { BackButton } from '../pieces/Buttons'
import { ViewGig, PreviewQuoteCard } from '../pieces/cards'
import keyboardistBadge from '../../images/Rectangle 444.png'

export const RequestsBase = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const [shape, setShape] = useState(0)
  const [cardList, setCardList] = useState([
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Pending Acceptance',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Pending Acceptance',
      budgetAccepted: true,
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Pending Acceptance',
      budgetAccepted: false,
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Accepted',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Accepted',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Activated',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Event Completed',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Event Completed',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Event Completed',
    },
  ])
  const requestTabData = [
    {
      title: 'Pending Requests',
      component: (
        <PendingRequests
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          shape={shape}
          cardList={cardList}
          setCardList={setCardList}
        />
      ),
      unread: 1,
    },
    {
      title: 'Active Bookings',
      component: (
        <ActiveBookings
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          shape={shape}
          cardList={cardList}
          setCardList={setCardList}
        />
      ),
      unread: 0,
    },
    {
      title: 'Past Bookings',
      component: (
        <PastBookings
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          shape={shape}
          cardList={cardList}
          setCardList={setCardList}
        />
      ),
      unread: 0,
    },
    {
      title: 'Recurring Bookings',
      component: (
        <RecurringBookings
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          shape={shape}
        />
      ),
      unread: 0,
    },
  ]
  return (
    <>
      <section css={sectionStyles}>
        <div tw="flex flex-row items-center justify-between mb-4">
          <h3>Requests</h3>
          <div tw="flex flex-row items-center gap-4">
            <div
              css={css`
                > * {
                  height: 48px;
                }
              `}
            >
              <SearchBar placeholder="Search for a vendor" />
            </div>
            <div
              css={css`
                > * {
                  height: 48px;
                }
              `}
            >
              <DropdownMenu list={['name', 'size']} placeholder="Sort by" />
            </div>
            <BsSortDownAlt size={16} />
          </div>
        </div>
        <div>
          <TabBar
            dataList={requestTabData}
            switchShapeIcon={[<BsListTask />, <BsGridFill />]}
            shape={shape}
            setShape={setShape}
          />
        </div>
      </section>
      <Modal>{modalChild}</Modal>
    </>
  )
}

export const RequestSummary = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  setRequestsPhase,
}) => {
  return (
    <>
      <section css={sectionStyles} style={{ backgroundColor: '#fafafa' }}>
        <div
          tw="flex flex-row items-center"
          css={css`
            margin-bottom: 16px;
            @media (max-width: 1140px) {
              margin-bottom: 10px;
            }
          `}
        >
          <BackButton
            onClick={() => {
              setRequestsPhase(null)
            }}
          />
          <h3
            css={css`
              margin-left: 40px;
              @media (max-width: 1140px) {
                margin-left: 16px;
              }
            `}
          >
            Event Details
          </h3>
        </div>
        <div
          css={css`
            > * {
              margin: 0 auto;
            }
          `}
        >
          <ViewGig
            setOpenModal={setOpenModal}
            setModalChild={setModalChild}
            setRequestsPhase={setRequestsPhase}
          />
        </div>
      </section>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {modalChild}
      </Modal>
    </>
  )
}

export const GenerateQuote = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  setRequestsPhase,
}) => {
  return (
    <>
      <section css={sectionStyles} style={{ backgroundColor: '#ffffff' }}>
        <div
          tw="flex flex-row items-center"
          css={css`
            margin-bottom: 16px;
            @media (max-width: 1140px) {
              margin-bottom: 10px;
            }
          `}
        >
          <BackButton
            onClick={() => {
              setRequestsPhase(null)
            }}
          />
          <h3
            css={css`
              margin-left: 40px;
              @media (max-width: 1140px) {
                margin-left: 16px;
              }
            `}
          >
            Generate Quote
          </h3>
        </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: 316px 1fr;
            form > * {
              width: 471px;
              margin-bottom: 24px;
              display: flex;
              flex-direction: column;
              font-size: 12px;
              font-weight: 600;
            }
            > * {
              // margin: 0 auto;
            }

            .form-div {
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
            label {
              display: flex;
              flex-direction: column;
              gap: 0.25rem;
            }
            input,
            textarea {
              padding: 12px 16px;
              border-radius: 4px;
              background-color: #fafafa;
              border: 1px solid #d2d2d2;
              font-weight: 600;
              font-size: 14px;
            }
            input[type='submit'] {
              background-color: #de8e0e;
              color: #ffffff;
              border: 1px solid #de8e0e;
              margin: 16px 0;
              width: 100%;
              :hover {
                cursor: pointer;
                background-color: transparent;
                color: #de8e0e;
              }
            }
          `}
        >
          <div></div>
          <form
            action=""
            onSubmit={ev => {
              ev.preventDefault()
              setRequestsPhase(2)
            }}
          >
            <div className="form-div">
              <label htmlFor="">
                Service
                <div
                  tw="px-1 py-1 rounded-l bg-[#fafafa] border border-[#d2d2d2] w-full flex flex-row items-center gap-4"
                  css={css`
                    height: 47px;
                  `}
                >
                  <Image src={keyboardistBadge} alt="" />
                  Keyboardist
                </div>
              </label>
              <label htmlFor="moreInfo">
                Event description
                <textarea
                  name="moreInfo"
                  id="moreInfo"
                  tw="resize-none"
                  placeholder="Event description..."
                  // value={formData.details.moreInfo}
                  // onChange={ev => {
                  //   const newData = { ...formData }
                  //   newData.details.moreInfo = ev.target.value
                  //   setFormData(newData)
                  // }}
                ></textarea>
                <p tw="text-right">0/200</p>
              </label>
              <label htmlFor="">
                How much would you want to charge?
                <div tw="flex flex-row items-center">
                  <div
                    tw="px-4 py-3 rounded-l bg-[#fafafa] border border-[#d2d2d2]"
                    css={css`
                      height: 47px;
                    `}
                  >
                    &#163;
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{
                      borderRadius: '0 4px 4px 0',
                      borderLeft: 0,
                    }}
                    tw="w-full"
                    // value={formData.budget[ind].from}
                    // onChange={ev => {
                    //   const newData = { ...formData }
                    //   newData.budget[ind].from = Number.isNaN(
                    //     parseInt(ev.target.value),
                    //   )
                    //     ? 0
                    //     : parseInt(ev.target.value)
                    //   setFormData(newData)
                    // }}
                  />
                </div>
              </label>
              <div tw="w-full">
                <input type="submit" value="Continue" />
              </div>
            </div>
          </form>
        </div>
      </section>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {modalChild}
      </Modal>
    </>
  )
}

export const PreviewQuote = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  setRequestsPhase,
}) => {
  return (
    <>
      <section css={sectionStyles} style={{ backgroundColor: '#ffffff' }}>
        <div
          tw="flex flex-row items-center"
          css={css`
            margin-bottom: 16px;
            @media (max-width: 1140px) {
              margin-bottom: 10px;
            }
          `}
        >
          <BackButton
            onClick={() => {
              setRequestsPhase(1)
            }}
          />
          <h3
            css={css`
              margin-left: 40px;
              @media (max-width: 1140px) {
                margin-left: 16px;
              }
            `}
          >
            Preview Quote
          </h3>
        </div>
        <div
          css={css`
            > * {
              margin: 0 auto;
            }
          `}
        >
          <PreviewQuoteCard
            setOpenModal={setOpenModal}
            setModalChild={setModalChild}
            setRequestsPhase={setRequestsPhase}
          />
        </div>
      </section>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {modalChild}
      </Modal>
    </>
  )
}
