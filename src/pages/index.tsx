import Head from 'next/head'
import { Inter } from 'next/font/google'
import App from './App';

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
      <Head>
        <title>Aquon McDyess</title>
        <meta name="description" content="Aquon McDyess portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
          <App />
      </main>
    </>
  )
}