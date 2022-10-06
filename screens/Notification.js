import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
function Notification() {

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
                            <Text>X</Text>
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

    return (
        <ScrollView>
            <View style={styles.notification}>
                {Notifications.map((messages, xid) => (
                    <View key={xid} style={styles.notificationMessages}>
                        <View style={styles.icon} >
                            <Pressable onPress={() => SelectedNotification(messages)}>
                                <Image source={require('../assets/image/mail-svgrepo-com.svg')} style={styles.mailIcon} />
                            </Pressable>

                        </View>

                        <View style={styles.summary}>
                            <Pressable onPress={() => SelectedNotification(messages)}>
                                <Text style={styles.messageSender}>{messages.nameFrom}</Text>
                                <Text style={styles.messageTitle}>{messages.title}</Text>
                            </Pressable>

                        </View>

                        <View style={styles.removeMessage}>
                            <TouchableOpacity onPress={() => removeNotification(messages)}>
                                <Image source={require('../assets/image/delete.png')} style={styles.deleteIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                {NotificationPopUp}
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    notification: {
        marginTop: 30
    },
    notificationMessages: {
        flexDirection: 'row',
        margin: 15,
        borderRadius: 10,
        backgroundColor: 'grey',
        paddingTop: 15,
        paddingBottom: 15
    },
    icon: {
        width: '30%',
    },
    mailIcon: {
        height: 60,
        width: 60,
    },
    summary: {
        width: '50%',
        marginTop: 10
    },
    messageSender: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    messageTitle: {
        fontSize: 15,
        marginLeft: 10
    },
    removeMessage: {
        width: '20%',
        marginLeft: 15,
        marginTop: 10
    },
    deleteIcon: {
        height: 30,
        width: 30,
    },
    modal: {
        backgroundColor: 'grey',
        flex: 1,
    },
    inner_modal: {
        backgroundColor: 'white',
        flex: 1,
        margin: 50,
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
        fontWeight: 'bold'
    },
    modalDateTime: {
        padding: 10
    },
    modalDocument: {
        width: '50%',
        height: '25%',
        margin: 'auto',
        backgroundColor: 'red',
    },
    modalAttach: {
        height: 80,
        width: 100,
    },
    scrollDetails: {
        marginTop: 15,
        minHeight: 200
    },
    messageDetails: {
        margin: 5,
        height: 80
    },
    okClose: {
        marginLeft: 150,
        backgroundColor: 'blue',
        width: 70,
        height: 40,
        textAlign: 'center',
        borderRadius: 12,
    },
    okCloseText: {
        marginTop: 10,
        color: 'white'
    }


})

export default Notification;