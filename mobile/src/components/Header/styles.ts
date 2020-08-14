import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#008ae6",
    padding: 40,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    lineHeight: 32,
    maxHeight: 160,
    marginVertical: 40,
  },
});

export default styles;
