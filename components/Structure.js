import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Structure = (props) => {
    const item = props.item;
    return (
    <View style={style.box}>
        <Text style={style.list}>{item.id}</Text>
        <Text style={style.list}>{item.name}</Text>
    </View>
    )
}

const style = StyleSheet.create({
    list: {
        fontSize: 20,
        backgroundColor: 'black',
        color: 'white',
        marginTop: 10,
        padding: 10,
        flex: 1,
        textAlign: 'center'
    },
    
    box: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})


export default Structure