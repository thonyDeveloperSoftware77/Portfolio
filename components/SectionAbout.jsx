import Image from "next/image";
import imgSkills from "./SectionSkillsSrc/img/imgSkills";
const SectionProjects = () => {

    return (
        <>
            <h1 style={{ marginTop: "100px" }}>ABOUT ME</h1>
            <div className="sectionAbout" >

                <div className="contenedorSeccionesAbout" >

                    <p>
                        Mi experiencia en el desarrollo web, aplicaciones web escalables, diseño UI, edición, así como también manejo de backend para lógica, Apis seguras con tokemización y middlewares, bases de datos robustas con conceptos de normalización, despliegues en la nube y hacking ético me han permitido desarrollar habilidades importantes en el mundo de la tecnología. Soy estudiante de últimos semestres de Ingeniería de Software y he participado en cursos y programas de capacitación, obteniendo certificaciones en tecnologías como Typescript, React, Git-Github, Linux Unhadched, SQL Server, Diseño UX y UI, bootcamp web, design thinking for innovation entre otros.
                    </p>
                    <p>
                        Durante mi carrera, he participado en proyectos interesantes, como la creación de varios videojuegos, una aplicación de donaciones usando programación orientada a objetos, aplicación de música consumiendo una api de deezer y de youtube para la reproducción, una aplicación de gestión de proyectos de una constructora usando estructuras de datos como listas y árboles, y una aplicación de análisis geográfico del índice de crimen en la ciudad de Quito que incluía gráficos dinámicos y mapas estadísticos para la identificación de zonas de riesgo en la ciudad, plataforma de scrapping que busca los precios más bajos de juegos en tiempo real y desarrollo una aplicacion web completa para la empresa AuditSafe Consulting, incluyendo backend, frontend, bases de datos, producción y despliegue en la nube.
                    </p>

                    <center>
                        <Image src={imgSkills.programming} width={250} height={200} alt=""></Image>

                    </center>


                </div>
            </div>

        </>

    )
}
export default SectionProjects;