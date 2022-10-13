import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

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

const { width: WIDTH } = Dimensions.get("window");

export default function EditAccount() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.inputContainer}>
              <Text style={styles.modalText}>Current Password</Text>
              <TextInput
                style={styles.modalInput}
                placeholdeTextColor={"rgba(255,255,255,0.7)"}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.modalText}>New Password</Text>
              <TextInput
                style={styles.modalInput}
                placeholdeTextColor={"rgba(255,255,255,0.7)"}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.modalText}>Confirm Password</Text>
              <TextInput
                style={styles.modalInput}
                placeholdeTextColor={"rgba(255,255,255,0.7)"}
                underlineColorAndroid="transparent"
              />
            </View>
            <Pressable
              style={styles.eButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.eButtonText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.heading}>Profile</Text>
      <Image source={require("../assets/image/image.jpg")} style={styles.image} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"name"}
          placeholdeTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"surname"}
          placeholdeTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"phone number"}
          placeholdeTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View>
        <View style={styles.texts}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.text}> Click here </Text>
          </TouchableOpacity>
         <Text>to change your password</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editProfileButton}>
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
    marginTop: 30,
    textAlign: "center",
  /*   fontFamily: "Emblema One", */
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
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
