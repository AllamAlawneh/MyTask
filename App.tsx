/**
 * Sample React Native App
 *
 * @format
 */
import React, {useState} from 'react';

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
const tableData = {
  tableHead: ['Pass mark', 'The Mark Obtain', 'Subjects'],
  tableData: [
    ['100', '120', 'Math'],
    ['50', '70', 'Physics'],
    ['50', '60', 'Cs'],
    ['150', '170', 'Arabic'],
  ],
};
function App() {
  const [data, setData] = useState(tableData);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function onPress(): void {
    console.log('done');
  }
  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.TitleContainer}>
        
          <Icone3 name="home" size={100} />

          <Text style={styles.sectionTitle}>Home Page</Text>
        </View>
        <View style={styles.sectionTextAreaContainer}>
          <View style={[styles.paddingH15]}>
            <View style={styles.username}>
              <Text style={styles.fontsize16}>AllamAlawneh</Text>
              <Text style={styles.fontsize16}>Username</Text>
            </View>
          </View>
          <View style={[styles.paddingH15]}>
            <View style={styles.username}>
              <Text style={styles.fontsize16}>allam.alawneh@gmail.com</Text>
              <Text style={styles.fontsize16}>E-Mail</Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 3, borderColor: '#959c97'}}>
            <Row
              data={data.tableHead}
              style={styles.head}
              textStyle={styles.headText}
            />
            <Rows data={data.tableData} textStyle={styles.text} />
          </Table>
          <TouchableOpacity style={styles.flexDirec}>
            <Icone style={styles.logout} name="logout" size={25} />
            <Text style={{fontSize: 18}}>Logout</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name="Login" component={loginScreen} />
//     <Stack.Screen name="Sign Up" component={registerScreen} />
//   </Stack.Navigator>
// </NavigationContainer>
export default App;
