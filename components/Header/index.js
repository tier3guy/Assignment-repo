/* Internal Imports */
import { View, TouchableOpacity, FlatList, Dimensions } from "react-native";

/* Contexts */
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

/* Components */
import { HeaderText } from "../../globals/Typography";
import { SearchBar, Button } from "../index";
import { AnnouncementsCard } from "../Cards";

const ListItem = (params) => {
    return <AnnouncementsCard 
                {...params.item} 
                iconStyles={{ size: 35 }} 
                containerStyles={{
                    margin: 10,
                    marginRight: 0
                }}
            />
}

const Header = () => {

    const Theme = useContext(ThemeContext);

    // Announcements Data
    const AnnouncementsData = [
        {
            _id: 1,
            title: "Employees are expected ....",
            icon: "clock",
            time: "1 hour Ago",
            color: Theme.light.yellow
        },
        {
            _id: 2,
            title: "A very warm greetings ....",
            icon: "tree",
            time: "6 hour Ago",
            color: Theme.light.red
        },
        {
            _id: 3,
            title: "Employees are expected ....",
            icon: "clock",
            time: "Yesterday",
            color: Theme.light.blue
        },
    ]

    
    return (
        <>
            <View style={{ 
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <SearchBar 
                    icon={"search"} 
                    styles={{
                    marginRight: 10, 
                    width: "85%"
                    }}  
                />
                <Button 
                    icon="message" 
                    iconStyles={{size: 35}}
                />
            </View>

            <View style={{ 
                width: "100%",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginTop: 10,
                }}
            >
                <HeaderText 
                    text={"Announcements"}
                    styles={{
                        fontSize: 20,
                    }}  
                />

                <TouchableOpacity>
                    <HeaderText 
                        text={"View All"}
                        styles={{
                            fontSize: 18,
                            color: Theme.light.green.dark,
                            textDecorationLine: "underline",
                            textDecorationStyle : "solid",
                            textDecorationColor : Theme.light.green.dark
                        }}  
                    />
                </TouchableOpacity>
            </View>

            <View style={{
                height: 100,
                width: Dimensions.get("screen").width
            }}>
                <FlatList
                    data={AnnouncementsData}
                    renderItem={ListItem}
                    keyExtractor={(item) => item._id}
                    horizontal
                />
            </View>

            
        </>
    );
}

export default Header;