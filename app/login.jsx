import { Text, TextInput, View, Image } from 'react-native';


import Botao from '../components/Botao.jsx';
import { styles } from '../styles.js';

export default function Login() {
  return (
    <View style={styles.main}>
      <Image style={styles.hero} source={require('../assets/home.png')} />
      <View style={styles.container}>
        <Text style={styles.title}> Sistema </Text>
        <Text style={styles.title}> Comanda </Text>
        < TextInput style={styles.input} placeholder='email' />
        < TextInput style={styles.input} placeholder='senha' secureTextEntry />
        <Botao>entrar</Botao>
      </View>
    </View>
  );
}
