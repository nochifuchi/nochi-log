import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex items-center h-20 mb-1 md:mb-5 mx-2 max-w-screen-lg lg:mx-auto max-w-screen-lg lg:mx-auto">
      {router.pathname === '/' ? (
        <h1>
          <Link href="/">
            <img src="/assets/common/logo.svg" width="179" height="48" alt="NOCHI LOG" />
          </Link>
        </h1>
      ) : (
        <div>
          <Link href="/">
            <img src="/assets/common/logo.svg" width="179" height="48" alt="NOCHI LOG" />
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
