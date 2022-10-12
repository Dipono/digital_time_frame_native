import React, { useState } from 'react';
import { Image, Modal, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { AboutUsPopUp, ContactPopUp, LocationsPopUp } from './Modals';

const profileImg = require('../assets/image/images (1).jpg')
const locationImg = require('../assets/image/location.png')
const contactImg = require('../assets/image/contact.png')
const logOutImg = require('../assets/image/account-logout-svgrepo-com.svg')
const aboutUsImg = require('../assets/image/info.png')
const forwardIcon = require('../assets/image/skip-track.png')
const backIcon = require('../assets/image/back.png')

const Profile = () => {

    const [isModalVisible, setisModalVisible] = useState(false);
    const [isModalVisibleContact, setisModalVisibleContact] = useState(false);
    const [isModalVisibleAboutUs, setisModalVisibleAboutUs] = useState(false);

    const [chooseData, setchooseData] = useState();

    const changeModalvisible = (bool) => {
        setisModalVisible(bool);
    }
    const changeModalvisibleContact = (bool) => {
        setisModalVisibleContact(bool);
    }
    const changeModalvisibleAboutUS = (bool) => {
        setisModalVisibleAboutUs(bool);
    }

    const setData = (data) => {
        setchooseData(data);
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headingView}>
                <Image source={backIcon} style={styles.backIcon} />
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
            <TouchableOpacity style={styles.editProfileButton}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
            {/* <Text style={styles.line}>-</Text> */}


            {/* Bottom Div */}
            <View style={styles.bottomDiv}>

                {/* Locations */}
                <View style={styles.LocationDiv}>
                    <Image source={locationImg} style={styles.LocationIcon} />
                    <Text>{chooseData}</Text>
                    <TouchableOpacity
                        onPress={() => changeModalvisible(true)}>
                        <Text style={styles.LocationText}>Locations</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible}
                        onRequestClose={() => changeModalvisible(false)}>
                        <LocationsPopUp
                            changeModalVisble={changeModalvisible}
                            setData={setData}
                        />
                    </Modal>
                    <Image source={forwardIcon} style={styles.forwardIcon} />
                </View>

                {/* Contacts */}

                <View style={styles.ContactDiv}>
                    <Image source={contactImg} style={styles.ContactIcon} />
                    <TouchableOpacity
                        onPress={() => changeModalvisibleContact(true)}>
                        <Text style={styles.ContactText}>Contacts</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisibleContact}
                        onRequestClose={() => changeModalvisibleContact(false)}>

                        <ContactPopUp />
                    </Modal>
                    <Image source={forwardIcon} style={styles.forwardIcon} />
                </View>

                {/* About Us Div */}
                <View style={styles.AboutUsDiv} >
                    <Image source={aboutUsImg} style={styles.AboutUsIcon} />
                    <TouchableOpacity
                        onPress={() => changeModalvisibleAboutUS(true)}>
                        <Text style={styles.AboutUsText}>About Us</Text>
                        <Modal
                            transparent={true}
                            animationType='fade'
                            visible={isModalVisibleAboutUs}
                            nRequestClose={() => changeModalvisibleAboutUS(false)}>
                            <AboutUsPopUp />
                        </Modal>
                        <Image source={forwardIcon} style={[styles.forwardIcon,{marginLeft:220,marginTop:-20}]} />
                    </TouchableOpacity>

                </View>
                <View style={styles.LogOutDiv}>
                    <Image source={logOutImg} style={styles.LogOutIcon} />
                    <Text style={styles.LogOutText}>Log Out</Text>
                    <Image source={forwardIcon} style={styles.forwardIcon} />
                </View>


            </View>
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
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        margin:'auto'

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
        marginTop: 10,

    },
    name_surname: {
        width: 154,
        height: 26,
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 26,
        alignSelf: 'center',
    },
    position: {
        width: 331,
        height: 27,
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 27,
        alignSelf: 'center',
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
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        
    },
    emailAdress: {
        width: 200,
        height: 20,
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        alignSelf: 'center',
    },
    phoneNumber: {
        width: 100,
        height: 20,
        fontFamily: 'Ebrima',
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
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        margin: 'auto',
        color: '#FFFFFF'
    },
    line: {
        width: 331,
        height: 0,
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderStyle: 'solid',
    },
    bottomDiv: {
        marginLeft: '8%',
        marginTop: 80

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
        fontFamily: 'Ebrima',
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
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
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
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
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
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        color: 'rgba(0, 0, 0, 0.8)',
    },
    forwardIcon: {
        width: 15,
        height: 10,
        marginLeft: 120,
    },

})

export default Profile;