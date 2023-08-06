
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

const Objeto3D = (props) => {
  const group = useRef();
  const { nodes, animations, materials} = useGLTF("./original2.glb");
  const { actions } = useAnimations(animations, group);
  const [vector, setVector] = useState([0, 0, 0]);
  useEffect(() => {
    if (props.animation == 0) {
      actions.moon_walk.stop();
      actions.floating.play();
      setVector([0, -17, -15]);

    } else if (props.animation == 1) {
      actions.floating.stop();
      actions.idle.play();
      setVector([0, -10, -15]);

    } else if (props.animation == 2) {
      actions.idle.stop();
      actions.wave.play();
    } else if (props.animation == 3) {
      actions.wave.stop();
      actions.moon_walk.play();
    }
  }, [props.animation]);


  return (

    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8}
          position={vector}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal3_6">
                  <group name="GLTF_created_0">
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
                      name="Object_100"
                      geometry={nodes.Object_100.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_100.skeleton}
                    />
                    <skinnedMesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={materials.material_1}
                      skeleton={nodes.Object_103.skeleton}
                    />
                    <skinnedMesh
                      name="Object_106"
                      geometry={nodes.Object_106.geometry}
                      material={materials.material_2}
                      skeleton={nodes.Object_106.skeleton}
                    />
                    <skinnedMesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
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

useGLTF.preload("./original2.glb");


export default Objeto3D;
