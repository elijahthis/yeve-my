import tw, { css } from 'twin.macro'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
import { sectionStyles, formStyles } from '../../../styles/GeneralStyles'
import profilePlaceholder from '../../../images/Ellipse 56.png'
import Modal from '../../../components/UI/Modals/Modal'
import Button from '../../../components/UI/Buttons/Button'
import { SendMessage } from '../../../components/UI/Modals/ModalChildren'
import { DropdownMenu } from '../../../components/formTools'
import ImageUploadPreview from '../../../components/pieces/imageUploadPreview'

const CreateMessageRoot = () => {
  const router = useRouter()
  return (
    <section css={sectionStyles}>
      <h3>Create Message</h3>
      <p tw="my-6">
        <span
          onClick={() => router.push('/admin/messaging')}
          tw="cursor-pointer text-[#767676]"
        >
          Messaging
        </span>{' '}
        / Create Message
      </p>
      <div css={formStyles}>
        <div></div>
        <div>
          <form
            action=""
            onSubmit={ev => {
              ev.preventDefault()
              router.push('/admin/messaging/preview-message')
            }}
          >
            <div tw="mt-6">
              <div>
                <div className="form-div">
                  <label htmlFor="">
                    Recipients
                    <DropdownMenu
                      placeholder="Select"
                      list={['All', 'Suppliers', 'Customers']}
                    />
                  </label>
                  <label htmlFor="">
                    Select Category
                    <DropdownMenu
                      placeholder="Select Category"
                      list={['All', 'Suppliers', 'Customers']}
                    />
                  </label>
                  <label htmlFor="">
                    Select Service
                    <DropdownMenu
                      placeholder="Select Service"
                      list={['All', 'Suppliers', 'Customers']}
                    />
                  </label>
                  <label htmlFor="">
                    Message Title
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Message Title"
                    />
                  </label>
                  <label htmlFor="">
                    Add Image
                    <ImageUploadPreview />
                  </label>
                  <label htmlFor="">
                    Enter Message
                    <textarea
                      name=""
                      id=""
                      placeholder="Enter Message..."
                    ></textarea>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '32px',
              }}
              css={css`
                > * {
                  width: 100%;
                }
              `}
            >
              <Button variant="secondary">Cancel</Button>
              <input type="submit" value="Continue" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

const CreateMessage = () => {
  return (
    <AdminLayout>
      <CreateMessageRoot />
    </AdminLayout>
  )
}

export default CreateMessage
