import { useContext } from "react";
import { Dimensions, View } from "react-native"
import { ThemeContext } from "../../../context/ThemeContext";
import { Person1, Person2, Person3 } from "../../../assets/Images/Svgs";
import Header from "../../../globals/Typography/Header";

const EmployeeCard = ( { name, position, joiningDate, color, _id, width, styles } ) => {

    const Theme = useContext(ThemeContext);
    const LOGO_WIDTH = 100;

    const Face = (_id === 1) ? Person1 : (_id === 2) ? Person2 : Person3;

    return (
        <View
            style={{
                padding: 15,
                borderWidth: 2,
                borderRadius: 15,
                borderColor: (color && color.dark) ? color.dark : Theme.black,
                backgroundColor: (color && color.light) ? color.light : Theme.grey,
                alignItems: "center",
                width: (width) ? width : 180,
                elevation: 3,
                ...styles
            }}
        >

            <View
                style={{
                    width: LOGO_WIDTH,
                    height: LOGO_WIDTH,
                    backgroundColor: (color && color.dark) ? color.dark : Theme.black,
                    borderRadius: LOGO_WIDTH/2,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Face width={LOGO_WIDTH - 25}/>
            </View>

            <Header 
                text={name} 
                styles={{
                    marginVertical: 15,
                    color: color.dark,
                    fontSize: 24,
                    marginBottom: 10,
                }}
            />

            <Header 
                text={position} 
                styles={{
                    color: Theme.light.blackGrey,
                    fontSize: 18,
                }}
            />

            <Header 
                text={"Joined " + joiningDate} 
                styles={{
                    color: Theme.light.blackGrey,
                    fontSize: 14
                }}
            />

        </View>
    );
}

export default EmployeeCard;