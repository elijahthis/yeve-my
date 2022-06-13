import tw, { css } from 'twin.macro'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AdminLayout from '../../../../layouts/adminLayout'
import { sectionStyles, formStyles } from '../../../../styles/GeneralStyles'
import { FormSectionLayout } from '../../../../components/Layout/MainSections'
import FormLayout from '../../../../components/UI/FormTools/FormLayout'
import FormDiv from '../../../../components/UI/FormTools/FormDiv'
import InputBlock from '../../../../components/UI/FormTools/InputBlock'
import ImageUploadPreview from '../../../../components/pieces/imageUploadPreview'
import profilePlaceholder from '../../../../images/Ellipse 56.png'
import Modal from '../../../../components/UI/Modals/Modal'
import Button from '../../../../components/UI/Buttons/Button'
import BreadCrumb from '../../../../components/UI/BreadCrumb'
import { SendMessage } from '../../../../components/UI/Modals/ModalChildren'
import { DropdownMenu } from '../../../../components/formTools'

const CreateDresscodeRoot = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({ name: '' })

  return (
    <section css={sectionStyles}>
      <h3>Create Dresscode</h3>
      <BreadCrumb
        pages={[
          {
            name: 'Dresscodes',
            onClick: () => {
              router.push('/admin/dashboard/dresscodes')
            },
          },
          { name: 'Create Dresscode', last: true },
        ]}
      />
      <FormSectionLayout back={false}>
        <FormLayout>
          <div>
            <FormDiv>
              <label>
                Add Image
                <ImageUploadPreview limit={1} onChangeFunc={() => {}} />
              </label>
              <InputBlock
                variant="text"
                properties={{
                  label: 'Dresscode Name',
                  placeholder: 'Dresscode Name',
                }}
                value={formData.name}
                onChange={ev => {
                  const newData = { ...formData }
                  newData.name = ev.target.value
                  setFormData(newData)
                }}
              />
              <div tw="flex flex-row items-center gap-8">
                <Button variant="secondary">Cancel</Button>
                <input type="submit" value="Next" />
              </div>
            </FormDiv>
          </div>
        </FormLayout>
      </FormSectionLayout>
    </section>
  )
}

const CreateDresscode = () => {
  return <CreateDresscodeRoot />
}

CreateDresscode.getLayout = page => <AdminLayout>{page}</AdminLayout>

export default CreateDresscode
