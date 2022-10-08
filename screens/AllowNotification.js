import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const img = require('../assets/image/undraw_wall_post_re_y78d (1).svg')
function AllowNotification() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Notifications</Text>
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
    heading: {
        margin: 'auto',

        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
    },
    image: {
        width: 365,
        height: 351,
        margin:'auto',
    },
    message: {
        width: 255,
        margin: 'auto',

        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,

    },
    allowButtonText: {
        
        margin: 'auto',
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 29,

        color: '#FFFFFF',
    },
    allowButton: {
        width: 133,
        height: 54,
        
        margin: 'auto',
        backgroundColor: '#308989',
        borderRadius: 20,
    },
    skipText: {
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 29,
    }
})

export default AllowNotification;