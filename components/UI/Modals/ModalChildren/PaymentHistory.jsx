import Image from 'next/image'
import { BsShop } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import profilePlaceholder from '../../../../images/profile-placeholder.png'
import { DateFilter } from '../../../formTools'
import { CustomTable } from '../../../pieces/customTable'
import { VendorInfoCard2 } from '../../../UI/Cards'

const PaymentHistory = ({ setOpenModal, vendor }) => {
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
        <CustomTable
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

export default PaymentHistory
