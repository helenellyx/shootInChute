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
import BarChart from'react-native-chart-kit'

// temporary fake data
const userStats = {
    labels: ['Trash 1', 'Trash 2', 'Trash 3'],
    data: [5, 11, 3],
};

const chartConfig = {
    backgroundGradientFrom: '#74CCA8',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#74CCA8',
    backgroundGradientToOpacity: 0,

    color: (opacity = 1) => `#397A89`,
    labelColor: (opacity = 1) => `#397A89`,
    strokeWidth: 2,

    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
};

const ProfileScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileTop}>
                <Image
                    style={styles.userImg}
                    source={}
                />
                <Text style={styles.userName}>User Name</Text>
                <TouchableOpacity style={styles.editButton} onPress={() => {}}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.chartTitle}>
                    <Text>{"Daily Search"}</Text>
                </View>
                <BarChart
                    style={styles.chart}
                    data={userStats}
                    width={390}
                    height={285}
                    chartConfig={chartConfig}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>

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
        height: 160,
        width: 160,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    profileTop:{

    },
    editButton:{},
    editText: {},
    chartTitle: {
        flex: 1,
        alignItems: 'center',
    },
    chart: {

    },
    logoutButton: {},
    logoutText: {},
});

