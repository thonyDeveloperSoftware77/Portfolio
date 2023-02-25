import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import SectionProjects from './SectionProjects';

const ThreeScene2 = (props) => {
  const containerRef = useRef();

  useEffect(() => {
    // Crea la escena de three.js
    const scene = new THREE.Scene();
    // Crea la geometría de puntos y el material de los puntos
    const pointsGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff
    });

    // Crea una matriz de posiciones para los puntos
    const pointsPositions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      pointsPositions[i * 3] = (Math.random() - 0.5) * 10;
      pointsPositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pointsPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    // Asigna la matriz de posiciones a la geometría de puntos como un atributo
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(pointsPositions, 3));

    // Crea una instancia de Points utilizando la geometría y el material creados
    const points = new THREE.Points(pointsGeometry, pointsMaterial);

    // Agrega la instancia de Points a la escena
    scene.add(points);

    // Crea la geometría y el material de la esfera

    const geometry = new THREE.SphereGeometry(2, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2);
    const material = new THREE.MeshBasicMaterial();


    // Crea la esfera  la agrega a la escena
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    //Se añade la textura a la esfera
    const loader = new THREE.TextureLoader()
    loader.load('./planet.jpg', (texture) => {
      material.map = texture
      material.needsUpdate = true;
      animate()
    })

    //Añade la textura a el background
    const loaderBackEscene = new THREE.TextureLoader()
    loaderBackEscene.load('./rectangle.png', (texture) => {
      scene.background = texture
    })

    // Crea una cámara y establece su posición
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Crea un renderer y establece su tamaño
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Agrega el renderer a la página
    containerRef.current.appendChild(renderer.domElement);

    // Dibuja la escena cada vez que se redimensiona la ventana
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Obtiene la posición del cursor en cada momento
    window.addEventListener('mousemove', (event) => {
      // Calcula la nueva posición de la esfera en función de la posición del cursor
      const x = event.clientX / window.innerWidth * 2 - 1;
      const y = event.clientY / window.innerHeight * 2 - 1;
      const lerpFactor = 0.05; // Factor de interpolación
      sphere.position.x += (x - sphere.position.x) * lerpFactor;
      sphere.position.y += (y - sphere.position.y) * lerpFactor;
      points.position.x += (x - sphere.position.x) * lerpFactor;
      points.position.y += (y - sphere.position.y) * lerpFactor;
    });
    const animate = () => {
      requestAnimationFrame(animate);
      // Se Rota la esfera
      sphere.rotation.y += 0.005;
      // Marca el atributo de posición como necesitando actualización
      points.geometry.attributes.position.needsUpdate = true;

      //NECESARIO PARA UN MOVIMIENTO SUAVE AL MANTENER EL CLICK
      // Calcular la diferencia entre el tamaño actual y el tamaño deseado
      let scaleDiff = targetScale - currentScale;
      // Aplicar una pequeña porción de esta diferencia en cada frame
      currentScale += scaleDiff * 0.05;
      sphere.scale.set(currentScale, currentScale, currentScale);
      renderer.render(scene, camera);
    };

    //NECESARIO PARA HACER MAS GRANDE LA ESPERA AL MANTENER PRESIONADO EL CLICK
    let targetScale = 1;
    let currentScale = 1;

    window.addEventListener('mousedown', (event) => {
      // Aumenta el tamaño de la geometría de la esfera
      targetScale = 1.2;
      sphere.geometry.scale(1.1, 1.1, 1.1);
    });

    window.addEventListener('mouseup', (event) => {
      // Reduzca el tamaño de la geometría de la esfera
      targetScale = 1;
      sphere.geometry.scale(1 / 1.1, 1 / 1.1, 1 / 1.1);
    });
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div>
      <div style={{position:"absolute",display: "flex", justifyContent:"center", flexDirection:"column",alignItems:"center"}}>
        <props.componente/>
      </div>
      <div style={{ height: "100vh" }} ref={containerRef} />
     
    </div>

  )
}
export default ThreeScene2;