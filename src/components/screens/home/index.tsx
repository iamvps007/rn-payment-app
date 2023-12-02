import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "./homeSlice";
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from "react";


const data = [
    { label: 'Vaibhav', value: 'PWLT-0001' },
    { label: 'Pratap', value: 'PWLT-0002' },
    { label: 'Manus', value: 'PWLT-0003' },
    { label: 'Dev', value: 'PWLT-0004' },
  ];

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUserState] = useState('');

    const onSelectUser = (user) => {
        dispatch(setSelectedUser({
            id: user.value,
            name: user.label
        }))
        navigation.navigate('Wallet');
    }
 

    return (
        <View style={styles.container}>
            <View style={styles.dropdownContainer}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={data}
                    labelField="label"
                    valueField="value"
                    onChange={onSelectUser}
                    value={selectedUser}
                    placeholder="Please Select User"
                />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        margin: 10,
        marginTop: 40,
    },
    dropdownContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    dropdown: {
        height: 50,
        borderColor: '#276adb',
        borderRadius: 12,
        paddingHorizontal: 8,
        width:'100%',
        marginTop:20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        fontWeight: 'bold',
    },
    placeholderStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',
    },
});

export default Home;