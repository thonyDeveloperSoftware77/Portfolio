import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from 'three';
const BackgroundGalaxy = (props) => {

    const group = useRef();

    const pointLightRef1 = useRef();
    const pointLightRef2 = useRef();


    const { nodes, materials } = useGLTF("/backGroundGalaxy.glb");

    const handlePointerMove = (event) => {


        const x = event.clientX / window.innerWidth * 2 - 1;
        const y = event.clientY / window.innerHeight * 2 - 1;
        const lerpFactor = 1.9; // Factor de interpolación
        group.current.position.x += (x - group.current.position.x) * lerpFactor;
        group.current.position.y += (y - group.current.position.y) * lerpFactor;


    };

    return (
        <>


            <group {...props} dispose={null}>
                <group
                    ref={group}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={3}
                    onPointerMove={handlePointerMove}

                >
                    <points
                        geometry={nodes.Object_2.geometry}
                        material={materials["Scene_-_Root"]}
                        position={[-100, -98, -100]}
                    />
                </group>
            </group>
        </>
    );
};

useGLTF.preload("./backGroundGalaxy.glb");



export default BackgroundGalaxy;
