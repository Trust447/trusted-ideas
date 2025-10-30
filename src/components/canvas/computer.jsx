import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

const computer = () => {

    const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <div>computer</div>
  )
}

export default computer