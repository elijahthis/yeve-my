import tw, { css } from 'twin.macro'
import profilePlaceholder from '../../images/Ellipse 56.png'
import yeveWalletIcon from '../../images/yeve-wallet-icon.png'
import visaIcon from '../../images/visa-icon.png'
import Image from 'next/image'
import { BiChevronRight } from 'react-icons/bi'
import { useState } from 'react'
import { AddPayment, CardDetails, YeveWalletSection } from './paymentParts'

export const ProfileInfo = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 316px 1fr;
        padding: 24px 0;
        > :nth-child(2) > form > * {
          width: 471px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          font-size: 12px;
          font-weight: 600;
        }
        h4 {
          margin: 16px 0;
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
        .date-drop {
          top: 0;
        }
        input[type='submit'] {
          background-color: #de8e0e;
          color: #ffffff;
          border: 1px solid #de8e0e;
          margin: 16px 0;
          :hover {
            cursor: pointer;
            background-color: transparent;
            color: #de8e0e;
          }
        }
        @media (max-width: 1140px) {
          display: block;
          > :nth-child(2) > form > * {
            width: clamp(300px, 100%, 471px);
          }
        }
      `}
    >
      <div></div>
      <div>
        <form
          action=""
          onSubmit={ev => {
            ev.preventDefault()
          }}
        >
          <div>
            <h4>Profile Info</h4>
            <div className="form-div">
              <label htmlFor="">
                Profile Image
                <div tw="flex flex-row items-center gap-4">
                  <div
                    css={css`
                      width: 100px;
                      height: 100px;
                    `}
                  >
                    <Image src={profilePlaceholder} />
                  </div>
                  <p tw="text-sm text-gold cursor-pointer">Change Image</p>
                </div>
              </label>
              <label htmlFor="">
                Username
                <input type="text" name="" id="" placeholder="Username" />
              </label>
              <label htmlFor="">
                First Name
                <input type="text" name="" id="" placeholder="First name" />
              </label>
              <label htmlFor="">
                Last Name
                <input type="text" name="" id="" placeholder="Last name" />
              </label>
              <label htmlFor="">
                Email
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Johndoe@gmail.com"
                />
              </label>
              <div
                tw=" flex flex-row items-center gap-4"
                css={css`
                  > * {
                    width: 100%;
                  }
                `}
              >
                <label htmlFor="">
                  Mobile number
                  <input type="tel" name="" id="" placeholder="Mobile number" />
                </label>
                <label htmlFor="">
                  Phone number
                  <input type="tel" name="" id="" placeholder="Phone number" />
                </label>
              </div>
            </div>
          </div>
          <div>
            <h4>Password</h4>
            <div className="form-div">
              <label htmlFor="">
                Current password
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="************"
                />
              </label>
              <label htmlFor="">
                New password
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="************"
                />
              </label>
              <label htmlFor="">
                Confirm password
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="************"
                />
              </label>
            </div>
          </div>
          <div>
            <input type="submit" value="Continue" />
          </div>
        </form>
      </div>
    </div>
  )
}

export const Payment = () => {
  const [paymentPart, setPaymentPart] = useState(null)

  switch (paymentPart) {
    case null:
      return (
        <div
          css={css`
            display: grid;
            grid-template-columns: 316px 1fr;
            padding: 24px 0;
            > :nth-child(2) > form > * {
              width: 471px;
              margin-bottom: 24px;
              display: flex;
              flex-direction: column;
              font-size: 12px;
              font-weight: 600;
            }
            h4 {
              margin: 16px 0;
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
            .date-drop {
              top: 0;
            }
            input[type='submit'] {
              background-color: #de8e0e;
              color: #ffffff;
              border: 1px solid #de8e0e;
              margin: 16px 0;
              :hover {
                cursor: pointer;
                background-color: transparent;
                color: #de8e0e;
              }
            }
            @media (max-width: 1140px) {
              display: block;
              > :nth-child(2) > form > * {
                width: clamp(300px, 100%, 471px);
              }
            }
          `}
        >
          <div></div>
          <div>
            <form action="">
              <div>
                <div tw="flex flex-row items-center justify-between">
                  <h4>Payment details</h4>
                  <span
                    tw="text-sm text-gold cursor-pointer"
                    onClick={() => {
                      setPaymentPart(0)
                    }}
                  >
                    Add+
                  </span>
                </div>
                <div className="form-div">
                  <label htmlFor="">
                    Credit Card
                    <div
                      tw="flex flex-row items-center justify-between bg-[#fafafa] border border-[#d2d2d2] rounded px-4 py-3 cursor-pointer"
                      onClick={() => {
                        setPaymentPart(1)
                      }}
                    >
                      <div tw="flex flex-row items-center gap-3">
                        <div tw="w-9 h-6">
                          <Image src={visaIcon} />
                        </div>
                        <p>**** 2475</p>
                      </div>
                      <BiChevronRight size={16} />
                    </div>
                  </label>
                  <label htmlFor="">
                    Yeve Wallet
                    <div
                      tw="flex flex-row items-center justify-between bg-[#fafafa] border border-[#d2d2d2] rounded px-4 py-3 cursor-pointer"
                      onClick={() => {
                        setPaymentPart(2)
                      }}
                    >
                      <div tw="flex flex-row items-center gap-3">
                        <div tw="w-9 h-6">
                          <Image src={yeveWalletIcon} />
                        </div>
                        <p>£290.00</p>
                      </div>
                      <BiChevronRight size={16} />
                    </div>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
      break

    case 0:
      return (
        <AddPayment paymentPart={paymentPart} setPaymentPart={setPaymentPart} />
      )
    case 1:
      return (
        <CardDetails
          paymentPart={paymentPart}
          setPaymentPart={setPaymentPart}
        />
      )
    case 2:
      return (
        <YeveWalletSection paymentPart={paymentPart} setPaymentPart={setPaymentPart} />
      )
    default:
      return (
        <div
          css={css`
            display: grid;
            grid-template-columns: 316px 1fr;
            padding: 24px 0;
            > :nth-child(2) > form > * {
              width: 471px;
              margin-bottom: 24px;
              display: flex;
              flex-direction: column;
              font-size: 12px;
              font-weight: 600;
            }
            h4 {
              margin: 16px 0;
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
            .date-drop {
              top: 0;
            }
            input[type='submit'] {
              background-color: #de8e0e;
              color: #ffffff;
              border: 1px solid #de8e0e;
              margin: 16px 0;
              :hover {
                cursor: pointer;
                background-color: transparent;
                color: #de8e0e;
              }
            }
            @media (max-width: 1140px) {
              display: block;
              > :nth-child(2) > form > * {
                width: clamp(300px, 100%, 471px);
              }
            }
          `}
        >
          <div></div>
          <div>
            <form action="">
              <div>
                <div tw="flex flex-row items-center justify-between">
                  <h4>Payment details</h4>
                  <span tw="text-sm text-gold">Add+</span>
                </div>
                <div className="form-div">
                  <label htmlFor="">
                    Credit Card
                    <div tw="flex flex-row items-center justify-between bg-[#fafafa] border border-[#d2d2d2] rounded px-4 py-3 cursor-pointer">
                      <div tw="flex flex-row items-center gap-3">
                        <div tw="w-9 h-6">
                          <Image src={visaIcon} />
                        </div>
                        <p>**** 2475</p>
                      </div>
                      <BiChevronRight size={16} />
                    </div>
                  </label>
                  <label htmlFor="">
                    Yeve Wallet
                    <div tw="flex flex-row items-center justify-between bg-[#fafafa] border border-[#d2d2d2] rounded px-4 py-3 cursor-pointer">
                      <div tw="flex flex-row items-center gap-3">
                        <div tw="w-9 h-6">
                          <Image src={yeveWalletIcon} />
                        </div>
                        <p>£290.00</p>
                      </div>
                      <BiChevronRight size={16} />
                    </div>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
      break
  }
}
