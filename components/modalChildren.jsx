import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { BsShop } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { FiCheck, FiMoreVertical } from 'react-icons/fi'
import imgPlaceholder from '../images/card-banner.png'
import profilePlaceholder from '../images/profile-placeholder.png'
import { ProceedButton } from './pieces/Buttons'
import premiumIcon from '../images/premium-icon.png'
import { DropdownMenu, DateFilter } from './formTools'
import ImageUploadPreview from './pieces/imageUploadPreview'
import RatingStars from './pieces/ratingStars'
import { VendorInfoCard2 } from './pieces/cards'
import { GridView2 } from './pieces/gridView'

export const RequestSubmitted = ({ setOpenModal, setServicePhase }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 25px;
        width: clamp(300px, 80vw, 466px);
        text-align: center;
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
          max-width: 278px;
          margin-bottom: 97px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
        }
        @media (max-width: 1140px) {
          padding: 16px 14px;
          h4 {
            font-size: 16px;
            line-height: 24px;
          }
          p {
            color: #767676;
            font-weight: 400;
            margin-bottom: 32px;
          }
          > :first-child {
            right: 14px;
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
          setServicePhase(null)
        }}
      />
      <div tw="p-2 bg-white rounded-full text-[#65B02A] border-4 border-[#65B02A] mb-6 mt-10">
        <FiCheck strokeWidth={3} size={33} />
      </div>
      <h4>Request Submitted</h4>
      <p>
        We have submitted your request and it is processing. We will notify you
        when your gig has been accepted
      </p>
      <ProceedButton
        bg="#de8e0e"
        col="white"
        content="Back Home"
        onClick={() => {
          setOpenModal(false)
          setServicePhase(null)
        }}
      />
    </div>
  )
}

