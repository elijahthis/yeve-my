import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { ProceedButton } from './pieces/Buttons'
import { IoClose } from 'react-icons/io5'
import { FiCheck } from 'react-icons/fi'
import imgPlaceholder from '../images/card-banner.png'
import profilePlaceholder from '../images/profile-placeholder.png'
import premiumIcon from '../images/premium-icon.png'
import { DropdownMenu } from './formTools'

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

export const ActivateEvent = ({ setOpenModal }) => {
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
      <p>Activate event to confirm vendor arrival to the event venue</p>
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
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export const CompleteEvent = ({ setOpenModal }) => {
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
        Complete event to confirm that the event has been completed. Kindly
        confirm within 48 hours or it will be automatically confirmed in the
        vendor’s favor
      </p>
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
