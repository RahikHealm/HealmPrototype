import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 125,
        backgroundColor: '#FFE8ED',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 20,
        marginVertical: 5,
    },medicationContainer: {
        alignSelf: "center",
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 125,
        backgroundColor: '#EBF8E6',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    leftContainer: {
        flex: 1,
    },
    heartRateText: {
        fontSize: 16,
        color: '#EB4B62',
        marginLeft: 10,
    },
    medicationText: {
        fontSize: 16,
        color: '#10B981',
        marginLeft: 10,
    },
    timeText: {
        fontSize: 16,
        color: '#848484',
        marginTop: 5,
    },
    bpmText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#848484',
    },
    numberText: {
        color: 'black',
        fontSize: 32,
        fontWeight: '800',
        flexDirection: 'row',
        alignItems: 'center',
    },
    smallText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#848484',
    },
    trendText: {
        color: 'black',
        fontSize: 16,
        marginTop: 8,
    },
    summaryText: {
        color: '#848484',
        fontSize: 16,
        marginTop: 4,
        width: 175
    },

});