import Head from 'next/head'
import Watermark from '../components/Watermark'
import Navbar from '../components/Navbar'

export default function App() {
  return (
    <>
      <Head>
        <title>Template</title>
        <link rel="icon" href="/BASS64x64Hvid.ico" />
      </Head>
      <div className='w-screen h-screen bg-forsideBg2 mainBG bg-cover'>

      </div>
      <Navbar />
      <Watermark />
    </>
  )
}