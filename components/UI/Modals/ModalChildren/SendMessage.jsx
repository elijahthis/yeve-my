import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import profilePlaceholder from '../../../../images/profile-placeholder.png'
import Button from '../../Buttons/Button'
import ImageUploadPreview from '../../../pieces/imageUploadPreview'

const SendMessage = ({ setOpenModal, image }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 24px;
        width: clamp(300px, 80vw, 466px);
        text-align: left;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
        }
        p {
          color: #343434;
          font-size: 12px;
        }
        form {
          width: 100%;
          margin-top: 16px;
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
          font-size: 12px;
          line-height: 18px;
          color: #343434;
          width: 100%;
        }
        input,
        textarea {
          padding: 12px 16px;
          border-radius: 4px;
          background-color: #fafafa;
          border: 1px solid #d2d2d2;
          font-weight: 600;
          font-size: 14px;
          resize: none;
        }
        textarea {
          height: 118px;
        }
        @media (max-width: 1140px) {
          padding: 16px 14px;
          h4 {
            font-size: 16px;
            line-height: 24px;
            margin-top: 0;
          }
          p {
            color: #767676;
            font-weight: 400;
            margin-bottom: 24px;
          }
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <IoClose
        size={24}
        tw="absolute right-6 cursor-pointer"
        onClick={() => {
          setOpenModal(false)
        }}
      />
      <h4>Send Message</h4>
      <form action="">
        <div className="form-div">
          {image ? (
            <label>
              Add Image
              <ImageUploadPreview />
            </label>
          ) : null}
          <label htmlFor="">
            Recipient
            <div tw="flex flex-row items-center gap-4 py-3 px-4 bg-[#fafafa] border border-[#d2d2d2] rounded">
              <Image src={profilePlaceholder} width="24" height="24" />
              <p>John Smith</p>
            </div>
          </label>
          <label htmlFor="">
            Message Title
            <input type="text" name="" id="" placeholder="Message Title" />
          </label>
          <label htmlFor="">
            Enter Message
            <textarea
              name=""
              id=""
              tw="w-full"
              placeholder="Enter Message..."
            ></textarea>
          </label>
        </div>
      </form>

      <div tw="flex flex-row items-center gap-9 w-full mt-11">
        <Button
          variant="secondary"
          onClick={() => {
            setOpenModal(false)
          }}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setOpenModal(false)
          }}
        >
          Send
        </Button>
      </div>
    </div>
  )
}

export default SendMessage
