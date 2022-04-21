import React from 'react'
import Navbar from '../components/UI/NavBars/Navbar'
import Hero from '../components/landingSections/hero'
import Services from '../components/landingSections/services'
import Venues from '../components/landingSections/venues'
import HostWeddings from '../components/landingSections/hostWeddings'
import Social from '../components/landingSections/social'
import Footer from '../components/landingSections/footer'
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
