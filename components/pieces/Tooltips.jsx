import tw, { css } from 'twin.macro'
import {
  BsShop,
  BsLightning,
  BsChatLeftDots,
  BsHeart,
  BsPerson,
  BsPeople,
} from 'react-icons/bs'
import FadedIcon from './fadedIcon'

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
    <div>
      {dataList.map(item => (
        <div
          css={css`
            min-width: 600px;
          `}
        >
          <FadedIcon icon={item.icon} />
          <div>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
