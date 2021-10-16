import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

// const Header = dynamic(() => import('../src/components/Header'), {
//   ssr: false
// })

const HomeContainer = dynamic(() => import('../src/features/HomeContainer'), {
  ssr: false
})

const Home: NextPage = () => {
  return (
    <>
      {/* <Header /> */}
      <HomeContainer />
      <h1>Hello world</h1>
    </>
  )
}

export default Home
