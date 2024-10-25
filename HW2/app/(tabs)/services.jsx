import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Colors"
import { router } from 'expo-router'

export default function services() {
  return (
    <View style={style.container}>
      <Text style={style.title}>State St Ciders</Text>
      <Image  style={style.imageReset} source={require('../../assets/images/cider/bottles.jpg')} />
      <View>
        <View style={style.ciderType}>
        <Image  style={style.cider} source={require('../../assets/images/cider/bottles.jpg')} />
        <View style={style.ciderRight}>
          <Text style={style.titleSub}>Made with love, this cider has notes of cinnamon and carmel</Text>
          <Button title="get it" color={Colors.active.home} ></Button>
        </View>
        </View>
        
      </View>
      <Button title="can't find your cider dream?" color={Colors.active.services} onPress={()=> router.push("/contact")}></Button>
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
  },
  cider:{
    height: 130,
    width: 80,
  },
  ciderType:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding:30,
  },
  ciderRight:{
    width: "60%",
    flexDirection: "column",
    justifyContent: "space-between"
  }
})