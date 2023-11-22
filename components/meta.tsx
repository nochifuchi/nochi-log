import Head from 'next/head'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/favicon.svg"
        color="#55B0F2"
      />
      <link rel="shortcut icon" href="/favicon/favicon.svg" type="image/svg+xml" />
      <meta name="theme-color" content="#55B0F2" />
      <meta name="description" content={`${SITE_NAME} | ${SITE_DESCRIPTION}`} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@azunochi" />
    </Head>
  )
}

export default Meta
