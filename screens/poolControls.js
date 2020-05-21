import React from "react";
import { View, Text, StyleSheet,Button, ImageBackground, Image, TouchableOpacity, Slider } from "react-native";
import * as firebase from "firebase";
import Fire from "../Fire";
import { Ionicons } from "@expo/vector-icons";


export default class poolControls extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    
    state = {
        sliderValue: "20"
    }

    render() {
        return (
           
            
            <View style={styles.container}>
            <ImageBackground source={require("../assets/Message.png")} style={{width: '100%', height: '100%'}} >

            <View style={styles.header}>
			<Text style={styles.headerTitle}>Pool Controls</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("controlsPage")}>
            <Ionicons name="md-arrow-back" size={24} color="#000000"></Ionicons>
            </TouchableOpacity>  
			
                    

            </View>

              
            <TouchableOpacity style={styles.button} onPress={() => {
                 alert('Pool pump is now ON !');
             }}>
            <Text style={{ color: "#FFF", fontWeight: "500", fontSize: 25 }}>Pool pump ON</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => {
                 alert('Pool pump is now OFF !');
             }}>
            <Text style={{ color: "#FFF", fontWeight: "500", fontSize: 25 }}>Pool pump OFF</Text>
            </TouchableOpacity>
            

                <Text style={styles.slider}>
                    Pool temprature is : {this.state.sliderValue}
                </Text>

                 {/*Slider with max, min, step and initial value*/}
                    <Slider
                     maximumValue="40"
                     minimumValue="10"
                     step="1"
                    value={this.state.sliderValue}
                     onValueChange={sliderValue => this.setState({ sliderValue })}
         />      
           
            
            </ImageBackground>
            
        </View>
       
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#000000',
        justifyContent: "center"
       
    },
    button: {
        backgroundColor: '#72249c',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        fontSize: 50,
        marginTop: 100
    },
    slider: {
        backgroundColor: '#72249c',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        fontSize: 20,
        marginTop: 100,
        margin: 30,
        fontWeight: "bold"
    },
    header: {
        paddingTop: 50,
        paddingBottom: 16,
        backgroundColor: "#CFDEFF",
		alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#93A1DF"
        
	},
    backgroundImage: {
            
        alignItems: "center",
        backgroundColor: '#000000',
        justifyContent: "center",
            flex: 1,
            width: '100%',
            height: '100%',
            // flexDirection: 'column',
            // backgroundColor:'transparent',
            // justifyContent: 'flex-start',
        
        
        }}

        
    
);