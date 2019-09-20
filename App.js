import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  //Text,
  Alert
} from "react-native";

import Constants from "expo-constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      en_word: "Yes",
      jp_word: "Hai",
      now_word: "Hai"
    };
    this.flashMe = this.flashMe.bind(this);
  }

  flashMe(e) {
    e.preventDefault();    
    this.setState({
      now_word: this.state.en_word
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.pressButtonSection}>
          <Button
            title={this.state.now_word}
            color="deeppink"            
            onPress={this.flashMe}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    backgroundColor: "black"
  },
  title: {
    textAlign: "center",
    marginVertical: 8    
  },
  pressButtonSection: {
    marginTop: "100%",
    marginLeft: "20%",
    width: "60%",
    height: "50%",
    justifyContent: "center"
  }
});
