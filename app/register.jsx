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
    navigation.navigate("index");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/walled_logo.png")}
        style={styles.logo}
        resizeMode="stretch"
      />

      <TextInput
        style={styles.input}
        placeholder="Fullname"
        placeholderTextColor="#aaa"
        keyboardType="text"
      />

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
        placeholder="Avatar URL"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        keyboardType="url"
      />
      <Button onPress={handleRegister} bgColor="#19918F" text="Register" />
      <Text style={styles.sdhrgs}>
        Already have account?{" "}
        <Link style={styles.link} href="/">
          Login here
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
  text: {
    fontSize: 24,
    fontWeight: "bold",
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
  link: {
    color: "#19918F",
    alignSelf: "flex-start",
  },
  sdhrgs: {
    alignSelf: "flex-start",
  },
});
