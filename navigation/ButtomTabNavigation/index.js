import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
import { ThemeContext } from '../../context/ThemeContext';
import { Person3 } from '../../assets/Images/Svgs';

/* Screens */
import { Home } from '../../screens';
const SettingsScreen = () => <View><Text>Settings</Text></View>

const Tab = createBottomTabNavigator();
const ButtomTabNavigator = () => {

    const Theme = useContext(ThemeContext);
    const MySpaceIcon = ({ color, size }) => {
        return (
            <View
                style={{
                    height: size ? size : 50,
                    width: size ? size : 50,
                    // borderRadius: size ? size/2 : 25,
                    // backgroundColor: color.medium,
                    // borderRadius: 1,
                    // borderColor: color.dark,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Person3 width={35} />
            </View>
        );
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if(route.name === "Home") return (focused) ? <Entypo name="home" size={30} color={Theme.light.green.dark}/>
                                                                : <Entypo name="home" size={30}/>
                    else if(route.name === "Notification") return (focused) ? <FontAwesome5 name="bell" size={30} color={Theme.light.green.dark}/>
                                                                            : <FontAwesome5 name="bell" size={30}/>
                    else if(route.name === "My Space") return <MySpaceIcon color={Theme.light.blue} size={30}/>
                },
                tabBarActiveTintColor: Theme.light.green.dark,
                tabBarStyle: {
                    paddingVertical: 10,
                    height: 70,
                    marginBottom: 0,
                    paddingBottom: 10,
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="My Space" component={SettingsScreen} />
            <Tab.Screen name="Notification" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default ButtomTabNavigator;