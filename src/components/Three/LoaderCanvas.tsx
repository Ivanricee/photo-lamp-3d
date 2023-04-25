interface Props {
  caption: string
}
export function LoaderCanvas({ caption }: Props) {
  return (
    <div className="flex justify-center items-center h-full text-green-100">
      <h2>{caption}</h2>
    </div>
  )
}
