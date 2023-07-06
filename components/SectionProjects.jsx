import Fade from "react-reveal/Fade";

const SectionProjects = () => {

    return (
        <>
            <h1 style={{ marginTop: "100px" }}>
                <Fade top cascade>
                    PROYECTOS
                </Fade>

            </h1>


            <div className="contenedorSecciones">
                {/*Análisis Geográfico del Índice de Crimen en la Ciudad de Quito*/}
                <Fade right>
                    <center style={{ marginTop: "100px" }}>   <h1>Sistema de auditoría interna </h1></center>
                    <div className="boxSectionResponsive">
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }}
                        >
                            <video autoPlay="true" loop muted s className="videoBox2">
                                <source src="/Videos/Backauditoria.mp4" control="true" controls loop type="video/mp4" />
                            </video>
                            <div>
                                <h3>Funciones en la empresa:</h3>
                                <li>
                                    <strong>
                                        Ingeniería de requerimientos:
                                    </strong>
                                    Levantamiento de requisitos funcionales y no funcionales
                                </li>
                                <br />
                                <li>
                                    <strong>
                                        Bases de datos:
                                    </strong>
                                    Modelamiento, normalización y creación de la base de datos en Sql Server, uso de Firebase para el almacenamiento de archivos, subida y descargar de reportes.
                                </li>
                                <br />
                                <li>
                                    <strong>
                                        API:
                                    </strong>
                                    Creación de la API con middlewares de seguridad, tokens, autenticación con google
                                </li>
                                <br />
                                <li>
                                    <strong>
                                        Backend:
                                    </strong>
                                    Implementación de toda la lógica de la aplicación web de auditorías.
                                </li>
                                <br />
                                <li>
                                    <strong>
                                        Frontend:
                                    </strong>
                                    Diseño y creación del sistema visual de la aplicación web, responsive design.
                                </li>
                                <br />
                                <li>
                                    <strong>
                                        3D:
                                    </strong>
                                    Creación y animación de objeto 3D.
                                </li>
                                <br />
                                <li>
                                    <strong>
                                        Despliegue:
                                    </strong>
                                    Despliegue de la base de datos en Azure, despliegue de la API en hop y despliegue de la aplicación web en Vercel.
                                </li>


                            </div>
                        </div>
                        <div>
                            <p>
                                Desarrollo de un sistema de control interno diseñado específicamente para realizar auditorías internas. El objetivo principal fue proporcionarte una herramienta eficiente para evaluar el estado de madurez de tu sistema de control interno. Para lograrlo, se creó un Modelo de madurez del sistema de control interno institucional que te permitirá identificar el nivel de desarrollo de cada uno de los componentes funcionales en instituciones, un Modelo de control interno y un Mapa de riesgos de las instituciones.
                            </p>

                            <strong>
                                <a href="https://web-auditoria-neon.vercel.app/" target="_blank" >Ir al proyecto</a>

                            </strong>
                            <h2>Tecnologías utilizadas</h2>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className="boxSectionResponsive2">
                                    <div>
                                        <h3 >Lenguajes:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "28px" }} className="icono">
                                                <img src="./Icons/html.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Css.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row" }} className="icono">
                                                <img src="./Icons/Javascript.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", paddingLeft:"25px" }} className="icono">
                                                <img src="./Icons/Typescript1.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", paddingLeft:"25px" }} className="icono">
                                                <img src="./Icons/sql.png" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <h3>Librerías:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/React.png" alt="" />
                                            </div>


                                        </div>
                                    </div>

                                </div>
                                <div className="boxSectionResponsive2">

                                    <div>
                                        <h3>Herramientas:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Figma.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", marginRight: "30px" }} className="icono">
                                                <img src="./Icons/git.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row" }} className="icono">
                                                <img src="./Icons/github.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                        <div style={{ display: "flex", marginTop: "35px" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/ApexCharts.png" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="boxSectionResponsive2">

                                    <div>
                                        <h3>Despliegue:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/azure.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", marginRight: "30px" }} className="icono">
                                                <img src="./Icons/hop.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row" }} className="icono">
                                                <img src="./Icons/vercel.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>


                    </div>
                </Fade>
                {/*STREAMIFY*/}
                <Fade >
                    <center> <h1>Streamify</h1></center>
                    <div className="boxSectionResponsive" >
                        <div>

                            <p>
                                &ldquo;Aplicación de música&ldquo; que utiliza la API de Deezer para recopilar información sobre artistas y canciones, permitiendo a los usuarios buscar y reproducir música. La interfaz se asemeja a la de Spotify, y permite a los usuarios escuchar música directamente desde YouTube utilizando un reproductor integrado. La aplicación está construida con React y Axios, y permite a los usuarios descubrir y escuchar música de manera fácil y conveniente.
                            </p>
                            <h2>Tecnologías utilizadas</h2>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className="boxSectionResponsive2">
                                    <div>
                                        <h3 >Lenguajes:</h3>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div style={{ marginRight: "28px" }} className="icono">
                                                <img src="./Icons/html.png" alt="" />
                                            </div>
                                            <div style={{ marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Css.png" alt="" />
                                            </div>
                                            <div style={{}} className="icono">
                                                <img src="./Icons/Javascript.png" alt="" />
                                            </div>
                                            
                                        </div>

                                    </div>
                                    <div>
                                        <h3>Librerías:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ marginRight: "35px" }} className="icono">
                                                <img src="./Icons/React.png" alt="" />
                                            </div>
                                            <div className="icono">
                                                <img src="./Icons/Axias.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="boxSectionResponsive2">

                                    <div>
                                        <h3>Herramientas:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Figma.png" alt="" />
                                            </div>
                                            <div style={{ marginRight: "30px" }} className="icono">
                                                <img src="./Icons/Photoshop.png" alt="" />
                                            </div>
                                            <div className="icono">
                                                <img src="./Icons/github.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Apis:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ marginRight: "25px" }} className="icono">
                                                <img src="./Icons/deezer.png" alt="" />
                                            </div>
                                            <div className="icono">
                                                <img src="./Icons/youtube.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <video className="videoBox" autoPlay="true" loop muted >
                                <source src="/Videos/streamify.mp4" loop type="video/mp4" />
                            </video>
                        </div>

                    </div>
                </Fade>

                {/*Análisis Geográfico del Índice de Crimen en la Ciudad de Quito*/}
                <Fade right>
                    <center style={{ marginTop: "100px" }}>   <h1>Análisis Geográfico del Índice de Crimen en la Ciudad de Quito</h1></center>
                    <div className="boxSectionResponsive">
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                        >
                            <video autoPlay="true" loop muted s className="videoBox2">
                                <source src="/Videos/discrete.mp4" loop type="video/mp4" />
                            </video>
                        </div>
                        <div>
                            <p>
                                El proyecto tuvo como objetivo identificar las zonas más peligrosas en la ciudad de Quito para de esta manera poder predecir y prevenir acciones criminales futuras con el fin de ayudar en la seguridad de la población. La metodología que se utilizó fue de índole cuantitativa al usar datos sobre los robos en la ciudad de Quito que permitió utilizar gráficos estadísticos, grafos y mapas para identificar los patrones de criminalidad.
                            </p>
                            <h2>Tecnologías utilizadas</h2>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className="boxSectionResponsive2">
                                    <div>
                                        <h3 >Lenguajes:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "28px" }} className="icono">
                                                <img src="./Icons/html.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Css.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row" }} className="icono">
                                                <img src="./Icons/Javascript.png" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <h3>Librerías:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/React.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row" }} className="icono">
                                                <img src="./Icons/Leaftlet.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row" }} className="icono">
                                                <img src="./Icons/leaftletRoutingMachine.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="boxSectionResponsive2">

                                    <div>
                                        <h3>Herramientas:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Figma.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", marginRight: "30px" }} className="icono">
                                                <img src="./Icons/git.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row" }} className="icono">
                                                <img src="./Icons/github.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                        <div style={{ display: "flex", marginTop: "35px" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/ApexCharts.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", marginRight: "65px" }} className="icono">
                                                <img src="./Icons/ForceGraph2d.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </Fade>

                {/*Sistema de gestión de proyectos para Inmozlion S.A*/}
                <Fade right>
                    <center style={{ marginTop: "100px" }}>   <h1>Sistema de gestión de proyectos para la constructora Inmozlion S.A. </h1></center>
                    <div className="boxSectionResponsive" >
                        <div style={{ marginRight: "20px" }}>

                            <p>
                                El proyecto consistió en desarrollar un sistema de gestión de proyectos para Inmozlion S.A. mediante el <b>uso de listas y árboles jerárquicos usando métodos recursivos y usando el patrón de diseño COMPOSITE</b>. Este sistema permitirá a los usuarios Administradores gestionar las cuentas de usuarios, proyectos, tareas y recursos. Por su parte, los usuarios Empleados podrán gestionar su cuenta y las tareas que deben realizar.
                                <br />
                                <br />
                                La funcionalidad 1 permitirá registrar, deshabilitar, modificar y visualizar la lista de usuarios. Además, se podrá buscar un usuario por diferentes parámetros y asignarle una tarea.  <br />
                                <br />
                                La funcionalidad 2 permitirá gestionar los proyectos, permitiendo registrarlos, deshabilitarlos, modificarlos, visualizar la lista de proyectos y lista de recursos asignados, y buscar proyectos por diferentes parámetros.
                                <br />
                                <br />
                                La funcionalidad 3 permitirá gestionar las tareas, permitiendo registrarlas, deshabilitarlas, modificarlas, visualizar el árbol de tareas y buscar tareas por diferentes parámetros.
                                <br />
                                <br />
                                La funcionalidad 4 permitirá gestionar los recursos, permitiendo registrarlos, deshabilitarlos, modificarlos, visualizar la lista de recursos, buscar recursos por diferentes parámetros y asignar un recurso a un proyecto.
                                <br />
                                <br />
                                Por último, la funcionalidad 5 permitirá a los usuarios Empleados gestionar su cuenta y las tareas que deben realizar, permitiendo visualizar su información personal, modificarla, ver la información de las tareas a las que fueron asignados y marcar como completadas las tareas a las que fueron asignados.
                                <br />

                            </p>
                            <h2>Tecnologías utilizadas</h2>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className="boxSectionResponsive2">
                                    <div>
                                        <h3 >Lenguajes:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "28px" }} className="icono">
                                                <img src="./Icons/Java.png" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <h3>Librerías:</h3>
                                        <div style={{ display: "flex" }}>
                                            <ul>
                                                <li>JCalendar (Librería de calendario, input tipo fecha)</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="boxSectionResponsive2">

                                    <div>
                                        <h3>Herramientas:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Figma.png" alt="" />
                                            </div>

                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/github.png" alt="" />
                                            </div>

                                            <div style={{ flexDirection: "row" }} className="icono">
                                                <img src="./Icons/uml.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Estructura de Datos:</h3>
                                        <div style={{ display: "flex" }}>
                                            <ul>
                                                <li>
                                                    Listas
                                                </li>
                                                <li>
                                                    Árboles jerárquicos(Patrón de diseño COMPOSITE)
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <video autoPlay="true" loop muted className="videoBox">
                                <source src="/Videos/SistemaGestion.mp4" loop type="video/mp4" />
                            </video>
                        </div>

                    </div>
                </Fade>

                {/*Métodos de Interpolacion, Newton y Lagrange*/}
                <Fade left>
                    <center style={{ marginTop: "100px" }}>   <h1>Análisis de Datos de Casos de Homicidios Intencionados en el Ecuador mediante la Interpolación de Lagrange y Newton en Matlab </h1></center>
                    <div className="boxSectionResponsive" >
                        <div style={{ marginRight: "20px" }}>

                            <p>
                                Se desarrolló una aplicación con interfaz gráfica en Matlab cuyo propósito es brindar una interfaz dinámica con el usuario para interpolar datos de los homicidios intencionados en el ecuador en el periodo del 2011 al 2020. <br />
                                <br />
                                La aplicación cuenta con un menú que posee dos opciones, la interfaz y los procesos numéricos detallados acerca del desarrollo matemático de la interpolación.
                                <br />
                                El botón de interfaz de interpolación abre una ventana que es en donde se podrá interactuar dinámicamente con la aplicación, se muestra la tabla de los datos junto con varias opciones para interactuar con el grafico de interpolación:
                                <br />
                                <ul>
                                    <li>
                                        -Seleccionar el método de interpolación
                                    </li>
                                    <li>
                                        -Seleccionar el año que se quiere interpolar con dicho método.

                                    </li>
                                    <li>
                                        -Un apartado de grafico personalizado
                                    </li>
                                    <li>
                                        -Resultado de la interpolación, tanto la de Newton como la de Lagrange

                                    </li>

                                </ul>
                                El botón de procesos numéricos despliega un menú para poder escoger el método del que queramos ver información, método de newton o método de Lagrange. <br />

                            </p>
                            <h2>Tecnologías utilizadas</h2>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className="boxSectionResponsive2">
                                    <div>
                                        <h3 >Lenguajes:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "28px" }} className="icono">
                                                <img src="./Icons/matlab.png" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <h3>Herramientas:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Figma.png" alt="" />
                                            </div>

                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/github.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <video autoPlay="true" loop muted className="videoBox">
                                <source src="/Videos/matla.mp4" loop type="video/mp4" />
                            </video>
                        </div>

                    </div>
                </Fade>

                {/*DONACIONES */}
                <Fade left>
                    <center style={{ marginTop: "100px" }}>   <h1>Donaciones</h1></center>
                    <div className="boxSectionResponsive" >
                        <div style={{ marginRight: "20px" }}>

                            <p>
                                La Aplicación de Donaciones &ldquo;Donations Inc.&ldquo; es una plataforma diseñada con programación orientada a objetos para ayudar a personas de escasos recursos a través de un sistema de donaciones. La aplicación ofrece la posibilidad de registrarse como donante o donatario. Los donantes pueden ingresar información personal.Por otro lado, los donatarios pueden registrar información de su institución.
                                <br />
                                <br />

                                El donante puede elegir entre donar en efectivo o productos básicos, y ver su historial de donaciones enviadas en una lista detallada. Mientras que el donatario puede agregar programas de donaciones y ver su historial de donaciones recibidas en una lista detallada.
                                <br />
                                <br />

                                Ambos usuarios (donante y donatario) pueden iniciar sesión, visualizar y modificar sus datos personales en cualquier momento. La aplicación es una herramienta útil para facilitar la donación y el apoyo a aquellas personas y organizaciones que lo necesiten.

                            </p>
                            <h2>Tecnologías utilizadas</h2>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className="boxSectionResponsive2">
                                    <div>
                                        <h3 >Lenguajes:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "28px" }} className="icono">
                                                <img src="./Icons/html.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Css.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Javascript.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row" }} className="icono">
                                                <img src="./Icons/Typescript1.png" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <h3>Librerías:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/jQuery.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="boxSectionResponsive2">

                                    <div>
                                        <h3>Herramientas:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ marginRight: "35px" }} className="icono">
                                                <img src="./Icons/Figma.png" alt="" />
                                            </div>

                                            <div style={{ marginRight: "35px" }} className="icono">
                                                <img src="./Icons/github.png" alt="" />
                                            </div>

                                            <div style={{ marginRight: "35px" }} className="icono">
                                                <img src="./Icons/uml.png" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <video autoPlay="true" loop muted className="videoBox">
                                <source src="/Videos/donaci.mp4" loop type="video/mp4" />
                            </video>
                        </div>

                    </div>
                </Fade>

                {/*APLICACION DE REALIDAD AUMENTADA*/}
                <Fade top>
                    <center style={{ marginTop: "100px" }}><h1>Aplicación de realidad aumentada</h1></center>
                    <div className="boxSectionResponsive">
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                        >
                            <video autoPlay="true" loop muted s className="videoBox2">
                                <source src="/Videos/realidad.mp4" loop type="video/mp4" />
                            </video>
                        </div>
                        <div>
                            <p>
                                Se logró crear una aplicación de realidad aumentada, que al interactuar  con la cámara del dispositivo se reconoce el plano y muestra los personajes junto con sus respectivas animaciones.
                                <br />
                                <br />
                                La metodología que se utilizó para desarrollar este proyecto fue de tipo investigativo, se hizo la respectiva indagación del uso de cada una de las herramientas orientado a las necesidades del proyecto tanto de vuforia, mixamo como también unity, mediante la documentación oficial que estas proporcionan, como también con herramientas de aprendizaje como youtube y creatividad.
                            </p>
                            <h2>Tecnologías utilizadas</h2>

                            <div style={{ display: "flex", flexDirection: "column" }}>


                                <div className="boxSectionResponsive2">

                                    <div>
                                        <h3>Herramientas:</h3>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flexDirection: "row", marginRight: "35px" }} className="icono">
                                                <img src="./Icons/unity.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row", marginRight: "30px" }} className="icono">
                                                <img src="./Icons/vuforia.png" alt="" />
                                            </div>
                                            <div style={{ flexDirection: "row" }} className="icono">
                                                <img src="./Icons/mixamo.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </Fade>
            </div>
        </>

    )
}
export default SectionProjects;