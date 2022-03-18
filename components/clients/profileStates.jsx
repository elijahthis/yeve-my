import tw, { css } from 'twin.macro'
import Image from 'next/image'
import vidPlaceholder from '../../images/vid-placeholder.png'
import vidPlaceholder2 from '../../images/vid-placeholder-2.png'
import profilePlaceholder from '../../images/profile-1.png'
import avatarPlaceholder from '../../images/avatar.png'
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { FaPlay, FaSearch } from 'react-icons/fa'
import { FiMoreVertical } from 'react-icons/fi'
import { HiStar } from 'react-icons/hi'
import Post from '../pieces/post'

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
        tw="flex flex-row flex-wrap gap-6 justify-between py-9"
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
                width: 260px;
                height: 180px;
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
            {reviewList.map(review => (
              <div
                css={css`
                  width: 260px;
                  height: 210px;
                  padding: 20px 16px;
                  background-color: #ffffff;
                  border-radius: 8px;
                  box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
                  @media (max-width: 600px) {
                    width: clamp(300px, 100%, 520px);
                  }
                `}
              >
                <Image
                  src={review.avatar}
                  alt="avatar"
                  width="43px"
                  height="43px"
                />
                <p tw="font-semibold">{review.event}</p>
                <div tw="flex flex-row items-center gap-2 mb-4">
                  <HiStar />
                  <p tw="font-semibold">{review.rating}</p>
                  {review.date}
                </div>
                <p tw="italic">{review.comment}</p>
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
            width: 902px;
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            padding: 32px 0;
          `}
        >
          {feedData.map(item => (
            <Post postData={item} />
          ))}
        </div>
      </div>
    </>
  )
}
