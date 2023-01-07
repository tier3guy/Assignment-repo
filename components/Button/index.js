/* Internal Imports */
import { TouchableOpacity } from "react-native";

/* External Imports */
import Icon from "react-native-vector-icons/AntDesign";

/* Contexts */
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { HeaderText } from "../../globals/Typography";

const IconMap = {
    message: "message1"
}

const Button = ({ styles, icon, iconStyles, onClickHandlerFunction, text, color }) => {

    const Theme = useContext(ThemeContext);
    if(text){
        return(
            <TouchableOpacity 
                onClick={onClickHandlerFunction}
                style={{
                    backgroundColor: color.dark,
                    padding: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    ...styles
                }}
            >
                <HeaderText text={text} styles={{fontSize: 16, color: "white"}}/>
            </TouchableOpacity>
        );
    }
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