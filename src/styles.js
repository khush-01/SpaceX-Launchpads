import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF591",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 17,
  },

  title: {
    color: "#E41749",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "center",
  },

  listItem: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
  },

  lastItem_last: {
    paddingVertical: 10,
  },

  padName: {
    color: "#FF8A5C",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },

  text: {
    color: "gray",
    fontSize: 16,
  },
});

export default styles;
