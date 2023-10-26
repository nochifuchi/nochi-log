type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container flex flex-1 flex-col md:flex-row max-w-screen-lg lg:mx-auto w-full">{children}</div>
}

export default Container
