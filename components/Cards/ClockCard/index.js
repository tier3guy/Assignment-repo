import { useContext } from "react";
import { Dimensions, View } from "react-native";
import { ThemeContext } from "../../../context/ThemeContext";
import Icon from "react-native-vector-icons/FontAwesome";
import { HeaderText } from "../../../globals/Typography";
import Button from "../../Button";

const IconMapper = {
    clock: "clock-o",
    tree: "tree"
}

const ClockCard = ({icon, iconStyles, color, containerStyles}) => {

    const Theme = useContext(ThemeContext);
    return (
        <View
            style={{
                width: Dimensions.get("screen").width - 40,
                padding: 10,
                borderColor: color.dark,
                borderWidth: 2,
                backgroundColor: color.light,
                borderRadius: 20,
                alignSelf: "center",
                margin: 20,
                elevation: 4,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                ...containerStyles,
            }}
        >

            <Icon 
                name={IconMapper[icon]}
                style={{
                    ...iconStyles
                }}
                size={(iconStyles && iconStyles.size) ? iconStyles.size : 30}
                color={color.dark}
            />

            <View>
                <HeaderText text="06/01/2023"/>
                <HeaderText text="Clock In - 12:31" styles={{fontSize: 14}}/>
                <HeaderText text="Clock Out - 09:23" styles={{fontSize: 14}}/>
            </View>

            <Button 
                text={"Clock In"} 
                color={color} 
                styles={{
                    paddingHorizontal: 10
                }}
            />
        </View>
    );
}

export default ClockCard;