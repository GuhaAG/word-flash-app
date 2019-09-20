import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert
} from "react-native";

import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="Press me"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  title: {
    textAlign: "center",
    marginVertical: 8
  }
});
