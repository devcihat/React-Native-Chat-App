import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Deneme from "../components/Button";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={{ marginTop: 64 }}>
        <Image
          source={require("../../assets/splash.png")}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
      </View>
      <View>
        <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "600" }}>
          Login Screen
        </Text>
      </View>
      <View style={{ marginHorizontal: 32 }}>
        <TextInput
          placeholder="Please Email"
          style={styles.input}
          onChangeText={(email) => {
            setEmail(email);
          }}
          value={email}
        />
        <TextInput
          placeholder="Please Password"
          style={styles.input}
          onChangeText={(password) => {
            setPassword(password);
          }}
          value={password}
          secureTextEntry
        />
        <View style={{ marginTop: 28, alignItems: "center" }}>
          <Deneme />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
    justifyContent: "center",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "#514E5A",
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#51435A",
    fontWeight: "600",
    borderWidth: StyleSheet.hairlineWidth,
  },
});
