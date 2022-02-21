import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Services from '../components/services'
import tw, { css } from 'twin.macro'
import { Button, Logo } from './../components'
import { useState } from 'react'

const IndexPage = () => {
  const [page, setPage] = useState(0)
  return (
    <>
      <Hero page={page} />
      <Services />
    </>
  )
}

export default IndexPage
