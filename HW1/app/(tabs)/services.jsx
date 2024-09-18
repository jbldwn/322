import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function services() {
  return (
    <View style={style.container}>
      <Text>State St Ciders</Text>
      <Image  style={style.imageReset} source={require('../../assets/images/cider/bottles.jpg')} />
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