import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent="true" style={styles.ViewBadoy}>
      <Image
        source={require("../../../assets/img/original.jpg")}
        resizeMode="contain"
        style={styles.Image}
      />
      <Text style={styles.Title}>Consulta tu perfil</Text>
      <Text style={styles.Description}>
        ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado más y
        comenta tu experiencia
      </Text>
      <View style={styles.ViewBtn}>
        <Button
          buttonStyle={styles.BtnStyle}
          containerStyle={styles.BtnContainer}
          title="Ver tu perfil"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ViewBadoy: {
    marginLeft: 30,
    marginRight: 30,
  },
  Image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  Description: {
    textAlign: "center",
    marginBottom: 20,
  },
  BtnStyle: {
    backgroundColor: "#00a680",
  },
  BtnContainer: {
    width: "70%",
  },
  ViewBtn: {
    flex: 1,
    alignItems: "center",
  },
});
