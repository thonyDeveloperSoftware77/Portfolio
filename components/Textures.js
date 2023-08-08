import * as THREE from 'three';
import { useMemo } from 'react';
import { useThree } from '@react-three/fiber';

export default function MyTexture() {
  const { scene } = useThree();
  const texture = useMemo(
    () =>
      new THREE.CubeTextureLoader().load([
        '/px.jpg',
        '/nx.jpg',
        '/py.jpg',
        '/ny.jpg',
        '/pz.jpg',
        '/nz.jpg',
      ]),
    []
  );

  // Use the texture as the background of the scene
  scene.background = texture;

  return null;
}
