/* Internal Imports */
import { useFonts } from "expo-font";

/* Contexts */
import ThemeProvider from "./context/ThemeContext";

/* Custom Components */
import { Header } from "./components";
import { ScrollView, StatusBar } from "./globals/CustomComponents";

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

      <ScrollView
        styles={{
          paddingHorizontal : 15,
          paddingVertical: 20
        }}
      >
        <Header />
      </ScrollView>

    </ThemeProvider>
  );
}

export default App;