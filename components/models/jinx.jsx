'use client'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Jinx(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Jinx/Jinx.gltf')
  const { actions } = useAnimations(animations, group)

  useFrame((state, delta) => {
    group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;
  })

  return (
    <group ref={group} {...props} dispose={null} position={[0, -3, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={3}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_124" scale={0.0075}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_11.skeleton}
                    morphTargetDictionary={nodes.Object_11.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_11.morphTargetInfluences}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_15.skeleton}
                    morphTargetDictionary={nodes.Object_15.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_15.morphTargetInfluences}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_17.skeleton}
                    morphTargetDictionary={nodes.Object_17.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_17.morphTargetInfluences}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_22.skeleton}
                  />
                  <skinnedMesh
                    name="Object_24"
                    geometry={nodes.Object_24.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_24.skeleton}
                  />
                  <skinnedMesh
                    name="Object_26"
                    geometry={nodes.Object_26.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_26.skeleton}
                  />
                  <skinnedMesh
                    name="Object_28"
                    geometry={nodes.Object_28.geometry}
                    material={materials.Jinx}
                    skeleton={nodes.Object_28.skeleton}
                  />
                  <group name="bannsoko_113" />
                  <group name="brow_114" />
                  <group name="CC_Base_Eye_115" />
                  <group name="CC_Base_Teeth_116" />
                  <group name="CC_Game_Body_117" />
                  <group name="CC_Game_Tongue_118" />
                  <group name="globe_119" />
                  <group name="hair_base_120" />
                  <group name="pants_121" />
                  <group name="shoes_122" />
                  <group name="tops_123" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Jinx/jinx.gltf')
