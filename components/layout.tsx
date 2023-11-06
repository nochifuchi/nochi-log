import Header from '../components/header'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="font-body text-primary">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
