import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import { timestampToDate } from '../../helper/utils';

const PaymentHistoryItem = ({ item }) => {
    console.log(item, "Testing");

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name="payment" color={"#276adb"} size={40} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.paymentTitle}>Payment to Vaibhav</Text>
                <Text style={styles.paymentDate}>Paid on {item.timestamp}</Text>
            </View>
            <Text style={styles.amountText}>-₹{item.amount}</Text>
        </View>
    );
};

// Styles extracted for cleaner component structure.
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 10,
    },
    iconContainer: {
        paddingEnd: 10,
    },
    infoContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    paymentTitle: {
        paddingTop: 5,
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    paymentDate: {
        fontSize: 12,
    },
    amountText: {
        fontSize: 18,
        color: 'black',
        padding: 10,
        fontWeight: '900',
    },
});

export default PaymentHistoryItem;
