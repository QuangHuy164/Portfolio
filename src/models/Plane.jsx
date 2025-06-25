import { useAnimations, useGLTF } from '@react-three/drei'
import {useEffect, useRef} from 'react'
import planeScene from '../assets/3d/plane.glb'

const Plane = ({isRotating, ...props}) => {
  const ref = useRef()
    const { scene } = useGLTF(planeScene)
    const {actions} = useAnimations(useAnimations, ref)

    useEffect(() => {
      if(isRotating) {
        actions['Take 001'].play()
      } else {
        actions['Take 001'].stop()
      }
    }, [actions, isRotating])
  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane