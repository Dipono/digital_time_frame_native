import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const img = require('../assets/image/wall.png')
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
        marginTop: 60,
    },
    heading: {
        
        /* fontFamily: 'Emblema One', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        marginLeft:80,
    },
    backImage: {
        width: 25,
        height: 20,
        marginLeft: '3%',
        marginTop:5,

    },
    image: {
       
        width: 352,
        height: 351,
        resizeMode: 'contain',
        alignSelf:'center'
    },
    message: {
        width: 255,
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        alignSelf:'center',

    },
    updateButtonText: {

        alignSelf:'center',
       /*  fontFamily: 'Emblema One', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 29,
marginTop:10,
        color: '#FFFFFF',
    },
    updateButton: {
        width: 133,
        height: 54,
        alignSelf:'center',
        backgroundColor: '#308989',
        borderRadius: 20,
        marginTop:10,
    },
    skipText: {
        alignSelf:'center',
        /* fontFamily: 'Emblema One', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 29,
        marginTop:10,
    }
})

export default UpdateProfile;