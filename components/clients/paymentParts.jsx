import tw, { css } from 'twin.macro'
import { useState } from 'react'
import { formStyles } from '../../styles/GeneralStyles'
import bankIcon from '../../images/bank-icon.png'
import stripeIcon from '../../images/stripe-icon.png'
import flutterwaveIcon from '../../images/flutterwave-icon.png'
import YeveWallet from '../UI/YeveWallet'
import { BiChevronRight } from 'react-icons/bi'
import Image from 'next/image'
import { WithdrawEarnings } from '../UI/Modals/ModalChildren'

export const AddPayment = ({ paymentPart, setPaymentPart }) => {
  return (
    <div css={formStyles} tw="py-6">
      <div></div>
      <div>
        <form action="">
          <div>
            <div tw="flex flex-row items-center justify-between">
              <h4>Add Payment</h4>
              <span
                tw="text-sm text-gold cursor-pointer"
                onClick={() => {
                  setPaymentPart(null)
                }}
              >
                Cancel
              </span>
            </div>
            <div className="form-div">
              <label htmlFor="">
                How would you like to receive your money?
                <div tw="flex flex-row items-center justify-between bg-[#fafafa] border border-[#d2d2d2] rounded px-4 py-3 cursor-pointer mb-4 mt-2">
                  <p>Bank Account</p>
                  <div tw="flex flex-row items-center gap-3">
                    <div tw="w-9 h-6">
                      <Image src={bankIcon} />
                    </div>
                    <BiChevronRight size={16} />
                  </div>
                </div>
                <div tw="flex flex-row items-center justify-between bg-[#fafafa] border border-[#d2d2d2] rounded px-4 py-3 cursor-pointer mb-4">
                  <p>Flutterwave</p>
                  <div tw="flex flex-row items-center gap-3">
                    <div tw="w-9 h-6">
                      <Image src={flutterwaveIcon} />
                    </div>
                    <BiChevronRight size={16} />
                  </div>
                </div>
                <div tw="flex flex-row items-center justify-between bg-[#fafafa] border border-[#d2d2d2] rounded px-4 py-3 cursor-pointer mb-4">
                  <p>Connect to stripe</p>
                  <div tw="flex flex-row items-center gap-3">
                    <div tw="w-9 h-6">
                      <Image src={stripeIcon} />
                    </div>
                    <BiChevronRight size={16} />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export const CardDetails = ({ paymentPart, setPaymentPart }) => {
  return (
    <div css={formStyles} tw="py-6">
      <div></div>
      <div>
        <form action="">
          <div>
            <div tw="flex flex-row items-center justify-between">
              <h4>Card details</h4>
              <span
                tw="text-sm text-gold cursor-pointer"
                onClick={() => {
                  setPaymentPart(null)
                }}
              >
                Cancel
              </span>
            </div>
            <div className="form-div">
              <label htmlFor="">
                Card number
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="1111 2222 3333 4444"
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
                  Expiry Date
                  <input type="text" name="" id="" placeholder="MM/YY" />
                </label>
                <label htmlFor="">
                  CVV
                  <input type="text" name="" id="" placeholder="123" />
                </label>
              </div>
              <div
                tw=" flex flex-row items-center gap-4"
                css={css`
                  > * {
                    width: 100%;
                  }
                `}
              >
                <label htmlFor="">
                  Country
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Select Country"
                  />
                </label>
                <label htmlFor="">
                  Postcode
                  <input type="text" name="" id="" placeholder="Postcode" />
                </label>
              </div>
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

export const YeveWalletSection = ({
  paymentPart,
  setPaymentPart,
  setOpenModal,
  setModalChild,
}) => {
  return (
    <>
      <div css={formStyles} tw="py-6">
        <div></div>
        <div>
          <form action="">
            <div>
              <div tw="flex flex-row items-center justify-between">
                <h4>Yeve Wallet</h4>
                <span
                  tw="text-sm text-gold cursor-pointer"
                  onClick={() => {
                    setModalChild(
                      <WithdrawEarnings setOpenModal={setOpenModal} />,
                    )
                    setOpenModal(true)
                  }}
                >
                  Withdraw funds
                </span>
              </div>
              <div className="form-div">
                <label
                  htmlFor=""
                  css={css`
                    height: 112px;
                  `}
                >
                  <YeveWallet />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
