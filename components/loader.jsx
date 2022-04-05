import tw, { css } from 'twin.macro'
import { useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { loaderAnimation, loaderStyles } from '../styles/GeneralStyles'

const Loader = ({ loading }) => {
  return (
    <div css={loaderStyles}>
      <div>
        <p>Loading...</p>
        <div>
          <AiOutlineLoading size={200} />
        </div>
      </div>
    </div>
  )
}

export default Loader
