import * as React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Button } from 'react-native-paper';

// temporary fake data
const userStats = {
    labels: ['Trash 1', 'Trash 2', 'Trash 3'],
    datasets: [
        {
            data: [3, 11, 7],
        },
    ],
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
                    source={require("../assets/userPic.jpeg")}
                />
                <Text style={styles.userName}>User Name</Text>
                <Button icon="map-marker-outline" textColor="#397A89" buttonColor="#FCF7E7"
                        mode="contained" onPress={() => {}}>
                    Location
                </Button>
                <Button style={styles.editButton} textColor="#FCF7E7" mode="text" onPress={() => {}}>
                    Edit
                </Button>
            </View>
            <View style={styles.chartBox}>
                <View style={styles.chartTitleBox}>
                    <Text style={styles.chartTitle}>{"Daily Search"}</Text>
                </View>
                <BarChart
                    style={styles.chart}
                    data={userStats}
                    width={270}
                    height={250}
                    chartConfig={chartConfig}
                />
            </View>
            <View style={styles.logoutBox}>
                <Button style={styles.logoutButton} mode="contained" textColor="#2A4849"
                        buttonColor="#FFE6A2" onPress={() => {}}>
                    Logout
                </Button>
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
    },
    userImg: {
        height: 120,
        width: 120,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        color: '#FCF7E7',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    profileTop:{
        flex: 0.4,
        padding: 20,
        marginBottom: 0,
        width: '100%',
        backgroundColor: '#397A89',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
    },
    editButton:{
        width: 30,
    },
    editText: {},
    chartTitleBox: {
        alignItems: 'center',
    },
    chartBox: {
        flex: 0.5,
        paddingTop: 30,
    },
    chartTitle: {
        color: '#397A89',
    },
    chart: {

    },
    logoutBox: {
        flex: 0.1,
    },
    logoutButton: {
        borderColor: '#2A4849',
    },
    logoutText: {},
});

