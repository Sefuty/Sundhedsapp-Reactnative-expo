import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const OpsummeringScreen = () => {
  const currentDate = new Date();
  const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const dayAndMonth = currentDate.toLocaleDateString('da-US', { day: 'numeric', month: 'long' });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{weekday}</Text>
        <Text style={styles.headerText}>{dayAndMonth}</Text>  
      </View>
      <View style={styles.chartContainer}>
        {/* diagram over skærmtid */}
        {/* render diagram */}
        <Text style={styles.chartText}>Ugentlig Skærmtid</Text>
        {/* Place holder for den ugelige graf */}
      </View>
    </View>
  );
};

const MålScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Mål</Text>
    {/* MÅL    */}
  </View>
);

const IndstillingerScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Indstillinger</Text>
    {/* instillinger */}
  </View>
);

const SecondScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Opsummering" component={OpsummeringScreen} />
    <Tab.Screen name="Mål" component={MålScreen} />
    <Tab.Screen name="Indstillinger" component={IndstillingerScreen} />
  </Tab.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="SecondScreen" component={SecondScreen} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

const HomePage = ({ navigation }) => {
  const handleContinue = () => {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#888',
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
