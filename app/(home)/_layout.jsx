import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
        }}
      />
      <Tabs.Screen
        name="topup"
        options={{
          title: 'Top Up',
          tabBarIcon: ({ color }) => (
          <AntDesign name="plussquare" size={24} color={color} />
        ),
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: 'Transfer',
          tabBarIcon: ({ color }) => (
          <Feather name="send" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
