import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../components/account/RegisterForm";

export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/logo.png")}
        resizeMode="contain"
        style={styles.Logo}
      />
      <View styles={styles.ViewForm}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  ViewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});
