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

const Post = ({ postData }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 42fr 58fr;
        background-color: white;
        border-radius: 4px;
      `}
    >
      <Image src={postData.media} alt="" />
      <div>
        <div tw="flex flex-row justify-between items-center p-5 border-b border-[#e5e5e5]">
          <div tw="flex flex-row items-center gap-2">
            <Image src={postData.userProfile} alt="" width="32px" height="32px" />
            <p>{postData.userName}</p>
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
            <p tw="text-xs font-semibold">{postData.body}</p>
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
  )
}

export default Post
