// screens/LoginScreen.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/ServeX.png")}
          style={styles.logoStyle}
        />
        <Text style={styles.headerStyle}>
          Welcome Back!
        </Text>
        <Text style={styles.subHeaderStyle}>Please enter your details</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
  },
  logoStyle: {
    width: 150,
    height: 150,
  },
  headerStyle: {
    fontSize: 30,
    fontFamily: "MontserratBold",
  },
  subHeaderStyle: {
    fontSize: 16,
    fontWeight: "500",
      color: "gray",
    fontFamily : "MontserratBold"
  },
});

export default LoginScreen;
