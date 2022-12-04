import Head from 'next/head'
import Watermark from '../components/Watermark'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

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
      <div className='w-screen h-screen bg-forsideBg2 mainBG bg-cover bg-center flex justify-center items-center'>
          <div>
            <h1 className='text-dark text-4xl text-center font-semibold'>DJ TIL DIN NÆSTE FEST!</h1>
            <div className='flex justify-center items-center flex-col sm:flex-row'>
                <button className={styles.mainButtons}>KØB TØJ</button>  
                <button className={styles.mainButtons}>BOOK</button>
            </div>
          </div>  
      </div>
      <Navbar />
      <Watermark />
    </>
  )
}