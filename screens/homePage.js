import React, { useState ,useEffect} from "react";
import {
  Alert, View, Text, StyleSheet, Image, FlatList, ScrollView, ImageBackground,TouchableOpacity,Modal,TextInput,Pressable
} from 'react-native';
import BottomNavTab from './bottomNavTab'
import { useNavigation } from '@react-navigation/native';
import profile from '../assets/image/profile.jpg';
import daysData from '../data/daysData';
import blueImage from '../assets/image/abstract.jpg';
import process from '../assets/image/colourProceesBar.png';
import orangeImage from '../assets/image/watercolor-g85fa52325-1920.jpg';
import redImage from '../assets/image/the-background-g5bc2e4f32-1280.png';
import logout from '../assets/image/logout.png';
import greenImage from '../assets/image/light-green-low-poly-crystal-background-polygon-design-pattern-environment-green-low-poly-illustration-low-polygon-background-free-vector.webp'
// import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth,Logout,db} from '../data/firebase';
import { collection, getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc, addDoc, CollectionReference } from 'firebase/firestore';
// import AccounIcon from '../assets/image/account.png'
export default function Home() {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  // import { db } from '../firebase'
 
    // const [photoURL, setPhotoURL] = useState(AccounIcon);
   //logOut
    function handleLogout(){
        try{
           Logout()
            navigation.navigate('login')
        
        }  catch{
            alert("Error!");
        }
      
    }
     // Storing User Data
     const [userDoc, setUserDoc] = useState(null)
     // Update Text
     const [number, setPhoneNumber] = useState("")
     const [name, setName] = useState("")
     const [surname, setSurname] = useState("")
     const [location, setLocation] = useState("")
     const userCollectionRef = collection(db, "users")
     const [id, setId] = useState("")
     const [userInfo, setUserinfo] = useState([])
     //modal
  

     //get user information to display on home page and or recipt
     useEffect(() => {
         const getUserInfo = async () => {
             const data = await getDocs(userCollectionRef);
             setUserinfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            //  console.log(userInfo[0].phoneNumber)
             for (var i = 0; i < userInfo.length; i++) {
                 if (userInfo[i].Email === auth.currentUser.email) {
                     setPhoneNumber(userInfo[i].PhoneNumber)
                     setName(userInfo[i].Name)
                     setLocation(userInfo[i].Location)
                     setSurname(userInfo[i].Surname)
                     setId(userInfo[i].id)
                     return;
                 }
             }
         }
         getUserInfo()
     })
    
  const renderDays = ({ item }) => {
    return (
      <View style={styles.dayContainer}>
        <ImageBackground source={item.image} style={styles.image}>
          {/* <Image source={item.image} style={styles.categoryItemImage} /> */}
          <Text style={styles.dayText}>{item.title}</Text>
          <Text style={styles.timeText}>Time:{item.time}</Text>
          <Text style={styles.timeText}>{item.task}</Text>
        </ImageBackground>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.profilep}
          source={profile}
        />
        <Text style={styles.welcomeText}>Welcome to DTF </Text>
        <Text style={styles.name}>{name} {surname} </Text>
        <TouchableOpacity onPress={handleLogout}>
          <Image source={logout} style={styles.logOut} />
        </TouchableOpacity>

      </View>
      <View
        style={{
          borderBottomColor: 'rgba(107, 107, 107)',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 0,

        }}
      />
      <ScrollView>
        <View >
          <View style={styles.circle}>
            <Text style={styles.innerLetter}>M</Text>
          </View>
          <View style={styles.circle2}>
            <Text style={styles.innerLetter}>T</Text>
          </View>
          <View style={styles.circle3}>
            <Text style={styles.innerLetter}>W</Text>
          </View>
          <View style={styles.circle4}>
            <Text style={styles.innerLetter}>T</Text>
          </View>
          <View style={styles.circle5}>
            <Text style={styles.innerLetter}>F</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('qrCode')}>
            <ImageBackground source={blueImage} style={styles.AvarageImage}>

              <Text style={styles.averageText}>ClocK</Text>
              {/* <Text style={styles.AttendanceText}>50%</Text>
              <Text style={styles.monthText}>This month</Text>
              <Image source={process} style={styles.avarageImage} /> */}

            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.bottomContainer}>
        <Text>If you are on your way, please ignore until you are at the office or Click <Text style={styles.hereText} onPress={() => setModalVisible(true)}>here</Text>  for reporting your absence</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      ><View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please state why you are absent</Text>

            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              style={styles.input}

            />
            <View style={styles.uploadView}>
              <Pressable
                style={[styles.upload]}

              >
                <Text style={styles.uploadText}>upload proof</Text>
              </Pressable>
              <Text style={styles.documentText}>no document uploaded</Text>

            </View>
            <Pressable
              style={styles.send}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Send</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
          {/* schedule */}


          <View style={styles.scheduleWrapper}>
            <Text style={styles.scheduleTitle}>weekly schedule</Text>
            <View style={styles.scheduleWrapper}>
              <FlatList
                data={daysData}
                renderItem={renderDays}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          {/*profile*/}
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <ImageBackground source={orangeImage} style={styles.profile} >
              <Text style={styles.proflieText}>Profile</Text>
              <Text style={styles.nameText}>name:{name} {surname}</Text>
              <Text style={styles.emailText}>Email:{auth.currentUser?.email}</Text>
              <Text style={styles.contactText}>contact:{number}</Text>
              <Text style={styles.moreText}>more..</Text>
              <Image source={profile} style={styles.profileImage} />
            </ImageBackground>
          </TouchableOpacity>

          {/*Notifications*/}
          <TouchableOpacity onPress={() => navigation.navigate('notification')}>
            <ImageBackground source={redImage} style={styles.profile}>
              <Text style={styles.proflieText}>Notifications</Text>
              <Text style={styles.nameText}>Not with radius </Text>
              <Text style={styles.emailText}>Late coming</Text>
              <Text style={styles.contactText}>swicth on notification</Text>
              <Text style={styles.contactText}>schedule updated</Text>
              <Text style={styles.moreText}>more..</Text>
            </ImageBackground>
          </TouchableOpacity>
          {/*Notifications*/}
          <TouchableOpacity onPress={() => navigation.navigate('logs')}>
            <ImageBackground source={greenImage} style={styles.profile}>
              <Text style={styles.proflieText}>Logs</Text>
              <Text style={styles.nameText}>Monday : Present</Text>
              <Text style={styles.emailText}>Tuesday : Present</Text>
              <Text style={styles.contactText}>Wednesday : Present</Text>
              <Text style={styles.contactText}>Thursday : Present</Text>
              <Text style={styles.contactText}>Friday : absent</Text>
              <Text style={styles.moreText}>more..</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',

  },
  user: {
    marginTop: 10,
    height: 80,
    backgroundColor: '#fff',
  },
  profilep: {
    borderRadius: 100,
    width: 49,
    height: 49,
    marginTop: 20,
    marginLeft: 20,
  },
  welcomeText: {
    marginTop: -40,
    marginLeft: 80,
    /*  fontFamily: 'Emblema One', */
    fontStyle: 'normal',
    // fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#000000',
  },
  name: {
    marginLeft: 80,
    /* fontFamily: 'Emblema One', */
    fontStyle: 'normal',
    // fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#000000',
  },
  logOut: {
    marginLeft: 330,
    marginTop: -25,
    width: 25,
    height: 23.44,

  },
  circle: {

    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 2,
    backgroundColor: '#00BEBE',
    marginLeft: 20,
    marginTop: 10,
  },
  circle2: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 2,
    backgroundColor: '#308989',
    marginLeft: 90,
    marginTop: -45,
  },
  circle3: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 2,
    backgroundColor: '#308989',
    marginLeft: 160,
    marginTop: -45,
  },
  circle4: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 2,
    backgroundColor: '#308989',
    marginLeft: 230,
    marginTop: -45,
  },
  circle5: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 2,
    backgroundColor: '#308989',
    marginLeft: 300,
    marginTop: -45,
  },
  innerLetter: {
    /* fontFamily: 'Encode Sans Condensed', */
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  dayContainer: {
    paddingLeft: 11,
    marginLeft: 10,
    width: 125,
    height: 146,
    marginBottom: 5,
  },
  image: {
    paddingTop: 15,
    paddingLeft: 10,
    filter: 'blur(4)',
    borderRadius: 14,
    width: 126,
    height: 148,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dayText: {
    /* fontFamily: 'Ebrima', */
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 20,

    color: '#FFFFFF',
  },
  timeText: {
    /*  fontFamily: 'Inter', */
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 10,

    color: '#FFFFFF',
  },
  scheduleTitle: {
    marginLeft: 35,
    /*  fontFamily: 'Inter', */
    fontStyle: 'normal',
    fontWeight: " 10",
    fontSize: 13,
    lineHeight: 16,
    margin: 10,
    color: '#000000',
  },
  AvarageImage: {
    overflow: 'hidden',
    marginTop: 20,
    padding: 10,
    width: 317,
    height: 106,
    filter: 'blur(1)',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    left: 21,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  averageText: {
    /* fontFamily: 'Emblema One', */
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 50,
    lineHeight: 100,
    color: '#FFFFFF',
  },
  AttendanceText: {
    /* fontFamily: 'Emblema One', */
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 48,
    marginTop: 5,
    color: '#FFFFFF',
  },
  monthText: {
    /*  fontFamily: 'Encode Sans', */
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#FFFFFF',

    opacity: 0.5,
  },
  avarageImage: {
    width: 100,
    height: 100,
    left: 200,
    top: -90,
  },
  profile: {

    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 15,
    padding: 10,
    width: 317,
    height: 106,
    filter: 'blur(1)',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    left: 21,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  proflieText: {
    /* fontFamily: 'Emblema One', */
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  emailText: {
    /* fontFamily: 'Inter', */
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 10,
    color: '#FFFFFF',
  },
  nameText: {
    /*  fontFamily: 'Inter', */
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 10,
    color: '#FFFFFF',
  },
  contactText: {
    /*  fontFamily: 'Inter', */
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 10,
    color: '#FFFFFF',
  },
  moreText: {
    /* fontFamily: 'Encode Sans', */
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#FFFFFF',
    opacity: 0.5,
    marginTop: 30,
  },
  profileImage: {
    width: 67,
    height: 67,
    left: 200,
    top: -80,
    borderRadius: 100,

  },
  selectIcon: {
    left: 200,
    top: -80,

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {

      width: 343,
      height: 354,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input: {
          width: 220,
          height: 87,
          backgroundColor: '#C4BFBF',
        },
        upload: {
          marginLeft: -25,
          marginTop: 10,
          backgroundColor: '#C4BFBF',
          alignSelf: 'flex-start',
          borderRadius: 10,
          width: 86,
          height: 18,
          alignItems: 'center',
      
        },
        uploadText: {
          marginTop: 1,
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: 10,
          lineHeight: 12,
          color: '#000000',
        },
      
        documentText: {
          marginTop: -11,
          marginBottom: 20,
          marginLeft: 63,
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: 8,
          lineHeight: 6,
          color: '#000000',
        },
        send: {
          justifyContent: 'center',
          alignItems: 'center',
          width: 209,
          height: 29,
          backgroundColor: '#308989',
          borderRadius: 10,
        },
        textStyle: {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: 24,
          lineHeight: 29,
          color: 'white'
        },
        scan: {
          justifyContent: 'center',
          alignItems: 'center',
          width: 209,
          height: 29,
          backgroundColor: '#308989',
          borderRadius: 10,
      
        },
        txt: {
          marginTop: 50,
        },
        txt2: {
          fontWeight: "bold",
        }
});
