interface Props {
  title: string
}
export function Header({ title }: Props) {
  return (
    <header>
      <section>
        <h1 className="text-3xl font-bold underline">{title}</h1>
      </section>
      <section>
        <p>three js / images sections</p>
      </section>
    </header>
  )
}
