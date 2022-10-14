import React, { useState } from 'react';
import { Image, Modal, Dimensions, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
const profileImg = require("../assets/image/solo-leveling-sung-jin-woo-manga-anime-boys-hd-wallpaper-preview.jpg")
const locationImg = require('../assets/image/location.png')
const contactImg = require('../assets/image/contact.png')
const logOutImg = require('../assets/image/exit-icon-3.png')
const aboutUsImg = require('../assets/image/info.png')
const forwardIcon = require('../assets/image/skip-track.png')
const backIcon = require('../assets/image/back.png')

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 200;

const Profile = () => {
    const navigation = useNavigation()

    const [isModalVisible, setisModalVisible] = useState(false);
    const [isModalVisibleContact, setisModalVisibleContact] = useState(false);
    const [isModalVisibleAboutUs, setisModalVisibleAboutUs] = useState(false);

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headingView}>
                <TouchableOpacity onPress={() => navigation.navigate('homePage')}>
                <Image source={backIcon} style={styles.backIcon}  />
                    </TouchableOpacity>
                <Text style={styles.heading}>Profile</Text>

            </View>

            <Image source={profileImg} style={styles.image} />
            <View style={styles.userDetails}>
                <Text style={styles.name_surname}>Thobile Masilela</Text>
                <Text style={styles.position}>Software Development Intern</Text>
                <View style={styles.locateView} >
                    <Image source={locationImg} style={styles.locationImage} />
                    <Text style={styles.location}>Lynwood Pretoria</Text>
                </View>

                <Text style={styles.emailAdress}>preciousthobile@gmail.com</Text>
                <Text style={styles.phoneNumber} >076 1290 995</Text>
            </View>
            <TouchableOpacity style={styles.editProfileButton} /* onPress={() => navigation.navigate('updateProfile') }*/>
                <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>

<View style = {styles.line}/>



            {/* Bottom Div */}
            <View style={styles.bottomDiv}>

                {/* Locations */}

                <View style={styles.LocationDiv}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setisModalVisible(!isModalVisible);
                        }}
                    >
                        <View style={styles.modal}>
                            <View style={styles.textView}>
                                <Text style={styles.textHeader}>Our Locations</Text>
                                <Text style={styles.text}>Tembisa</Text>
                                <Text style={styles.text}>Tshwane</Text>
                                <Text style={styles.text}>Kimberly</Text>
                                <Text style={styles.text}>Soweto</Text>
                                <Text style={styles.text}>Polokwane</Text>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonOK]}
                                    onPress={() => setisModalVisible(!isModalVisible)}
                                >
                                    <Text style={styles.buttonText}>Ok</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <Image source={locationImg} style={styles.LocationIcon} />
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setisModalVisible(true)}
                    >

                        <Text style={styles.LocationText}>Location</Text>
                    </TouchableOpacity>
                    <Image source={forwardIcon} style={styles.forwardIcon} />


                </View>
                {/* Contacts */}

                <View style={styles.ContactDiv}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisibleContact}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setisModalVisibleContact(!isModalVisibleContact);
                        }}
                    >
                        <View style={styles.modal}>
                            <View style={styles.textView}>
                                <Text style={styles.textHeader}>If you need any help please contact us</Text>
                                <Text style={styles.text}>Admin Number:072 568 5689</Text>
                                <Text style={styles.text}>Admin Email:aneleyuy@mlab.ac.za</Text>
                                <Text style={styles.text}>Company email:mlab@mlab.ac.za</Text>
                                <TouchableOpacity
                                    style={styles.buttonOK}
                                    onPress={() => setisModalVisibleContact(!isModalVisibleContact)}
                                >
                                    <Text style={styles.buttonText}>Ok</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <Image source={contactImg} style={styles.ContactIcon} />
                    <TouchableOpacity
                        onPress={() => setisModalVisibleContact(true)}
                    >

                        <Text style={styles.ContactText}>Contacts</Text>
                    </TouchableOpacity>
                    <Image source={forwardIcon} style={styles.forwardIcon} />


                </View>

                {/* About Us */}

                <View style={styles.AboutUsDiv}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisibleAboutUs}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setisModalVisibleAboutUs(!isModalVisibleAboutUs);
                        }}
                    >
                        <View style={styles.modal}>
                            <View style={styles.textView}>
                            <Text style={styles.textHeader}>about Us</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum pharetra magna quis tempor. Nunc orci dolor, bibendum id elementum sed, consequat ac nisi. Integer facilisis libero luctus urna rhoncus, sollicitudin tempus leo ornare.</Text>
                                <TouchableOpacity
                                    style={styles.buttonOK}
                                    onPress={() => setisModalVisibleAboutUs(!isModalVisibleAboutUs)}
                                >
                                    <Text style={styles.buttonText}>Ok</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <Image source={aboutUsImg} style={styles.AboutUsIcon} />
                    <TouchableOpacity
                        onPress={() => setisModalVisibleAboutUs(true)}
                    >

                        <Text style={styles.AboutUsText}>About Us</Text>
                    </TouchableOpacity>
                    <Image source={forwardIcon} style={styles.forwardIcon} />


                </View>




                {/* About Us Div */}
               
                <View style={styles.LogOutDiv}>
                    <Image source={logOutImg} style={styles.LogOutIcon} />
                    <Text style={styles.LogOutText}>Log Out</Text>
                    <Image source={forwardIcon} style={styles.forwardIcon} />
                </View>


            </View>
        </SafeAreaView >
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
        marginTop: 45,

    },
    heading: {
        /* fontFamily: 'Emblema One', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: '25%',
    },
    backIcon: {
        width: 25,
        height: 20,
        marginLeft: '2%',
    },
    image: {
        width: 140,
        height: 140,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 100,
    },
    userDetails: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10,

    },
    name_surname: {
        width: 154,
        height: 26,
        /*  fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 26,
        alignSelf: 'center',
    },
    position: {
        width: 331,
        height: 27,
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 27,
        alignSelf: 'center',
        textAlign: 'center',

    },
    locateView: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    locationImage: {
        width: 19,
        height: 19,
    },
    location: {
        width: 117,
        height: 20,
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,

    },
    emailAdress: {
        width: 200,
        height: 20,
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        alignSelf: 'center',
    },
    phoneNumber: {
        width: 100,
        height: 20,
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        alignSelf: 'center',
    },
    editProfileButton: {
        width: 153,
        height: 39,
        marginTop: 30,
        alignSelf: 'center',
        backgroundColor: '#308989',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpercity: 4,
        shadowOffset: { width: 0, height: 5 },

        borderRadius: 20,
    },
    editProfileText: {
        width: 122,
        height: 21,
        /* fontFamily: 'Emblema One', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10,
        color: '#FFFFFF'
    },
    line: {
        width: 331,
        borderWidth: 0.5,
        borderColor:'rgba(0, 0, 0, 0.4)',
      marginTop:30,
      alignSelf:'center',
    },
    bottomDiv: {
        marginLeft: '8%',
        marginTop: 40

    },
    LocationDiv: {
        flexDirection: 'row',
        marginTop: 10

    },
    ContactDiv: {
        flexDirection: 'row',
        marginTop: 5,
    },
    AboutUsDiv: {
        flexDirection: 'row',
        marginTop: 5,
    },
    LogOutDiv: {
        marginTop: 5,
        flexDirection: 'row',

    },
    LocationIcon: {
        width: 19,
        height: 19,
        backgroundColor: '#0187CC',
        borderRadius: 5,
    },
    LocationText: {
        width: 100,
        height: 20,
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',

        color: 'rgba(0, 0, 0, 0.8)',
    },
    ContactIcon: {
        width: 19,
        height: 19,
        backgroundColor: '#00BEBE',
        borderRadius: 5,
    },
    ContactText: {
        width: 100,
        height: 20,
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.8)',
    },
    AboutUsIcon: {
        width: 19,
        height: 19,
        backgroundColor: ': radial-gradient(48.21% 65.62% at 83.93% 16.67%, #FA7B0F 0%, rgba(228, 111, 10, 0.57) 100%)',
        borderRadius: 5,
    },
    AboutUsText: {
        width: 100,
        height: 20,
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.8)',
    },
    LogOutIcon: {
        width: 19,
        height: 19,
        backgroundColor: '#C80000',
        borderRadius: 5,
    },
    LogOutText: {
        width: 100,
        height: 20,
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.8)',
    },
    forwardIcon: {
        width: 15,
        height: 10,
        marginLeft: 120,
    },
    modal: {
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpercity: 4,
        shadowOffset: { width: 0, height: 5 },
        paddingBottom: 20,
        marginTop: 235,
    },
    buttonOK: {
        marginLeft: 210,
        marginTop: 5
    },
    textView: {


    },
    buttonText: {
        /* fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
    },
    textHeader: {
        /*  fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 26,
        alignSelf: 'center',
    },
    text: {
        /*  fontFamily: 'Ebrima', */
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        alignSelf: 'center',
        marginTop: 5
    }
})

export default Profile;