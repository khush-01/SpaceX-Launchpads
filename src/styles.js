import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 17,
  },

  title: {
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
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },

  text: {
    fontSize: 16,
  },
});

export default styles;
