import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "../styles";

export default function Botao(props) {
    return (
        <TouchableOpacity>
            <Text style={styles.button}>{props.children}</Text>
        </TouchableOpacity>
    )
}
