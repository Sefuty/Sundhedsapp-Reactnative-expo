import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  const handleContinue = () => {
    // Navigate to another screen named 'SecondScreen'
    navigation.navigate('SecondScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til vores Sundheds App</Text>
      <Text style={styles.description}>
        Vi er her for at hjælpe dig med at reducere din skærmtid og fremme en sundere digital livsstil.
      </Text>
      <Text style={styles.description}>
        Vores app giver dig mulighed til at overvåge og administrere din skærmtid, så du kan opnå en
        bedre balance mellem både online og offline aktiviteter.
      </Text>
      <Button title="Fortsæt" onPress={handleContinue} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
  },
});

export default HomePage;
