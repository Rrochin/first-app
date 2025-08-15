import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  var texto = "hola";

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto}</Text>
      <Text>Hola mundo</Text>
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

texto: {
  color: '#FF0002',
  fontSize: 20,
}
});
