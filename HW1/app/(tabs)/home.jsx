import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Colors"
import { router } from 'expo-router'

export default function home() {
  return (
    <View style={style.container}>
      <Text style={style.title}>State St Cider Co.</Text>
      <Image style={style.imageReset} source={require('../../assets/images/cider/cidercomplete.jpg')}/>
      <Text style={style.titleSub}>making your cider dreams come true</Text>
      <Button title='find out more' color={Colors.active.home} onPress={()=> router.push("/about")}></Button>
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
  title:{
    fontFamily: "Del",
    fontSize: 34,
  },
  titleSub:{
    fontFamily: "Lora",
    fontSize: 16,
    color: "#414141",
    alignSelf: 'center',
  },
  imageReset:{
    height: 350,
    width: "90%",
    alignSelf: "center"
  }
})
