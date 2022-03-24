import tw, { css } from 'twin.macro'
import {
  BsShop,
  BsLightning,
  BsChatLeftDots,
  BsHeart,
  BsPerson,
  BsPeople,
} from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdLockOutline } from 'react-icons/md'
import FadedIcon from './fadedIcon'
import { useState } from 'react'

export const FeaturesToolTip = () => {
  const dataList = [
    {
      title: 'For Vendors',
      body: 'Victor Smith is looking for a bass guitarist around your area.',
      icon: <BsShop />,
    },
    {
      title: 'For Customers',
      body: 'Victor Smith is looking for a bass guitarist around your area.',
      icon: <BsPerson />,
    },
    {
      title: 'Events',
      body: 'Victor Smith is looking for a bass guitarist around your area.',
      icon: <BsLightning />,
    },
    {
      title: 'Yeve Group',
      body: 'Victor Smith is looking for a bass guitarist around your area.',
      icon: <BsPeople />,
    },
    {
      title: 'For Weddings',
      body: 'Victor Smith is looking for a bass guitarist around your area.',
      icon: <BsHeart />,
    },
    {
      title: 'Yeve Social',
      body: 'Victor Smith is looking for a bass guitarist around your area.',
      icon: <BsChatLeftDots />,
    },
  ]
  return (
    <div
      css={css`
        padding: 32px;
        display: flex;
        flex-direction: row;
        align-items: start;
        gap: 40px;
        flex-wrap: wrap;
        width: 640px;
      `}
    >
      {dataList.map(item => (
        <div
          css={css`
            width: 268px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 12px;
          `}
        >
          <FadedIcon icon={item.icon} />
          <div
            css={css`
              max-width: 210px;
            `}
          >
            <p tw="text-base text-[#111217] font-bold">{item.title}</p>
            <p tw="text-sm text-[#8c8c8c]">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export const NotificationsToolTip = ({ setPart, setRequestsPhase }) => {
  const dataList = [
    {
      title: 'EVENT AVAILABLE',
      body: 'Victor Smith his looking for a bass guitarist around your area. View and apply now',
      icon: <BsLightning size={21} />,
      time: '1m',
      func: function () {
        setPart(1)
        setRequestsPhase(0)
      },
    },
    {
      title: 'GIG ACCEPTED',
      body: 'Your application for bass guitarist for 2021 Concert: Live Jam has been accepted by client Lilly Hardback',
      icon: <AiOutlineCheckCircle size={21} />,
      time: '7h',
      func: function () {
        setPart(1)
        setRequestsPhase(0)
      },
    },
    {
      title: 'PASSWORD CHANGED',
      body: 'You changed your password',
      icon: <MdLockOutline size={21} />,
      time: '2d',
    },
  ]
  const [active, setActive] = useState(0)
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 495px;
        padding-top: 16px;
        padding-bottom: 25px;
        h5 {
          font-size: 18px;
          line-height: 24px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
        }
      `}
    >
      <div tw="flex flex-row items-center justify-between py-3 px-6 w-full border-b border-[#e5e5e5]">
        <h5>Notifications</h5>
        <div>1</div>
      </div>
      {dataList.map((item, ind) => (
        <div
          css={css`
            font-size: 14px;
            font-weight: 600;
            width: 100%;
            background-color: ${active === ind ? '#ffffff' : '#fafafa'};
            cursor: pointer;
            border-bottom: 1px solid #e5e5e5;
            border-left: 4px solid;
            border-left-color: ${active === ind ? '#de8e0e' : '#fafafa'};
            border-radius: 4px 0px 0px 4px;
          `}
          onClick={item.func ? item.func : null}
        >
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: start;
              justify-content: space-between;
              gap: 48px;
              width: 100%;
              padding: 12px 24px;
              padding-left: 20px;
            `}
          >
            <div>
              <div tw="flex flex-row items-center gap-2 mb-2">
                <span>{item.icon}</span>
                <p tw="text-black">{item.title}</p>
              </div>
              <p tw="text-[#767676]">{item.body}</p>
            </div>
            <div tw="flex flex-col items-end justify-between h-full">
              <p tw="text-[#8c8c8c] text-xs w-max">{item.time} ago</p>
              <p tw="text-gold">View</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
