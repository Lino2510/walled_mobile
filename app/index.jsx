// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import HelloWorld from './components/HelloWorld';
// import Input from "../components/Input";
// import { useNavigation } from "@react-navigation/native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome girls!!</Text>
//       <Text style={styles.tagline}>be kind and be happy 😊</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 40,
//     backgroundColor: '#AFCBFF',
//     alignItems: 'center', // Optional: Can be removed
//     justifyContent: 'flex-start', // Optional: Can be removed
//   },

//   text: {
//     fontSize: 30, // Ubah ukuran font
//     fontWeight: 'bold', // Ubah ketebalan font
//     color: 'white', // Ubah warna font

//   },
//   tagline: {
//     fontSize: 16, // Ubah ukuran font
//     // fontStyle: 'italic', // Ubah ketebalan font
//     color: 'white', // Ubah warna font
//   },
// });

import { StatusBar } from "expo-status-bar";
import { Link, useNavigation, useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  onPress,
  TouchableOpacity,
  Image,
} from "react-native";
import Button from "../components/Button";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Must be 6 or more characters long" }),
});

export default function App() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrors] = useState({});
  const [serverError, setServerError] = useState(" ");
  const router = useRouter();

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    try {
      LoginSchema.pick({ [key]: true }).parse({ [key]: value });
      setErrors((prev) => ({ ...prev, [key]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [key]: err.errors[0].message }));
    }
  };

  const handleSubmit = async () => {
    try {
      LoginSchema.parse(form);

      const res = await axios.post(
        "https://6776-182-3-53-7.ngrok-free.app/auth/login",
        form
      );
      await AsyncStorage.setItem("token", res.data.data.token);
      router.replace("/(home)");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setServerError(err.response.data.message || "An error occurred");
        } else if (err.request) {
          setServerError("Network error. Please try again later.");
          console.error("Network Error:", err.request);
        } else {
          setServerError("An unexpected error occurred.");
          console.error("Request Setup Error:", err.message);
        }
      } else if (err?.errors) {
        const errors = {};
        err.errors.forEach((item) => {
          const key = item.path[0];
          errors[key] = item.message;
        });
        setErrors(errors);
      } else {
        setServerError("An unknown error occurred.");
        console.error("Unhandled Error:", err);
      }
    }
  };

  return (
    <View style={styles.container}>
      {serverError && <Text>{serverError}</Text>}
      <Image
        source={require("../assets/walled_logo.png")}
        style={styles.logo}
        resizeMode="stretch"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        onChangeText={(text) => handleInputChange("email", text)}
      />

      {errorMsg.email ? (
        <Text style={styles.errorMsg}>{errorMsg.email}</Text>
      ) : null}

      <TextInput
        style={styles.inputpw}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange("password", text)}
        value={form.password}
      />

      {errorMsg.password ? (
        <Text style={styles.errorMsg}>{errorMsg.password}</Text>
      ) : null}

      {/* <Link href="/(home)" style={styles.linkText}>Masuk</Link> */}
      <Button onPress={handleSubmit} text="Login" />
      <Text style={{ alignSelf: "flex-start", padding: 10 }}>
        Don't have account? {""}
        <Link href="/register" style={styles.rgs}>
          Register here
        </Link>
      </Text>

      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 233,
    height: 57,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  inputpw: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  rgs: {
    color: "#19918F",
  },
  blmrgs: {
    alignSelf: "flex-star",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  errorMsg: {
    color: "red",
    width: "100%",
  },
});
