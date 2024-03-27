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
function loginScreen({navigation}) {
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
          <>
            <Icone2 name="login" size={100} />
          </>
          <Text style={styles.sectionTitle}>Login</Text>
        </View>
        <View style={styles.sectionTextAreaContainer}>
          <View style={[styles.paddingH15, styles.flexDir]}>
            <TextInput style={styles.input} placeholder="Enter E-mail" />
            <Icone name="envelope" size={25} />
          </View>
          <View style={[styles.paddingH15, styles.flexDir]}>
            <View>
              <Icone name="eye" onPress={toggleShowPassword} size={20} />
            </View>
            <TextInput
              style={[styles.inputPass, styles.margbot15]}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
            />
            <Icone name="lock" size={30} />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.regText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.bottomSign}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.sinup}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.sinup}>Forgot Password..?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
export default loginScreen