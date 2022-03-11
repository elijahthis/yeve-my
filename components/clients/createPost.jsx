import { createPortal } from 'react-dom'

const CreatePost = () => {
  return createPortal(
    <div>
      <div>
        <h4>Create Post</h4>
        <p>Upload photos or videos</p>
        <div>
          <p>Drag and drop file</p>
          <p>or</p>
          <p>Browe</p>
        </div>
        <p>Upload</p>
      </div>
    </div>,
    document.getElementById('myportal'),
  )
}

export default CreatePost
