import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
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
import { CrudOptions } from '../../../../components/UI/CRUDTools'
import { SendMessage } from '../../../../components/UI/Modals/ModalChildren'
import { DropdownMenu } from '../../../../components/formTools'
import { CreateServiceModal } from '../../../../components/UI/Modals/ModalChildren'

const CreateServiceRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const router = useRouter()

  const [formData, setFormData] = useState({ name: '' })
  const services = [
    { name: 'Bass Guitarist', image: '/images/Rectangle 269.png' },
    { name: 'Keyboardist', image: '/images/Rectangle 269.png' },
  ]

  return (
    <section css={sectionStyles}>
      <h3>Create Service</h3>
      <BreadCrumb
        pages={[
          {
            name: 'Services',
            onClick: () => {
              router.push('/admin/dashboard/events')
            },
          },
          { name: 'Create Service', last: true },
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
                  label: 'Service Name',
                  placeholder: 'Service Name',
                }}
                value={formData.name}
                onChange={ev => {
                  const newData = { ...formData }
                  newData.name = ev.target.value
                  setFormData(newData)
                }}
              />
              <div tw="flex flex-row items-center gap-3">
                <InputBlock
                  variant="dropdown"
                  properties={{
                    label: 'Priviledge',
                  }}
                  data={{ list: ['Fremium', 'Premium', 'Elite'] }}
                  onChange={ev => {
                    const newData = { ...formData }
                    newData.name = ev.target.value
                    setFormData(newData)
                  }}
                />
                <InputBlock
                  variant="dropdown"
                  properties={{
                    label: 'License/Permit',
                  }}
                  data={{ list: ['None', 'Mid', 'Elite'] }}
                  onChange={ev => {
                    const newData = { ...formData }
                    newData.name = ev.target.value
                    setFormData(newData)
                  }}
                />
              </div>
              <div>
                <div tw="flex flex-row items-center justify-between">
                  <h4>Sub-Services</h4>
                  <span
                    tw="text-gold text-sm cursor-pointer"
                    onClick={() => {
                      setModalChild(<CreateServiceModal />)
                      setOpenModal(true)
                      console.log('done')
                    }}
                  >
                    Create new sub-service
                  </span>
                </div>
                <div>
                  {services.map(service => (
                    <div tw="flex flex-row items-center justify-between py-3 border-b border-[#E5E5E5]">
                      <div tw="flex flex-row items-center gap-6">
                        <div
                          css={css`
                            position: relative;
                            width: 58px;
                            height: 35px;
                            border-radius: 4px;
                            overflow: hidden;
                          `}
                        >
                          <Image src={service.image} layout="fill" />
                        </div>
                        <p>{service.name}</p>
                      </div>
                      <CrudOptions />
                    </div>
                  ))}
                </div>
                <FormDiv></FormDiv>
              </div>
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

const CreateService = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <CreateServiceRoot
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalChild={modalChild}
        setModalChild={setModalChild}
      />
      {mounted ? (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          {modalChild}
        </Modal>
      ) : null}
    </>
  )
}

CreateService.getLayout = page => <AdminLayout>{page}</AdminLayout>

export default CreateService
