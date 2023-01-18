import React, {useState, useEffect, useContext} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';

const ProfileScreen = () => {


    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.userImg}
                source={}
            />
            <Text style={styles.userName}>User Name</Text>


        </SafeAreaView>
    );
};

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF7E7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    }
});

