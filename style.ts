import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  TitleContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderWidth: 3,
    borderColor: '#959c97',
    borderRadius: 30,
  },
  sectionTextAreaContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: '#959c97',
    borderRadius: 30,
  },
  input: {
    height: 35,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#959c97',
    width: '85%',
  },
  inputPass: {
    height: 35,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#959c97',
    width: '75%',
  },
  paddingVertical15: {
    paddingVertical: 25,
  },
  paddingH15: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  paddingBot10: {
    paddingBottom: 10,
  },
  margbot15: {
    marginBottom: 15,
  },
  buttonreg: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#959c97',
    borderRadius: 30,
    padding: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#959c97',
    borderRadius: 30,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginTop: 20,
  },
  regText: {
    fontSize: 25,
  },
  flexDirec: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#959c97',
    flexDirection: 'row',
    alignSelf: 'flex-end',

    marginTop: 5,
    padding: 5,
  },
  flexDir: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  fontsize18: {
    fontSize: 18,
  },
  sinup: {
    fontSize: 18,
    borderBottomWidth: 3,
    borderColor: '#959c97',
    paddingBottom: 3,
  },
  bottomSign: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  logout: {
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  username: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  fontsize16: {
    fontSize: 16,
  },
  container: {flex: 1, padding: 10, justifyContent: 'center'},
  head: {height: 44, backgroundColor: '#959c97'},
  headText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  text: {margin: 6, fontSize: 16, fontWeight: 'bold', textAlign: 'center'},
});
export default styles;
