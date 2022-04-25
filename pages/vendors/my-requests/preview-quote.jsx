import tw, { css } from 'twin.macro'

import { useRouter } from 'next/router'
import VendorsLayout from '../../../layouts/vendorsLayout'
import { sectionStyles } from '../../../styles/GeneralStyles'
import BackButton from '../../../components/UI/Buttons/BackButton'
import { ViewGig, PreviewQuoteCard } from '../../../components/UI/Cards'

export const PreviewQuoteContent = ({
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

const PreviewQuote = () => {
  return (
    <VendorsLayout>
      <PreviewQuoteContent />
    </VendorsLayout>
  )
}

export default PreviewQuote
