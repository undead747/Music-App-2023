import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function ScreenBackground({children}) {
  return (
    <LinearGradient
    locations={[0,1]}
    colors={['#883f4e', '#411724']}
    useAngle={true} 
    angle={45} 
    angleCenter={{x:0.5,y:0.5}}
    style={{
      flex: 1,
    }}
>
    {children}
</LinearGradient>
  )
}
