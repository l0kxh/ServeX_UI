import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { AuthNavigation } from "./AuthNavigation";
import * as Font from "expo-font";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(true);
  const [loading, setLoading] = useState(true); // Changed default to true

  const loadFonts = async () => {
    await Font.loadAsync({
      MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"), // Check path
    });
    setTimeout(() => {
      setFontsLoaded(true);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (loading || !fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: "MontserratBold" }}>Loading...</Text>
      </View>
    );
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthNavigation />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
