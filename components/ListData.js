import React from 'react'
import { FlatList, Text, View,StyleSheet,ScrollView } from 'react-native'
import Style from '../style/Style'

const ListData = () => {
    const users = [
        {
            id : 1,
            name : 'piyush'
        },
        {
            id : 2,
            name : 'solani'
        },
        {
            id : 3,
            name : 'sneha'
        },
        {
            id : 4,
            name : 'raj'
        },
        {
            id : 5,
            name : 'raj'
        },
        {
            id : 6,
            name : 'raj'
        },
        {
            id : 7,
            name : 'raj'
        },
        {
            id : 8,
            name : 'raj'
        },
        {
            id : 9,
            name : 'raj'
        },
        {
            id : 10,
            name : 'raj'
        },
        {
            id : 11,
            name : 'raj'
        },
        {
            id : 12,
            name : 'raj'
        },
        {
            id : 13,
            name : 'raj'
        },
        {
            id : 14,
            name : 'raj'
        },
        {
            id : 15,
            name : 'raj'
        },
        {
            id : 16,
            name : 'raj'
        },
        {
            id : 17,
            name : 'raj'
        },
        {
            id : 18,
            name : 'raj'
        },
        {
            id : 19,
            name : 'raj'
        },
        {
            id : 20,
            name : 'raj'
        },
        {
            id : 21,
            name : 'sachin'
        },
        {
            id : 22,
            name : 'prashnat'
        }
    ]
    
  return (
   <View>
    <Text style= {Style.text} >List with Flat List</Text>
      <FlatList data={users} renderItem={({item})=>
      <Text style= {style.list}>{item.name}</Text> 
         } keyExtractor={item => item.id}/>
   {/* <ScrollView style= {{marginBottom:40}}> */}
    
    
  {/* {
    users.map((item)=>{
      return <Text key= {item.id} style= {style.list}>{item.id} : {item.name}</Text>
    })
  } */}
  {/* </ScrollView> */}
   </View>
  )
}

const style = StyleSheet.create({
     list : {
        fontSize : 20,
        backgroundColor : 'black',
        color : 'white',
        marginTop : 10,
        padding : 10,
        // textAlign : 'center' 
    }
})


export default ListData