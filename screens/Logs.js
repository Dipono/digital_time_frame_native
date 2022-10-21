import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import React from 'react'

//

import BottomNavTab from './bottomNavTab'
const backImg = require('../assets/image/back.png')

import DonutChart from "./DonutChart"

export default function Logs() {
  const navigation = useNavigation()

  const Weekdays = [
    {
      name: "Mon",
      image: require("../assets/image/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background.jpg")
    },
    {
      name: "Tue",
      image: require("../assets/image/the-background-g5bc2e4f32_1280.png")
    },
    {
      name: "Wed",
      image: require("../assets/image/watercolor-g85fa52325_1920.jpg")
    },
    {
      name: "Thu",
      image: require("../assets/image/IMG-20221011-WA0000.jpg")
    },
    {
      name: "Fri",
      image: require("../assets/image/light-green-low-poly-crystal-background-polygon-design-pattern-environment-green-low-poly-illustration-low-polygon-background-free-vector.png")
    },



  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headText}>Logs</Text>
      </View>

      {/* attendenc average */}
      <TouchableOpacity onPress={() => navigation.navigate('homePage')}>
        <Image style={styles.backIcon} source={backImg} />
      </TouchableOpacity>
      <View style={styles.average}>


        <Text style={styles.averageText}>Average attendence</Text>



        <View style={{ flexDirection: "row" }}>

          <DonutChart />

          <View >

            <View style={styles.pres}>
              <View style={styles.circle} />
              <Text>Present</Text>
            </View>



            <View style={styles.pres}>
              <View style={styles.circle2} />
              <Text>absent</Text>
            </View>

          </View>


        </View>

      </View>
      <ScrollView>


        <View style={styles.card}>
          <Text>This week</Text>
          <TouchableOpacity activeOpacity={1} style={styles.smallCard}>
            {Weekdays.map((Days, index) =>
              <View key={index} style={styles.keyView}>
                <ImageBackground style={styles.imageContainer}
                  source={Days.image}>
                  <Image source={require("../assets/image/gq.png")} style={styles.picture} />
                  <DaysInfo name={Days.name} />
                  <View style={styles.circle3} />
                </ImageBackground>
              </View>
            )}
          </TouchableOpacity>
        </View>

      </ScrollView>

      <BottomNavTab />
    </SafeAreaView>


  )
}

const DaysInfo = (props) => {
  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.infoText1}>{props.name}</Text>
        <Text style={styles.infoText2}>08:00-16:00</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  head: {
    alignSelf: "center",
    padding: 0,
    marginTop: 30
  },
  headText: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 'bold',
  }
  ,
  average: {
    marginTop: 15,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  headingView: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: '-50%',
  },
  backIcon: {
    width: 25,
    height: 20,
    paddingLeft: -1000,
    marginTop: 1,

  },
  averageText: {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 'bold',
  }
  ,
  circle: {
    width: 14,
    height: 13,
    borderRadius: 100 / 2,
    backgroundColor: "#54BD3A",
  },
  circle2: {
    width: 14,
    height: 13,
    borderRadius: 100 / 2,
    backgroundColor: "red",
  },
  circle3: {
    width: 14,
    height: 13,
    borderRadius: 100 / 2,
    backgroundColor: "green",
    justifyContent: "center"
    , alignContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 150
  }, pres: {
    flexDirection: "row",
    marginTop: 15,
    padding: 1
  },
  card: {
    marginTop: 15,
    width: 326,
    backgroundColor: "rgba(167, 167, 167, 0.2)",
    borderRadius: 10,
    justifyContent: "center"
    , alignContent: "center",
    alignItems: "center"
  }
  ,
  smallCard: {
    marginBottom: 3
  }
  ,
  keyView: {
    marginTop: 10,
    padding: 0,
  }
  ,
  imageContainer: {
    width: 295,
    height: 51,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 15,
    flexDirection: "row"

  }
  ,
  picture:
  {
    height: 20,
    width: 20,
    marginTop: 18
  }
  ,
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 12
  }
  ,
  infoText1: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  }
  ,
  infoText2: {
    fontSize: 13,
    color: "white"
  },
  headingView: {
    flexDirection: 'row',
    marginTop: 45,

  },
  backIcon: {
    width: 25,
    height: 20,
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