/**
 * Sample React Native App
 *
 * @format
 */
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from './src/screens/home/home';
import loginScreen from './src/screens/login/login';
import registerScreen from './src/screens/register/register';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import styles from './style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icone3 from 'react-native-vector-icons/Ionicons';
import Icone from 'react-native-vector-icons/MaterialIcons';
import {Table, Row, Rows} from 'react-native-table-component';
// function loginScreen({navigation}) {
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   function onPress(): void {
//     console.log('done');
//   } function goToReg(): void {
//     navigation.navigate('Sign Up')
//   }

//   return (
//     <>
//       <SafeAreaView style={backgroundStyle}>
//         <StatusBar
//           barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//           backgroundColor={backgroundStyle.backgroundColor}
//         />
//       </SafeAreaView>
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View style={styles.TitleContainer}>
//           <>
//             <Icone2 name="login" size={100} />
//           </>
//           <Text style={styles.sectionTitle}>Login</Text>
//         </View>
//         <View style={styles.sectionTextAreaContainer}>
//           <View style={[styles.paddingH15, styles.flexDir]}>
//             <TextInput style={styles.input} placeholder="Enter E-mail" />
//             <Icone name="envelope" size={25} />
//           </View>
//           <View style={[styles.paddingH15, styles.flexDir]}>
//             <View>
//               <Icone name="eye" onPress={toggleShowPassword} size={30} />
//             </View>
//             <TextInput
//               style={[styles.inputPass, styles.margbot15]}
//               secureTextEntry={!showPassword}
//               value={password}
//               onChangeText={setPassword}
//               placeholder="Password"
//             />
//             <Icone name="lock" size={30} />
//           </View>
//         </View>
//         <TouchableOpacity style={styles.button} onPress={onPress}>
//           <Text style={styles.regText}>Sign in</Text>
//         </TouchableOpacity>
//         <View style={styles.bottomSign}>
//           <TouchableOpacity onPress={goToReg}>
//             <Text style={styles.sinup}>Sign up</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={onPress}>
//             <Text style={styles.sinup}>Forgot Password..?</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </>
//   );
// }
// function registerScreen({navigation}) {
//   const [password, setPassword] = useState('');
//   const [password2, setPassword2] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showPassword2, setShowPassword2] = useState(false);
//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const toggleShowPassword2 = () => {
//     setShowPassword2(!showPassword2);
//   };
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   function onPress(): void {
//     console.log('done');
//   }
//   return (
//     <>
//       <SafeAreaView style={backgroundStyle}>
//         <StatusBar
//           barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//           backgroundColor={backgroundStyle.backgroundColor}
//         />
//       </SafeAreaView>
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View style={styles.TitleContainer}>
//           <>
//             <Icone name="user-circle-o" size={100} />
//           </>
//           <Text style={styles.sectionTitle}>Create Account </Text>
//         </View>
//         <View style={styles.sectionTextAreaContainer}>
//           <View style={[styles.paddingH15, styles.flexDir]}>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Username"
//               maxLength={8}
//             />
//             <Icone name="user" size={30} />
//           </View>
//           <View style={[styles.paddingH15, styles.flexDir]}>
//             <TextInput style={styles.input} placeholder="Enter E-mail" />
//             <Icone name="envelope" size={25} />
//           </View>
//           <View style={[styles.paddingH15, styles.flexDir]}>
//             <View>
//               <Icone name="eye" onPress={toggleShowPassword} size={30} />
//             </View>
//             <TextInput
//               style={styles.inputPass}
//               secureTextEntry={!showPassword}
//               value={password}
//               onChangeText={setPassword}
//               placeholder="Password"
//             />
//             <Icone name="lock" size={30} />
//           </View>
//           <View
//             style={[styles.paddingH15, styles.flexDir, styles.paddingBot10]}>
//             <Icone name="eye" onPress={toggleShowPassword2} size={30} />
//             <TextInput
//               style={styles.inputPass}
//               secureTextEntry={!showPassword2}
//               value={password2}
//               onChangeText={setPassword2}
//               placeholder="Repeat Password"
//             />
//             <Icone name="lock" size={30} />
//           </View>
//         </View>
//         <TouchableOpacity style={styles.buttonreg} onPress={onPress}>
//           <Text style={styles.regText}>Register</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </>
//   );
// }

// Define screens for the authentication stack

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={loginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={registerScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Home"
        component={Homescreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

// Define screens for the app stack
function AppStackScreen() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Homescreen}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
}
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="Auth">
          <AuthStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{headerShown: false}}
          />
          <AppStack.Screen
            name="App"
            component={AppStackScreen}
            options={{headerShown: false}}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
