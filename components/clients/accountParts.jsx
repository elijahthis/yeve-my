import tw, { css } from 'twin.macro'
import { formStyles } from '../../styles/GeneralStyles'
import profilePlaceholder from '../../images/Ellipse 56.png'
import yeveWalletIcon from '../../images/yeve-wallet-icon.png'
import visaIcon from '../../images/visa-icon.png'
import Image from 'next/image'
import { BiChevronRight } from 'react-icons/bi'
import { useState } from 'react'
import { AddPayment, CardDetails, YeveWalletSection } from './paymentParts'

export const ProfileInfo = () => {
  return (
    <div css={formStyles} tw="py-6">
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

export const Payment = ({ setOpenModal, setModalChild }) => {
  const [paymentPart, setPaymentPart] = useState(null)

  switch (paymentPart) {
    case null:
      return (
        <div css={formStyles} tw="py-6">
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
        <YeveWalletSection
          paymentPart={paymentPart}
          setPaymentPart={setPaymentPart}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      )
    default:
      return (
        <div css={formStyles} tw="py-6">
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
