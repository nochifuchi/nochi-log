import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-2xl md:text-2xl font-bold mt-5 mb-8 md:mb-12">
      {children}
    </h1>
  )
}

export default PostTitle
