import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const img = require('../assets/image/undraw_wall_post_re_y78d (1).svg')
const backImg = require('../assets/image/back.png')
function UpdateProfile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingView}>
                <Image style={styles.backImage} source={backImg} />
                <Text style={styles.heading}>Update Profile</Text>

            </View>

            <Image style={styles.image} source={img} />

            <Text style={styles.message}>You are adviced to change your profile or you can skip and update later</Text>

            <TouchableOpacity style={styles.updateButton}>
                <Text style={styles.updateButtonText}>Update</Text>
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
    heading: {
        margin: 'auto',
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
    },
    backImage: {
        width: 25,
        height: 20,
        marginLeft: '3%',

    },
    image: {
        margin: 'auto',
        width: 352,
        height: 351,
        resizeMode: 'contain',
        marginTop: -5,
    },
    message: {
        width: 255,
        margin: 'auto',
        marginTop: -12,
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,

    },
    updateButtonText: {

        margin: 'auto',
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 29,

        color: '#FFFFFF',
    },
    updateButton: {
        width: 133,
        height: 54,
        /*  marginBottom:120, */
        margin: 'auto',
        backgroundColor: '#308989',
        borderRadius: 20,
    },
    skipText: {
        marginBottom: 120,
        margin: 'auto',
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 29,
    }
})

export default UpdateProfile;