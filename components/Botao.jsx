import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles";

export default function Botao(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.button}>{props.children}</Text>
        </TouchableOpacity>
    )
}
