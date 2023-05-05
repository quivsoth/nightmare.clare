import { Html, Head, Main, NextScript } from 'next/document'
import * as Font from './_constants'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="stylesheet" href="/public/fonts/stylesheets.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}