import tw, { css } from 'twin.macro'
import Image from 'next/image'
import {
  PendingRequests,
  ActiveBookings,
  PastBookings,
  RecurringBookings,
} from '../../../components/vendors/requestParts'
import { useRouter } from 'next/router'
import VendorsLayout from '../../../layouts/vendorsLayout'
import { SearchBar, DropdownMenu } from '../../../components/formTools'
import { BsSortDownAlt, BsSortUp, BsListTask, BsGridFill } from 'react-icons/bs'
import { sectionStyles } from '../../../styles/GeneralStyles'
import { BackButton } from '../../../components/pieces/Buttons'
import keyboardistBadge from '../../../images/Rectangle 444.png'
import { ViewGig, PreviewQuoteCard } from '../../../components/pieces/cards'

export const PreviewQuote = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const router = useRouter()

  return (
    <>
      <section css={sectionStyles} style={{ backgroundColor: '#ffffff' }}>
        <div
          tw="flex flex-row items-center"
          css={css`
            margin-bottom: 16px;
            @media (max-width: 1140px) {
              margin-bottom: 10px;
            }
          `}
        >
          <BackButton
            onClick={() => {
              router.push('/vendors/my-requests/generate-quoteA')
            }}
          />
          <h3
            css={css`
              margin-left: 40px;
              @media (max-width: 1140px) {
                margin-left: 16px;
              }
            `}
          >
            Preview Quote
          </h3>
        </div>
        <div
          css={css`
            > * {
              margin: 0 auto;
            }
          `}
        >
          <PreviewQuoteCard
            setOpenModal={setOpenModal}
            setModalChild={setModalChild}
          />
        </div>
      </section>
    </>
  )
}

const hhh = () => {
  return (
    <VendorsLayout>
      <PreviewQuote />
    </VendorsLayout>
  )
}

export default hhh
