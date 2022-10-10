import React,{ useState } from 'react';
import { Image, Modal,SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { AboutUsPopUp, ContactPopUp, LocationsPopUp } from './Modals';

const profileImg = require('../assets/image/images (1).jpg')
const locationImg = require('../assets/image/location.png')
const contactImg = require('../assets/image/contact.png')
const logOutImg = require('../assets/image/account-logout-svgrepo-com.svg')
const aboutUsImg = require('../assets/image/info.png')

const Profile =()=> {

    const [isModalVisible,setisModalVisible]=useState(false);
    const changeModalvisible=(bool)=>{
        setisModalVisible(bool);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Profile</Text>
            <Image source={profileImg} style={styles.image} />
            <View style={styles.userDetails}>
                <Text style={styles.name_surname}>Thobile Masilela</Text>
                <Text style={styles.position}>Software Development Intern</Text>
                <Text style={styles.location}>Lynwood Pretoria</Text>
                <Text style={styles.emailAdress}>preciousthobile@gmail.com</Text>
                <Text style={styles.phoneNumber} >076 1290 995</Text>
            </View>
            <TouchableOpacity style={styles.editProfileButton}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
            {/* <Text style={styles.line}>-</Text> */}

            {/* Bottom Div */}
            <View style={styles.bottomDiv}>
                <View style={styles.LocationDiv}>
                    <Image source={locationImg} style={styles.LocationIcon} />
                    <TouchableOpacity
                    onPress={()=>changeModalvisible(true)}>
                    <Text style={styles.LocationText}>Locations</Text>
                    </TouchableOpacity>
                    <Modal
                    transparent={true}
                     animationType='fade'
                     visible={isModalVisible} 
                     nRequestClose={()=>changeModalvisible(false)}>
                        <LocationsPopUp/>
                    </Modal>
                    <Image />
                </View>

             <View style={styles.ContactDiv}>
                    <Image source={contactImg} style={styles.ContactIcon} />
                    <TouchableOpacity 
                    onPress={()=>changeModalvisible(true)}>
                    <Text style={styles.ContactText}>Contacts</Text>
                    </TouchableOpacity>
                    <Modal
                    transparent={true}
                     animationType='fade'
                     visible={isModalVisible} 
                     nRequestClose={()=>changeModalvisible(false)}>
                        <ContactPopUp/>
                    </Modal>
                </View>

                <View style={styles.AboutUsDiv} >
                    <Image source={aboutUsImg} style={styles.AboutUsIcon} />
                    <TouchableOpacity
                    onPress={()=>changeModalvisible(true)}>
                    <Text style={styles.AboutUsText}>About Us</Text>
                    <Modal
                    transparent={true}
                     animationType='fade'
                     visible={isModalVisible} 
                     nRequestClose={()=>changeModalvisible(false)}>
                        <AboutUsPopUp/>
                    </Modal>
                    </TouchableOpacity>
                   
                </View>
                <View style={styles.LogOutDiv}>
                    <Image source={logOutImg} style={styles.LogOutIcon} />
                    <Text style={styles.LogOutText}>Log Out</Text>
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
    heading: {

        marginTop: 30,

        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
    },
    image: {
        width: 140,
        height: 140,
        margin: 'auto',
        marginTop: 20,
        borderRadius: 100,
    },
    userDetails: {
        marginTop: -140
    },
    name_surname: {
        width: 154,
        height: 26,
        marginTop: -140,
        margin: 'auto',
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 26,

        textAlign: 'center',
    },
    position: {
        width: 331,
        height: 27,
        margin: 'auto',
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 27,
        textAlign: 'center',
    },
    location: {
        width: 117,
        height: 20,
        margin: 'auto',
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
    },
    emailAdress: {
        width: 200,
        height: 20,
        margin: 'auto',
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
    },
    phoneNumber: {
        width: 100,
        height: 20,
        margin: 'auto',
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
    },
    editProfileButton: {
        width: 153,
        height: 39,
        margin: 'auto',
        marginTop: 30,

        backgroundColor: '#308989',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpercity: 4,
        shadowOffset: { width: 0, height: 5 },

        borderRadius: 20,
    },
    editProfileText: {
        width: 122,
        height: 21,
        margin: 'auto',
        fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',

        color: '#FFFFFF'
    },
    line: {
        width: 331,
        height: 0,
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderStyle: 'solid',
    },
    bottomDiv:{
        marginLeft:'10%',
        
    },
    LocationDiv: {
        flexDirection: 'row',
        marginTop:-220,
       
    },
    ContactDiv: {
        flexDirection: 'row',
        marginTop:5,
    },
    AboutUsDiv: {
        flexDirection: 'row',
        marginTop:5,
    },
    LogOutDiv: {
        marginTop:5,
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
        fontWeight: 700,
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
        fontWeight: 700,
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
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 700,
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
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',

        color: 'rgba(0, 0, 0, 0.8)',
    },

})

export default Profile;