import { Text, View, StyleSheet, Button, TouchableOpacity, Modal } from 'react-native';
//import { RNQRCodeScannerProps, RNQRCodeScannerState  } from 'react-native-qrcode-scanner'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../data/firebase'
import { doc, updateDoc, collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';
function QRCode() {
    const navigation = useNavigation()

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [ClockOutPopUp, setClockOutPopUp] = useState(false);
    const [AttendId, setAttendId] = useState('');
    const uid = auth.currentUser.uid

    const refCollectAttendance = collection(db, 'Attendance')
    const refCollectWeeklyAverage = collection(db, 'WeeklyAverage')
    const refCollectUsers = collection(db, 'users')


    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };


        getBarCodeScannerPermissions();
    }, []);

    function clockOut() {
        const date = new Date;
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        let time = hours + ':' + minutes
        const updateUserField = doc(refCollectAttendance, AttendId)
        updateDoc(updateUserField, {
            clockOut: time
        }).then(() => {
            alert('Clock Out')
            setClockOutPopUp(false)
        },
            (err) => {
                err
                alert('Something went wrong')
            })
    }

    function setWeeklyAverage(currentDate, weekNo) {
        getDocs(refCollectUsers).then((response) => {
            var users = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            var totalUsers = users.length
            var getDayNumber = 0
            getDocs(refCollectWeeklyAverage).then((respond) => {
                var weekly = respond.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                for (var count = 0; count < weekly.length; count++) {
                    if (weekly.date === currentDate) {
                        getDayNumber += 1
                    }
                }
                console.log(getDayNumber)
                if (getDayNumber > 0) {
                    console.log('Yes')
                }
                else {

                    addDoc(refCollectWeeklyAverage, {
                        date: currentDate,
                        weekNumber: weekNo,
                        averageDay: (1 / totalUsers) * 100,
                        notAttent: ((totalUsers - 1) / totalUsers) * 100,
                        //day:

                    }, () => {
                        console.log('added 1')
                    }, (err) => {
                        console.log(err)
                        alert('Something went wrong')
                    })
                }

            }, (err) => {
                console.log(err)
                alert('Something went wrong')
            })

            //var average = ()
        },
            (err) => {
                console.log(err)
                alert('Something went wrong')
            })
    }

    const handleBarCodeScanned = async ({ data }) => {
        setScanned(true);
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);

        /* if (data !== 'https://support.lenovo.com/qrcode?sn=PF289B86&mtm=81W8006QSA') {
            return alert('Not granted to the site')
        } */
        const date = new Date;
        // get full date
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const year = date.getFullYear()// get a year
        const month = months[date.getMonth()];// get month
        const day = date.getDate()
        let fullDate = day + '-' + month + '-' + year

        // get time
        const hours = date.getHours()
        const minutes = date.getMinutes()
        let time = Timestamp.fromDate(new Date());
        console.log(time)
        //get week number of the year
        var startDate = new Date(date.getFullYear(), 0, 1);
        var numberOfDays = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
        var weekNumber = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);

        // attended
        let attend = 'Yes'


        const dataAttend = await getDocs(refCollectAttendance);
        var allAttendance = dataAttend.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        var currentDate = '';
        var currentId = '';
        var clockout = '';
        var clockin = '';

        for (var countAtt = 0; countAtt < allAttendance.length; countAtt++) {
            if (allAttendance[countAtt].uid === uid && allAttendance[countAtt].date === fullDate) {
                currentId = allAttendance[countAtt].id
                clockout = allAttendance[countAtt].clockOut
                currentDate = allAttendance[countAtt].date
                clockin = allAttendance[countAtt].clockIn
            }
        }
        setAttendId(currentId)
        var getHour = Number(clockin.substring(0, 2)) + 1
        var getMinutes = clockin.substring(3)
        var onehour = getHour + ':' + getMinutes
        //if (currentDate === fullDate && time < onehour) return alert('You just clock in')

        //setWeeklyAverage(fullDate, weekNumber)
        if (currentDate !== fullDate) {
            addDoc(refCollectAttendance, {
                clockIn: time, uid: uid, attend: attend, weekNumber: weekNumber
            }).then(() => {
                alert('Clock In')
                navigation.navigate('homePage')
            
            }, (err) => {
                console.log(err)
                alert('Something went wrong')
            })
        }

        else {

            if (clockout !== '') return alert('You have already clock out')
            setClockOutPopUp(true)
        }


    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    let confirmPopUp =
        <Modal transparent={true} visible={ClockOutPopUp}>
            <View style={styles.modal}>
                <View style={styles.innerModal}>
                    <Text style={styles.modalHeader}>By Clicking Yes your are confirming that you logout</Text>

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.yesClockOut} onPress={() => clockOut()}>
                            <Text style={styles.clockOutText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.NoClockOut} onPress={() => setClockOutPopUp(false)}>
                            <Text style={styles.clockOutText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Modal>


    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>Place the QR code inside the area</Text>
                <Text style={styles.textScan}>Scanning will start automatically</Text>
            </View>

            <View style={styles.innerContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>

            {confirmPopUp}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        margin: 40
    },
    textContainer: {
        marginTop: 100,
        textAlign: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20,

    },
    textScan: {
        fontSize: 16,
    },
    modal: {
        backgroundColor: 'grey',
        flex: 1,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 100,
        marginTop: 160,
    },
    innerModal: {
        marginTop: 100
    },
    modalHeader: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
    },
    yesClockOut: {
        backgroundColor: 'red',
        width: 100,
        height: 40,
        textAlign: 'center',
        borderRadius: 12,
        marginTop: 15,
        marginRight: 10
    },
    NoClockOut: {
        backgroundColor: 'blue',
        width: 100,
        height: 40,
        textAlign: 'center',
        borderRadius: 12,
        marginTop: 15,
        marginLeft: 10
    },
    clockOutText: {
        marginTop: 10,
        color: 'white',
        textAlign: 'center',
    }
})

export default QRCode;