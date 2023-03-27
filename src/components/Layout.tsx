import Head from 'next/head'
import { Header } from './Header'

interface Props {
  children: React.ReactNode
  title: string
}

export function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="3D lamp generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  )
}
