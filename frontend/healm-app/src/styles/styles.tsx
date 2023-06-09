import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F0F7",
    alignItems: "center",
  },
  page_container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F3F0F7",
    paddingTop: 30, // For some reason this does not affect iOS devices
  },

  header_row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'flex-start',
    marginBottom: 5,
    marginLeft: 20,

  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  header_text: {
    paddingTop: 40,
    fontSize: 35,
    fontWeight: "400",
  },
  page_header: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: 'left'
  },
  category_text: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: 'left'
  },

  body_text: {
    paddingTop: 20,
    paddingHorizontal: 25,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "normal",
  },
  normal_text: {
    paddingTop: 20,
    paddingHorizontal: 5,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "normal",
  },
  icon_arrow: {
    alignItems: "flex-end",
  },
  icon_progress: {
    alignItems: "flex-start",
    flexDirection: "row",
    flex: 1,
  },
  icon_container: {
    position: "absolute",
    bottom: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 45,
  },
  Bottom_Text_Container: {
    position: "absolute",
    bottom: 50,
    justifyContent: "space-between",
  },
  text_input_box: {
    backgroundColor: "white",
    width: Dimensions.get("screen").width * 0.8,
    height: 60,
    marginTop: 15,
    borderRadius: 50,
    flexDirection: "row",
  },
  text_input_box_with_error: {
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "white",
    width: Dimensions.get("screen").width * 0.8,
    height: 60,
    marginTop: 15,
    borderRadius: 15,
    flexDirection: "row",
  },
  text_input_text: {
    color: "black",
    fontSize: 16,
    fontWeight: "normal",
    alignSelf: "center",
    margin: 10,
    flexDirection: "row",
    overflow: "hidden",
    maxWidth: 250,
    width: 250,
  },
  text_input_icons: {
    alignSelf: "center",
    marginLeft: 15,
    marginRight: 10,
  },
  login_button: {
    width: Dimensions.get("screen").width * 0.8,
    height: 60,
    marginTop: 25,
    borderRadius: 50,
    backgroundColor: "#FFDCB2",
    justifyContent: "center",
    alignItems: "center",
  },
  login_with_app_button: {
    width: Dimensions.get("screen").width * 0.8,
    height: 55,
    marginBottom: 20,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  login_button_text: {
    color: "black",
    fontWeight: "500",
    fontSize: 18,
  },
  new_user_signup_button: {
    alignSelf: "center",
    marginBottom: 15,
    flexDirection: "row",
  },
  new_user_signup_button_text: {
    color: "#F6AF71",
    fontWeight: "normal",
    fontSize: 16,
  },
  subheader_text: {
    color: "black",
    fontWeight: "normal",
    fontSize: 16,
  },
  page_header_text: {
    paddingTop: 40,
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  page_subheader_text: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "300",
    alignSelf: "flex-start",
    paddingBottom: 20,
  },
  divider: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 1,
    width: Dimensions.get("screen").width * 0.25,
    backgroundColor: "#E2E8F0",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "300",
    color: "#808D9E",
  },
  elementContainer: {
    marginVertical: 10,
  },
  calendar_wrapper: {
    backgroundColor: "rgba(217, 217, 217, 0.21)",
    //height: 480,
    height: Dimensions.get("window").height * .6486,
    position: "absolute",
    bottom: 0,
  },
  loading_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


});
