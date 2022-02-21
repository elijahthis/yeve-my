import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Services from '../components/services'
import Venues from '../components/venues'
import HostWeddings from '../components/hostWeddings'
import Social from '../components/social'
import Footer from '../components/footer'
import tw, { css } from 'twin.macro'
import { Button, Logo } from './../components'
import { useState } from 'react'

const IndexPage = () => {
  const [page, setPage] = useState(0)
  return (
    <>
      <Hero page={page} />
      <Services />
      <Venues />
      <HostWeddings />
      <Social />
      <Footer />
    </>
  )
}

export default IndexPage
