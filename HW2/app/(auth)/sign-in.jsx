import { useAuth, useSignIn } from "@clerk/clerk-expo";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function SignIn() {
  const {SignIn, setActive, isLoaded} = useSignIn();
  const router = useRouter();
  const [emailAddress, setEmailAddress] = React.useState();
  const [password, setPassword] = React.useState();
    
  const onSignIn = React.useCallback( async () =>{
    if(!isLoaded){
      return
    }
    try{
      const signInAttempt = await signIn.create({
        // identifier: "Test@notSerious.com",
        identifier: emailAddress,
        password: password,
      })

      if(signInAttempt.status ==="complete"){
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        router.push("/(tabs)")
      }else{
        console.log(JSON.stringify(signInAttempt, null, 2))
      }
    }catch(err){
      console.log("sign up error: ",err.message + " ", JSON.stringify(err, null, 2))

    }
  },[isLoaded, emailAddress, password]);

  return (
    <View style={styles.container}>
      <TextInput 
          autoCapitalize='none' 
          value={emailAddress} 
          keyboardType='email-address' 
          placeholder='email address...' 
          onChangeText={setEmailAddress} 
        />
      <TextInput 
            value={password} 
            placeholder='password...' 
            secureTextEntry={true} 
            onChangeText={setPassword} 
          />
          <Button mode='outlined' onPress={onSignIn}>
            <Text>login</Text>
          </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flex: 1
  }
})