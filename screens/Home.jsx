import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('About Me')}
        style={[styles.section, styles.firstSection]}
      >
        <View style={styles.rowContent}>
          <Text style={styles.label}>About Me</Text>
          <Icon name="ios-arrow-forward" size={24} color="#333" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Blood Group')} style={styles.section}>
        <View style={styles.rowContent}>
          <Text style={styles.label}>Blood Group</Text>
          <Icon name="ios-arrow-forward" size={24} color="#333" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Resume')} style={styles.section}>
        <View style={styles.rowContent}>
          <Text style={styles.label}>Resume</Text>
          <Icon name="ios-arrow-forward" size={24} color="#333" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  firstSection: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
