import { ServerStyleSheets } from '@material-ui/core'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/img/favicon.ico"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body style={{ backgroundColor: '#f1f1f1' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      <Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </Fragment>,
    ],
  }
}
