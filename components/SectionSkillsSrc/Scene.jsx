import { useCallback, useEffect, useState, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import SpriteText from "three-spritetext";
import * as d3 from "d3";


const Scene = (props) => {
  const fgRef = useRef(null);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const data = {
    nodes: [
      { id: "Typescript", name: ' Lenguaje de programación de código abierto basado en JavaScript que agrega características adicionales como tipado estático, interfaces y clases, para mejorar la robustez y escalabilidad de las aplicaciones JavaScript.' },
      { id: "Javascript", name: ' Lenguaje de programación interpretado que se utiliza principalmente en el desarrollo web para agregar interactividad a las páginas web, y también se puede utilizar en el desarrollo de aplicaciones móviles y de escritorio.' },
      { id: "Java", name: 'Lenguaje de programación orientado a objetos de propósito general que se utiliza en aplicaciones empresariales, móviles y web, así como en sistemas embebidos y en la Internet de las cosas (IoT).' },
      { id: "MatLab", name: 'Lenguaje de programación y entorno de desarrollo integrado utilizado en ciencia e ingeniería para el análisis numérico, el procesamiento de señales y la visualización de datos.' },
      { id: "ShellScript", name: 'Lenguaje de programación utilizado en sistemas operativos Unix y Unix-like para automatizar tareas y realizar operaciones en línea de comandos, utilizando comandos del sistema operativo y scripts.' },
      { id: "C", name: 'Lenguaje de programación de bajo nivel utilizado en sistemas operativos, dispositivos embebidos y otros sistemas de tiempo real donde la eficiencia y el control sobre la memoria son importantes. También es un lenguaje muy popular en la programación de videojuegos.' },


      { id: 0, name: 'Lenguajes de Programación', type: "Category", label: "." },
    ],
    links: [
      { source: "Typescript", target: 0, distance: 5 },
      { source: "Javascript", target: 0, distance: 5 },
      { source: "Java", target: 0, distance: 5 },
      { source: "MatLab", target: 0, distance: 5 },
      { source: "ShellScript", target: 0, distance: 5 },
      { source: "C", target: 0, distance: 5 },

    ],
  };
  const [flag, setFlag] = useState(true);
  const drawNormalNode = useCallback((node) => {
    const sprite = new SpriteText(node.label ? node.label : node.id, 5);
    sprite.color = "#ffffff";
    sprite.backgroundColor = "transparent";
    sprite.backgroundColor = "#90024c";
    sprite.borderColor = "#65B5FF";
    sprite.borderWidth = 0;
    sprite.padding = [8, 4];
    sprite.textHeight = 5;
    sprite.borderWidth = 2;
    sprite.borderRadius = 10;
    sprite.fontWeight = 700;

    return sprite;
  }, []);

  const drawCategoryNode = useCallback((node) => {
    const sprite = new SpriteText(node.label ? node.label : node.id, 1);
    sprite.color = "#ffffff";
    sprite.backgroundColor = "#65B5FF";
    sprite.padding = [5, 2];
    sprite.textHeight = 1;
    sprite.fontWeight = 100;
    return sprite;
  }, []);

  const nodeThreeObject = useCallback(
    (node) => {
      if (node.type === "Category") {
        return drawCategoryNode(node);
      }
      return drawNormalNode(node);
    },
    [drawCategoryNode, drawNormalNode]
  );
  useEffect(() => {
    fgRef.current.d3Force("link").distance((link) => {
      return link.distance ? link.distance * 20 : 60;
    });

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const handleClick = useCallback(
    (node) => {
      d3.selectAll("#node-info-container").remove();
      
      const distance = 300;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, 
        3000
      );
      setFlag(false);
    },
    [fgRef]
  );

  const handleBackgroundClick = useCallback(() => {
    if (!flag) {
      fgRef.current.cameraPosition({ x: -200, y: -200, z: -200 }, 0, 3000);
      setFlag(true);
      d3.selectAll("#node-info-container").remove();
    } else {
      return;
    }
  }, [fgRef]);

  return (

   
      <ForceGraph3D
        width={windowSize.width*0.8}
        height={450}
        ref={fgRef}
        graphData={data}
        nodeAutoColorBy="group"
        nodeThreeObject={nodeThreeObject}
        nodeVal={(node) => node.size}
        linkColor={"color"}
        linkOpacity={1}
        linkWidth={"width"}
        onNodeClick={handleClick}
        onBackgroundClick={handleBackgroundClick}
        onNodeDragEnd={(node) => {
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z;
        }}
      />
    
  );
}


export default Scene;
