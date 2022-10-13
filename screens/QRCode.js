import { Text, View, StyleSheet, Button } from 'react-native';
//import { RNQRCodeScannerProps, RNQRCodeScannerState  } from 'react-native-qrcode-scanner'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
function QRCode() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);

        if (data !== 'https://funny-biscotti-7f7baf.netlify.app/') {
            alert('Not granted to the site')
        }
        else {
            alert('Granted to the site')
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
    textContainer:{
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