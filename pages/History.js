import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function History() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    // Retrieve the history data from AsyncStorage
    const getHistoryData = async () => {
      try {
        const history = await AsyncStorage.getItem('scannedHistory');
        if (history) {
          setHistoryData(JSON.parse(history));
        }
      } catch (error) {
        console.error('Error retrieving history data:', error);
      }
    };

    getHistoryData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan History</Text>
      <FlatList
        data={historyData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});