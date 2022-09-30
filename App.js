import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './src/Footer';
import Header from './src/Header';

export default function App() {
  return (
    <>
    <Header/>
    <View style={styles.container}>
      <Text>Body</Text>
      <StatusBar style="auto" />
    </View>
    <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aba',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
