import React from 'react'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import store from '../src/redux/store'

import '../styles/Global'
import { GlobalStyle } from '../styles/Global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
