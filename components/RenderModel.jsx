'use client'
import clsx from "clsx"
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from "react"
import { Environment, OrbitControls } from "@react-three/drei"
import "./render.module.css"
const RenderModel = ({ children, className }) => {
  return (

    <div style={{ width: '500px', height: '900px', position: 'relative' }}>
    <Canvas className={clsx("w-full h-screen ", className)}>
      <Suspense fallback={null}>
        {children}
      </Suspense>
     <OrbitControls />
      <Environment preset="dawn" />
    </Canvas>
    </div>
  )
}

export default RenderModel
