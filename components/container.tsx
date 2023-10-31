type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container px-2 lg:px-0 flex flex-col md:flex-row max-w-screen-lg lg:mx-auto">{children}</div>
}

export default Container
