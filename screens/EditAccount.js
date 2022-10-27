import React, { useState,useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Alert,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";

import {sendPasswordResetEmail } from "firebase/auth";

import { auth,Logout,db} from '../data/firebase';
import { collection, getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc, addDoc, CollectionReference } from 'firebase/firestore';
const backIcon = require('../assets/image/back.png')
const { width: WIDTH } = Dimensions.get("window");

export default function EditAccount() {
  const navigation = useNavigation()

  // const [modalVisible, setModalVisible] = useState(false);
   // Update Text
   const [number, setPhoneNumber] = useState("")
   
   const [name, setName] = useState("")
   const [surname, setSurname] = useState("")
   const [updateNumber, setUpdatePhoneNumber] = useState("")
   const [updateName, setUpdateName] = useState("")
   const [updateSurname, setUpdateSurname] = useState("")
   const [location, setLocation] = useState("")
   const userCollectionRef = collection(db, "users")
   const [id, setId] = useState("")
   const [userInfo, setUserinfo] = useState([])
   //get user information to display on home page and or recipt
   useEffect(() => {
       const getUserInfo = async () => {
           const data = await getDocs(userCollectionRef);
           setUserinfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          //  console.log(userInfo[0].phoneNumber)
           for (var i = 0; i < userInfo.length; i++) {
               if (userInfo[i].Email === auth.currentUser?.email) {
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
   //Update user information
   async function updateUserProfile() {
    const userDocuments = doc(db, 'users', id)

    const newFlieds = { Name: updateName, Surname: updateSurname, PhoneNumber: updateNumber}

    await updateDoc(userDocuments, newFlieds).then(() => { alert('updated') }, (err) => {
        console.log(err)
        alert('something went wrong try again')
    })
}
async function resetPassword(){
  sendPasswordResetEmail(auth, auth.currentUser?.email)
  .then(() => {
    // Password reset email sent!
    alert('Password reset email sent!')
    // ..
  })
  .catch((error) => {
    alert(error)
    // ..
  });
}

  return (
    <SafeAreaView style={styles.container}>
     
      <View style={styles.headingView}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
      <Text style={styles.heading}>Profile</Text>
      </View>
      
      <Image source={require("../assets/image/image.jpg")} style={styles.image} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          
          placeholder={"Name"}
          placeholdeTextColor={"rgba(255,255,255,0.7)"}
          onChangeText={(event) => setUpdateName(event)} 
         
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Surname"}
          placeholdeTextColor={"rgba(255,255,255,0.7)"}
          onChangeText={(event) => setUpdateSurname(event)} 
        
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Phone Number"}
          placeholdeTextColor={"rgba(255,255,255,0.7)"}
          onChangeText={(event) => setUpdatePhoneNumber(event)} 
          
          
        />
      </View>
      <View>
        <View style={styles.texts}>
          <TouchableOpacity >
            <Text style={styles.text} onPress={resetPassword}> Click here </Text>
          </TouchableOpacity>
         <Text>to change your password</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editProfileButton} onPress={updateUserProfile}>
        <Text style={styles.editProfileText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7E7E7",
    textAlign: "center",
  },
  headingView: {
    flexDirection: 'row',
    marginTop: 45,

}, 
backIcon: {
  width: 25,
  height: 20,
  marginLeft: '2%',
},
  editProfileButton: {
    width: 153,
    height: 39,
   alignSelf:'center',
    marginTop: 40,
    backgroundColor: "#308989",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpercity: 4,
    shadowOffset: { width: 0, height: 5 },
    borderRadius: 20,
  },
  editProfileText: {
    width: 122,
    height: 21,
    alignSelf:'center',
    marginTop:10,
   /*  fontFamily: "Emblema One", */
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",

    color: "#FFFFFF",
  },
  heading: {
    textAlign: "center",
  /*   fontFamily: "Emblema One", */
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: '30%',
  },
  image: {
    width: 120,
    height: 120,

   alignSelf:'center',
    marginTop: 20,
    borderRadius: 100,
  },

  inputContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    color: "black",
    height: 44,
    fontSize: 20,
    paddingLeft: 10,
    marginHorizontal: 25,
  },
  modalInput: {
    backgroundColor: "white",
    borderRadius: 5,
    color: "black",
    height: 44,
    fontSize: 20,
    width:300,
    paddingLeft: 10,
    marginHorizontal: 25,
  },

  text: {
    fontWeight: "bold",
  },
  texts: {
     marginTop: 20,
    alignSelf:'center', 
    flexDirection:'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: 400,
    width: 400,
    margin: 20,
    backgroundColor: "#E7E7E7",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "yellow",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 10,
    marginLeft: 30,
    fontWeight: "bold",
  },
  eButton: {
    width: 100,
    height: 35,
    alignSelf:'center',
    marginTop: 20,

    backgroundColor: "#308989",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpercity: 4,
    shadowOffset: { width: 0, height: 5 },

    borderRadius: 20,
  },
  eButtonText: {
    width: 100,
    height: 21,
    alignSelf:'center',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
marginTop:5,
    color: "#FFFFFF",
  },
});
