import { useCallback, useEffect, useState, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import SpriteText from "three-spritetext";
import * as d3 from "d3";


const HardSkillsGraph = (props) => {
  const fgRef = useRef(null);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const data = {
    nodes: [
      { id: "Desarrollo de Páginas web" },
      { id: "Desarrollo de Aplicaciones Web" },
      { id: "Desarrollo de Aplicaciones Móviles" },
      { id: "Diseño de Prototitipos" },
      { id: "Arquitecturas de software" },
      { id: "Bases de datos" },
      { id: "Levantamiento de Requisitos" },
      { id: "Hacking Ético" },
      { id: "Despliegue de Aplicaciones en la nube" },
      { id: "Edición de video" },

      { id: 0, name: 'Lenguajes de Programación', type: "Category", label: "." },
    ],
    links: [
      { source: "Desarrollo de Páginas web", target: 0, distance: 6 },
      { source: "Desarrollo de Aplicaciones Web", target: 0, distance: 6 },
      { source: "Desarrollo de Aplicaciones Móviles", target: 0, distance: 6 },
      { source: "Diseño de Prototitipos", target: 0, distance: 6 },
      { source: "Arquitecturas de software", target: 0, distance: 6 },
      { source: "Bases de datos", target: 0, distance: 6 },
      { source: "Levantamiento de Requisitos", target: 0, distance: 6 },
      { source: "Hacking Ético", target: 0, distance: 6 },
      { source: "Despliegue de Aplicaciones en la nube", target: 0, distance: 6 },
      { source: "Edición de video", target: 0, distance: 6 },

    ],
  };
  const [flag, setFlag] = useState(true);
  const drawNormalNode = useCallback((node) => {
    const sprite = new SpriteText(node.label ? node.label : node.id, 5);
    sprite.color = "#ffffff";
    sprite.backgroundColor = "transparent";
    sprite.backgroundColor = "#00000";
    sprite.borderColor = "#9b59b6";
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
      return link.distance ? link.distance * 20 : 20;
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
      fgRef.current.cameraPosition({ x: -300, y: -300, z: -300 }, 0, 4000);
      setFlag(true);
      d3.selectAll("#node-info-container").remove();
    } else {
      return;
    }
  }, [fgRef]);

  return (

    <div style={{ marginTop: "-60px"}}>
      <ForceGraph3D
        width={windowSize.width <= 800 ? windowSize.width * 0.8 : windowSize.width * 0.25}
        backgroundColor={"rgba(0, 0, 0, 0)"}
        height={270}
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
    </div>

  );
}


export default HardSkillsGraph;
