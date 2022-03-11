import tw, { css } from 'twin.macro'
import Image from 'next/image'
import vidPlaceholder from '../../images/vid-placeholder.png'
import vidPlaceholder2 from '../../images/vid-placeholder-2.png'
import profilePlaceholder from '../../images/profile-1.png'
import avatarPlaceholder from '../../images/avatar.png'
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
import { FiMoreVertical } from 'react-icons/fi'
import { HiStar } from 'react-icons/hi'

export const MyProfile = () => {
  return (
    <div tw="flex flex-row flex-wrap gap-6 justify-center py-9">
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
          <div
            css={css`
              display: grid;
              grid-template-columns: 42fr 58fr;
              background-color: white;
              border-radius: 4px;
            `}
          >
            <Image src={item.media} alt="" />
            <div>
              <div tw="flex flex-row justify-between items-center p-5 border-b border-[#e5e5e5]">
                <div tw="flex flex-row items-center gap-2">
                  <Image
                    src={item.userProfile}
                    alt=""
                    width="32px"
                    height="32px"
                  />
                  <p>{item.userName}</p>
                </div>
                <div tw="flex flex-row items-center gap-5">
                  Follow <FiMoreVertical />
                </div>
              </div>
              <div
                tw="px-5"
                css={css`
                  > * {
                    padding: 26px 0;
                    border-bottom: 1px solid #e5e5e5;
                  }
                `}
              >
                <div>
                  <p tw="text-xs">5 Min</p>
                  <p tw="text-xs font-semibold">{item.body}</p>
                </div>
                <div tw="flex flex-col gap-4">
                  <div tw="flex flex-row items-start">
                    <Image
                      src={profilePlaceholder}
                      alt=""
                      width="32px"
                      height="32px"
                    />
                    <div
                      css={css`
                        margin-left: 8px;
                      `}
                    >
                      <p tw="font-semibold">Mike Jay</p>
                      <p tw="text-xs flex flex-row items-center gap-2">
                        <span>5 Min</span>
                        <span>Reply</span>
                      </p>
                    </div>
                    <p
                      css={css`
                        margin-left: 25px;
                        font-size: 12px;
                      `}
                    >
                      Brilliant!
                    </p>
                  </div>
                  <div tw="flex flex-row items-start">
                    <Image
                      src={profilePlaceholder}
                      alt=""
                      width="32px"
                      height="32px"
                    />
                    <div
                      css={css`
                        margin-left: 8px;
                      `}
                    >
                      <p tw="font-semibold">Mike Jay</p>
                      <p tw="text-xs flex flex-row items-center gap-2">
                        <span>5 Min</span>
                        <span>Reply</span>
                      </p>
                    </div>
                    <p
                      css={css`
                        margin-left: 25px;
                        font-size: 12px;
                      `}
                    >
                      Brilliant!
                    </p>
                  </div>
                </div>
                <div
                  tw="flex flex-col gap-6"
                  css={css`
                    font-weight: 600;
                  `}
                >
                  <div tw="flex flex-row items-center justify-between">
                    <div tw="flex flex-row items-center gap-7">
                      <AiOutlineHeart size={20} />
                      <AiOutlineShareAlt size={20} />
                    </div>
                    <span>32 likes</span>
                  </div>
                  <div tw="flex flex-row items-center justify-between">
                    <span>Add Comment</span>
                    <span tw="text-gold">Post</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
