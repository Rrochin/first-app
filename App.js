import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {

  const showAlert = () => {
    Alert.alert('¡No tan fuerte :(!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi primera app con React Native</Text>

      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={styles.buttonText}>Presióname</Text>
      </TouchableOpacity>
      
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
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  texto: {
    marginTop: 20,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#F8BBD0', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25, 
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
