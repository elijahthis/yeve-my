import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import profilePlaceholder from '../../../images/Ellipse 56.png'
import AdminLayout from '../../../layouts/adminLayout'
import Modal from '../../../components/UI/Modals/Modal'
import Button from '../../../components/UI/Buttons/Button'
import { DropdownMenu } from '../../../components/formTools'
import {
  sectionStyles,
  formStyles,
  formCoreStyles,
} from '../../../styles/GeneralStyles'

const CreateSupplierRoot = () => {
  const router = useRouter()
  return (
    <section css={sectionStyles}>
      <h3>Create Supplier</h3>
      <p tw="my-6">
        <span
          onClick={() => router.push('/admin/suppliers')}
          tw="cursor-pointer text-[#767676]"
        >
          Suppliers
        </span>{' '}
        / Create Supplier
      </p>
      <div css={formCoreStyles}>
        <div
          css={css`
            padding-right: 120px;
            padding-left: 88px;
          `}
        >
          <div>
            <form
              action=""
              onSubmit={ev => {
                ev.preventDefault()
              }}
            >
              <div tw="mt-6">
                <h4>Supplier Profile</h4>
                <div className="form-div">
                  <div className="double">
                    <label htmlFor="">
                      First Name
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="First name"
                      />
                    </label>
                    <label htmlFor="">
                      Last Name
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Last name"
                      />
                    </label>
                  </div>
                  <div className="double">
                    <label htmlFor="">
                      Phone number
                      <input
                        type="tel"
                        name=""
                        id=""
                        placeholder="Enter phone number"
                      />
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
                  </div>
                  <div className="double">
                    <label htmlFor="">
                      Password
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Enter password"
                      />
                    </label>
                    <label
                      htmlFor=""
                      css={css`
                        max-width: calc(50% - 12px);
                      `}
                    >
                      Profile Image
                      <input type="file" accept="image/*" name="" id="" />
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <h4>Supplier Address</h4>
                <div className="form-div">
                  <div className="double">
                    <label htmlFor="">
                      Enter Address Line 1<textarea name="" id=""></textarea>
                    </label>
                    <label htmlFor="">
                      Enter Address Line 2<textarea name="" id=""></textarea>
                    </label>
                  </div>
                  <div className="double">
                    <label htmlFor="">
                      Enter City
                      <input type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                      Country
                      <DropdownMenu
                        list={['Nigeria', 'Ghana']}
                        placeholder="Select Country"
                      />
                    </label>
                  </div>
                  <div className="double">
                    <label htmlFor="">
                      Postcode
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter postcode"
                      />
                    </label>
                    <div></div>
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
                <input type="submit" value="Create" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const CreateSupplier = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <AdminLayout>
      <CreateSupplierRoot
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
    </AdminLayout>
  )
}

export default CreateSupplier
