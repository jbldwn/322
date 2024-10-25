import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter, Link } from "expo-router";

export default function Signin() {
  const router = useRouter();
  const { Signin, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState();
  const [password, setPassword] = React.useState();

  const onSignIn = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const signInAttempt = await SignIn.create({
        identifier: emailAddress,
        password: password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        router.push("/(tabs)");
      } else {
        console.error(
          "SignIN Error: ",
          err + " ",
          JSON.stringify(err, null, 2)
        );
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        keyboardType="email-address"
        placeholder="Email..."
        onChangeText={(email) => setEmailAddress(email)}
      />
      <TextInput
        value="{password}"
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button mode="outlined" onPress={onSignIn}>
        Sign In
      </Button>
      <View style={styles.signInArea}>
        <Text>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text style={styles.link}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 120,
  },
  signInArea: {
    marginTop: 20,
    flexDirection: "row",
  },
  link: {
    marginLeft: 5,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
});
