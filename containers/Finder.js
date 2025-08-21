import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Finder() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>

      <View style={styles.item}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>Tarea de movil</Text>

        <MaterialIcons name="edit" size={24} color="#fff" style={styles.icon} />

        <MaterialIcons name="delete" size={24} color="#fff" style={styles.icon} />
      </View>

      <View style={styles.item}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>Comprar pollo</Text>
        <MaterialIcons name="edit" size={24} color="#fff" style={styles.icon} />
        <MaterialIcons name="delete" size={24} color="#fff" style={styles.icon} />
      </View>

      <View style={styles.item}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>Hacer invitaciones</Text>
        <MaterialIcons name="edit" size={24} color="#fff" style={styles.icon} />
        <MaterialIcons name="delete" size={24} color="#fff" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#f7c6c7',
    paddingVertical: 10,
    borderRadius: 10,
  },
  item: {
    backgroundColor: '#f7c6c7',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  itemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  icon: {
    marginLeft: 10,
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 6,
  },
});
