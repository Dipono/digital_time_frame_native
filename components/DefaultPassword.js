import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function DefaultPassowrd() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.Header}>Change Password</Text>


            <View >
                <Text style={styles.newPasswordText}>New Password:</Text>
                <TextInput style={styles.newPasswordInput}></TextInput>
            </View>
            <View >
                <Text style={styles.confirmPasswordText}>Confirm Password:</Text>
                <TextInput style={styles.confirmPasswordInput}></TextInput>
            </View>

            <Text style={styles.WarningText}>Please change the default password for security</Text>
            <TouchableOpacity style={styles.changeButton} >
                <Text style={styles.buttonText}>Change</Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7',
        textAlign: 'center',
        paddingBottom:1000
    },
    Header: {
        marginTop: 48,

        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,

    },
    newPasswordText: {
        marginTop: '25%',

        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 26,

    },
    confirmPasswordText: {
        marginTop: 20,

        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 26,
    },
    newPasswordInput: {
        width: 313,
        height: 34,
        marginTop: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        margin:'auto'
    },
    confirmPasswordInput: {
        width: 313,
        height: 34,
        margin:'auto',
        marginTop: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    WarningText: {
        width:  254,
        height: 64,
        margin: 'auto',
      marginTop:25,

        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 24,
    },
    changeButton: {
         width: 133,
         height: 54,
         margin: 'auto',
         marginTop:30,

        backgroundColor: '#308989',
        borderRadius: 20,
    },
    buttonText: {
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 29,
margin:'auto',
        color: '#FFFFFF',
    }

});
