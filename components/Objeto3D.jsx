
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three';

const Objeto3D = (props) => {

  
// Load the image as a texture
const texture = new THREE.TextureLoader().load('uno.jpg');
const texture4 = new THREE.TextureLoader().load('cuatro.jpg');
const texture7 = new THREE.TextureLoader().load('siete.jpg');
const texture11 = new THREE.TextureLoader().load('once.jpg');

// Create a new material using the texture
const myMaterial = new THREE.MeshPhongMaterial({ map: texture });
const myMaterial7 = new THREE.MeshPhongMaterial({ map: texture7 });
const myMaterial11 = new THREE.MeshPhongMaterial({ map: texture11 });

const myMateriallol = new THREE.MeshStandardMaterial({
  aoMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  color: new THREE.Color(1, 1, 1),
  displacementBias: 0,
  displacementScale: 1,
  emissive: new THREE.Color(0, 0, 0),
  emissiveIntensity: 50,
  metalness: null,
  envMapIntensity: 1,
});
// Set the aoMap property using a texture
const aoMap = new THREE.TextureLoader().load('once.jpg');
myMateriallol.aoMap = aoMap;
// Set the map property using a texture
myMateriallol.map = texture4



  const group = useRef();
  const { nodes, animations } = useGLTF("./untitled2.glb");
  const { actions } = useAnimations(animations, group);
  const [vector, setVector] = useState([0, 0, 0]);
  useEffect(() => {
    if (props.animation == 0) {
      actions.moon_walk.stop();
      actions.floating.play();
      setVector([0, -17, -20]);

    } else if (props.animation == 1) {
      actions.floating.stop();
      actions.idle.play();
      setVector([0, -10, -20]);

    } else if (props.animation == 2) {
      actions.idle.stop();
      actions.wave.play();
      setVector([0, -10, -20]);

    } else if (props.animation == 3) {
      actions.wave.stop();
      actions.moon_walk.play();
      setVector([0, -10, -20]);

    }
  }, [props.animation]);


  return (

    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">

        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.31}
          position={vector}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.06}>
                <group name="skeletal3_6">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="_3_correction">
                      <group name="_3" />
                    </group>
                    <group name="_4_correction">
                      <group name="_4" />
                    </group>
                    <group name="_5_correction">
                      <group name="_5" />
                    </group>
                    <skinnedMesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={myMaterial11}
                      skeleton={nodes.Object_103.skeleton}
                    />
                    <skinnedMesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={myMaterial}
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <skinnedMesh
                      name="Object_100"
                      geometry={nodes.Object_100.geometry}
                      material={myMaterial7}
                      skeleton={nodes.Object_100.skeleton}
                    />
                    <skinnedMesh
                      name="Object_106"
                      geometry={nodes.Object_106.geometry}
                      material={myMateriallol}
                      skeleton={nodes.Object_106.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./astronautGlb.glb");


export default Objeto3D;
