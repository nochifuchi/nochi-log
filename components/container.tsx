type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container max-w-screen-lg lg:mx-auto w-full">{children}</div>
}

export default Container
