import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props) {
  const { isVisible, text } = props;
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rbga(0, 0, 0, 0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.Overlay}
    >
      <View style={styles.View}>
        <ActivityIndicator size="large" color="#00A680" />
        {text && <Text style={styles.Text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  Overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#00a680",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
  },
  View: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "#00a680",
    textTransform: "uppercase",
    marginTop: 10,
  },
});
