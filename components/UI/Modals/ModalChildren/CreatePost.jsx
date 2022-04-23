import { useState } from 'react'

const CreatePost = ({ setOpenModal }) => {
  const [phase, setPhase] = useState(0)
  const [formData, setFormData] = useState({
    imageURL: '',
    body: '',
    time: '5min',
  })
  switch (phase) {
    case 0:
      return (
        <CreatePostPhase0
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
    case 1:
      return (
        <CreatePostPhase1
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
    case 2:
      return (
        <CreatePostPhase2
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )

    default:
      return (
        <CreatePostPhase0
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
  }
}

export default CreatePost
