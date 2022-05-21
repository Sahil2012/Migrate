import React from 'react'
import Particles from 'react-tsparticles'
import particleConfig from './config/ParticalConfig'
export default function ParticalBackground() {
  return (
    <Particles params={particleConfig}></Particles>
  )
}
