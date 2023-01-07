/* Internal Imports */
import { useFonts } from "expo-font";

/* Contexts */
import ThemeProvider from "./context/ThemeContext";

/* Custom Components */
import { ScrollView, StatusBar } from "./globals/CustomComponents";

/* Screens */
import { Home } from "./screens";

/* Navigations */
import { NavigationContainer } from '@react-navigation/native';
import ButtomTabNavigator from "./navigation/ButtomTabNavigation";


const App = () => {

  /* Loading Fonts into the application */
  const [fontsLoaded] = useFonts({
    Kalam: require("./assets/Fonts/Kalam-Regular.ttf"),
    DancingScript: require("./assets/Fonts/DancingScript-Regular.ttf"),
    Poppins: require("./assets/Fonts/Poppins-Regular.ttf"),
    Main: require("./assets/Fonts/Montserrat-Medium.ttf"),
  });

  /* return nothing until the fonts gets not loaded */
  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <StatusBar />
      <NavigationContainer>
        <ButtomTabNavigator/>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;