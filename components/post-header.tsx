import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
  tags: string[]
}

const PostHeader = ({ title, coverImage, date, tags }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <ul className="flex gap-x-2 mb-12">
        {
          tags.map((tag) => <li className="font-bold" key={tag}><a href={`/tags/${tag}`}>{tag}</a></li>)
        }
      </ul>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
