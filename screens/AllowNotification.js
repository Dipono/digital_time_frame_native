import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const img = require('../assets/image/undraw_my_notifications_re_ehmk.svg')
const backImg = require('../assets/image/back.png')
function AllowNotification() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingView}>
                <Image style={styles.backIcon} source={backImg} />
                <Text style={styles.heading}>Notifications</Text>
            </View>

            <Image style={styles.image} source={img} />

            <View style={styles.message}>
                <Text>May include sounds,alerts and icons</Text>
                <Text>App requirements Permission to send notifications</Text>
            </View>

            <TouchableOpacity style={styles.allowButton}>
                <Text style={styles.allowButtonText}>Allow</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.skipButton}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7',
        textAlign: 'center',
    },
    headingView: {
        flexDirection: 'row',
        marginTop: 30,
    },
    backIcon: {
        width: 25,
        height: 20,
        marginLeft:'2%'
    },
    heading: {
        margin:'auto',
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
    },
    image: {
        width: 365,
        height: 351,
        resizeMode: 'contain',
        alignSelf: 'center',

    },
    message: {
        width: 255,
        alignSelf: 'center',
        marginTop: -20,
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
marginTop:10,
    },
    allowButtonText: {

        margin: 'auto',
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 29,

        color: '#FFFFFF',
    },
    allowButton: {
        width: 133,
        height: 54,
        alignSelf: 'center',
        marginTop:18,
        backgroundColor: '#308989',
        borderRadius: 20,
    },
    skipText: {
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 29,
        marginTop:10,
    }
})

export default AllowNotification;