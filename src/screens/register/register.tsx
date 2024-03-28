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
  TextInput,
  useColorScheme,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import styles from './style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icone from 'react-native-vector-icons/FontAwesome';
import Icone2 from 'react-native-vector-icons/MaterialCommunityIcons';
function registerScreen({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function validate_password(password: string) {
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (password.match(check)) {
      if (password != password2) {
        Alert.alert('Not Allowed', 'The passwords are not the same');
      } else {
        navigation.navigate('Login');
      }
    } else {
      Alert.alert('Not Allowed', 'The password must be hard');
    }
  }

  function backTolog() {
    if (user.length >= 8) {
      validate_password(password);
    } else
      Alert.alert(
        'Not Allowed',
        'The username must be at least 8 characters long',
      );
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
          <>
            <Icone name="user-circle-o" size={100} />
          </>
          <Text style={styles.sectionTitle}>Create Account </Text>
        </View>
        <View style={styles.sectionTextAreaContainer}>
          <View style={[styles.paddingH15, styles.flexDir]}>
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              value={user}
              onChangeText={setUser}
            />
            <Icone name="user" size={30} />
          </View>
          <View style={[styles.paddingH15, styles.flexDir]}>
            <TextInput style={styles.input} placeholder="Enter E-mail" />
            <Icone name="envelope" size={25} />
          </View>
          <View style={[styles.paddingH15, styles.flexDir]}>
            <View>
              <Icone name="eye" onPress={toggleShowPassword} size={20} />
            </View>
            <TextInput
              style={styles.inputPass}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
            />
            <Icone name="lock" size={30} />
          </View>
          <View
            style={[styles.paddingH15, styles.flexDir, styles.paddingBot10]}>
            <Icone name="eye" onPress={toggleShowPassword2} size={20} />
            <TextInput
              style={styles.inputPass}
              secureTextEntry={!showPassword2}
              value={password2}
              onChangeText={setPassword2}
              placeholder="Repeat Password"
            />
            <Icone name="lock" size={30} />
          </View>
        </View>
        <TouchableOpacity style={styles.buttonreg} onPress={backTolog}>
          <Text style={styles.regText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
export default registerScreen;
