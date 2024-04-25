import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dabcfc",
  
  },
  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6408cc",
  },
  button: {
    backgroundColor: "#6408cc",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  menu: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  menuText: {
    fontSize: 16,
  },
});


const stylesCamera = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%", // Reduce the width of the camera capturing view
    height: "30%", // Reduce the height of the camera capturing view
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  cameraContainer: {
    flex: 0,
    width: "100%",
    height: "60%",
  },
  fixedRatio: {
    flex: 0,
    aspectRatio: 1,
  },
  button: {
    flex: 0.1,
    padding: 10,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});
const classifyStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dabcfc",
  
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center", // Center buttons horizontally
    alignItems: "center", // Center buttons vertically
  },
  button: {
    backgroundColor: "#6408cc",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  
});

const stylesSignInandUp = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  formContainer: {
    width: "65%",
    borderWidth: 2, // Add border width
    borderColor: "#ccc", // Border color
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    padding: 20,
    shadowColor: "#000", // Add shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "600", // Semi-bold
    marginBottom: 20,
    marginTop: 20,
    color: "#1D2951",
    textAlign: "center",
  
  },
  
  button: {
    backgroundColor: "#6F4658",
    paddingHorizontal: 23,
    paddingVertical: 13,
    borderRadius: 40,
    marginTop: 20,
    alignSelf: "center", // Center the button
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width: "75%",
    borderColor: "#1D2951",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: "center", // Center horizontally
    marginBottom: 10, // Add margin bottom to create gap between fields
  },
 
  error: {
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  link: {
    color: "#A020F0",
  },
});



const stylesImageScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export {
  stylesHome,
  classifyStyle,
  stylesCamera,
  stylesSignInandUp,
  stylesImageScreen,
};