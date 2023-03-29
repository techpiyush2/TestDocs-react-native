import React, { useEffect, useState } from 'react'
import { Text, View,StyleSheet, ScrollView, ActivityIndicator } from 'react-native'

const ApiList = () => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true);
    const url = "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
        fetch(url)
          .then((resp) => resp.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    
  return (
    <View style={styles.container}>
           <ScrollView>
        
    {loading ? (
      <View style={{flex : 1, flexDirection : 'row'}}>
         <ActivityIndicator style= {{flex : 1,alignItems : 'center'}} size = {100} color= 'black'/>
      </View>
    ) : (
      data.map((post) => {
        return (
         <View>
           <Text key={post.id} style={styles.title}>{post.title}</Text>
            <Text>{post.body}</Text>
          </View>
        );
      })
    )}
           </ScrollView>
    
  </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ecf0f1",
      padding: 8,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });

export default ApiList