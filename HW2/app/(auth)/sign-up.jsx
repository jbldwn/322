import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button } from "react-native-paper";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter, Link } from 'expo-router';

export default function SignUp() {
  const { signIn, setActive, isLoaded} = useSignUp();
  const router = useRouter();
  const [pendingVerification, setPendingVerification] = React.useState();
  const [emailAddress, setEmailAddress] = React.useState();
  const [password, setPassword] = React.useState();
  const [code, setCode] = React.useState();

  const onSignUp = async () =>{
    if(isLoaded){
      return;
    }
    try{
      // if you're testing and just want to auto insert email in code
      // await SignUp.create({emailAddress:"email@example.com", password})
      await signUp.create({emailAddress, password})
      await signUp.prepareEmailAddressVerification({strategy:"email_code"})

      setPendingVerification(true);
    }catch(err){
      console.log("sign up error: ", err.message + " ", JSON.stringify(err, null, 2))
    }
  }

  const onVerifyEmail = async () =>{
    if(!isLoaded){
      return;
    }
    try{
      const completeSignUp = await signUp.attemptEmailAddressVerification({code})

      if(completeSignUp.status=== "complete"){
        await setActive({session: completeSignUp.createdSessionId});
        router.push("/(tabs)")
      }else{
        console.log(JSON.stringify(completeSignUp, null, 2))
      }
    }catch(err){
      console.log("sign up error: ",err.message + " ", JSON.stringify(err, null, 2))
    }

  }
  return (
    <View style={styles.container}>
    <View>
      {!pendingVerification &&(
        <>
        <TextInput style={{marginBottom: 20}}
          autoCapitalize='none' 
          value={emailAddress} 
          keyboardType='email-address' 
          placeholder='email address...' 
          onChangeText={setEmailAddress} 
        />
        </>
      )}
      {!pendingVerification &&(
        <>
          <TextInput style={{marginBottom: 20}}
            value={password} 
            placeholder='password...' 
            secureTextEntry={true} 
            onChangeText={setPassword} 
          />
          <Button mode='outlined' onPress={onSignUp}>
            <Text>Create Account</Text>
          </Button>
        </>
      )}
      {pendingVerification &&(
        <>
          <TextInput value={code} placeholder='code...' keyboardType='numeric' onChangeText={setCode} onPress={onVerifyEmail}/>
          <Button mode='outlined'>
            <Text>Verify Email</Text>
          </Button>
        </>
      )}
    </View>
      <View style={styles.signInArea}>
        <Text>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text style={styles.link}>Sign Up</Text>
        </Link>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 120,
  },
  signInArea: {
    marginTop: 40,
    flexDirection: "row",
  },
  link: {
    marginLeft: 5,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
});
