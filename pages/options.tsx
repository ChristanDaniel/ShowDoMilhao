import React from 'react'
import type { NextPage } from 'next'
// import Head from 'next/head'
// import dynamic from 'next/dynamic'
// import { useRouter } from 'next/dist/client/router'
import dynamic from 'next/dynamic'


const OptionsContainer = dynamic(() => import('../src/features/OptionsPage/OptionsContainer'), {
  ssr: false
})

const OptionsPage: NextPage = () => {
  // const router = useRouter()

  return (
    <>
      {/* <Head>
        <title>Pokedex | {router.query.id}</title>
      </Head> */}
      <OptionsContainer />
    </>
  )
}

export default OptionsPage
