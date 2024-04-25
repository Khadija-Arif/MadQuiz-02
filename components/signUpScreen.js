import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";
import { stylesSignInandUp } from "./style";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigation.reset({
            index: 0,
            routes: [{ name: "MainScreen" }],
          });
        }
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
      <Text style={stylesSignInandUp.title}>Sign Up</Text>
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

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}

        onChangeText={setConfirmPassword}
        style={stylesSignInandUp.input}
        secureTextEntry={true}
      />
      <Pressable onPress={handleSignUp} style={stylesSignInandUp.button}>
        <Text style={stylesSignInandUp.buttonText}>Sign Up</Text>
      </Pressable>
      <View style={stylesSignInandUp.footer}>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("SignIn")}>
        <Text style={[stylesSignInandUp.link, { fontWeight: "bold" }]}>Sign in</Text>
        </Pressable>
      </View>
      </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;
