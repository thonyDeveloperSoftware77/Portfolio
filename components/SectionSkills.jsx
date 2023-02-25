
import dynamic from 'next/dynamic';
import Vuforia from '../public/IconTools/Vuforia.jpg';
import Unity from '../public/IconTools/Unity.jpg';
import Figma from '../public/IconTools/Figma.jpg';
import Git from '../public/IconTools/Git.jpg';
import Github from '../public/IconTools/Github.jpg';
import Photoshop from '../public/IconTools/Photoshop.jpg';
import Uml from '../public/IconTools/uml.jpg';
import AppInventor from '../public/IconTools/AppInventor.jpg';
import Mixamo from '../public/IconTools/Mixamo.jpg';
import Image from 'next/image';

import imgSkills from './SectionSkillsSrc/img/imgSkills';
import { useState } from 'react';



const Scene = dynamic(() => import('./SectionSkillsSrc/Scene'), {
    ssr: false,
});
const SectionProjects = () => {


    const [showDescription, setShowDescription] = useState({
        Stado: false,
        texto: "",
    });

    const handleShowDescription = (texto) => {
        setShowDescription({
            Stado: !showDescription.Stado,
            texto: texto,
        });
    };

    return (
        <>
            <div style={{ position: "fixed", width:"100%", textAlign:"center", height:"87vh", top:"50%", left:"50%", transform:"translate(-50%, -50%)", marginLeft:"20px"}}>
                <h1 style={{ marginTop: "100px" }}>SKILLS</h1>

                    <div className="contenedorSecciones">
                        <h3>Lenguajes de programación</h3>
                        <Scene />

                        <div className='sectionSkills'>
                            <h2>Experiencia en herramientas: </h2>

                            <section>
                                <Image onMouseOver={() => handleShowDescription("Vuforia Engine: Es una plataforma de desarrollo de realidad aumentada que permite crear aplicaciones de realidad aumentada en diferentes dispositivos móviles y de realidad virtual. Es importante en la creación de experiencias de usuario innovadoras y enriquecedoras, y su uso puede mostrar la capacidad para crear aplicaciones móviles y de realidad aumentada atractivas y modernas.")} onMouseLeave={() => handleShowDescription("")}
                                    src={Vuforia} width={100} alt="" />
                                <Image onMouseOver={() => handleShowDescription("Unity: Es un motor de juego y plataforma de desarrollo que permite crear juegos, aplicaciones de realidad virtual, y simulaciones. Unity es una herramienta muy popular en la industria de los videojuegos y la realidad virtual, y es un gran recurso en el desarrollo de software.")} onMouseLeave={() => handleShowDescription("")}
                                    src={Unity} width={100} alt="" />
                                <Image onMouseOver={() => handleShowDescription("Figma: Es una herramienta de diseño gráfico colaborativo que permite crear diseños de interfaces de usuario (UI) y experiencias de usuario (UX) en línea. Figma es una herramienta muy útil para crear diseños modernos y llamativos para aplicaciones y sitios web.")} onMouseLeave={() => handleShowDescription("")}
                                    src={Figma} width={100} alt="" />
                                <Image onMouseOver={() => handleShowDescription("Git: Es un sistema de control de versiones que permite almacenar y rastrear cambios en el código fuente de proyectos de software. Git es una herramienta esencial para cualquier desarrollador de software y su uso puede mostrar la capacidad para colaborar en proyectos de código abierto.")} onMouseLeave={() => handleShowDescription("")}
                                    src={Git} width={100} alt="" />
                                <Image onMouseOver={() => handleShowDescription("Github: Es una plataforma en línea que permite alojar proyectos de software y colaborar con otros desarrolladores. Github es una plataforma muy popular en la comunidad de desarrolladores y su uso puede demostrar la capacidad para trabajar en equipo.")} onMouseLeave={() => handleShowDescription("")}
                                    src={Github} width={100} alt="" />
                                <Image onMouseOver={() => handleShowDescription("Photoshop: Es una herramienta de diseño gráfico que permite crear y editar imágenes y gráficos digitales. Photoshop es una herramienta muy popular en el diseño web y gráfico")} onMouseLeave={() => handleShowDescription("")}
                                    src={Photoshop} width={100} alt="" />
                                <Image onMouseOver={() => handleShowDescription("UML: Es un lenguaje de modelado de software que permite representar visualmente los sistemas de software. UML es una herramienta muy útil para la planificación y diseño de software.")} onMouseLeave={() => handleShowDescription("")}
                                    src={Uml} width={100} alt="" />
                                <Image onMouseOver={() => handleShowDescription("App Inventor: Es una plataforma de desarrollo de aplicaciones móviles que permite crear aplicaciones móviles sin necesidad de conocimientos de programación avanzados. App Inventor es una herramienta muy útil para aquellos interesados en el desarrollo de aplicaciones móviles.")} onMouseLeave={() => handleShowDescription("")}
                                    src={AppInventor} width={100} alt="" />
                                <Image onMouseOver={() => handleShowDescription("Mixamo: Es una plataforma en línea que permite animar modelos 3D de personajes humanos. Mixamo es una herramienta muy útil para aquellos interesados en el desarrollo de videojuegos y animaciones 3D de alta calidad.")} onMouseLeave={() => handleShowDescription("")}
                                    src={Mixamo} width={100} alt="" />
                            </section>
                            <div className='descriptionSkills'>
                                <p>{showDescription.texto}</p>
                            </div>
                        </div>



                        <div className='gridSection'>
                            <h2>Experiencia en Frameworks y librerías</h2>
                            <div className='gridContainer'>

                                <a href='https://scrollrevealjs.org/' target="_blank" >
                                    <Image src={imgSkills.scrollReveal} layout="responsive" width="100%" alt="" />
                                </a>
                                <a href='https://reactjs.org/' target="_blank">
                                    <Image src={imgSkills.React} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://scrollrevealjs.org/' target="_blank">
                                    <Image src={imgSkills.bootstrap} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://getbootstrap.com/' target="_blank">
                                    <Image src={imgSkills.animateCss} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href=' https://nextjs.org/' target="_blank">
                                    <Image src={imgSkills.nextJs} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://axios-http.com/' target="_blank">
                                    <Image src={imgSkills.axios} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://graphql.org/' target="_blank">
                                    <Image src={imgSkills.graphQl} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://threejs.org/' target="_blank">
                                    <Image src={imgSkills.threeJs} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction' target="_blank">
                                    <Image src={imgSkills.threeFiber} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://github.com/pmndrs/drei' target="_blank">
                                    <Image src={imgSkills.threeDrei} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://www.npmjs.com/package/react-force-graph' target="_blank">
                                    <Image src={imgSkills.forceGraph} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://apexcharts.com/' target="_blank">
                                    <Image src={imgSkills.apexCharts} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://www.npmjs.com/package/gltf-pipeline' target="_blank">
                                    <Image src={imgSkills.pipeline} layout="responsive" width="100%" alt=""></Image>
                                </a>
                                <a href='https://jquery.com/' target="_blank">
                                    <Image src={imgSkills.jQery} layout="responsive" width="100%" alt=""></Image>
                                </a>
                            </div>
                        </div>

                        <div className='gridContainerSection2'>

                            <div>
                                <h2>Base de Datos</h2>
                                <li>Sql Server</li>
                                <li>Firebase</li>
                                <li>MongoDb</li>
                            </div>

                            <div>
                                <h2>Hacking Ético</h2>
                                <li>Conocimiento básico de hacking ético</li>
                                <li>Experiencia en uso de herramientas OSINT para investiagación</li>
                                <li>Laboratorio de ataques, pishing y payloads</li>
                            </div>




                            <div>
                                <h2>Desarrollo y administración de Sistemas</h2>
                                <li>Subir páginas web con sistemas operativos como Centos7, Windows Server, Ubuntu Server</li>
                                <li>Levantar servidores locales</li>
                                <li>Levantar clúster de alta disponibilidad</li>
                                <li>Manejo de la terminal</li>
                            </div>
                            <div>
                                <h2>Sistemas Operativos</h2>
                                <li>Windows</li>
                                <li>Linux</li>
                                <ul>
                                    <li>Ubuntu</li>
                                    <li>Centos7</li>
                                    <li>Ubuntu Server</li>
                                    <li>Windows Server</li>
                                    <li>Kali linux</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>



        </>

    )
}
export default SectionProjects;