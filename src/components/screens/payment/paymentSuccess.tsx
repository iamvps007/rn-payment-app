import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const PaymentSuccess = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Wallet');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <LottieView
                style={styles.animation}
                source={require('../../../assets/done.json')}
                autoPlay
                loop
            />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    animation: {
        flex: 1,
    },
};

export default PaymentSuccess;
