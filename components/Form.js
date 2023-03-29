import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Styles from '../style/Style'



const Form = ({navigation}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [display,setDisplay] = useState(false)

    const resetInput = () =>{
        setDisplay(false)
        setName('');
        setEmail('');
        setPassword('');
        navigation.navigate('FormData',{
            userName : name,
            email : email,
            password : password
        })
    }
    
  return (
    
    <View>
        <Text style ={Styles.textBox}>Basic Form With Native</Text>
        
        <TextInput onChangeText={(text)=>{setName(text)}} value = {name} style= {Styles.Input} placeholder='Enter Name'></TextInput>
        
        <TextInput onChangeText={(text)=>{setEmail(text) 
        }} value= {email} style= {Styles.Input} placeholder='Enter Email'></TextInput>
        
        <TextInput secureTextEntry ={true} onChangeText={(text)=>{setPassword(text)}} style= {Styles.Input} value= {password}  placeholder='Enter Password'></TextInput>
        
        <View style = {{marginBottom : 20}}>
        <Button  onPress={()=>{setDisplay(true)}} style= {Styles.Button} title='Submit'/>
        </View>
        
        <Button  onPress={()=>{resetInput()}} style= {Styles.Button} title='Clear Input Fields'/>
        

        <View>
        {
            display ?
            <View>
               
        <Text style= {Styles.text} > My Name is {name}</Text>
        <Text style= {Styles.text} > My Email is {email}</Text>
        <Text style= {Styles.text} > My password is {password}</Text>
        
            </View> : null
            
        }
        </View>
        
    </View>
  )
}

export default Form