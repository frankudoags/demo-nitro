import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import cppMath from 'cpp-math';


export default function App() {

  const sum = cppMath.add(1, 2);
  console.log('Sum from C++:', sum);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Sum: {sum}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
