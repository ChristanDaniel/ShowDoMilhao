import React from 'react'
import type { NextPage } from 'next'
// import Head from 'next/head'
// import dynamic from 'next/dynamic'
// import { useRouter } from 'next/dist/client/router'
import dynamic from 'next/dynamic'


const GameContainer = dynamic(() => import('../src/features/GamePage/GameContainer'), {
  ssr: false
})

const GamePage: NextPage = () => {
  // const router = useRouter()

  return (
    <>
      {/* <Head>
        <title>Pokedex | {router.query.id}</title>
      </Head> */}
      <GameContainer />
    </>
  )
}

export default GamePage
