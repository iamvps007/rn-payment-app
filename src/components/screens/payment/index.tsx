import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Touchable, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@rneui/base';
import NavBar from '../../common/NavBar';
import { sendMoney } from './paymentSlice';
import { reduceMoney } from '../home/homeSlice';


const Payment = ({ navigation }) => {
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();
    const { user } = useSelector(state => state);

    const onPressBack = () => {
        navigation.goBack();
    };

    const sendPayment = () => {
        if (amount.length !== 0 && user.selectedUser.wallet >= Number(amount)) {
            dispatch(sendMoney({
                userId: user.selectedUser.id,
                amount,
                timestamp: Date(),
            }));

            dispatch(reduceMoney(amount));
            navigation.navigate('PaymentSuccess');
        } else {
            Alert.alert('Oops!!', 'Please check your wallet balance');
        }
    };

    const handlePaymentChange = (text) => {
        setAmount(text);
    };

    return (
        <View style={styles.container}>
            <NavBar onPress={onPressBack} />
            <View style={styles.header}>
                <Icon name="cake" color={"green"} size={60} />
                <Text style={styles.headerText}>vaibhav@upi</Text>
            </View>
            <View style={styles.paymentInputContainer}>
                <Text style={styles.paymentPromptText}>You are Paying</Text>
                <TextInput
                    keyboardType="phone-pad"
                    style={styles.paymentInput}
                    placeholder="amount"
                    onChangeText={handlePaymentChange}
                    // onEndEditing={sendPayment}
                    value={amount}
                    returnKeyType="next"
                    returnKeyLabel='Send'
                    
                    autoFocus={true}
                />
            </View>
            <View style={styles.walletBalanceContainer}>
                <Text style={styles.walletBalanceText}>From Wallet</Text>
                <View style={styles.walletInfo}>
                    <Text style={styles.currencySymbol}>₹</Text>
                    <Text style={styles.walletAmount}>{user.selectedUser.wallet}</Text>
                    <Text style={styles.balanceLeftText}>Balance Left</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity onPress={(amount.length !== 0 && user.selectedUser.wallet >= Number(amount)) ? () => {sendPayment()} : () => {}} style={{
                    alignItems: 'center',
                    padding: 10,
                    borderRadius: 5,
                    backgroundColor: (amount.length !== 0 && user.selectedUser.wallet >= Number(amount)) ? 'green' : 'grey',
                    elevation: 4,
                    marginTop: 20,
                }}>
                    <Text style={{
                        color:'white',
                        fontSize:18,
                        fontWeight:'900'
                    }}>
                        Send Money
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = {
    container: {
        margin: 10,
        marginTop: 60,
    },
    header: {
        alignItems: 'center',
        marginTop:20
    },
    headerText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
        fontWeight: '700',
    },
    paymentInputContainer: {
        marginTop: 20,
        alignSelf: 'center',
    },
    paymentPromptText: {
        textAlign: 'center',
        marginTop: 20,
    },
    paymentInput: {
        color: 'black',
        fontSize: 40,
        fontWeight: '800',
        textAlign: 'center',
    },
    walletBalanceContainer: {
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
        elevation: 4,
        backgroundColor: 'white',
    },
    walletBalanceText: {
        fontWeight: '700',
        color: 'black',
        fontSize: 16,
    },
    walletInfo: {
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
    balanceLeftText: {
        fontSize: 16,
        color: 'black',
        verticalAlign: 'middle',
        paddingStart: 10,
        marginTop:2,
    },
};

export default Payment;
