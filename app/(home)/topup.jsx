import { Text, View, StyleSheet, useState } from "react-native";
import Input from "../../components/Input";
import Amount from "../../components/Amount";
import Button from "../../components/Button";

// function TopUp() {
//     return(
//         <View>
//             <Text>Top Up Activity</Text>
//         </View>
//     )
// }

function Topup() {
  return (
    <View style={styles.container}>
      <Amount marginBottom={24} />
      <Input text={"Notes"} />
      <Button text={"Top Up"} marginTop={150} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default Topup;
