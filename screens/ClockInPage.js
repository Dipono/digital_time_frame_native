import React, { useState } from "react";
import {
  View, Text, StyleSheet, SafeAreaView, Image, FlatList, ScrollView, TouchableOpacity, TextInput, Alert, Modal, Pressable,
} from 'react-native';

export default function clockInPage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
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

      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.buttonClock}><Text style={styles.btnText}>Clock in</Text></TouchableOpacity>

      </View>
      <View style={styles.bottomContainer}>
        <Text>If you are on your way, please ignore until you are at the office or Click <Text style={styles.hereText} onPress={() => setModalVisible(true)}>here</Text>  for reporting your absence</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    padding: 10,
  },
  buttonClock: {
    backgroundColor: 'whitesmoke',
    width: 200,
    height: 200,
    borderRadius: 500,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20
  },
  hereText: {
    fontWeight: 'bold'
  }

  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 22,
  // },
  // modalView: {

  //   width: 343,
  //   height: 354,
  //   margin: 20,
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: "center",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5
  // },



  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center"
  // },
  // input: {
  //   width: 220,
  //   height: 87,
  //   backgroundColor: '#C4BFBF',
  // },
  // upload: {
  //   marginLeft: -25,
  //   marginTop: 10,
  //   backgroundColor: '#C4BFBF',
  //   alignSelf: 'flex-start',
  //   borderRadius: 10,
  //   width: 86,
  //   height: 18,
  //   alignItems: 'center',

  // },
  // uploadText: {
  //   marginTop: 1,
  //   fontStyle: 'normal',
  //   fontWeight: 400,
  //   fontSize: 10,
  //   lineHeight: 12,
  //   color: '#000000',
  // },

  // documentText: {
  //   marginTop: -11,
  //   marginBottom: 20,
  //   marginLeft: 63,
  //   fontStyle: 'normal',
  //   fontWeight: 400,
  //   fontSize: 8,
  //   lineHeight: 6,
  //   color: '#000000',
  // },
  // send: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: 209,
  //   height: 29,
  //   backgroundColor: '#308989',
  //   borderRadius: 10,
  // },
  // textStyle: {
  //   fontStyle: 'normal',
  //   fontWeight: 400,
  //   fontSize: 24,
  //   lineHeight: 29,
  //   color: 'white'
  // },
  // scan: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: 209,
  //   height: 29,
  //   backgroundColor: '#308989',
  //   borderRadius: 10,

  // },
  // txt: {
  //   marginTop: 50,
  // },
  // txt2: {
  //   fontWeight: "bold",
  // }
});
