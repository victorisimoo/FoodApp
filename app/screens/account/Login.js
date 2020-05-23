import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/logo.png")}
        resizeMode="contain"
        style={styles.Logo}
      />
      <View style={styles.ViewContainer}>
        <Text>Login form</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.Divider} />
      <Text>Social login</Text>
    </ScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();
  return (
    <Text style={styles.TextRegister}>
      ¿Aún no tienes una cuenta?{" "}
      <Text
        style={styles.BtnRegister}
        onPress={() => navigation.navigate("register")}
      >
        Regístrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  ViewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  TextRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  BtnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
  Divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
