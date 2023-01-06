import { Text } from "react-native";

/* Contexts */
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = ({text, styles}) => {

    const Theme = useContext(ThemeContext);
    return (
        <Text
            style={{
                fontFamily: "Poppins",
                fontSize: 22,
                color: Theme.light.black,
                ...styles
            }}
        >
            {text}
        </Text>
    );
}

export default Header;