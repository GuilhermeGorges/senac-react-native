import { View, Text, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Botao from '../components/Botao';
import { styles } from '../styles';

export default function Comanda() {
    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}> <Teste></Teste>
                <View>
                    <Text>Olá,</Text>
                    <Text style={styles.title}>Guilherme Gorges</Text>
                </View>
                <MaterialIcons name="exit-to-app" size={24} color="black" />
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Comanda" />
                <Botao>Confirmar </ Botao>
            </View>

            <Text>Digite o código da comanda para iniciar um pedido</Text>

        </View>
    )
} 