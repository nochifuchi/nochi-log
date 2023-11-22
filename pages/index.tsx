import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION } from '../lib/constants'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`${SITE_NAME} | ${SITE_DESCRIPTION}`}</title>
          <meta property="og:title" content={`${SITE_NAME} | ${SITE_DESCRIPTION}`} />
        </Head>
        <Container>
          <MoreStories posts={allPosts} />
          <Sidebar />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
  ])

  return {
    props: { allPosts },
  }
}
