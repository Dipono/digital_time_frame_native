import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const img = require('../assets/image/undraw_wall_post_re_y78d (1).svg')
function UpdateProfile() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Update Profile</Text>
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
    heading: {
       
       marginTop:20,

        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
    },
    image: {
        width: '100%',
        height: '50%',
        marginTop:10,
      
    },
    message: {
         width: 255,
      margin:'auto',

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
        marginBottom:120,
        margin:'auto',
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 29,
    }
})

export default UpdateProfile;