export const CancelRecurring = ({ setOpenModal }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 40px;
        width: 466px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin-top: 28px;
        }
        p {
          width: 278px;
          margin-bottom: 47px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
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
      <h4>Cancel Recurring</h4>
      <p>Once you proceed, this cannot be undone</p>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="No"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Yes"
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export const ActivateEvent = ({
  setOpenModal,
  cardList,
  setCardList,
  vendor,
  cardInd,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 40px;
        width: 466px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin-top: 28px;
        }
        p {
          width: 287px;
          margin-bottom: 47px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
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
      <h4>Activate Event?</h4>
      <p>
        Activate event to confirm {vendor ? 'your' : 'vendor'} arrival to the
        event venue
      </p>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="No, Cancel"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Yes, activate"
          onClick={() => {
            const newList = [...cardList]
            newList[cardInd].status = 'Activated'
            setCardList(newList)
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export const RateClient = ({ setOpenModal }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 38px;
        width: 466px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin-top: 28px;
        }
        p {
          font-size: 12px;
          line-height: 18px;
          max-width: 190px;
          color: #343434;
        }
        .button {
          padding: 6px 20px;
          background-color: #fafafa;
          color: #767676;
          border: 1px solid #d2d2d2;
          border-radius: 4px;
          font-weight: 600;
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
      <h4>Rate your client</h4>
      <div tw="flex flex-col items-start gap-11 w-full mt-12 mb-3">
        <div tw="w-full">
          <div tw="flex flex-row justify-center items-center w-full">
            <RatingStars size={38} active={true} />
          </div>
        </div>
        <div tw="flex flex-col items-start gap-1 w-full">
          <p>Add comments (optional)</p>
          <textarea
            name=""
            id=""
            tw="w-full"
            placeholder="Add comments (optional)"
          ></textarea>
        </div>
      </div>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="Report Issue"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Yes, complete"
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export const CompleteEvent = ({ setOpenModal, setModalChild, vendor }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 40px;
        width: 466px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin-top: 28px;
        }
        p {
          width: 348px;
          margin-bottom: 47px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
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
      <h4>Complete Event?</h4>
      <p>
        Complete event to confirm that the event has been completed.{' '}
        {vendor
          ? null
          : 'Kindly confirm within 48 hours or it will be automatically confirmed in the vendor’s favor'}
      </p>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content={vendor ? 'No, Cancel' : 'Report Issue'}
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Yes, complete"
          onClick={() => {
            if (vendor)
              setModalChild(<RateClient setOpenModal={setOpenModal} />)
            else setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export const ViewQuote = ({ setOpenModal }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 16px 24px;
        width: 564px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h5 {
          font-size: 18px;
          line-height: 24px;
          font-weight: 700;
          color: #343434;
          font-family: Montserrat;
        }
        p {
          width: 100%;
          margin-top: 12px;
          color: #1a1a1a;
          font-size: 14px;
        }
        span {
          color: #343434;
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
      <div>
        <Image src={imgPlaceholder} />
      </div>
      <div tw="flex flex-row items-center gap-2 mt-5 mb-8">
        <div tw="w-8 h-8 relative">
          <Image src={profilePlaceholder} />
          <div tw="w-3 h-3 absolute bottom-0 right-0">
            <Image src={premiumIcon} />
          </div>
        </div>
        <span>by John Smith</span>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Description</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
          lorem consequat. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum
          dolor sit.
        </p>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Pricing</h5>
        <p>&#163;120</p>
      </div>
      <div tw="flex flex-row items-center gap-9 w-full mt-4">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="Reject"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Accept"
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export const VendorReview = ({ setOpenModal }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 38px;
        width: 466px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin-top: 28px;
        }
        p {
          font-size: 12px;
          line-height: 18px;
          max-width: 190px;
          color: #343434;
        }
        .button {
          padding: 6px 20px;
          background-color: #fafafa;
          color: #767676;
          border: 1px solid #d2d2d2;
          border-radius: 4px;
          font-weight: 600;
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
      <h4>Vendor Review</h4>
      <div tw="flex flex-col items-start gap-6 w-full">
        <div tw="flex flex-row items-center justify-between w-full">
          <p>Was the vendor on time?</p>
          <div tw="flex flex-row items-center gap-2">
            <button className="button">No</button>
            <button className="button">Yes</button>
          </div>
        </div>
        <div tw="flex flex-row items-center justify-between w-full">
          <p>Were you satisfied with the vendor’s performance?</p>
          <div tw="flex flex-row items-center gap-2">
            <button className="button">No</button>
            <button className="button">Yes</button>
          </div>
        </div>
        <div tw="flex flex-row items-center justify-between w-full">
          <p>Was the vendor professional?</p>
          <div tw="flex flex-row items-center gap-2">
            <button className="button">No</button>
            <button className="button">Yes</button>
          </div>
        </div>
        <div tw="w-full">
          <p tw="mb-1">Rate Vendor</p>
          <div tw="flex flex-row justify-center items-center w-full">
            <RatingStars size={38} active={true} />
          </div>
        </div>
        <div tw="flex flex-col items-start gap-1 w-full">
          <p>Add comments (optional)</p>
          <textarea
            name=""
            id=""
            tw="w-full"
            placeholder="Add comments (optional)"
          ></textarea>
        </div>
      </div>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="Report Issue"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Yes, complete"
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export const WithdrawEarnings = ({ setOpenModal }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 40px;
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
          margin-top: 28px;
        }
        p {
          width: 348px;
          margin-bottom: 32px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
        }
        form {
          width: 100%;
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
      <h4>Withdraw Earnings</h4>
      <p>Enter your withdrawal details</p>
      <form action="">
        <div className="form-div">
          <label htmlFor="">
            Enter amount to withdraw
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter amount to withdraw"
            />
          </label>
          <label htmlFor="">
            Select payment account <DropdownMenu list={[0, 1, 2]} />
          </label>
        </div>
      </form>
      <div tw="w-full mt-10">
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Withdraw"
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export const CreatePostPhase0 = ({
  setOpenModal,
  setPhase,
  formData,
  setFormData,
}) => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (formData.imageURL !== '') {
      setActive(true)
      console.log('its: ' + formData.imageURL)
    } else setActive(false)
  }, [formData])
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 40px;
        width: 466px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin-top: 28px;
        }
        p {
          width: 278px;
          margin-top: 6px;
          color: #000000;
          font-size: 14px;
        }
        span {
          margin-bottom: 13px;
          font-weight: 600;
          font-size: 12px;
          color: #8c8c8c;
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
          setPhase(0)
          setOpenModal(false)
        }}
      />
      <h4>Create Post</h4>
      <p>Upload photos or videos</p>
      <div
        tw="w-full"
        css={css`
          margin-top: 48px;
          margin-bottom: 24px;
        `}
      >
        <ImageUploadPreview
          limit={1}
          onChangeFunc={val => {
            const newData = { ...formData }
            newData.imageURL = val
            setFormData(newData)
          }}
        />
      </div>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg={active ? '#de8e0e' : '#D2D2D2'}
          col={active ? 'white' : '#8C8C8C'}
          content="Upload"
          onClick={() => {
            active ? setPhase(1) : null
          }}
        />
      </div>
    </div>
  )
}
export const CreatePostPhase1 = ({
  setOpenModal,
  setPhase,
  formData,
  setFormData,
}) => {
  return (
    <div
      css={css`
        background-color: #ffffff;
        border-radius: 4px;

        width: clamp(300px, 80vw, 825px);
        text-align: center;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
        }
        label {
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 4px;

          width: 100%;
          textarea {
            width: 100%;
            height: 180px;
            resize: none;
            background: #fafafa;
            border: 1px solid #d2d2d2;
            box-sizing: border-box;
            border-radius: 4px;
            padding: 12px 16px;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
          }
          span {
            font-size: 12px;
            line-height: 18px;
            color: #343434;
          }
        }

        @media (max-width: 1140px) {
          padding: 16px 14px;
          h4 {
            font-size: 16px;
            line-height: 24px;
          }

          > :first-child {
            right: 14px;
          }
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <IoClose
        size={24}
        tw="absolute right-6 cursor-pointer top-6"
        onClick={() => {
          setPhase(0)
          setOpenModal(false)
        }}
      />
      <div
        css={css`
          padding: 20px 0;
          border-bottom: 1px solid #e5e5e5;
        `}
      >
        <h4>Create Post</h4>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 21px;
          width: 100%;
          padding: 24px;
          > * {
            height: 370px;
          }
        `}
      >
        <div
          css={css`
            width: 100%;
            position: relative;
          `}
        >
          <Image src={formData.imageURL} alt="" layout="fill" />
        </div>
        <div tw="flex flex-col items-start justify-between">
          <div tw="flex flex-row items-center gap-2">
            <div
              css={css`
                width: 32px;
                height: 32px;
              `}
            >
              <Image src={profilePlaceholder} alt="" />
            </div>
            <p>John Smith</p>
          </div>
          <label htmlFor="">
            <span>Add Caption</span>
            <textarea
              name=""
              id=""
              placeholder="Add Caption"
              value={formData.body}
              onChange={ev => {
                const newData = { ...formData }
                newData.body = ev.target.value
                setFormData(newData)
              }}
            ></textarea>
            <span>0/60</span>
          </label>
          <ProceedButton
            bg="#de8e0e"
            col="white"
            content="Upload"
            onClick={() => {
              setPhase(2)
            }}
          />
        </div>
      </div>
    </div>
  )
}
export const CreatePostPhase2 = ({
  setOpenModal,
  setPhase,
  formData,
  setFormData,
}) => {
  return (
    <div
      css={css`
        background-color: #ffffff;
        border-radius: 4px;

        width: clamp(300px, 80vw, 902px);
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
        }
        label {
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 4px;

          width: 100%;
          textarea {
            width: 100%;
            height: 180px;
            resize: none;
            background: #fafafa;
            border: 1px solid #d2d2d2;
            box-sizing: border-box;
            border-radius: 4px;
            padding: 12px 16px;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
          }
          span {
            font-size: 12px;
            line-height: 18px;
            color: #343434;
          }
        }

        @media (max-width: 1140px) {
          h4 {
            font-size: 16px;
            line-height: 24px;
          }

          > :first-child {
            right: 14px;
          }
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      {/* <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          > * {
            height: 490px;
          }
        `}
      >
        <div
          css={css`
            width: 100%;
            position: relative;
          `}
        >
          <Image src={formData.imageURL} alt="" layout="fill" />
        </div>
        <div>
          <div
            tw="flex flex-row items-center gap-2"
            css={css`
              padding: 20px;
              width: 100%;
              border-bottom: 1px solid #e5e5e5;
            `}
          >
            <div
              css={css`
                width: 32px;
                height: 32px;
              `}
            >
              <Image src={profilePlaceholder} alt="" />
            </div>
            <p>John Smith</p>
          </div>
          <div>
            <div>
              <span>{formData.time}</span>
              <p>{formData.body}</p>
            </div>
            <div>
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
            </div>
            <div></div>
          </div>
        </div>
      </div> */}

      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          background-color: white;
          border-radius: 4px;
        `}
      >
        <div
          css={css`
            width: 100%;
            position: relative;
          `}
        >
          <Image src={formData.imageURL} alt="" layout="fill" />
        </div>
        <div>
          <div tw="flex flex-row justify-between items-center p-5 border-b border-[#e5e5e5]">
            <div tw="flex flex-row items-center gap-2">
              <Image
                src={profilePlaceholder}
                alt=""
                width="32px"
                height="32px"
              />
              <p>John Smith</p>
            </div>
            <div tw="flex flex-row items-center gap-5">
              Follow <FiMoreVertical />
            </div>
          </div>
          <div
            tw="px-5"
            css={css`
              > * {
                padding: 12px 0;
                border-bottom: 1px solid #e5e5e5;
              }
            `}
          >
            <div>
              <p tw="text-xs">5 Min</p>
              <p tw="text-xs font-semibold">{formData.body}</p>
            </div>
            <div tw="flex flex-col gap-4" style={{ padding: '16px 0' }}>
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
                <span
                  css={css`
                    margin-left: 25px;
                    font-size: 12px;
                  `}
                >
                  Brilliant!
                </span>
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
                <span
                  css={css`
                    margin-left: 25px;
                    font-size: 12px;
                  `}
                >
                  Brilliant!
                </span>
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
    </div>
  )
}

export const CreatePost = ({ setOpenModal }) => {
  const [phase, setPhase] = useState(0)
  const [formData, setFormData] = useState({
    imageURL: '',
    body: '',
    time: '5min',
  })
  switch (phase) {
    case 0:
      return (
        <CreatePostPhase0
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
    case 1:
      return (
        <CreatePostPhase1
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
    case 2:
      return (
        <CreatePostPhase2
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )

    default:
      return (
        <CreatePostPhase0
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
  }
}

export const EventAccepted = ({ setOpenModal }) => {
  const router = useRouter()
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 25px;
        width: clamp(300px, 80vw, 466px);
        text-align: center;
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
          max-width: 278px;
          margin-bottom: 97px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
        }
        @media (max-width: 1140px) {
          padding: 16px 14px;
          h4 {
            font-size: 16px;
            line-height: 24px;
          }
          p {
            color: #767676;
            font-weight: 400;
            margin-bottom: 32px;
          }
          > :first-child {
            right: 14px;
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
          router.push('/vendors/my-requests')
        }}
      />
      <div tw="p-2 bg-white rounded-full text-[#65B02A] border-4 border-[#65B02A] mb-6 mt-10">
        <FiCheck strokeWidth={3} size={33} />
      </div>
      <h4>Event Accepted</h4>
      <p>
        We have submitted your request and it is processing. We will notify you
        when it has been accepted by the client
      </p>
      <ProceedButton
        bg="#de8e0e"
        col="white"
        content="Back Home"
        onClick={() => {
          setOpenModal(false)
          router.push('/vendors/my-requests')
        }}
      />
    </div>
  )
}

export const CancelEvent = ({ setOpenModal }) => {
  const router = useRouter()

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 40px;
        width: 466px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin-top: 28px;
        }
        p {
          width: 278px;
          margin-bottom: 47px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
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
      <h4>Cancel Event?</h4>
      <p>
        Note that three cancellations in a row can lead to suspension. Once you
        proceed with this action, it cannot be undone.
      </p>
      <label htmlFor="">
        Give reason for cancellation
        <textarea
          name=""
          id=""
          placeholder="Give reason for cancellation"
        ></textarea>
      </label>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="No"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Yes"
          onClick={() => {
            setOpenModal(false)
            router.push('/vendors/my-requests')
          }}
        />
      </div>
    </div>
  )
}

export const QuoteSent = ({ setOpenModal }) => {
  const router = useRouter()

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 25px;
        width: clamp(300px, 80vw, 466px);
        text-align: center;
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
          max-width: 278px;
          margin-bottom: 97px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
        }
        @media (max-width: 1140px) {
          padding: 16px 14px;
          h4 {
            font-size: 16px;
            line-height: 24px;
          }
          p {
            color: #767676;
            font-weight: 400;
            margin-bottom: 32px;
          }
          > :first-child {
            right: 14px;
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
          router.push('/vendors/my-requests')
        }}
      />
      <div tw="p-2 bg-white rounded-full text-[#65B02A] border-4 border-[#65B02A] mb-6 mt-10">
        <FiCheck strokeWidth={3} size={33} />
      </div>
      <h4>Quote Sent</h4>
      <p>
        Your quote has been sent to the client. We will notify you on the
        client’s approval
      </p>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="Back Home"
          onClick={() => {
            setOpenModal(false)
            router.push('/vendors/my-requests')
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Share Quote"
          onClick={() => {
            setOpenModal(false)
            router.push('/vendors/my-requests')
          }}
        />
      </div>
    </div>
  )
}

//Admin

export const SendMessage = ({ setOpenModal }) => {
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
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="Cancel"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Send"
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export const PaymentHistory = ({ setOpenModal, vendor }) => {
  const infoCards = [
    {
      title: 'Total Amount Paid',
      value: 137,
      icon: <BsShop size={21} />,
      money: true,
    },
    {
      title: 'Total Commission',
      value: 488.0,
      icon: <BsShop size={21} />,
      money: true,
    },
    {
      title: 'Left in Wallet',
      value: 356,
      icon: <BsShop size={21} />,
      money: true,
    },
  ]
  const gridList = [
    {
      amount: '£120.00',
      commission: '£120.00',
      'payment-method': 'Paypal',
      date: 'Aug 20, 2021  15:00',
    },
    {
      amount: '£120.00',
      commission: '£120.00',
      'payment-method': 'Paypal',
      date: 'Aug 20, 2021  15:00',
    },
    {
      amount: '£120.00',
      commission: '£120.00',
      'payment-method': 'Paypal',
      date: 'Aug 20, 2021  15:00',
    },
    {
      amount: '£120.00',
      commission: '£120.00',
      'payment-method': 'Paypal',
      date: 'Aug 20, 2021  15:00',
    },
    {
      amount: '£120.00',
      commission: '£120.00',
      'payment-method': 'Paypal',
      date: 'Aug 20, 2021  15:00',
    },
  ]

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        width: 720px;
        max-height: 681px;
        text-align: left;
        font-weight: 600;
        position: relative;
        padding-bottom: 72px;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
        }
        > div {
          width: 100%;
        }
        > div:first-of-type {
          width: 100%;
          padding: 24px;
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <IoClose
        size={24}
        tw="absolute right-6 top-6 cursor-pointer"
        onClick={() => {
          setOpenModal(false)
        }}
      />
      <div>
        <h4>Payment History</h4>
        <div tw="flex flex-row items-center justify-between w-full mb-7 mt-2">
          <div tw="flex flex-row items-center gap-2 p-1 pr-6 bg-transparent border border-[#D2D2D2] rounded">
            <Image src={profilePlaceholder} height="24" width="24" />
            John Smith
          </div>
          <DateFilter />
        </div>
        <div tw="flex flex-row items-center gap-4 justify-between w-full">
          {infoCards.map((card, ind) => (
            <VendorInfoCard2 cardData={card} key={ind} />
          ))}
        </div>
      </div>
      <div
        css={css`
          > div {
            margin-top: 0;
          }
        `}
      >
        <GridView2
          headers={[
            { title: 'Amount', key: 'amount' },
            { title: 'Commission', key: 'commission' },
            { title: 'Payment Method', key: 'payment-method' },
            { title: 'Date', key: 'date' },
          ]}
          list={gridList}
        />
      </div>
    </div>
  )
}
export const MessageSent = ({ setOpenModal }) => {
  const router = useRouter()

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 25px;
        width: clamp(300px, 80vw, 466px);
        text-align: center;
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
          max-width: 278px;
          margin-bottom: 52px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
        }
        @media (max-width: 1140px) {
          padding: 16px 14px;
          h4 {
            font-size: 16px;
            line-height: 24px;
          }
          p {
            color: #767676;
            font-weight: 400;
            margin-bottom: 32px;
          }
          > :first-child {
            right: 14px;
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
          router.push('/vendors/my-requests')
        }}
      />
      <div tw="p-2 bg-white rounded-full text-[#65B02A] border-4 border-[#65B02A] mb-6 mt-10">
        <FiCheck strokeWidth={3} size={33} />
      </div>
      <h4>Message Sent</h4>
      <p>Your message has been sent!</p>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="Back Home"
          onClick={() => {
            setOpenModal(false)
            router.push('/admin/messaging')
          }}
        />
      </div>
    </div>
  )
}
