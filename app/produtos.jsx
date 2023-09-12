import { ScrollView, View, TextInput, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../styles.js";
import Botao from "../components/Botao";
import { useEffect, useState } from "react";

import axios from "axios";

export default function Produtos({navigation}) {
    const [ produtos, setProdutos ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/produtos')
            .then(resp => setProdutos(resp.data));
        console.log(produtos);
    }, []);

    return (
    <View style={styles.containerBetween}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Comanda')}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

                <View style={styles.box}>
                    <Text>comanda</Text>
                    <Text style={styles.title}>2457</Text>
                </View>
            </View>

            <View style={styles.pedidos}>
                <Text style={styles.subtitle}>Pedido</Text>
                <View style={styles.pedidoData}>
                    <Text>Saldo da comanda</Text>
                    <Text>R$ 0,00</Text>
                </View>
                <View style={styles.pedidoData}>
                    <Text>Total do pedido</Text>
                    <Text>R$ +20,00</Text>
                </View>
                <View style={styles.pedidoDataTotal}>
                    <Text>Saldo final</Text>
                    <Text>R$ 149,00</Text>
                </View>
            </View>

            <TextInput style={styles.input} placeholder="procurar" />

            <Text style={styles.subtitle}>Produtos</Text>

            <ScrollView style={styles.scroll}>

            </ScrollView>


            <Botao>finalizar</Botao>
        </View>
    )
}