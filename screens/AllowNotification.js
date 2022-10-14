import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const img = require('../assets/image/notification.png')
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
        marginTop: 50,
    },
    backIcon: {
        width: 25,
        height: 20,
        marginLeft:'2%',
        marginTop:1,
    },
    heading: {
       /*  fontFamily: 'Emblema One', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        marginLeft:80
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
       
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
    },
    allowButtonText: {
        /* fontFamily: 'Emblema One', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 29,
alignSelf:'center',
        color: '#FFFFFF',
        marginTop:10,
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
        /* fontFamily: 'Emblema One', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 29,
        marginTop:10,
        alignSelf:'center',
    }
})

export default AllowNotification;