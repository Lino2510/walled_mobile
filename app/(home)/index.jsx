import { Link, Stack } from "expo-router";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

function LogoTitle({ avatar }) {
  const [isAvatarActive, setIsAvatarActive] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.avatarContainer,
        { borderColor: isAvatarActive ? "#4cc4c2" : "#19918F" },
      ]}
      onPress={() => setIsAvatarActive((prev) => !prev)}
      activeOpacity={0.8}
    >
      {/* Konten di dalam TouchableOpacity, misalnya gambar */}

      <Image style={styles.image} source={{ uri: avatar }} />
    </TouchableOpacity>
  );
}

export default function Home() {
  const [showBalance, setShowBalance] = useState([true]);
  const [user, setUser] = useState({});
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          const res = await axios.get("https://walled-api.vercel.app/profile", {
            headers: {
              Authorization: `Bearer ${value}`,
            },
          });
          const user = res.data.data;
          setUser(user);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          const res = await axios.get("https://walled-api.vercel.app/profile", {
            headers: {
              Authorization: `Bearer ${value}`,
            },
          });
          const user = res.data.data;
          console.log(user, "....");
          setUser(user);
        }
      } catch (e) {
        // console.log(e);
      }
    };
    const getDataTransactions = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          const res = await axios.get(
            "https://walled-api.vercel.app/transactions",
            {
              headers: {
                Authorization: `Bearer ${value}`,
              },
            }
          );
          const transactions = res.data.data;
          // console.log(transactions, "sekar")
          setTransactions(transactions);
        }
      } catch (e) {
        // console.log(e);
      }
    };
    getData();
    getDataTransactions();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          const res = await axios.get(
            "https://walled-api.vercel.app/transactions",
            {
              headers: {
                Authorization: `Bearer ${value}`,
              },
            }
          );
          const transaction = res.data.data;
          setTransaction(transaction);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    // <View style={styles.container}>
    //   {user?.fullname && <Text>{user.fullname}</Text>}
    //   <Text>Home Screen</Text>
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <LogoTitle avatar={user?.avatar_url} />
            {/* <Image
            source={require("../../assets/avatar.png")}
            style={{ width: 50, height: 50 }}
          /> */}
            <View>
              {user?.fullname && (
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginTop: 20,
                    textAlign: "start",
                  }}
                >
                  {user.fullname}
                </Text>
              )}

              <Text style={{ fontSize: 16, textAlign: "start" }}>
                Personal Account
              </Text>
              <Text style={{ fontSize: 18 }}>{user.typeofaccount}</Text>
            </View>
          </View>
          <Image source={require("../../assets/suntoggle.png")} />
        </View>
        <View style={{ backgroundColor: "#FAFBFD", paddingHorizontal: 23 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 20,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "70%" }}>
              {user?.fullname && (
                <Text
                  style={{ fontSize: 22, fontWeight: "bold", marginBottom: 6 }}
                >
                  Good Morning, {user?.fullname}
                </Text>
              )}

              <Text style={{ fontSize: 17 }}>
                Check all your incoming and outgoing transactions here
              </Text>
            </View>
            <Image
              source={require("../../assets/sun.png")}
              style={{ width: 81, height: 77 }}
            />
          </View>

          <View style={styles.accountnumber}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Account No.
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
              {user.wallet?.account_number}
            </Text>
          </View>

          <View style={styles.balancebox}>
            <View>
              <Text style={{ fontSize: 20 }}>Balance</Text>
              <View style={{ gap: 2 }}>
                <Text style={{ fontSize: 21, fontWeight: "bold" }}>
                  {showBalance
                    ? new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(user.wallet?.balance || 0)
                    : "Rp***"}
                  <TouchableOpacity
                    onPress={() => setShowBalance((prev) => !prev)}
                  >
                    <Image
                      source={require("../../assets/view.png")}
                      style={{ width: 18, height: 18, marginLeft: 10 }}
                    />
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
            <View>
              <View style={{ gap: 20 }}>
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#19918F",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link href="/topup">
                    <FontAwesome6 size={18} name="add" color={"#fff"} />
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#19918F",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link href="/transfer">
                    <FontAwesome size={18} name="send" color={"#fff"} />
                  </Link>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: "#fff",
              marginTop: 40,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                padding: 20,
                borderBottomColor: "#b3b3b3",
                marginTop: 2,
                backgroundColor: "#19918F",
                borderRadius: 10,
                color: "#fff",
              }}
            >
              Transaction History
            </Text>
            {transaction
              ?.sort(
                (a, b) =>
                  new Date(b.transaction_date) - new Date(a.transaction_date)
              )
              .map((tx) => (
                <View
                  key={tx?.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 0.5,
                    paddingVertical: 15,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 5,
                    }}
                  >
                    <Avatar.Text
                      size={50}
                      label={tx.recipient_fullname.charAt(0)}
                    />
                    <View style={{ marginLeft: 10 }}>
                      {" "}
                      {/* Tambahkan jarak antara avatar dan teks */}
                      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        {tx?.recipient_fullname}
                      </Text>
                      <Text style={{ fontSize: 15 }}>
                        {tx?.transaction_type}
                      </Text>
                      <Text style={{ fontSize: 13, color: "#b3b3b3" }}>
                        {new Intl.DateTimeFormat("id-ID", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          hour12: false, // Format 24 jam (non-AM/PM)
                        }).format(new Date(tx?.transaction_date))}
                      </Text>
                    </View>
                  </View>

                  {/* View kanan (Jumlah transaksi) */}
                  <Text
                    style={{
                      fontSize: 14,
                      marginRight: 17,
                      marginLeft: -22,
                      color:
                        user.id === tx.recipient_wallet_id ||
                        tx.transaction_type === "top-up"
                          ? "green"
                          : "red",
                    }}
                  >
                    {tx.recipient_wallet_id === user.id ||
                    tx.transaction_type === "top-up"
                      ? "+"
                      : "-"}
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 2,
                    }).format(tx.amount)}
                  </Text>
                </View>
              ))}
          </ScrollView>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

// const user = {
//   fullname: "John Doe",
//   typeofaccount: "Personal Account",
//   accountnumber: "123456789",
//   balance: "10.000.000",
// };

// const transactions = [
//   {
//     id: 1,
//     date: "08 December 2024",
//     amount: "75.000",
//     name: "Indoapril",
//     type: "Topup",
//     debit: false,
//   },
//   {
//     id: 2,
//     date: "06 December 2024",
//     amount: "80.000",
//     name: "Si Fulan",
//     type: "Transfer",
//     debit: true,
//   },
// ];

const styles = StyleSheet.create({
  balancebox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  accountnumber: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#19918F",
    marginTop: 27,
    marginBottom: 30,
    borderRadius: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 9999,
  },
  avatarContainer: {
    width: 54, // Lebih besar sedikit dari gambar agar border terlihat
    height: 54,
    borderWidth: 3, // Lebar border luar
    borderColor: "#19918F", // Warna border luar
    borderRadius: 9999, // Membuat border menjadi lingkaran
    justifyContent: "center",
    alignItems: "center",
  },
});
