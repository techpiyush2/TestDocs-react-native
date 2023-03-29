import React, { useEffect, useState } from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'

const User = () => {
    const [toggle,setToggle] = useState(false)
    
    useEffect(()=>{
      return ()=> { console.warn('lifecycle called')}
    })
    
  return (
   <View>
     <Text>Hello There</Text>
     <Button title='Toggle' onPress={()=>setToggle(!toggle)}/>
     {
        toggle ? <Text>Working</Text> :      <ActivityIndicator size={100} color ='skyblue' /> 
     }
    </View>
  )
}

export default User