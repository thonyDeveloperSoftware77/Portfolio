import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThreeScene from '../components/ThreeScene'
import ThreeScene2 from '../components/ThreeScene2';
import { useEffect, useState } from 'react';
export default function Home() {


  const [opciones, setopciones] = useState(0);
  const [isLoading, setIsLoading] = useState(false)

  function handleClickOpciones(newOption) {
    if (newOption != opciones) {
      setIsLoading(!isLoading);
      setTimeout(() => {
        setopciones(newOption);
      }, 2000);
    }
  }

  useEffect(() => {
    setIsLoading(!isLoading);
  }, [opciones])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`overlay ${!isLoading ? 'overlay-hidden' : ''}`}>
        <nav style={{ position: "fixed", zIndex: "1" }}>
          <h1 >
            Welcome to my portfolio
          </h1>
        </nav>

        <div style={{ position: "fixed" }} >
          {opciones === 0 ? (
            <div>
              <ThreeScene />
            </div>
          ) : opciones === 1 ? (
            <div>
              <ThreeScene2 />
            </div>
          ) : (
            <p>No option selected</p>
          )}
          <ThreeScene />
        </div>
        <div className={` ${opciones !==0 ? 'boxOptionesUp': 'boxOptions'}`}>
        <a onClick={() => { handleClickOpciones(0) }}>Inicio</a>
        <a onClick={() => { handleClickOpciones(1) }}>Proyectos</a>
        <a onClick={() => { handleClickOpciones(2) }}>Skills</a>
        <a onClick={() => { handleClickOpciones(3) }}>About Me</a>
        <a onClick={() => { handleClickOpciones(4) }}>Blog</a>
        <a onClick={() => { handleClickOpciones(5) }}>Contacto</a>

      </div>

      </div>
     


      <main className={styles.main}>



      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
