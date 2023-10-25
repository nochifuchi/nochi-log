import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-10 md:gap-y-5 pb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
