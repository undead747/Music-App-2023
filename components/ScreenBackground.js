import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function ScreenBackground({children}) {
  return (
    <LinearGradient
    locations={[0,1]}
    colors={['#883f4e', '#411724']}
    useAngle={true}
    angle={135}
    style={{
      flex: 1,
    }}
>
    {children}
</LinearGradient>
  )
}
