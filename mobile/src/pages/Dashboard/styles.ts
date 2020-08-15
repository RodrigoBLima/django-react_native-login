import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#008ae6",
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
    // fontFamily: "Poppins_400Regular",
  },
  button: {
    height: 130,
    width: "100%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-around",
  },
  buttonPrimary: {
    backgroundColor: "#1aa3ff",
  },
  buttonText: {
    // fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 20,
  },
});

export default styles;
