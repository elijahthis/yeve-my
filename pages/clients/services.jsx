import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ClientsLayout from '../../layouts/clientsLayout'
import service1 from '../../images/service1.png'
import service2 from '../../images/service2.png'
import service3 from '../../images/service3.png'
import service4 from '../../images/service4.png'
import service5 from '../../images/service5.png'
import service6 from '../../images/service6.png'
import profileImg from '../../images/profile-img.png'
import TabBar from '../../components/UI/TabBar'
import { BiChevronRight } from 'react-icons/bi'
import {
  ChooseService,
  ServiceRequest,
  VenueRequest,
  VenueSummary,
  RequestSummary,
} from '../../components/clients/servicePhases'
import { sectionStyles } from '../../styles/GeneralStyles'
import { ServiceCard1 } from '../../components/UI/Cards'
import Modal from '../../components/UI/Modals/Modal'

const ServiceComponent1 = ({ setServicePhase }) => {
  const categories = [
    { name: 'Musicians', image: service1 },
    { name: 'Child Performer', image: service2 },
    { name: 'Food & Drinks', image: service3 },
    { name: 'Security', image: service4 },
    { name: 'Wedding', image: service5 },
    { name: 'Event Travel', image: service6 },
    { name: 'Venue Provider', image: service6 },
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
              @media (max-width: 1140px) {
                width: 153px;
                height: 126px;
              }
            `}
            key={ind}
          >
            <ServiceCard1
              cardData={cat}
              clickFunc={() => {
                if (cat.name === 'Venue Provider') {
                  setServicePhase(11)
                } else {
                  setServicePhase(0)
                }
              }}
            />
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

const ServicesRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const [servicePhase, setServicePhase] = useState(null)
  const [formData, setFormData] = useState({
    postalCode: '',
    address: '',
    date: '',
    time: '',
    services: [],
    info: '',
    hours: 1,
    rehearsal: true,
    sameVenue: true,
    venueAddress: '',
    // rehearsals: {
    //   state: false,
    //   count: 0,
    //   same: false,
    //   address: '',
    //   date: '',
    //   time: '',
    // },
    type: '',
    recurring: false,
    recurringInterval: '',
    recurringDay: '',
    dressCode: '',
    budget: [],
    numberOfResponse: undefined,
    expirienceLevel: '',
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
    case 11:
      return (
        <VenueRequest
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
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      )
    case 22:
      return (
        <VenueSummary
          servicePhase={servicePhase}
          setServicePhase={setServicePhase}
          formData={formData}
          setFormData={setFormData}
          setOpenModal={setOpenModal}
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

const Services = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <>
        <ServicesRoot
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
        />
        {mounted ? (
          <Modal openModal={openModal} setOpenModal={setOpenModal}>
            {modalChild}
          </Modal>
        ) : null}
      </>
    </>
  )
}

Services.getLayout = page => <ClientsLayout>{page}</ClientsLayout>

export default Services
