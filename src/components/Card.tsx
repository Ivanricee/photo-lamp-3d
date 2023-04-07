interface Props {
  children: React.ReactNode
  title: string
}
export function Card({ children, title }: Props) {
  return (
    <section
      className="w-full flex flex-col bg-gradient-card-2 rounded-3xl drop-shadow-dark-4xl m-8 p-8 text-center
    xs:m-4 sm:text-left sm:max-w-7xl"
      aria-label={title}
    >
      <h2 className="w-full text-green-200 text-center text-xl">{title}</h2>
      {children}
    </section>
  )
}
