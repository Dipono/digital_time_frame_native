import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Welcome To Digital Time Frame</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder={"Enter email"}
          placeholdeTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder={"Password"}
          placeholdeTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.totTexts}>
        Forgot Password?
        <Text style={styles.totText}> Click here</Text>
      </Text>
      <Text style={styles.botTexts}>
        Don't Have an account?
        <Text style={styles.botText}> Contact mlab</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7E7E7",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 60,
  },
  logo: {
    width: 99,
    height: 67,
  },
  logoText: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 40,
  },
  inputContainer: {
    marginTop: 10,
  },
  inputText: {
    paddingLeft: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 44,
    borderRadius: 5,
    fontSize: 20,
    paddingLeft: 10,
    backgroundColor: "#FFFFFF",
    color: "black",
    marginHorizontal: 25,
    marginBottom: 40,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 54,
    borderRadius: 5,
    fontSize: 16,
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#308989",
    marginBottom: 20,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
  },
  totTexts: {
    fontWeight: "bold",
    fontSize: 14,
  },
  botText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default Home;
