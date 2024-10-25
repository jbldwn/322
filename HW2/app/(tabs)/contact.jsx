import { View, Text, StyleSheet, Image, Button  } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Colors"
import { router } from 'expo-router'
import Foundation from '@expo/vector-icons/Foundation';

export default function contact() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Cider-time</Text>
      <Image  style={style.imageReset} source={require('../../assets/images/cider/ciderprocess.jpg')} /> v
      <View>
        <Text style={style.titleSub}>This is a blurb about the roots of our cider company. Started in the basement of our home on State Street, we've been proudly brewing annually since 2020.</Text>
        
        
        <Text>Phone: 341-555-9849</Text>
        <Text>Email: contact@stateStreetCiderCo.com</Text>
        <Text>socials:  <Foundation name="social-tumblr" size={24} color="black" /> <Foundation name="social-yelp" size={24} color="black" /> <Foundation name="social-myspace" size={24} color="black" /></Text>
        
      </View>
      <Button title='Lets start over' color={Colors.active.contact} onPress={()=> router.push("/home")}></Button>
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