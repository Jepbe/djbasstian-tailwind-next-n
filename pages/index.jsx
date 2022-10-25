import Head from 'next/head'
import Watermark from '../components/Watermark'
import Navbar from '../components/Navbar'

export default function App() {
  return (
    <>
      <Head>
        <title>Template</title>
        <meta 
          property='og:image'
          content='https://djbasstian-tailwind-next-n.vercel.app/api/og'
        />
        <link rel="icon" href="/BASS64x64Hvid.ico" />
      </Head>
      <div className='w-screen h-screen bg-forsideBg2 mainBG bg-cover'>

      </div>
      <Navbar />
      <Watermark />
    </>
  )
}