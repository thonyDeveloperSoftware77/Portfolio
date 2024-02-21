'use client'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Objeto3D = dynamic(() => import('../components/Objeto3D.jsx'))


import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThreeScene2 from '../components/ThreeScene2';
import SectionProjects from '../components/SectionProjects';
import SectionSkills from '../components/SectionSkills';
import SectionContact from '../components/SectionContact';
import SectionAboutMe from '../components/SectionAbout';
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, Lightformer, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { useEffect, useState } from 'react';

import { Html } from '@react-three/drei'
import Loader from '../components/Loader';
import { useMemo } from 'react'


//Importar libreria de Apex chart con server side rending deshabilitado
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const SoftSkillsGraph = dynamic(() => import('../components/SectionSkillsSrc/SoftSkillsGraph.jsx'), {
  ssr: false,
});

const HardSkillsGraph = dynamic(() => import('../components/SectionSkillsSrc/HardSkillsGraph.jsx'), {
  ssr: false,
});

/*Icons*/
import { FaUniversity, FaLanguage } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineTrophy } from 'react-icons/ai'
import { BsBookmarkStar } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { BiExit } from 'react-icons/bi'

const Textures = dynamic(() => import('../components/Textures'))


function Loading() {
  return (
    <Html>
      <Loader />
    </Html>
  )
}





