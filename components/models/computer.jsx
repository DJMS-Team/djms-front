'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/computer/scene.gltf')

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.3
  })

  return (
    <group ref={group} {...props} dispose={null} scale={[0.4, 0.4, 0.4]} position={[0, -5, 0]}>
      
      <group
        position={[6.27, 12.359, 1.926]}
        rotation={[0, -0.557, 0]}
        scale={[0.608, 1.031, 0.586]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials['1SPEAKER-0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials['SPEAKER-FRONT-0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials['SPEAKER1-0']}
        />
      </group>
      <group
        position={[-4.882, 9.825, 1.297]}
        rotation={[0, 0.654, 0]}
        scale={[0.608, 1.031, 0.586]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials['1SPEAKER-0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials['SPEAKER-FRONT-0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials['SPEAKER1-0']}
        />
      </group>
      <group position={[7.559, 10.458, 14.912]} rotation={[0, -0.829, 0]} scale={[1, 0.219, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials['CHAIR-0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials['1CHAIR-0']}
        />
      </group>
      <group position={[4.995, 11.9, 2.587]} rotation={[0, -0.305, 0]} scale={[0.168, 0.54, 0.168]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials['BOTTLE-0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials['MYBOTTLE-0']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['1DESK-0']}
        position={[0, 11.252, 1.145]}
        scale={[8.666, 0.086, 1.767]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['1KB-BASE-0']}
        position={[-1.151, 11.394, 1.584]}
        rotation={[0, 0.268, 0]}
        scale={[1.068, 0.502, 0.333]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['1KEYS-0']}
        position={[-2.183, 11.394, 1.6]}
        rotation={[-Math.PI, -0.268, -Math.PI]}
        scale={[-0.042, 0.558, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['1PIC-0']}
        position={[0.003, 12.534, 0.217]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.822, 1.36, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['2PIC-0']}
        position={[0.005, 15.335, -0.315]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.094, 1.36, 1.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['SCREEN-0']}
        position={[-0.003, 12.534, 0.168]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.879, 1.4, 0.916]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials['2KB-0']}
        position={[-1.151, 11.376, 1.581]}
        rotation={[0, 0.268, 0]}
        scale={[1.322, 0.041, 0.407]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials['HANDLE-0']}
        position={[-7.657, 10.024, 7.549]}
        rotation={[-Math.PI / 2, 0, 3.032]}
        scale={[-1, 1, 0.038]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['COMP-SIDE-0']}
        position={[-6.033, 12.489, 2.389]}
        rotation={[0, -0.234, -1.569]}
        scale={[0.932, 0.985, 0.997]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials['ON-OFF-0']}
        position={[-6.771, 13.64, 3.267]}
        rotation={[0.179, -0.23, 0.041]}
        scale={[0.072, 0.007, 0.038]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials['STAND-0']}
        position={[0, 13.385, -0.408]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.567, 1, 2.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials['1CARPET-0']}
        position={[-0.17, 8.816, 3.725]}
        scale={[9.597, 9.597, 5.584]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials['3PIC-0']}
        position={[-3.62, 12.534, 1.082]}
        rotation={[Math.PI / 2, 0, -0.46]}
        scale={[1.822, 1.36, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials['4PIC-0']}
        position={[3.603, 12.534, 1.074]}
        rotation={[Math.PI / 2, 0, 0.468]}
        scale={[1.822, 1.36, 0.851]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47.geometry}
        material={materials['MAT-0']}
        position={[-0.026, 11.347, 1.872]}
        scale={[2.904, 1, 0.819]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials['MOUSE-0']}
        position={[0.981, 11.375, 1.744]}
        rotation={[0, -0.544, 0]}
        scale={[0.168, 0.109, 0.26]}
      />
    </group>
  )
}

useGLTF.preload('/models/computer/scene.gltf')
