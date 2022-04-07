import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.subTitle}>
                    Find on the map a point of local commerce
                </Text>
            </View>

            <MapView style={styles.map}>
                <Marker
                    coordinate={{
                        latitude: 0,
                        longitude: 0,
                    }}
                />
            </MapView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        padding: 20,
        paddingTop: Platform.OS === "android" ? 50 : 0,
    },
    title: {
        fontSize: 24,
        fontWeight: "400",
        color: "#322153",
    },
    subTitle: {
        fontSize: 14,
        fontWeight: "400",
        color: "#6c6c80",
    },
    map: {
        flex: 1,
    },
});
