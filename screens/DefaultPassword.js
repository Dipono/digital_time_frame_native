import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';


const backIcon = require('../assets/image/back.png')

export default function DefaultPassword() {
    const navigation = useNavigation()
    return (
        <SafeAreaView>

            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                
                <Text style={styles.header}>Change Password</Text>
            </View>

            <View style={styles.newPassword}>
                <Text style={styles.text}>New Password:</Text>
                <TextInput style={styles.input}
                placeholder={"***********"}
                placeholdeTextColor={"rgba(255,255,255,0.7)"}
                underlineColorAndroid="transparent"/>
            </View>
            <View style={styles.confirmPassword}>
                <Text style={styles.text}>Confirm Password:</Text>
                <TextInput style={styles.input}
                  placeholder={"***********"}
                  placeholdeTextColor={"rgba(255,255,255,0.7)"}
                  underlineColorAndroid="transparent"/>
            </View>
            <Text style={styles.message}>Please change your default passwod for security</Text>

            <TouchableOpacity style={styles.changeButton} onPress={() => navigation.navigate('allowNotification')} >
                <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderView: {
        flexDirection: 'row',
        marginTop: 35,
    },
    backIcon: {
        width: 25,
        height: 20,
        marginLeft: '5%'
    },
    header: {
        marginLeft: 60,
        /* fontFamily: 'Emblema One', */
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
    },
    text: {
        width: 203,
        height: 26,

        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 26,

    },
    input: {
        width: 300,
        height: 34,
        
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 10,
        marginLeft: -10,
        marginTop:10
    },
    newPassword: {
        marginTop: 140,
        alignSelf: 'center',
        marginLeft: 40

    },
    confirmPassword: {
        marginTop: 20,
        alignSelf: 'center',
        marginLeft: 40
    },
    message: {
        width: 254,
        height: 64,

        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 24,
        alignSelf: 'center',
        marginTop:30,
    },
    changeButton: {
        width: 133,
        height: 54,

        backgroundColor: '#308989',
        borderRadius: 20,
        alignSelf:'center',
        marginTop:10,
    },
    changeText: {
        width: 107,
        height: 29,

        /* fontFamily: 'Emblema One', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 29,

        color: '#FFFFFF',
        marginLeft: 20,
        marginTop: 10,
    }
});
