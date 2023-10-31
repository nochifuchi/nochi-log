type Props = {
  title: string
  src: string
}

const CoverImage = ({ title, src }: Props) => {
  return (
    <figure className="sm:mx-0">
      <img src={src} alt={title} width="45" height="45" />
    </figure>
  )
}

export default CoverImage