export default function Home() {


  const [opciones, setopciones] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const [opcionAnimacion, setOpcionAnimacion] = useState(0)
  const [opcionesCv, setOpcionesCv] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  })

  const [salir, setSalir] = useState(false)

  function handleClickOpciones(newOption) {

    if (newOption != opciones) {
      setIsLoading(!isLoading);
      setTimeout(() => {
        setopciones(newOption);
      }, 2500);
    }
  }
  const handleClickOpcionesCv = (index) => {
    if (index == 6) {
      setSalir(true)
      setTimeout(() => {
        setSalir(false)
        setOpcionesCv(prevState => ({
          ...prevState,
          [0]: false,
          [1]: false,
          [2]: false,
          [3]: false,
          [4]: false,
          [5]: false,
        }));
      }, 580);

    }
    setOpcionesCv(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
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




  const optionsNivelRiesgo = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            color: "#fff", // color del texto del valor
          },
        },
      },
    },
    fill: {
      colors: [
        function ({ value }) {
          if (value < 100) {
            return "#02abe4"; // verde
          }
        },
      ],
    },
    labels: ["Ingles"],
  };


  const seriesSkills = [{
    data: [100, 100, 80, 75, 75, 75, 25]
  }];

  const optionSkills = {
    chart: {
      type: 'bar',
      height: 380
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom'
        },
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ['#84cdfa', '#287271', '#73D08A', '#E9C46A', '#F4A264', 'rgb(238, 89, 63)', '#ca2ad2'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      },
    },
    colors: ['#1c323b', '#1b4c4b', '#20796e', '#bea157', '#d18b55', '#c45d44', '#922198'],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex]
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['Creación o rediseño de Páginas Web ', 'Desarrollo de aplicaciones Web personalizadas', 'Planificación de proyectos de software', 'Desarrollo de aplicaciones Móviles', 'Prototipado de interfaces', 'Despliegue de Aplicaciones en Nube', 'Hacking Ético'],
      labels: {
        show: false
      },
      max: 100
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: true
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    }
  }

  const seriesLanguage = [70];

  return (
    <>

      <Head>
        <title>Portafolio Jaime Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`overlay ${!isLoading ? 'overlay-hidden' : ''}`}>
        <nav style={{ height: "50px", position: "fixed", zIndex: "1" }}>

        </nav>

        <div style={{ position: "fixed", width: "100%" }} >
          {opciones === 0 ? (
            <>

              <div style={{ width: "100%", height: "100vh" }}>
                {/*
                <Canvas onClick={(e) => hadleClickOpcionesAnimacion(e)}>
                  <Suspense fallback={<Loading />}>
                    <Objeto3D animation={opcionAnimacion} />
                    <hemisphereLight intensity={0.3} color={"#0000FF"} />
                    <Textures />
                    <Environment resolution={512}>
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
                      <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                      <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
                      <Lightformer form="ring" color="blue" intensity={15} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
                    </Environment>
                    <OrbitControls />
                  </Suspense>
                </Canvas>
                */}
              </div>

              <div className='NameContainer'>
                <h1>
                  Jaime Developer

                </h1>
              </div>

              <div className='StartContainer'>
                <div className='imageStart'>

                  <img src="/img/img.png" alt="Vercel Logo" width={255} height={300} />
                  <div class="circle">
                  </div>

                  <div class="hexagon top" onClick={() => handleClickOpcionesCv(0)} >
                    <div class="hexagonContent">
                      <FiUser size={30} />
                    </div>
                  </div>
                  <div class="dashed-line topLine"></div>

                  <div class="hexagon left" onClick={() => handleClickOpcionesCv(2)}>
                    <div class="hexagonContent">
                      <BsBookmarkStar size={30} />
                    </div>
                  </div>
                  <div class="dashed-line leftLine"></div>

                  <div class="hexagon right" onClick={() => handleClickOpcionesCv(1)}>
                    <div class="hexagonContent">
                      <FaUniversity size={30} />
                    </div>
                  </div>
                  <div class="dashed-line rightLine"></div>

                  <div class="hexagon left-bottom" onClick={() => handleClickOpcionesCv(3)}>
                    <div class="hexagonContent">
                      <AiOutlineTrophy size={30} />
                    </div>
                  </div>
                  <div class="dashed-line leftBottomLine"></div>

                  <div class="hexagon right-bottom" onClick={() => handleClickOpcionesCv(4)}>
                    <div class="hexagonContent">
                      <MdWorkOutline size={30} />
                    </div>
                  </div>
                  <div class="dashed-line rightBottomLine"></div>

                  <div class="hexagon bottom" onClick={() => handleClickOpcionesCv(5)}>
                    <div class="hexagonContent">
                      <FaLanguage size={30} />
                    </div>
                  </div>
                  <div class="dashed-line bottomLine"></div>

                </div>


              </div>
              {opcionesCv[0] ? (
                <div className={`CardContainer ${salir ? 'Inactive' : ''}`}>
                  <button className='buttonExit' onClick={() => handleClickOpcionesCv(6)} >
                    <BiExit size={25} />
                  </button>
                  <center>
                    <h2><FiUser size={25} />  PROFILE</h2>
                    <p>Como apasionado del mundo tecnológico, he adquirido una amplia gama de
                      habilidades que abarcan desde el desarrollo de aplicaciones web y móviles
                      multiplataforma, hasta el diseño de interfaces de usuario
                      y la edición.
                      <br />
                      <br />
                      Mi experiencia también se extiende al manejo de arquitecturas para
                      desarrollar software de calidad, así como a la gestión de proyectos,
                      bases de datos  y hacking ético. He trabajado en varios proyectos,
                      manteniéndome siempre al día con las tecnologías más actuales.
                      <br />
                      <br />
                      Mi objetivo es utilizar estas habilidades para crear soluciones innovadoras
                      y efectivas en el campo de la tecnología.</p>
                    <p></p>
                    <div>
                      <ApexCharts
                        options={optionSkills}
                        series={seriesSkills}
                        type="bar"
                        height={350}
                      />
                    </div>
                  </center>
                </div>
              ) : (<></>)}
              {opcionesCv[1] ? (<div className={`CardContainer ${salir ? 'Inactive' : ''}`}>
                <button className='buttonExit' onClick={() => handleClickOpcionesCv(6)} ><BiExit size={25} /></button>
                <center>
                  <h2><FaUniversity size={20} />  EDUCATION</h2>
                  <p style={{backgroundColor: "#9b59b6"}}>Formación</p>
                  <p>Ingeniería de Software - UDLA</p>
                  <img src="/img/udla.png" alt="Vercel Logo" width={94} height={49} />

                  <br />
                  <p style={{backgroundColor: "#9b59b6"}}>Certificados</p>
                  <div className='flexContainer'>
                    <div className='flexRow'>
                      <div className='txtLeft'>
                        The Complete Web Development
                        <br />
                        Dr. Angela Yu-London Brewery
                      </div>
                      <div className='txtRigth'>
                        2023
                      </div>
                    </div>

                    <div className='flexRow'>
                      <div className='txtLeft'>
                        CCNA(CiscoCertifiedNetworkAssociate)
                        <br />
                        Cisco Networking Academy
                      </div>
                      <div className='txtRigth'>
                        2023
                      </div>
                    </div>
                    <div className='flexRow'>
                      <div className='txtLeft'>
                        Design Thinking for innovation
                        <br />
                        University of Virginia
                      </div>
                      <div className='txtRigth'>
                        2021
                      </div>
                    </div>
                    <div className='flexRow'>
                      <div className='txtLeft'>
                        Linux Unhatched
                        <br />
                        NDG Linux Unhatched
                      </div>
                      <div className='txtRigth'>
                        2022
                      </div>
                    </div>

                    <div className='flexRow'>
                      <div className='txtLeft'>
                        Experiencia de usuario UX/UI + Figma
                        <br />
                        Udemy Business
                      </div>
                      <div className='txtRigth'>
                        2023
                      </div>
                    </div>

                    <div className='flexRow'>
                      <div className='txtLeft'>
                        Next.js
                        <br />
                        Udemy Business
                      </div>
                      <div className='txtRigth'>
                        2023
                      </div>
                    </div>
                    <div className='flexRow'>
                      <div className='txtLeft'>
                        GIT+GitHub: Sistema de control
                        de versiones
                        <br />
                        Udemy Business
                      </div>
                      <div className='txtRigth'>
                        2023
                      </div>
                    </div>
                  </div>
                </center>
              </div>) : (<></>)}

              {opcionesCv[2] ? (<div className={`CardContainer ${salir ? 'Inactive' : ''}`}>
                <button className='buttonExit' onClick={() => handleClickOpcionesCv(6)} ><BiExit size={25} /></button>
                <center>
                  <h2><BsBookmarkStar size={20} />  SKILLS</h2>
                  <p >Soft Skills</p>
                  <SoftSkillsGraph />
                  <p >Hard Skills</p>
                  <HardSkillsGraph />
                </center>
              </div>) : (<></>)}

              {opcionesCv[3] ? (<div className={`CardContainer ${salir ? 'Inactive' : ''}`}>
                <button className='buttonExit' onClick={() => handleClickOpcionesCv(6)} ><BiExit size={25} /></button>
                <center>
                  <h2><AiOutlineTrophy size={18} />  ACHIEVEMENTS</h2>
                  <p style={{backgroundColor: "#73D08A", color:"black"}}>Logros Académicos</p>
                  <p className='txtJustify'>‣Certificado de Reconocimiento de UDLA por autoaprendizaje de cursos de software en Udemy Business</p>
                  <p className='txtJustify'>‣Diploma de distinción: 1er Escolta del Pabellón Nacional</p>
                  <br />
                  <br />
                  <p style={{backgroundColor: "#73D08A", color:"black"}}>Logros Personales</p>
                  <p className='txtJustify'>‣Partícipe del título de campeones en dos ocasiones consecutivas con los equipos de fútbol Racing y Sao Paulo en Santa Elena.</p>
                  <p className='txtJustify'>‣Demostrar mis habilidades musicales tocando la guitarra eléctrica en varios eventos escolares, lo cual ha sido una experiencia enriquecedora y gratificante</p>
                  <p className='txtJustify'>‣Ganador de concursos de Dibujo</p>
                </center>
              </div>) : (<></>)}

              {opcionesCv[4] ? (<div className={`CardContainer overScroll ${salir ? 'Inactive' : ''}`}>
                <button className='buttonExit' onClick={() => handleClickOpcionesCv(6)} ><BiExit size={25} /></button>
                <center>
                  <h2><MdWorkOutline size={20}/>  WORK EXPERIENCE</h2>
                  <br />
                  <p style={{backgroundColor: "#9b59b6"}}>
                    Sistema de Auditorías AuditSafe Consulting
                  </p>
                  <p className='txtJustify'>
                    Desarrollo de un sistema completo de auditorías de control interno,
                    permite identificar el nivel de desarrollo de cada uno de los componentes funcionales
                    en instituciones públicas, evaluaciones, generación de reportes, mapas de riesgo y planes de mejoramiento.
                    <br />
                    <br />
                    <center>
                      Instituciones Evaluadas con el software:
                    </center>
                  </p>
                  <p className='txtLeft'>
                    <br />
                    ‣Prefectura de Tungurahua
                    <br />
                    ‣Cuerpo de Bomberos del Cantón Guamote
                    <br />
                    ‣Próximamente: Aeropuerto de Quito
                  </p>
                  <br />
                  <br />
                  <p style={{backgroundColor: "#9b59b6"}}>
                    Price Pilot
                  </p>
                  <p className='txtJustify'>
                    Desarrollo una aplicación para buscar juegos con los precios más
                    bajos  en tiempo real de tiendas de videojuegos conocidas mundialmente.
                  </p>
                </center>
              </div>) : (<></>)}

              {opcionesCv[5] ? (<div className={`CardContainer ${salir ? 'Inactive' : ''}`}>
                <button className='buttonExit' onClick={() => handleClickOpcionesCv(6)} ><BiExit size={25} /></button>
                <center>
                  <h2><FaLanguage size={25} /> LANGUAGES</h2>
                  <div>
                    <ApexCharts
                      options={optionsNivelRiesgo}
                      series={seriesLanguage}
                      type="radialBar"
                      height={350}
                    />
                  </div>
                </center>
              </div>) : (<></>)}




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

      </div >



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
