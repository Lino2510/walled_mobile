import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  modalVisible,
  Pressable,
  Modal,
  Alert,
  SaveAreaView,
  Image,
} from "react-native";
import Button from "../components/Button";
// import HelloWorld from './components/HelloWorld';
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handleRegister = () => {
    navigation.navigate("index");
  };
  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.centeredView}> */}
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.popup}>         
              <Text style={styles.modalText}>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself").
                        </Text>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin
Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.</Text>
              </Pressable>
            </View>
          </View>
        </Modal> */}
      {/* </SafeAreaView> */}
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
      <View style={styles.tnc}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text style={styles.checkbox}>
          I have read and agree to the{" "}
          <Link href="/tnc">
            <Text style={{color:'#19918F'}}>
            Terms and Conditions
            </Text>
          </Link>
        </Text>
      </View>

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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    alignSelf: "",
    fontSize: 14,
  },
  checkbox: {
    margin: 3,
    alignSelf: "center",
    fontSize: 14,
  },
  popup:{
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontFamily: "Opensans",
    padding: 16,
  },
  tnc: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  textStyle: {
    padding: 16,
  },
}
);
