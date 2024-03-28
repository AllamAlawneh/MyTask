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
const tableData = {
  tableHead: ['Pass mark', 'The Mark Obtained', 'Subjects'],
  tableData: [
    ['100', '120', 'Math'],
    ['50', '70', 'Physics'],
    ['50', '60', 'Cs'],
    ['150', '170', 'Arabic'],
  ],
};

function Homescreen({navigation}) {
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
  function logot() {
    navigation.navigate('Login');
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
              <Text style={[styles.fontsize16]}>AllamAlawneh</Text>
              <Text style={[styles.fontsize16,styles.fontweight]}>Username : </Text>
            </View>
          </View>
          <View style={[styles.paddingH15]}>
            <View style={styles.username}>
              <Text style={styles.fontsize16}>allam.alawneh@gmail.com</Text>
              <Text style={[styles.fontsize16,styles.fontweight]}>E-Mail : </Text>
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
          <TouchableOpacity onPress={logot} style={styles.flexDirec}>
            <Icone style={styles.logout} name="logout" size={25} />
            <Text style={{fontSize: 18}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
export default Homescreen;
