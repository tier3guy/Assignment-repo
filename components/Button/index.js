/* Internal Imports */
import { TouchableOpacity } from "react-native";

/* External Imports */
import Icon from "react-native-vector-icons/AntDesign";

/* Contexts */
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const IconMap = {
    message: "message1"
}

const Button = ({ styles, icon, iconStyles, onClickHandlerFunction }) => {

    const Theme = useContext(ThemeContext);

    return (
        <TouchableOpacity 
            onClick={onClickHandlerFunction}
            style={{
                ...styles,
            }}
        >
            <Icon 
                name={IconMap[icon]} 
                size={(iconStyles && iconStyles.size) ? iconStyles.size : 20}
                style={{
                    ...iconStyles,
                }}
                color={(iconStyles && iconStyles.color) ? iconStyles.color : Theme.light.green.dark}
            />
        </TouchableOpacity>
    );
}

export default Button;