/* Internal Imports */
import { TextInput, View } from "react-native";
import { useContext } from "react";

/* Contexts */
import { ThemeContext } from "../../context/ThemeContext";

/* External Imports */
import Icon from "react-native-vector-icons/Fontisto";

const SearchBar = ({ styles, icon, iconStyles, field, setField, placeholder }) => {

    const Theme = useContext(ThemeContext);

    if(icon){
        return(
            <View  
                style={{
                    flexDirection: "row",
                    elevation: 4,
                    ...styles
                }}
            >
            
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        paddingHorizontal: 15,
                        borderBottomLeftRadius: 15,
                        borderTopLeftRadius: 15,
                    }}
                >
                    <Icon 
                        name={icon} 
                        style={{...iconStyles}}
                        size={(iconStyles && iconStyles.size) ? iconStyles.size : 20}
                    />
                </View>

                <TextInput 
                    value={field}
                    onTextChange={setField}
                    placeholder={(placeholder) ? placeholder : "Search"}
                    style={{
                        backgroundColor: "white",
                        padding: 15,
                        paddingLeft: 0,
                        borderBottomRightRadius: 15,
                        borderTopRightRadius: 15,
                        fontSize: 20,
                        flex: 1,
                        fontFamily: "Poppins",
                        ...iconStyles
                    }}
                    selectionColor={Theme.light.black}
                />
            </View>
        );
    }

    return (
        <View style={{...styles}}>
            <TextInput 
                style={{
                    width: "100%",
                    backgroundColor: "white",
                    padding: 15,
                    paddingHorizontal: 15,
                    borderRadius: 15,
                    elevation: 4,
                    fontSize: 20,
                    ...iconStyles
                }}
                selectionColor={Theme.light.black}
            />
        </View>
    );
}

export default SearchBar;