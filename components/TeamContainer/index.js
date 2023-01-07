import { useContext } from "react";
import { Dimensions, View } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { HeaderText } from "../../globals/Typography";

const TeamContainer = () => {
    const Theme = useContext(ThemeContext);
    return (
        <View style={{
            width: Dimensions.get("screen").width - 20,
            padding: 15,
            paddingTop: 25,
            borderRadius: 25,
            elevation: 3,
            backgroundColor: Theme.light.grey
        }}>
            <View
                style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                }}
            >
                <HeaderText
                    text="My Team"
                    styles={{
                        fontSize: 22,
                    }}
                />
                <HeaderText
                    text="View All"
                    styles={{
                        fontSize: 18,
                        color: Theme.light.green.dark,
                        textDecorationLine: "underline",
                        textDecorationStyle : "solid",
                        textDecorationColor : Theme.light.green.dark
                    }}
                />
            </View>

        </View>
    );
}

export default TeamContainer;