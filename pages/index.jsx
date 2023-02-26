import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThreeScene from '../components/ThreeScene'
import ThreeScene2 from '../components/ThreeScene2';
import SectionProjects from '../components/SectionProjects';
import SectionSkills from '../components/SectionSkills';
import SectionContact from '../components/SectionContact';
import SectionAboutMe from '../components/SectionAbout';
import SectionBlog from '../components/SectionBlog';

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Lightformer, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import Objeto3D from "../components/Objeto3D.jsx";

import BackgroundGalaxy from "../components/BackgroundGalaxy.jsx";
import { useEffect, useState } from 'react';
export default function Home() {


  const [opciones, setopciones] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const [opcionAnimacion, setOpcionAnimacion] = useState(0)

  function handleClickOpciones(newOption) {

    if (newOption != opciones) {
      setIsLoading(!isLoading);
      setTimeout(() => {
        setopciones(newOption);
      }, 2000);
    }
  }

  function hadleClickOpcionesAnimacion() {
    if (opcionAnimacion === 0) {
      setOpcionAnimacion(1)
    } else if (opcionAnimacion === 1) {
      setOpcionAnimacion(2)
    }
    else if (opcionAnimacion === 2) {
      setOpcionAnimacion(3)
    } else {
      setOpcionAnimacion(0)
    }
  }

  useEffect(() => {
    setIsLoading(!isLoading);

  }, [opciones])

  return (
    <>
      <Head>
        <title>Portafolio Thony Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`overlay ${!isLoading ? 'overlay-hidden' : ''}`}>
        <nav style={{ position: "fixed", zIndex: "1" }}>
         
        </nav>


        <div style={{ position: "fixed", width: "100%" }} >
          {opciones === 0 ? (
            <>
              <div style={{ width: "100%", height: "100vh" }}>
                <Canvas onClick={(e) => hadleClickOpcionesAnimacion(e)}>
                  <Suspense fallback={null}>
                    <color attach="background" args={['#15151a']} />
                    <Objeto3D animation={opcionAnimacion} />
                    <BackgroundGalaxy />

                    <hemisphereLight intensity={0.3} color={"#0000FF"} />

                    <Environment resolution={512}>
                      {/* Ceiling */}
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
                      {/* Sides */}
                      <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                      <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
                      {/* Key */}
                      <Lightformer form="ring" color="blue" intensity={15} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
                    </Environment>
                    <OrbitControls />
                  </Suspense>
                </Canvas>
              </div>
              <div>
                <div className='titleSection'>
                  THONY DEVELOPER
                </div>
                <div className='subtitleSection'>
                  Desarrollador de sitios y aplicaciones web, ingeniero de software y apasionado por la tecnología.
                </div>
              </div>
            </>
          ) : opciones === 1 ? (
            <div>
              <ThreeScene2 componente={SectionProjects} />
            </div>
          ) : opciones === 2 ? (
            <div>
              <ThreeScene2 componente={SectionSkills} />
            </div>
          ) : opciones === 3 ? (
            <div>
              <ThreeScene2 componente={SectionAboutMe} />
            </div>
          ) : opciones === 5 ? (
            <div>
              <ThreeScene2 componente={SectionContact} />
            </div>
          ) : (
            <p>No option selected</p>
          )}
          { }
        </div>


        <div className={` ${opciones !== 0 ? 'boxOptionesUp' : 'boxOptions'}`}>
          <a className={opciones === 0 ? 'selectedOption' : ''} onClick={() => { handleClickOpciones(0) }}>Inicio</a>
          <a className={opciones === 1 ? 'selectedOption' : ''} onClick={() => { handleClickOpciones(1) }}>Proyectos</a>
          <a className={opciones === 2 ? 'selectedOption' : ''} onClick={() => { handleClickOpciones(2) }}>Skills</a>
          <a className={opciones === 3 ? 'selectedOption' : ''} onClick={() => { handleClickOpciones(3) }}>About Me</a>
          <a className={opciones === 5 ? 'selectedOption' : ''} onClick={() => { handleClickOpciones(5) }}>Contacto</a>

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
