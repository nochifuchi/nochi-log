import Link from 'next/link'

const Sidebar = () => {
  return (
    <section className="ml-0 md:ml-8 mb-7 md:md-0 shrink-0 md:w-64">
      <div className="h-full w-full">
        <section className="border-b-2 border-primary-dark-grey pb-4 md:pb-7">
          <div className="flex flex-row items-center">
            <figure>
              <img className="rounded-full border-2 border-primary-dark-grey" src="/assets/profile.jpg" width="90" height="90" alt="Profile Picture" />
            </figure>
            <p className="ml-4">nochio</p>
          </div>
          <p className="mt-4 text-sm">東京都在住のマークアップエンジニア。マークアップに関する備忘録やWEB解析に関する記事を中心に載せていきます。</p>
        </section>
        <ul className="mt-3">
          <li>
            <Link href="https://qiita.com/nochifuchi" target="_blank" className="text-xl flex flex-row md:justify-end items-center">
              <span>Qiita</span>
              <span className="ml-1 material-symbols-outlined">open_in_new</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Sidebar
