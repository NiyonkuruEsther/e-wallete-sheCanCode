import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import ImagePicker from "react-native-image-picker";

export default class App extends Component {
  state = {
    resourcePath: {}
  };

  selectFile = () => {
    const options = {
      title: "Select Image",
      customButtons: [
        {
          name: "customOptionKey",
          title: "Choose file from Custom Option"
        }
      ],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, (res) => {
      console.log("Response = ", res);
      if (res.didCancel) {
        console.log("User cancelled image picker");
      } else if (res.error) {
        console.log("ImagePicker Error: ", res.error);
      } else if (res.customButton) {
        console.log("User tapped custom button: ", res.customButton);
        alert(res.customButton);
      } else {
        this.setState({
          resourcePath: res
        });
      }
    });
  };

  render() {
    const { resourcePath } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri: "data:image/jpeg;base64," + resourcePath.data
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: resourcePath.uri }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ alignItems: "center" }}>{resourcePath.uri}</Text>
          <TouchableOpacity onPress={this.selectFile} style={styles.button}>
            <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 16
  },
  buttonText: {
    fontSize: 20
  }
});
