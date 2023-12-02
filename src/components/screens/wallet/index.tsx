import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Icon } from '@rneui/themed';
import NavBar from '../../common/NavBar';
import PaymentHistoryItem from '../../common/PaymentHistoryItems';

 
const Wallet = ({ navigation }) => {
    const { user, payment } = useSelector(state => state);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const filterPayment = payment?.payment.filter(p => p.userId === user.selectedUser.id);
        setPayments(filterPayment);
    }, [payment]);

    const onPressBack = () => {
        navigation.goBack();
    };

    const openPaymentScreen = () => {
        navigation.navigate('Payment');
    };

    return (
        <>
            <View style={styles.container}>
                <NavBar onPress={onPressBack} />

                <View style={styles.walletBalanceContainer}>
                    <Text style={styles.titleText}>Total Wallet Balance</Text>
                    <View style={styles.walletBalance}>
                        <Text style={styles.currencySymbol}>₹</Text>
                        <Text style={styles.walletAmount}>{user.selectedUser.wallet}</Text>
                    </View>
                </View>

                <View style={styles.paymentHistoryContainer}>
                    {payments?.length > 0 ? (
                        <View>
                            <Text style={styles.titleText}>Payment History</Text>
                        <FlatList
                            data={payments}
                            renderItem={PaymentHistoryItem}
                        /></View>
                    ) : (
                        <View style={styles.noHistoryContainer}>
                           <Text style={{textAlign:'center'}}>Scan and Pay through prosperr and earn rewards</Text>
                        </View>
                    )}
                </View>
            </View>

            <TouchableOpacity onPress={openPaymentScreen} style={styles.scanPayButton}>
                <Icon name="qr-code" color={'white'} size={25} />
                <Text style={styles.scanPayText}>Scan and Pay</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = {
    container: {
        margin: 10,
        marginTop: 60,
    },
    walletBalanceContainer: {
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
        elevation: 4,
        backgroundColor: 'white',
    },
    titleText: {
        fontWeight: '700',
        color: 'black',
        fontSize: 16,
    },
    noPayment: {
        fontWeight: '700',
        color: 'black',
        fontSize: 16,
         
    },
    walletBalance: {
        flexDirection: 'row',
        marginTop: 10,
    },
    currencySymbol: {
        fontSize: 16,
        color: 'black',
        alignItems: 'baseline',
        verticalAlign: 'bottom',
        paddingEnd: 3,
    },
    walletAmount: {
        fontSize: 20,
        color: 'black',
        fontWeight: '800',
    },
    paymentHistoryContainer: {
        marginTop: 15,
    },
    noHistoryContainer: {
        height: 1000,
    },
    scanPayButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: '#276adb',
        elevation: 5,
        padding: 15,
        borderRadius: 50,
        flexDirection: 'row',
    },
    scanPayText: {
        fontSize: 16,
        paddingStart: 5,
        textAlignVertical: 'center',
        color: 'white',
    },
};

export default Wallet;
