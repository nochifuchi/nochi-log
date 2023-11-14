import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <figure className="flex h-60 items-center justify-center rounded-lg border-2 border-primary-gray">
        <img src={coverImage} alt={title} width="96" height="96" />
      </figure>
      <PostTitle>{title}</PostTitle>
      {/* <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div> */}
    </>
  )
}

export default PostHeader
