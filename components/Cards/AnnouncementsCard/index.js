import { useContext } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeContext } from "../../../context/ThemeContext";
import { HeaderText } from "../../../globals/Typography";

const IconMapper = {
    clock: "clock-o",
    tree: "tree"
}

const AnnouncementsCard = ({ title, time, icon, color, containerStyles, iconStyles }) => {

    const Theme = useContext(ThemeContext);

    const CARD_WIDTH = 280;
    const ICON_CARD_DIMENSION = 50;

    return (
        <View
            style={{
                flexDirection: "row",
                padding: 15,
                backgroundColor: color.light,
                width: CARD_WIDTH,
                height: 80,
                borderRadius: 20,
                elevation: 3,
                justifyContent: "center",
                ...containerStyles,
            }}
        >

            <View
                style={{
                    width: ICON_CARD_DIMENSION,
                    height: ICON_CARD_DIMENSION,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: color.medium,
                    borderRadius: 5,
                    elevation: 1,
                }}
            >
                <Icon 
                    name={IconMapper[icon]} 
                    style={{
                        ...iconStyles
                    }}
                    size={ (iconStyles && iconStyles.size) ? iconStyles.size : 20 }
                    color={ color.dark }
                />
            </View>

            <View style={{
                marginLeft: 15,
                flex: 1,
                height: 50,
                justifyContent: "space-between"
            }}>
                <HeaderText 
                    text={title}
                    styles={{
                        fontSize: 15,
                        color: Theme.light.black,
                        flexShrink: 1,
                    }}
                />
                <HeaderText 
                    text={time}
                    styles={{
                        fontSize: 12,
                        color: Theme.light.blackGrey,
                        flexShrink: 1,
                    }}
                />
            </View>

        </View>
    );
}

export default AnnouncementsCard;