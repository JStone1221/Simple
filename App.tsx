import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image } from 'react-native';

const MedicationTrackerApp = () => {
  const [medication, setMedication] = useState<string>('');
  const [medications, setMedications] = useState<string[]>([]);

  const addMedication = () => {
    if (medication) {
      setMedications([...medications, medication]);
      setMedication('');
    }
  };

  const clearMedications = () => {
    setMedications([]);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/logoss.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Medication Tracker</Text>

      <View style={styles.inputContainer}>
        <View style={styles.newMedicationContainer}>
          <Text style={styles.newMedicationLabel}>New Medication:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Text"
            value={medication}
            onChangeText={(text) => setMedication(text)}
          />
        </View>
        <Button title="Add" onPress={addMedication} />
      </View>

      <Text style={styles.currentMedicationsLabel}>Current Medications:</Text>

      <FlatList
        data={medications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.medicationItem}>{item}</Text>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button title="Clear All" onPress={clearMedications} />
      </View>

      {/* Navigation bar at the bottom, spans the entire width */}
      <View style={styles.navigationBar}>
        <Text style={styles.navButton}>Home</Text>
        <Text style={styles.navButton}>Profile</Text>
        <Text style={styles.navButton}>Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    color: 'orange',
  },
  logo: {
    width: 100,
    height: 120,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newMedicationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  newMedicationLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  currentMedicationsLabel: {
    fontSize: 18,
    marginTop: 20,
  },
  medicationItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: 10,
  },
  /* Spanning the entire width of the screen */
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: 50,
    width: '100%', // Full width
  },
  navButton: {
    fontSize: 18,
    color: 'white',
  },
});

export default MedicationTrackerApp;
