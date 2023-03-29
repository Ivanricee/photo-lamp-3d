import Head from 'next/head'
import { Header } from './Header'

interface Props {
  children: React.ReactNode
  title: string
  header: boolean
}

export function Layout({ children, title, header }: Props) {
  const item = header ? 'items-start' : 'items-center'
  return (
    <div className="flex flex-col min-h-screen max-h-full w-screen min-w-[361px] bg-gradient-body bg-no-repeat">
      <Head>
        <title>Photo Lamp 3D - {title}</title>
        <meta name="description" content="3D lamp generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {header && <Header />}
      <main className={`flex flex-1 justify-center ${item}`}>{children}</main>
    </div>
  )
}
