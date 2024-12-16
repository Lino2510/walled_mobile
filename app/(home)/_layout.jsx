import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

// export default function TabLayout() {
//   return (
//     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => (
//           <AntDesign name="home" size={24} color={color} />
//         ),
//         }}
//       />
//       <Tabs.Screen
//         name="topup"
//         options={{
//           title: 'Top Up',
//           tabBarIcon: ({ color }) => (
//           <AntDesign name="plussquare" size={24} color={color} />
//         ),
//         }}
//       />
//       <Tabs.Screen
//         name="transfer"
//         options={{
//           title: 'Transfer',
//           tabBarIcon: ({ color }) => (
//           <Feather name="send" size={24} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#19918F' }}>
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home', headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="topup"
        options={{
          title: 'Top Up',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="add" color={color} />,
        }}
      />
        <Tabs.Screen
          name="transfer"
          options={{
            title: 'Transfer',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="send" color={color} />,
          }}
        />
    </Tabs>
  );
}
