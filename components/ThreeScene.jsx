import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'



const ThreeScene = () => {
  const containerRef = useRef();

  const [numAnimacion, setnumAnimacion] = useState(0);

  useEffect(() => {
    // Crea la escena de three.js
    const scene = new THREE.Scene();

    // Crea la geometría de puntos y el material de los puntos
    const pointsGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff
    });
    const clock = new THREE.Clock();

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


    points.renderOrder = 2; // Reemplaza "objeto" con el nombre de tu objeto
    points.depthTest = true; // Reemplaza "objeto" con el nombre de tu objeto
    // Agrega la instancia de Points a la escena
    scene.add(points);

    //Añade la textura a el background
    const loaderBackEscene = new THREE.TextureLoader()
    loaderBackEscene.load('./rectangle.png', (texture) => {
      scene.background = texture
    })

    let modelo;
    let animations;
    let mixers;
    let counter = 0;
    let positionAstronaut;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./draco/gltf/'); // use a full url path


    //env map

    const cubeTextureLoader = new THREE.CubeTextureLoader();


    const loaders = new GLTFLoader();



    loaders.setDRACOLoader(dracoLoader);
    loaders.load('./models/Astronaut1/scene.gltf', (gltf) => {

      modelo = gltf.scene.children[0];

      // Obtiene la animación desde el modelo
      const animation = gltf.animations[0];
      animations = gltf.animations;
      // Crea un mixer de animaciones y agrega la animación
      const mixer = new THREE.AnimationMixer(gltf.scene);
      mixers = mixer;
      const action = mixer.clipAction(animation);
      action.play();

      // Actualiza el mixer en cada cuadro
      function animates() {
        requestAnimationFrame(animates);
        mixer.update(clock.getDelta());
        
        renderer.render(scene, camera);
      }
      animates();


      gltf.scene.renderOrder = 9; // Reemplaza "objeto" con el nombre de tu objeto
      gltf.scene.depthTest = false; // Reemplaza "objeto" con el nombre de tu objeto
      gltf.scene.scale.set(2.5, 2.5, 2.5)
      gltf.scene.position.set(0, -6, 0)
      scene.add(gltf.scene);

      gltf.scene.name = 'Modelo';
      positionAstronaut = gltf.scene.position;
    });



    //lightss
    const ligth1 = new THREE.DirectionalLight(0xffffff, 1)
    ligth1.position.set(5, 100, 80)
    scene.add(ligth1)
    // Crea una cámara y establece su posición
    const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

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
      points.position.x += (x - points.position.x) * lerpFactor;
      points.position.y += (y - points.position.y) * lerpFactor;
    });



    const animate = () => {
      requestAnimationFrame(animate);
      // Marca el atributo de posición como necesitando actualización
      points.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    //comentario  de la funcion de zoom
    function zoomCameraSmoothly(camera, zoomLevel) {
      const initialZoom = camera.zoom;
      const delta = 0.0005;
      const zoomSteps = (zoomLevel - initialZoom) / delta;
      let stepCount = 0;

      function animateZoom() {
        if (stepCount >= zoomSteps) {
          return;
        }
        requestAnimationFrame(animateZoom);
        camera.zoom -= delta;
        camera.updateProjectionMatrix();
        stepCount++;
      }

      animateZoom();
    }


    setTimeout(() => {
      zoomCameraSmoothly(camera, 1.3)
    }, 3000); // esperar 5 segundos antes de ejecutar la función de zoom

    // posición inicial de la cámara
    const initialPosition = new THREE.Vector3(0, 0, 5);
    // posición final de la cámara
    const finalPosition = new THREE.Vector3(0, 0, -5);

    window.addEventListener('mousedown', (event) => {
      counter++;
      if (counter === 4) {
        counter = 0;
      }
      // función para acercar la cámara con transición suave
      function acercarCamara(duration, deltaFov) {
        const currentFov = camera.fov;
        const targetFov = currentFov - deltaFov;
        const fovChange = targetFov - currentFov;
        const startPosition = camera.position.clone();
        const startTime = performance.now();

        function update() {
          const elapsedTime = performance.now() - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const fov = currentFov + progress * fovChange;
          const position = new THREE.Vector3().lerpVectors(startPosition, finalPosition, progress);
          camera.position.copy(position);
          camera.fov = fov;
          camera.updateProjectionMatrix();

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }
        requestAnimationFrame(update);
      }
      setTimeout(() => {
        acercarCamara(1500, 75);
      }, 10);
    });

    window.addEventListener('mouseup', (event) => {

      // función para alejar la cámara con transición suave
      function alejarCamara(duration, deltaFov) {
        console.log(counter)
        positionAstronaut.set(0, -3, 0)
        console.log(positionAstronaut)

        if (counter != 0) {
          const pastAnimation = animations[counter - 1]; // buscamos la nueva animación en el archivo GLTF cargado
          const pastAction = mixers.clipAction(pastAnimation);
          pastAction.stop(); // detenemos la animación anterior
        } else {
          positionAstronaut.set(0, -6, 0)
          const pastAnimation = animations[3]; // buscamos la nueva animación en el archivo GLTF cargado
          const pastAction = mixers.clipAction(pastAnimation);
          pastAction.stop(); // detenemos la animación anterior
        }
        const newAnimation = animations[counter]; // buscamos la nueva animación en el archivo GLTF cargado
        const action = mixers.clipAction(newAnimation); // actualizamos la acción de animación con la nueva animación
        action.play(); // comenzamos a reproducir la nueva animación

        const currentFov = camera.fov;
        const targetFov = currentFov + deltaFov;
        const fovChange = targetFov - currentFov;
        const startPosition = camera.position.clone();
        const startTime = performance.now();
        function update() {
          const elapsedTime = performance.now() - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const fov = currentFov + progress * fovChange;
          const position = new THREE.Vector3().lerpVectors(startPosition, initialPosition, progress);
          camera.position.copy(position);
          camera.fov = fov;
          camera.updateProjectionMatrix();

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }
        requestAnimationFrame(update);
      }
      setTimeout(() => {
        alejarCamara(1500, 75);
      }, 2500);
      //
    });
  }, []); // Solo se ejecuta una vez al montar el componente


  return <div style={{ height: "100vh" }} ref={containerRef} />
}
export default ThreeScene;