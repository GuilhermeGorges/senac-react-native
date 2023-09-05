import { Text, StyleSheet, TextInput, Button, TouchableOpacity, View, Image } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Botao from './components/Botao';
import FoodCard from './components/FoodCard';

export default function App() {
  return (
    <View style={styles.main}>
      <Image style={styles.hero} source={require('./assets/home.png')} />
      <View style={styles.container}>
        <Text style={styles.title}> Sistema </Text>
        <Text style={styles.title}> Comanda </Text>
        < TextInput style={styles.input} placeholder='email' />
        < TextInput style={styles.input} placeholder='senha' secureTextEntry />
        <Botao>entrar</Botao>

        <FoodCard
          name='Beef Burguer'
          calories={70}
          value={12.00}
          imageURL={require('./assets/burger.png')}
        />
        <FoodCard
          name='Pancakes'
          calories={60}
          value={12.00}
          imageURL={require('./assets/pancakes.png')} />
        <MaterialIcons name="exit-to-app" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative'
  },
  hero: {
    position: 'absolute',
    width: '100%',
    height: 200,
    zIndex: 1,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4
  }
});
