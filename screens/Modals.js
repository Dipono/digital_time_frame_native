import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Modal,SafeAreaView, Text, View, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL =160;
export const LocationsPopUp =()=> {
    return (

       <TouchableOpacity
       disabled={true}
       style={styles.container}>
<View style={styles.modal}>
<View style={styles.textView}>
<Text style={styles.textHeader}>Our Locations</Text>
<Text style={styles.text}>Tembisa</Text>
<Text style={styles.text}>Tshwane</Text>
<Text style={styles.text}>Kimberly</Text>
<Text style={styles.text}>Soweto</Text>
<Text style={styles.text}>Polokwane</Text>
<TouchableOpacity style={styles.buttonOK}>
    <Text style={styles.buttonText}>OK</Text>
</TouchableOpacity>
</View>
</View>
       </TouchableOpacity>
    )

}

export const ContactPopUp =()=> {
 
    return (
        
       <TouchableOpacity
       disabled={true}
       style={styles.container}>
<View style={styles.modal}>
<View style={styles.textView}>
<Text style={styles.textHeader}>If you need any help please contact us</Text>
<Text style={styles.text}>Admin Number:072 568 5689</Text>
<Text style={styles.text}>Admin Email:aneleyuy@mlab.ac.za</Text>
<Text style={styles.text}>Company email:mlab@mlab.ac.za</Text>
<TouchableOpacity style={styles.buttonOK}>
    <Text style={styles.buttonText}>OK</Text>
</TouchableOpacity>
</View>
</View>
       </TouchableOpacity>
    )

}
export const AboutUsPopUp =()=> {
 
    return (
        
       <TouchableOpacity
       disabled={true}
       style={styles.container}>
{/* <View style={styles.modal}>
<View style={styles.textView}>
<Text style={styles.textHeader}>about Us</Text>
<Text style={styles.text}></Text>
<Text style={styles.text}>Tshwane</Text>
<Text style={styles.text}>Kimberly</Text>
<Text style={styles.text}>Soweto</Text>
<Text style={styles.text}>Polokwane</Text>
<TouchableOpacity style={styles.buttonOK}>
    <Text style={styles.buttonText}>OK</Text>
</TouchableOpacity>
</View>
</View> */}
       </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        justifyContent:'center',
        

    },
    modal:{
        height:HEIGHT_MODAL,
        width:WIDTH-80,
        paddingTop:10,
       
        backgroundColor:'white',
        borderRadius:10,
        margin:'auto',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpercity: 4,
        shadowOffset: { width: 0, height: 5 },
    },
    buttonOK:{
        marginLeft:180,
    },
    textView:{
        

    },
    buttonText:{
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 20,
    },
    textHeader:{
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 26,
    },
    text:{
        fontFamily: 'Ebrima',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 20,
    }
})