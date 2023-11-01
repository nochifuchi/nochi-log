import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  slug,
}: Props) => {
  return (
    <div>
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        className="block flex flex-row items-start bg-primary-dark-grey rounded-lg h-full p-4"
      >
        <CoverImage title={title} src={coverImage} />
        <div className="flex-1 ml-3">
          <h3 className="text-base leading-6 line-clamp-3">{title}</h3>
          {/* <div className="text-lg mb-4">
            <DateFormatter dateString={date} />
          </div> */}
        </div>
      </Link>
    </div>
  )
}

export default PostPreview
