import { Text } from "react-native";

/* Contexts */
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Cursive = ({text, styles}) => {

    const Theme = useContext(ThemeContext);
    return (
        <Text
            style={{
                fontFamily: "DancingScript",
                fontSize: 22,
                color: Theme.light.black,
                ...styles
            }}
        >
            {text}
        </Text>
    );
}

export default Cursive;