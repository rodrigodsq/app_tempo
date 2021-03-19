import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Menu(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer() } >
            <Feather 
                name="menu"
                size={36}
                color="#373737"
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 9,
        width: 70,
        height: 70,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        left: 15,
        top: 40,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3
        }
    }
})

