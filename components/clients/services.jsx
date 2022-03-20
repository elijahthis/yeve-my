import tw, { css } from 'twin.macro'
import Image from 'next/image'
import service1 from '../../images/service1.png'
import service2 from '../../images/service2.png'
import service3 from '../../images/service3.png'
import service4 from '../../images/service4.png'
import service5 from '../../images/service5.png'
import service6 from '../../images/service6.png'
import profileImg from '../../images/profile-img.png'
import TabBar from '../pieces/tabBar'
import { BiChevronRight } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { ChooseService, ServiceRequest, RequestSummary } from './servicePhases'
import { sectionStyles } from '../../styles/GeneralStyles'

const ServiceComponent1 = ({ setServicePhase }) => {
  const categories = [
    { name: 'Musicians', image: service1 },
    { name: 'Child Performer', image: service2 },
    { name: 'Food & Drinks', image: service3 },
    { name: 'Security', image: service4 },
    { name: 'Wedding', image: service5 },
    { name: 'Event Travel', image: service6 },
  ]

  return (
    <div
      css={css`
        max-width: 706px;
      `}
    >
      <div
        tw="flex flex-row items-center justify-between my-7"
        css={css`
          @media (max-width: 1140px) {
            margin: 16px 0;
            > :nth-child(1) {
              display: none;
            }
            > :nth-child(2) {
              font-weight: 400;
              color: #767676;
            }
          }
        `}
      >
        <h5>Welcome</h5>
        <p tw="font-semibold">Choose from a list of service categories below</p>
      </div>
      <div
        tw="flex flex-row flex-wrap"
        css={css`
          gap: 20px;
          @media (max-width: 1140px) {
            gap: 12px;
          }
        `}
      >
        {categories.map((cat, ind) => (
          <div
            css={css`
              width: 222px;
              height: 180px;
              background-color: #fefefe;
              border-radius: 8px;
              box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
              padding: 14px 12px;
              cursor: pointer;
              @media (max-width: 1140px) {
                width: 153px;
                height: 126px;
                padding: 9px 8px;
              }
            `}
            key={ind}
            onClick={() => {
              setServicePhase(0)
            }}
          >
            <div
              css={css`
                width: 200px;
                height: 122px;
                overflow: hidden;
                border-radius: 8px;
                @media (max-width: 1140px) {
                  width: 137px;
                  height: 84px;
                }
              `}
            >
              <Image src={cat.image} alt={cat.name} />
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
              <h5>{cat.name}</h5>
              <BiChevronRight size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
const RecurringComponent2 = () => {
  const upcoming = [
    {
      gig: 'Bass Guitarist',
      name: 'Victor Smith',
      status: 'Pending Approval',
      image: profileImg,
    },
    {
      gig: 'Bass Guitarist',
      name: 'Victor Smith',
      status: 'Pending Approval',
      image: profileImg,
    },
    {
      gig: 'Bass Guitarist',
      name: 'Victor Smith',
      status: 'Pending Approval',
      image: profileImg,
    },
  ]
  return (
    <div
      css={css`
        @media (max-width: 1140px) {
          > :first-child {
            display: none;
          }
        }
      `}
    >
      <h5 tw="my-7">Upcoming</h5>
      <div
        tw="bg-[#fefefe] rounded-lg"
        css={css`
          > :last-child {
            border-bottom: 0;
          }
          > * {
            border-bottom: 1px solid #ebebeb;
          }
        `}
      >
        {upcoming.map((item, ind) => (
          <div
            tw="flex flex-row items-start justify-between"
            css={css`
              width: 300px;
              padding: 25px 18px;
            `}
            key={ind}
          >
            <div tw="flex flex-row items-start justify-between gap-3 h-16">
              <Image src={item.image} width="43px" height="43px" />
              <div>
                <p tw="font-semibold">{item.gig}</p>
                <p>{item.name}</p>
                <p tw="text-gold font-semibold text-xs mt-1">{item.status}</p>
              </div>
            </div>
            <div tw="text-xs h-full flex flex-col justify-between h-16 text-right">
              <p>1d</p>
              <p>$70/h</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Services = ({ openModal, setOpenModal, modalChild, setModalChild }) => {
  const [servicePhase, setServicePhase] = useState(null)
  const [formData, setFormData] = useState({
    services: [],
    details: {
      postcode: '',
      address: '',
      fromDate: '',
      fromTime: '',
      toDate: '',
      toTime: '',
      numHours: 1,
      moreInfo: '',
    },
    rehearsals: {
      state: false,
      count: 0,
      same: false,
      address: '',
      date: '',
      time: '',
    },
    eventType: { type: '', recurring: false, period: 'Weekly', dayMonth: '' },
    dressCode: { dressCode: '' },
    budget: [],
    vendorPreferences: { count: 1, experienceLevel: 'All' },
  })
  const serviceTabData = [
    {
      title: 'SERVICES',
      component: <ServiceComponent1 setServicePhase={setServicePhase} />,
    },
    { title: 'UPCOMING', component: <RecurringComponent2 /> },
  ]

  switch (servicePhase) {
    case null:
      return (
        <section css={sectionStyles}>
          <h3>Services</h3>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              gap: 26px;
              width: 100%;
              @media (max-width: 1140px) {
                display: none;
              }
            `}
          >
            <ServiceComponent1 setServicePhase={setServicePhase} />
            <RecurringComponent2 />
          </div>
          <div
            css={css`
              display: none;
              @media (max-width: 1140px) {
                display: block;
                margin-top: 28px;
                > div > div > div {
                  justify-content: space-between;
                }
                > div > :first-child > div > div {
                  padding: 8px 0;
                }
              }
            `}
          >
            <TabBar dataList={serviceTabData} />
          </div>
        </section>
      )

      break

    case 0:
      return (
        <ChooseService
          servicePhase={servicePhase}
          setServicePhase={setServicePhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
    case 1:
      return (
        <ServiceRequest
          servicePhase={servicePhase}
          setServicePhase={setServicePhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
    case 2:
      return (
        <RequestSummary
          servicePhase={servicePhase}
          setServicePhase={setServicePhase}
          formData={formData}
          setFormData={setFormData}
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
        />
      )
    default:
      return (
        <ChooseService
          servicePhase={servicePhase}
          setServicePhase={setServicePhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
      break
  }
}

export default Services
