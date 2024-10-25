import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Colors"
import { router } from 'expo-router'

export default function about() {
  return (
    <View style={style.container}>
      <Text style={style.title}>State St made</Text>
      <Image  style={style.imageReset} source={require('../../assets/images/cider/bottles2.jpg')} />
      <View>
        <Text style={style.titleSub}>This is a blurb about the roots of our cider company. Started in the basement of our home on State Street, we've been proudly brewing annually since 2020.</Text>
        <Text style={style.titleSub}>Cleaning closets in 2020, I found my spouse's brew kit. Bored out of our gourds, we've never been big beer fans, so we decided to try cider. We're so ex-cidered we did.</Text>
      </View>
      <Button title='See our Cider dreams' color={Colors.active.about}onPress={()=> router.push("/services")}></Button>
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
    marginBottom: 15,
  },
  imageReset:{
    height: 350,
    width: "90%",
    alignSelf: "center"
  }
})