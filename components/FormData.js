import React from 'react'
import { Button, Text, View } from 'react-native'

const FormData = ({route,navigation}) => {
    const {userName,email,password} = route.params
  return (
    <View>
        <Text>Form data</Text>
        <Text>Name : {userName}</Text>
        <Text>email : {email}</Text>
        <Text>password : {password}</Text>
        <Button title='go to Home' onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}

export default FormData