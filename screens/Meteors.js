import React, { Component } from 'react';
import { Text, View, Text,StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar } from 'react-native';

export default class MeteorScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView style ={styles.droidSafeArea} ></SafeAreaView>
                    <View style= {styles.titleBar}>
                        <Text style ={styles.titleText}>Iss Tracker App</Text>
                        </View>

                        <TouchableOpacity style ={styles.routeCard}>
                        
                            <Text style = {styles.routeText}>
                                ISS Location
                            </Text>
                        
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard}>
                        
                            <Text style = {styles.routeText}>
                                Meteors
                            </Text>
                        
                        </TouchableOpacity>
                    </View>
              
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    routeCard:{
        flex:0.25,
        marginTop:50,
        marginLeft: 50,
        marginRight:50,
        borderRadius:30,
        backgroundColor:'white',
        borderWidth:2
    },
    routeText:{
        fontSize : 35,
        fontWeight:"bold",
        color :"black",
        marginTop:75,
        paddingLeft: 30
 },
 titleText:{
     fontSize:40,
     fontWeight:"bold",
     color = "white"
 },
 titleBar:{
    flex:0.15,
    justifyContent: "center",
    alignItems: "center"
}
})