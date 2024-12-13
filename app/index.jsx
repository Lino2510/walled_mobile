// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

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
import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Button from "../components/Button";
// import HelloWorld from './components/HelloWorld';
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate("(home)");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/walled_logo.png")}
        style={styles.logo}
        resizeMode="stretch"
      />

      {/* <Text>Nyoba aja</Text> */}

      {/* <HelloWorld/> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomer Rekening"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        keyboardType="number-pad"
      />
      <Input text="Notes" />
      {/* <Link href = "/(home)">Homescreen</Link> */}
      <Button bgColor="#19918F" text="Login" onPress={handleRegister} />
      <Text style={styles.blmrgs}>
        Don't have account?{" "}
        <Link style={styles.rgs} href="/register">
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
    marginBottom: 15,
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
});
