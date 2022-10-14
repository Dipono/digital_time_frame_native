import React, { useState } from "react";
import {
  View,Text,StyleSheet,Image,TouchableOpacity,ImageBackground,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import homeIcon from '../assets/image/home.png'
import AccounIcon from '../assets/image/account.png'
import Logs from '../assets/image/logs.png'
import notification from '../assets/image/notification.png'
import bgImage from '../assets/image/navBarImage.png'
export default  function bottomNavTab(){
    const navigation = useNavigation();
    return (
       
      <View style={styles.container}>
         <ImageBackground source={bgImage} style={styles.image}>
           
        <TouchableOpacity style={styles.homeIconContainer} onPress={() => navigation.navigate('homePage')}>
            <Image source={homeIcon} style={styles.homIcon}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('profile')}>
            <Image source={AccounIcon} style={styles.homIcon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('clockin')}>
            <Text style={styles.clockIn}>Clock In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeIconContainer} onPress={() => navigation.navigate('logs')}>
            <Image source={Logs} style={styles.homIcon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('notification')}>
            <Image source={notification} style={styles.homIcon}/>
        </TouchableOpacity>
        
        </ImageBackground>

      </View>
    
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor:'teal'
        },
    homIcon:{
        marginTop:20,
        width:50,
        height:40,
    },
    homeIconContainer:{
        
    },
    circle:{
        borderRadius:100/2,
        backgroundColor:'red',
        justifyContent:'center',
        height:70,
        width:70,
        marginTop:-40,
    },
    clockIn:{
        justifyContent:'center',
        // fontFamily: 'Emblema One',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    image:{
        width:'100%',
        height:70,
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingHorizontal:15,
        paddingVertical:10,

    }
  });