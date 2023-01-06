import { createContext } from "react";

const Theme = {
    light: {
        grey : "#F1F6F5",
        black : "#222222",
        blackGrey: "#434242",
        green : {
            light: "#CFFDE1",
            medium : "#68B984",
            dark: "#379237",
        },
        purple : {
            light: "#F3CCFF",
            medium : "#D09CFA",
            dark: "#472183",
        },
        yellow : {
            light : "#FFFBAC",
            medium : "#F5EA5A",
            dark : "#FFB100"
        },
        red : {
            light : "#FF8E9E",
            medium : "#E97777",
            dark : "#DC3535"
        },
        blue : {
            light : "#A8D1D1",
            medium : "#89C4E1",
            dark : "#579BB1"
        },
        statusbarOptions: {
            backgroundColor: "#F1F6F5",
            barStyle: "dark-content"
        }
    },
    dark : {
        statusbarOptions: {
            backgroundColor: "#222222",
            barStyle: "light-content"
        }
    }
}

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    return (
        <ThemeContext.Provider value={Theme}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;