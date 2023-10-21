import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BarcodeScannerScreen from './pages/BarcodeScannerScreen';
import History from './pages/History';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function App() {
  const Tab= createBottomTabNavigator();
  return (
    <View style={{flex:1}}>
       
      {/* <BarcodeScannerScreen></BarcodeScannerScreen> */}
      <NavigationContainer>

      <Tab.Navigator >
        <Tab.Screen
        name='Scanner'
        component={BarcodeScannerScreen}
        options={{
          tabBarLabel:'Scanner',
          tabBarLabelStyle:{color:"#008E97"},
          headerShown:false,
          tabBarIcon:({focused})=>
          focused?(
            <FontAwesome5 name="qrcode" size={34} color="black" />
          ):
          (
            <FontAwesome5 name="qrcode" size={24} color="cyan" />
          )
        }}
        ></Tab.Screen>
        
        <Tab.Screen
        name='History'
        component={History}
        options={{
          tabBarLabel:'History',
          tabBarLabelStyle:{color:"#008E97"},
          headerShown:false,
          tabBarIcon:({focused})=>
          focused?(
            <FontAwesome5 name="history" size={34} color="black" />
          ):
          (
            <FontAwesome5 name="history" size={24} color="cyan" />
          )
        }}
        ></Tab.Screen>
        
      </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
});
