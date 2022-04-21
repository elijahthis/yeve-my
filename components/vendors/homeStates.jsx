import tw, { css } from 'twin.macro'
import Image from 'next/image'
import vidPlaceholder from '../../images/vid-placeholder.png'
import vidPlaceholder2 from '../../images/vid-placeholder-2.png'
import profilePlaceholder from '../../images/profile-1.png'
import avatarPlaceholder from '../../images/avatar.png'
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { FaPlay, FaSearch } from 'react-icons/fa'
import { IoClose, IoPersonOutline } from 'react-icons/io5'
import { ProceedButton, BackButton } from '../pieces/Buttons'
import Post from '../pieces/post'
import service1 from '../../images/service1.png'
import service2 from '../../images/service2.png'
import service3 from '../../images/service3.png'
import service4 from '../../images/service4.png'
import service5 from '../../images/service5.png'
import service6 from '../../images/service6.png'
import musician1 from '../../images/musician-1.png'
import musician2 from '../../images/musician-2.png'
import musician3 from '../../images/musician-3.png'
import musician4 from '../../images/musician-4.png'
import musician5 from '../../images/musician-5.png'
import musician6 from '../../images/musician-6.png'
import { ServiceCard1, ServiceCard2, ReviewCard } from '../pieces/cards'
import { useState } from 'react'

