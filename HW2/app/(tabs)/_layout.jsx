/* Tabs holder component */

import { Tabs } from "expo-router";
import {Colors} from "../../constants/Colors";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout(){
    return(
        <Tabs>
            <Tabs.Screen name="home" options={{ tabBarActiveTintColor: Colors.active.home, tabBarIcon:({color})=> <AntDesign name="home" size={24} color={color}/>}}></Tabs.Screen>
            <Tabs.Screen name="about" options={{ tabBarActiveTintColor: Colors.active.about, tabBarIcon:({color})=> <AntDesign name="team" size={24} color={color}/>}}></Tabs.Screen>
            <Tabs.Screen name="services" options={{ tabBarActiveTintColor: Colors.active.services, tabBarIcon:({color})=> <AntDesign name="save" size={24} color={color}/>}}></Tabs.Screen>
            <Tabs.Screen name="contact" options={{ tabBarActiveTintColor: Colors.active.contact, tabBarIcon:({color})=> <AntDesign name="phone" size={24} color={color}/>}}></Tabs.Screen>
        </Tabs>
    )
}