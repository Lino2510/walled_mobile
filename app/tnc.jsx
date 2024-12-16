import { ScrollView, Modal, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Link } from "expo-router";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  modalVisible,
  setModalVisible,
  Alert,
  SaveAreaView,
  Pressable,
  Image,
} from "react-native";

function Tnc() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.containerr}>
      <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.popup}>
              <Text style={styles.modalText}>
                Lorem ipsum is typically a corrupted version of De finibus
                bonorum et malorum, a 1st-century BC text by the Roman statesman
                and philosopher Cicero, with words altered, added, and removed
                to make it nonsensical and improper Latin. The first two words
                themselves are a truncation of dolorem ipsum ("pain itself").
              </Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>
                Lorem ipsum is typically a corrupted version of De finibus
                bonorum et malorum, a 1st-century BC text by the Roman statesman
                and philosopher Cicero, with words altered, added, and removed
                to make it nonsensical and improper Latin Versions of the Lorem
                ipsum text have been used in typesetting at least since the
                1960s, when it was popularized by advertisements for Letraset
                transfer sheets.[1]
              </Text>
              <Text style={styles.textStyle}>
                Lorem ipsum was introduced to the digital world in the
                mid-1980s, when Aldus employed it in graphic and word-processing
                templates for its desktop publishing program PageMaker. Other
                popular word processors, including Pages and Microsoft Word,
                have since adopted Lorem ipsum,[2] as have many LaTeX
                packages,[3][4][5] web content managers such as Joomla! and
                WordPress, and CSS libraries such as Semantic UI.
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  // containerr: {
  //   flex: 1,
  // },
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
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    alignSelf: "flex-start",
  },
  checkbox: {
    margin: 8,
    alignSelf: "flex-start",
  },
  popup: {
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontFamily: "Opensans",
    padding: 14,
  },
  tnc: {
    flexDirection: "row",
  },
  textStyle: {
    padding: 16,
    textAlign: "justify",
    margin: 0.5,
  },
  modalText: {
    textAlign: "justify",
    margin: 0.5,
  },
});

export default Tnc;
