import { Text, View, StyleSheet, Button } from 'react-native';
//import { RNQRCodeScannerProps, RNQRCodeScannerState  } from 'react-native-qrcode-scanner'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import { db } from '../data/firebase'
import { doc, updateDoc, collection, addDoc, getDocs } from 'firebase/firestore';
function QRCode() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const email = 'james@gmail.com'

    const refCollectAttendance = collection(db, 'Attendance')

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };


        getBarCodeScannerPermissions();
    }, []);



    const handleBarCodeScanned = async ({ data }) => {
        setScanned(true);
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);

        if (data !== 'https://support.lenovo.com/qrcode?sn=PF289B86&mtm=81W8006QSA') {
            alert('Not granted to the site')
        }
        else {
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
            let time = hours + ':' + minutes

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
                if (allAttendance[countAtt].email === email && allAttendance[countAtt].date === fullDate) {
                    currentId = allAttendance[countAtt].id
                    clockout = allAttendance[countAtt].clockOut
                    currentDate = allAttendance[countAtt].date,
                        clockin = allAttendance[countAtt].clockIn
                }
            }
            var getHour = Number(clockin.substring(0, 2))+1
            var getMinutes = clockin.substring(3)
            var onehour = getHour+':'+getMinutes
            console.log(time + ' < ' + onehour)
            if(currentDate === fullDate && time < onehour) return alert('You just clock in')
            
            if (currentDate !== fullDate) {
                addDoc(refCollectAttendance, {
                    email: email, date: fullDate, clockIn: time, clockOut: '', attend: attend, weekNumber: weekNumber
                }).then(() => {
                    console.log('clock in')
                    alert('Clock In')
                }, (err) => { console.log(err) })
            }

            else {

                if (clockout !== '') return alert('You have already clock out')

                const updateUserField = doc(refCollectAttendance, currentId)
                updateDoc(updateUserField, {
                    clockOut: time
                }).then(() => {
                    alert('Clock Out')
                    console.log('clock out')
                },
                    (err) => { err })

            }

        }

    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

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
    }
})

export default QRCode;