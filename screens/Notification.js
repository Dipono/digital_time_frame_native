import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
const backIcon = require('../assets/image/back.png')

function Notification() {
    const navigation = useNavigation()

    const [Notifications, setNotifications] = useState([
        { id: 1, nameFrom: 'admin', title: 'attendanece', message: `As a teacher, I've internalized this message. Every day, all around us, we see the consequences of silence manifest themselves in the form of discrimination, violence, genocide and war. In the classroom, I challenge my students to explore the silences in their own lives through poetry. We work together to fill those spaces, to recognize them, to name them, to understand that they don't have to be sources of shame. In an effort to create a culture within my classroom where students feel safe sharing the intimacies of their own silences, I have four core principles posted on the board that sits in the front of my class, which every student signs at the beginning of the year: read critically, write consciously, speak clearly, tell your truth.`, dateTime: '06-Sep-2022 12:15' },

        { id: 2, nameFrom: 'admin', title: 'workshop', message: `As a teacher, I've internalized this message. Every day, all around us, we see the consequences of silence manifest themselves in the form of discrimination, violence, genocide and war. In the classroom, I challenge my students to explore the silences in their own lives through poetry. We work together to fill those spaces, to recognize them, to name them, to understand that they don't have to be sources of shame. In an effort to create a culture within my classroom where students feel safe sharing the intimacies of their own silences, I have four core principles posted on the board that sits in the front of my class, which every student signs at the beginning of the year: read critically, write consciously, speak clearly, tell your truth.`, dateTime: '05-Sep-2022 12:15' },

        { id: 3, nameFrom: 'admin', title: 'presentation', message: `As a teacher, I've internalized this message. Every day, all around us, we see the consequences of silence manifest themselves in the form of discrimination, violence, genocide and war. In the classroom, I challenge my students to explore the silences in their own lives through poetry. We work together to fill those spaces, to recognize them, to name them, to understand that they don't have to be sources of shame. In an effort to create a culture within my classroom where students feel safe sharing the intimacies of their own silences, I have four core principles posted on the board that sits in the front of my class, which every student signs at the beginning of the year: read critically, write consciously, speak clearly, tell your truth.`, dateTime: '05-Sep-2022 12:15' },

        { id: 4, nameFrom: 'admin', title: 'submission', message: `As a teacher, I've internalized this message. Every day, all around us, we see the consequences of silence manifest themselves in the form of discrimination, violence, genocide and war. In the classroom, I challenge my students to explore the silences in their own lives through poetry. We work together to fill those spaces, to recognize them, to name them, to understand that they don't have to be sources of shame. In an effort to create a culture within my classroom where students feel safe sharing the intimacies of their own silences, I have four core principles posted on the board that sits in the front of my class, which every student signs at the beginning of the year: read critically, write consciously, speak clearly, tell your truth.`, dateTime: '05-Sep-2022 12:15' },

        { id: 5, nameFrom: 'admin', title: 'cleaning', message: `As a teacher, I've internalized this message. Every day, all around us, we see the consequences of silence manifest themselves in the form of discrimination, violence, genocide and war. In the classroom, I challenge my students to explore the silences in their own lives through poetry. We work together to fill those spaces, to recognize them, to name them, to understand that they don't have to be sources of shame. In an effort to create a culture within my classroom where students feel safe sharing the intimacies of their own silences, I have four core principles posted on the board that sits in the front of my class, which every student signs at the beginning of the year: read critically, write consciously, speak clearly, tell your truth.`, dateTime: '05-Sep-2022 12:15' },

        { id: 6, nameFrom: 'admin', title: 'recess', message: `As a teacher, I've internalized this message. Every day, all around us, we see the consequences of silence manifest themselves in the form of discrimination, violence, genocide and war. In the classroom, I challenge my students to explore the silences in their own lives through poetry. We work together to fill those spaces, to recognize them, to name them, to understand that they don't have to be sources of shame. In an effort to create a culture within my classroom where students feel safe sharing the intimacies of their own silences, I have four core principles posted on the board that sits in the front of my class, which every student signs at the beginning of the year: read critically, write consciously, speak clearly, tell your truth.`, dateTime: '05-Sep-2022 12:15' },

        { id: 7, nameFrom: 'admin', title: 'workshop', message: `As a teacher, I've internalized this message. Every day, all around us, we see the consequences of silence manifest themselves in the form of discrimination, violence, genocide and war. In the classroom, I challenge my students to explore the silences in their own lives through poetry. We work together to fill those spaces, to recognize them, to name them, to understand that they don't have to be sources of shame. In an effort to create a culture within my classroom where students feel safe sharing the intimacies of their own silences, I have four core principles posted on the board that sits in the front of my class, which every student signs at the beginning of the year: read critically, write consciously, speak clearly, tell your truth.`, dateTime: '05-Sep-2022 12:15' },

    ])

    const [NotificationSelected, setNotificationSelected] = useState({})
    const [popupNotification, setpopupNotification] = useState(false)
    const [CountNotifications, setCountNotifications] = useState(0)
    useEffect(() => {
        setCountNotifications(1)
    })
    function removeNotification(message) {
        setNotifications(Notifications.filter((response) => response.id !== message.id));
    }

    function SelectedNotification(notification) {
        setNotificationSelected(notification)
        setpopupNotification(true)
    }

    let NotificationPopUp = <View>
        <Modal transparent={true} visible={popupNotification}>
            <View style={styles.modal}>
                <View style={styles.inner_modal}>
                    <View style={styles.modal_header}>
                        <Pressable onPress={() => setpopupNotification(false)} >
                            <Text style={styles.cancel}>X</Text>
                        </Pressable>
                    </View>

                    <View style={styles.modal_body}>
                        <Text style={styles.modaTitle}>{NotificationSelected.title}</Text>
                        <Text style={styles.modalDateTime}>{NotificationSelected.dateTime}</Text>
                        <View style={styles.modalDocument}>
                            <Image source={require('../assets/image/photo-camera.png')} style={styles.modalAttach} />
                        </View>
                        <ScrollView style={styles.scrollDetails}>
                            <Text style={styles.messageDetails}>{NotificationSelected.message}</Text>
                        </ScrollView>

                        <Pressable onPress={() => setpopupNotification(false)} style={styles.okClose}>
                            <Text style={styles.okCloseText}>OK</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </Modal>
    </View>

    let AllNotifications = <ScrollView>
        <View style={styles.notification}>
            {Notifications.map((messages, xid) => (
                <View key={xid} style={styles.notificationMessages}>
                    <View style={[styles.icon, { backgroundColor: xid % 2 === 0 ? 'rgba(222, 0, 0, 1)' : 'rgba(0, 144, 209, 1)', height: '100%' }]} >
                        <Pressable onPress={() => SelectedNotification(messages)}>
                            <Image source={require('../assets/image/chat.png')} style={styles.mailIcon} />
                        </Pressable>

                    </View>

                    <View style={[styles.summary, { backgroundColor: xid % 2 === 0 ? 'rgba(255, 225, 225, 1)' : 'rgba(140, 223, 223, 1)', height: '100%' }]}>
                        <Pressable onPress={() => SelectedNotification(messages)}>
                            <Text style={styles.messageSender}>{messages.nameFrom}</Text>
                            <Text style={styles.messageTitle}>{messages.title}</Text>
                        </Pressable>

                    </View>

                    <View style={[styles.removeMessage, { backgroundColor: xid % 2 === 0 ? 'rgba(255, 225, 225, 1)' : 'rgba(140, 223, 223, 1)', height: '100%' }]}>
                        <TouchableOpacity onPress={() => removeNotification(messages)}>
                            <Image source={require('../assets/image/delete.png')} style={styles.deleteIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
            {NotificationPopUp}
        </View>
    </ScrollView>

    let emptyNotification = <View>
        <Image source={require('../assets/image/undraw_my_notifications_re_ehmk(1).svg')} style={styles.emptyNoti} />
        <View>
            <Text style={styles.emptyTextNotification}>You have no notifications</Text>
        </View>
    </View>

    return (
        <View>
            <View style={styles.headingView}>
                <TouchableOpacity onPress={() => navigation.navigate('homePage')}>
                    <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.heading}>Notifications</Text>

            </View>
            {(CountNotifications === 0) && (emptyNotification)}
            {CountNotifications !== 0 && (AllNotifications)}
        </View>

    )
}

const styles = StyleSheet.create({
    notification: {
        marginTop: 30
    },
    notificationMessages: {
        flexDirection: 'row',
        borderRadius: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderTopLeftRadius: 10
    },
    icon: {
        width: '30%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        textAlign: 'center',
        alignItems: 'center',
    },
    mailIcon: {
        height: 60,
        width: 60,
    },
    summary: {
        width: '50%',
    },
    messageSender: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5
    },
    messageTitle: {
        fontSize: 15,
        marginLeft: 10

    },
    removeMessage: {
        width: '20%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    deleteIcon: {
        height: 30,
        width: 30,
        marginLeft: 10,
        marginTop: 15
    },
    modal: {
        backgroundColor: 'grey',
        flex: 1,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 50,
        marginTop: 100,
    },
    inner_modal: {
        backgroundColor: 'white',
        flex: 1,
    },
    cancel: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 5
    },
    modal_header: {
        textAlign: 'right',
        marginRight: 2
    },
    modal_body: {
        margin: 20,
    },
    modaTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalDateTime: {
        padding: 10
    },
    modalDocument: {
        height: '25%',
        margin: 'auto',
        alignItems: 'center',
    },
    modalAttach: {
        height: 100,
        width: '50%',
    },
    scrollDetails: {
        marginTop: 10,
        flex: 1,
        paddingBottom: 250
    },
    messageDetails: {
        margin: 5,
        height: 300
    },
    okClose: {
        backgroundColor: 'blue',
        width: 70,
        height: 40,
        textAlign: 'center',
        borderRadius: 12,
        marginTop: 15
    },
    okCloseText: {
        marginTop: 10,
        color: 'white',
        textAlign: 'center',
    },

    emptyNoti: {
        height: 300,
        width: 300,
        margin: 50
    },
    emptyTextNotification: {
        fontSize: 15,
        textAlign: 'center',
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
    heading: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: '25%',
    },

})

export default Notification;