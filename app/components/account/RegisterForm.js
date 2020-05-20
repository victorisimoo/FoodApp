import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  return (
    <View style={styles.FormContainer}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.InputForm}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.IconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.InputForm}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.IconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.InputForm}
        secureTextEntry={showRepeatPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "lock-open-outline" : "lock-outline"}
            iconStyle={styles.IconRight}
            onPress={() => setShowRepeatPassword(!showRepeatPassword)}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.BtnContainerRegister}
        buttonStyle={styles.BtnRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  FormContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  InputForm: {
    width: "100%",
    marginTop: 20,
  },
  BtnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  BtnRegister: {
    backgroundColor: "#00a680",
  },
  IconRight: {
    color: "#c1c1c1",
  },
});
