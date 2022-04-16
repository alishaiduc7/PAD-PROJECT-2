import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text></Text>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D484D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
