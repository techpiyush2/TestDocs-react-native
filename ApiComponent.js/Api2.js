import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
const Api2 = () => {
    const [name,setName] = useState(null)
    const [code,setCode] = useState(null)
    const [currency,setCurrency] = useState(null)
    const [currencyCode,setCurrencyCode] = useState(null)
    
    const url = 'http://10.0.2.2:4000/v1/country/add'
    
    const callFunc = async() =>{
       await axios.post(url,{
            name, code , currency,currencyCode
        })
    }
    
  return (
    <View>
      <Text style = {style.text}>Create Country</Text>
      <TextInput style= {style.input} value={name}  onChangeText = {(text)=> setName(text) } placeholder='Enter Name'/>
      <TextInput  style= {style.input} value={code}  onChangeText = {(text)=> setCode(text) } placeholder='Enter Code'/>
      <TextInput  style= {style.input} value={currency}  onChangeText = {(text)=> setCurrency(text)} placeholder='Enter Currency Name'/>
      <TextInput  style= {style.input} value={currencyCode} onChangeText = {(text)=> setCurrencyCode(text)} placeholder='Enter currency code'/> 
      <View style= {style.button}>
      <Button color = '#0b7d77' onPress={()=>callFunc()} title='Create Country'/>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    text : {
      fontSize : 25,
      textAlign : 'center',
      color : '#0b7d77',
      padding : 10,
      marginBottom :20
    },
    input : {
        color : '#0b7d77',
        borderWidth : 3,
        marginBottom : 10,
        borderColor : '#0b7d77',
    },
    button : {
       margin : 20 
    }
})


export default Api2