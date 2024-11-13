import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { isiPad } from "./CommonFun";

export const appStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowjustify: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  main: {
    flex: 1,
  
  },
  elevation:{
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor:colors.white
  },
  
});
