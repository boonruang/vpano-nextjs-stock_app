import React from 'react'
import App from 'next/app'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { wrapper } from '../redux'
import { setInterceptor } from '../utils/httpClient'
import { useDispatch } from 'react-redux'
import { createTheme, ThemeProvider } from '@material-ui/core'

type Props = {}

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#135ab8',
      },
      secondary: {
        main: '#e85f5f',
      },
    },
  })

  setInterceptor(useDispatch())
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

// MyApp.getInitialProps = async (appContext) => {
//   // call page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext)

//   return { ...appProps }
// }

// export default wrapper.withRedux(MyApp)
