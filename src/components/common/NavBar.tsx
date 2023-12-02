import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

const NavBar = ({ onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Icon name='chevron-left' />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  
    button: {
        alignSelf: 'flex-start',
    },
});

export default NavBar;
