import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function home() {
  return (
    <View style={style.container}>
      <Text>State St Cider Co.</Text>
      <Image style={style.imageReset} source={require('../../assets/images/cider/cidercomplete.jpg')}/>
    </View>
  )   
}

const style = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding:30,
  },
  imageReset:{
    height: 350,
    width: "90%",
    alignSelf: "center"
  }
})
