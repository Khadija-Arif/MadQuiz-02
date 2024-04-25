import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { stylesSignInandUp } from "./style";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.reset({
          index: 0,
          routes: [{ name: "MainScreen" }],
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View style={stylesSignInandUp.container}>
      <ImageBackground
        source={require("../assets/abcde.jpg")}
        style={stylesSignInandUp.backgroundImage}
      >
        <View style={stylesSignInandUp.formContainer}>
          <Text style={stylesSignInandUp.title}>Sign In</Text>

          {error ? <Text style={stylesSignInandUp.error}>{error}</Text> : null}
        
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={stylesSignInandUp.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />
      
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={stylesSignInandUp.input}
            secureTextEntry={true}
          />
          <Pressable onPress={handleSignIn} style={stylesSignInandUp.button}>
            <Text style={stylesSignInandUp.buttonText}>Sign In</Text>
          </Pressable>
          <View style={stylesSignInandUp.footer}>
            <Text>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={[stylesSignInandUp.link, { fontWeight: "bold" }]}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;
