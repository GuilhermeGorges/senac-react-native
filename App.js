import { Text, StyleSheet, TextInput, Button, TouchableOpacity, View, Image } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Botao from './components/Botao';
import FoodCard from './components/FoodCard';

import { styles } from './styles.js';

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


        
        <MaterialIcons name="exit-to-app" size={24} color="black" />
      </View>
    </View>
  );
}

