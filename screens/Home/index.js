import { useContext } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { Header, TeamContainer } from "../../components";
import { ThemeContext } from "../../context/ThemeContext";
import { CursiveText } from "../../globals/Typography";
import { ClockCard, EmployeeCard } from "../../components/Cards";
import { ScrollView } from "../../globals/CustomComponents";


const Home = () => {

    const Theme = useContext(ThemeContext);
    const PEOPLES_DATA = [
        {
            _id: 1,
            name: "Sahil",
            position: "UX Designer",
            joiningDate: "today",
            color: Theme.light.yellow
        },
        {
            _id: 2,
            name: "Megha",
            position: "UX Designer",
            joiningDate: "today",
            color: Theme.light.blue
        },
        {
            _id: 3,
            name: "Laraib",
            position: "UX Designer",
            joiningDate: "today",
            color: Theme.light.red
        },
    ];

    const ListItem = (params) => {
        return <EmployeeCard {...params.item} styles={{margin: 10}}/>
    }

    return (
        <ScrollView
            styles={{
            paddingHorizontal : 15,
            paddingVertical: 20,
            backgroundColor: "white",
            paddingTop: 0,
            }}
        >
            <Header/>
            <View style={{ padding: 10 }}>
                <CursiveText
                    text={"Welcome"}
                    styles={{
                        fontSize: 40,
                        fontFamily: "Kalam",
                        textAlign: "center",
                        color: Theme.light.yellow.dark
                    }}
                />
                <View style={{
                    width: Dimensions.get("screen").width,
                    marginTop: 5,
                }}>
                    <FlatList
                        data={PEOPLES_DATA}
                        renderItem={ListItem}
                        keyExtractor={(item) => item._id}
                        horizontal
                    />
                </View>

                <ClockCard 
                    icon="clock" 
                    color={Theme.light.red}
                    iconStyles={{
                        size: 45
                    }}
                />
            </View>
            <TeamContainer/>
        </ScrollView>
    );
}

export default Home;