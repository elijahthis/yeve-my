import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import { formCoreStyles } from '../../../../styles/GeneralStyles'
import FormLayout from '../../FormTools/FormLayout'
import FormDiv from '../../FormTools/FormDiv'
import InputBlock from '../../FormTools/InputBlock'
import ImageUploadPreview from '../../../pieces/imageUploadPreview'
import Button from '../../Buttons/Button'

const CreateService = ({ setOpenModal, setModalChild, data }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 24px;
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
          margin: 0;
        }
        > * {
          width: 100%;
        }
        form {
          margin-top: 16px;
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <div css={formCoreStyles}>
        <IoClose
          size={24}
          tw="absolute right-6 cursor-pointer"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <h4>Create Service</h4>
        <FormLayout>
          <FormDiv>
            <label>
              Add Image
              <ImageUploadPreview onChangeFunc={() => {}} />
            </label>
            <InputBlock
              variant="text"
              properties={{
                label: 'Service Name',
                placeholder: 'Service Name',
              }}
            />
            <InputBlock
              variant="dropdown"
              data={{ list: ['Freemium', 'Premium', 'Elite'] }}
              properties={{
                label: 'Priviledge',
              }}
            />
            <InputBlock
              variant="dropdown"
              data={{ list: ['None', 'Basic', 'Armed', 'Special Forces'] }}
              properties={{
                label: 'License/Permit',
              }}
            />
          </FormDiv>
        </FormLayout>
        <div tw="w-full mt-10 flex flex-row items-center gap-4">
          <Button
            variant="secondary"
            onClick={() => {
              setOpenModal(false)
            }}
          >
            No
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setOpenModal(false)
            }}
          >
            Yes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateService
