import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center h-20 mb-5 mx-2 max-w-screen-lg lg:mx-auto max-w-screen-lg lg:mx-auto w-full">
      <h1>
        <Link href="/">
          <img src="/assets/common/logo.svg" alt="NOCHI LOG" />
        </Link>
      </h1>
    </header>
  )
}

export default Header
