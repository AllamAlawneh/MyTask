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
} from 'react-native';
import styles from './style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icone from 'react-native-vector-icons/FontAwesome';
import Icone2 from 'react-native-vector-icons/MaterialCommunityIcons';
function registerScreen({navigation}) {
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
        <View style={styles.sectionContainer}>
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
              maxLength={8}
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
        <TouchableOpacity style={styles.buttonreg} onPress={onPress}>
          <Text style={styles.regText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
export default registerScreen;
