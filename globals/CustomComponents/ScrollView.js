import { useContext } from "react";
import { ScrollView } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

const RNScrollView = ({ children, styles, showHorizontalIndicator, showVerticalIndicator }) => {
    
    const Theme = useContext(ThemeContext);
    return (
        <ScrollView 
            showsHorizontalScrollIndicator = {( showHorizontalIndicator ) ? true : false}
            showsVerticalScrollIndicator = {( showVerticalIndicator ) ? true : false}
            contentContainerStyle = {{
                flex: 1,
                alignItems: "center",
                backgroundColor: Theme.light.grey,
                ...styles
            }}
        >
            { children }
        </ScrollView>
    );
}

export default RNScrollView;