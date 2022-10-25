import Head from 'next/head' 
import Link from 'next/link'

export default function App() {
    return (
        <>
            <Head>
                <title>Template</title>
                <link rel="icon" href="/BASS64x64Hvid.ico" />
            </Head>
        
        <div className='w-screen h-screen flex justify-center align-center flex-col text-center'>
            <h1>Error 404 - Page not found...</h1>
            <h2 className='underline underline-offset-1'><Link href="/">Go home!</Link></h2>
        </div>
        </>
    )
}