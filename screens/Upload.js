import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {auth, storage} from '../data/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage' //access the storage database

function Upload() {
  // Declare some state variables
  //   const [width, height] = dimensions;
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
     // if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      //}
    })();
  }, []);

  
    // general API function of image picker
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result);
        }
    };

        // declare an overall function for the image upload
        const  uploadImage = async () => {

           // setLoading(true);
            // lets check the image via condition
            if (image !== null){
                let filename = image.uri.split('/').pop();
                let filetype = filename.split('.').pop();
                let uri = image.uri
                // lets add a try loop to keep checking everything is in order

                try {
                    // lets define some variables 
                    const user = auth.currentUser;
                    const response = await fetch(uri);
                    const file = await response.blob();
                    console.log(image)
                    var imageName = image.uri.substr(image.uri.lastIndexOf('/')+1)
                    const storageRef = ref(storage, `/assets/${imageName}`);
                    const uploadTask = uploadBytesResumable(storageRef, file);
                
                    uploadTask.on("state_changed", (snapshot) => {
                        const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
                        //setprogressImage(prog);
                    },
                        (err) => console.log(err),
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref)
                                .then(url => { return console.log(url) })
                        }
                    );
                       
                }
                catch (error) {
                    console.log(error)
                    alert('Please Try Again')
                }
            }
            else {
                setLoading(false);
                if (image === null) {
                    alert("Image Required")
                }
        }
    }


    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
          
          
          <TouchableHighlight onPress={pickImage}>
            <Text>select image</Text>
          </TouchableHighlight>
    
          {/* Optional when you need to display the image */}
          {/* {image && <Image source={{ uri: image.uri }} style={{ marginVertical: 50, alignSelf: 'center', width: image.width > 400 ? image.width * 0.5 : image.width, height: image.height > 400 ? image.height * 0.5 : image.height }} />} */}
    
          {/* Upload button */}
            <Button
                  title="Upload image"
                  style={styles.addButton}
                  margin={30}
                  onPress={uploadImage}
              />
    
        </View>
      );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton:{
    width:100,
    marginTop:100
  }
});

export default Upload;
