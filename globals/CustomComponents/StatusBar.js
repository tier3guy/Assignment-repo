import { StatusBar } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const CustomStatusBar = ({ styles }) => {

    const Theme = useContext(ThemeContext);
    return <StatusBar {...Theme.light.statusbarOptions}/>
}

export default CustomStatusBar;