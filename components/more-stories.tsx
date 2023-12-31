import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="flex-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-5 pb-14 md:pb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            // date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
