import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#008ae6",
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  inputBlock: {},
  label: {
    color: "#fff",
    fontSize: 11,
    lineHeight: 30,
  },
  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
    // fontFamily: "Poppins_400Regular",
  },
  button: {
    height: 46,
    alignItems:"flex-end",
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
  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    // fontFamily: "Archivo_700Bold",
    fontSize: 16,
  },

});

export default styles;
