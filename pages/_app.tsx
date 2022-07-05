import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import '../styles/root.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <div className="container max-w-screen-lg mx-auto">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  ) 
}

export default MyApp
