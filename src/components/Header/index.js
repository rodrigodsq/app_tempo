import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {LinearGradient, } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";

export default function Header({background, weather, icon}){
    return(
        <LinearGradient 
            style={styles.header} 
            colors={background} 
        >
            <Text style={styles.date} > {weather.results.date} </Text>
            <Text style={styles.city} > {weather.results.city_name} </Text>
            <Ionicons 
                name={icon.name}
                color={icon.color}
                size={150}
            />

            <Text style={styles.temp} >{weather.results.temp}º</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    date: {
        color: '#FFF',
        fontSize: 17
    },
    city: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    temp: {
        color: '#FFF',
        fontSize: 80,
        fontWeight: 'bold'
    }
})