export const MyProfile = () => {
  return (
    <>
      <form action="" tw="p-3 bg-white  rounded">
        <div tw="flex flex-row items-center gap-3 px-2 bg-[#fafafa] rounded">
          <FaSearch />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            tw="p-2 w-full bg-[#fafafa]"
          />
        </div>
      </form>
      <div
        tw="flex flex-row flex-wrap gap-6 py-9"
        css={css`
          @media (max-width: 1140px) {
            column-gap: 6px;
            justify-content: flex-start;
          }
        `}
      >
        {Array(6)
          .fill()
          .map((vid, ind) => (
            <div
              css={css`
                width: 168px;
                height: 115px;
                position: relative;
                letter-spacing: 0;
                word-spacing: 0;
                font-size: 0;
                border-radius: 4px;
                @media (max-width: 1140px) {
                  width: 100px;
                  height: 70px;
                }
              `}
              key={ind}
            >
              <Image src={vidPlaceholder} />
              <div tw="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] rounded grid place-items-center">
                <div tw="w-16 h-16 bg-white rounded-full grid place-items-center">
                  <FaPlay size={26} color="#DE8E0E" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export const Reviews = () => {
  const reviewList = [
    {
      avatar: avatarPlaceholder,
      event: 'Maxi Event 2021',
      rating: 4.5,
      date: 'Aug 20, 2021',
      comment: '“John performed very well, i will recommend”',
    },
    {
      avatar: avatarPlaceholder,
      event: 'Maxi Event 2021',
      rating: 4.5,
      date: 'Aug 20, 2021',
      comment: '“John performed very well, i will recommend”',
    },
    {
      avatar: avatarPlaceholder,
      event: 'Maxi Event 2021',
      rating: 4.5,
      date: 'Aug 20, 2021',
      comment: '“John performed very well, i will recommend”',
    },
    {
      avatar: avatarPlaceholder,
      event: 'Maxi Event 2021',
      rating: 4.5,
      date: 'Aug 20, 2021',
      comment: '“John performed very well, i will recommend”',
    },
    {
      avatar: avatarPlaceholder,
      event: 'Maxi Event 2021',
      rating: 4.5,
      date: 'Aug 20, 2021',
      comment: '“John performed very well, i will recommend”',
    },
    {
      avatar: avatarPlaceholder,
      event: 'Maxi Event 2021',
      rating: 4.5,
      date: 'Aug 20, 2021',
      comment: '“John performed very well, i will recommend”',
    },
    {
      avatar: avatarPlaceholder,
      event: 'Maxi Event 2021',
      rating: 4.5,
      date: 'Aug 20, 2021',
      comment: '“John performed very well, i will recommend”',
    },
    {
      avatar: avatarPlaceholder,
      event: 'Maxi Event 2021',
      rating: 4.5,
      date: 'Aug 20, 2021',
      comment: '“John performed very well, i will recommend”',
    },
    {
      avatar: avatarPlaceholder,
      event: 'Maxi Event 2021',
      rating: 4.5,
      date: 'Aug 20, 2021',
      comment: '“John performed very well, i will recommend”',
    },
  ]
  return (
    <div>
      <div tw="flex flex-row justify-center">
        <div
          css={css`
            max-width: 876px;
          `}
        >
          <p tw="w-full my-5 font-bold">34 Reviews</p>
          <div tw="flex flex-row flex-wrap gap-8">
            {reviewList.map((review, ind) => (
              <div
                css={css`
                  max-width: 230px;
                  min-height: 210px;

                  @media (max-width: 600px) {
                    width: clamp(300px, 100%, 520px);
                  }
                `}
                key={ind}
              >
                <ReviewCard cardData={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Feed = () => {
  const feedData = [
    {
      media: vidPlaceholder2,
      userName: 'John Smith',
      userProfile: profilePlaceholder,
      body: `My Soul Thirsts for You
  
      Woke up this morning longing for more of Him in my soul.
      Lord, my soul thirsts for you#Soul #Yeve #Music`,
    },
    {
      media: vidPlaceholder2,
      userName: 'John Smith',
      userProfile: profilePlaceholder,
      body: `My Soul Thirsts for You
  
      Woke up this morning longing for more of Him in my soul.
      Lord, my soul thirsts for you#Soul #Yeve #Music`,
    },
  ]
  return (
    <>
      <form action="" tw="p-3 bg-white  rounded">
        <div tw="flex flex-row items-center gap-3 px-2 bg-[#fafafa] rounded">
          <FaSearch />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            tw="p-2 w-full bg-[#fafafa]"
          />
        </div>
      </form>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          css={css`
            max-width: 902px;
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            padding: 32px 0;
          `}
        >
          {feedData.map((item, ind) => (
            <Post postData={item} key={ind} />
          ))}
        </div>
      </div>
    </>
  )
}

export const ServicePhaseNull = ({ servicePhase, setServicePhase }) => {
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
        margin-top: 24px;
      `}
    >
      <div
        tw="flex flex-row items-center justify-between my-4"
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
                setServicePhase(0)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export const ChooseService = ({
  servicePhase,
  setServicePhase,
  formData,
  setFormData,
}) => {
  const musicianList = [
    { title: 'Keyboardist', image: musician1 },
    { title: 'Drummer', image: musician2 },
    { title: 'Bass Guitarist', image: musician3 },
    { title: 'Vocalist', image: musician4 },
    { title: 'Electric Guitarist', image: musician5 },
    { title: 'Acoustic Guitarist', image: musician6 },
  ]
  const services = [
    { name: 'Musicians', list: musicianList },
    { name: 'Child Performer', list: musicianList },
    { name: 'Food & Drinks', list: musicianList },
    { name: 'Security', list: musicianList },
    { name: 'Wedding', list: musicianList },
    { name: 'Event Travel', list: musicianList },
  ]
  const [serviceField, setServiceField] = useState(formData.services)
  return (
    <div
      css={css`
        margin-top: 24px;
      `}
    >
      <div tw="flex flex-row items-center mb-4">
        <BackButton
          onClick={() => {
            setServicePhase(null)
          }}
        />
        <h5
          style={{ marginBottom: '0' }}
          css={css`
            margin-left: 40px;
            @media (max-width: 1140px) {
              margin-left: 16px;
            }
          `}
        >
          {services[servicePhase].name}
        </h5>
      </div>

      <div
        tw="flex flex-row flex-wrap gap-5"
        css={css`
          gap: 20px;
          @media (max-width: 1140px) {
            gap: 9px;
          }
        `}
      >
        {services[servicePhase].list.map((item, ind) => (
          <div
            css={css`
              width: 248px;
              height: 126px;
              @media (max-width: 1140px) {
                width: clamp(155px, 40vw, 276px);
                height: clamp(80px, 20vw, 140px);
              }
            `}
          >
            <ServiceCard2
              cardData={item}
              clickFunc={() => {
                serviceField.includes(item.title)
                  ? setServiceField(
                      serviceField.filter(x => {
                        return x !== item.title
                      }),
                    )
                  : setServiceField([...new Set([...serviceField, item.title])])
              }}
              referenceList={serviceField}
              key={ind}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const Services = () => {
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
  switch (servicePhase) {
    case null:
      return (
        <ServicePhaseNull
          servicePhase={servicePhase}
          setServicePhase={setServicePhase}
        />
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
      break

    default:
      return (
        <ServicePhaseNull
          servicePhase={servicePhase}
          setServicePhase={setServicePhase}
        />
      )
      break
  }
}
