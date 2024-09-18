import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function about() {
  return (
    <View style={style.container}>
      <Text>State St made</Text>
      <Image  style={style.imageReset} source={require('../../assets/images/cider/bottles2.jpg')} />
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